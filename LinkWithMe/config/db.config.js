module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "rootuser",
    DB: "link_with_me",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};