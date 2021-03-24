import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

import API from './API';
import { useStoreContext } from '../store';
import { LOGIN_USER, LOGOUT_USER } from '../store/actions';


const setAuthToken = token => {

    storeAuthToken(token);
    applyAuthToken(token);

    return token ? jwt_decode(token) : undefined;
};

const storeAuthToken = token => {

    token
        ? localStorage.setItem("jwtToken", token)
        : localStorage.removeItem("jwtToken");
};

const applyAuthToken = token => {

    token
        ? API.setHeader("Authorization", token)
        : API.setHeader("Authorization", false);
};

export const useAuthTokenStore = () => {
    const [, dispatch] = useStoreContext();
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        if (isDone) return;

        //Check for token
        if (!localStorage.jwtToken) {
            setIsDone(true);
            return;
        };

        //set auth token header
        const tokenString = localStorage.jwtToken;

        //Decode token to get user info and expiration
        const token = jwt_decode(tokenString);

        //Check for expired token
        const currentTime = Date.now() / 1000;

        const invalidate = () => {
            setAuthToken(false);
            dispatch({ type: LOGOUT_USER });
        };

        if (token.exp < currentTime) {
            invalidate();

        } else {
            applyAuthToken(tokenString);

            const authCheck = async () => {

                let user;

                try {
                    const { data } = await API.authenticated();
                    user = data;

                } catch (res) {
                    invalidate();
                };

                if (user) {

                    dispatch({
                        type: LOGIN_USER,
                        payload: { token, user }
                    });
                };

                setIsDone(true);
            };

            authCheck();
        };

    }, [dispatch, isDone])

    return isDone
};

export const useIsAuthenticated = () => {

    const [{ userAuth: { token } }] = useStoreContext();

    return token && token.exp > Date.now() / 1000;
};

export const useAuthenticatedUser = () => {

    const [{ userAuth: { user } }] = useStoreContext();

    return user;
};

export const useLogin = () => {

    const [, dispatch] = useStoreContext();

    return async (credentials) => {

        const { data: { token: tokenString, user } } = await API.login(credentials);

        const token = setAuthToken(tokenString);

        dispatch({
            type: LOGIN_USER,
            payload: { token, user }
        });

        return token;
    }
};

export const useLogout = () => {

    const [, dispatch] = useStoreContext();

    return () => {

        setAuthToken(false);

        dispatch({
            type: LOGOUT_USER
        });
    };
};