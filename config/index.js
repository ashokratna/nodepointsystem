module.exports = {
    port: 3000,
    database: {
        host: 'localhost',
        port: '27017',
        name: 'mongo-demo',
        url: 'mongodb+srv://ayush:ayush7001@cluster0-0eoln.mongodb.net/pointTable?retryWrites=true&w=majority'
    },
    jwtConfig: {
        secretKey: 'awscfrgbhyumjkil'
    }
}