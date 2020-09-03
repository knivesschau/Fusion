import config from '../config';

const AuthApiService = {
    // client-side POST to handle user login requests
    postLogin({user_name, password}) {
        return fetch(`${config.API_ENDPOINT}/auth/login`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({user_name, password})
        })
            .then(res => {
                return (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            });
    },
    // client-side POST to handle registration requests
    postUser(user) {
        return fetch(`${config.API_ENDPOINT}/users`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => { 
                return (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            });
    }
}

export default AuthApiService;