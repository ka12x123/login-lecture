const fs = require("fs");
const approot = require("app-root-path"); //app 루트 경로 가져와주는 모듈
const accessLogStream = fs.createWriteStream(
    `${approot}/log/access.log`,
     { flags: 'a' });

module.exports = accessLogStream;