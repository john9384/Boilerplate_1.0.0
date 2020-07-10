import express from "express";
import path from "path";
import open from "open";
import env from "./utils/env_config.";
import chalk from "chalk";
import webpack from "webpack";
import config from "../webpack.config.dev.js";

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}))


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(env.port, (err) => {
    if (err) console.log(err);
    else {
        console.log(chalk.green(`
            ===============================
              Server running on port ${env.port}
            ===============================
            `));
        open(`http://localhost:${ env.port }`);
    }
});