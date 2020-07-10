const dotenv = require("dotenv");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config({ path: "variables.env" });
if (!envFound) {
    // This error should crash whole process
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

module.exports = {
    appName: process.env.APP_NAME,
    port: parseInt(process.env.PORT, 10),
    dbURI: process.env.MONGODB_URI,
    logs: {
        level: process.env.LOG_LEVEL || "silly"
    }
};