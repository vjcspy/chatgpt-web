module.exports = {
    apps: [
        {
            name: 'chatgpt-web',
            port: '3008',
            exec_mode: 'cluster',
            instances: '1',
            script: './.output/server/index.mjs',
        },
    ],
};
