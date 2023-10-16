let envConfig = {};

export const loadConfig = () => {
    return fetch('/env-config')
        .then(response => response.json())
        .then(config => {
            envConfig = config;
        });
};

export const getConfig = () => envConfig;
