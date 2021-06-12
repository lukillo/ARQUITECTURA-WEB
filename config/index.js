
const config = {
    server: {
        port: process.env.SERVER_PORT,
        killTimeout: process.env.SERVER_KILLTIMEOUT
    },
    DB :{
        server: 'localhost',
        db: 'arquitecturaWeb',
        collection: 'mechanical_components'
    }
};

module.exports = {
    ...config
};

