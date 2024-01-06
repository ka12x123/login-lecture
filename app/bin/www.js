"use strict";
const logger = require("../src/config/logger");
const PORT = process.env.PORT || 3000;
const app = require("../app"); //이르케 할 때마다 해당 파일에다가 module.exports = app; 이런거 해줘야함 
app.listen(PORT, () => {
    logger.info(`${PORT} 포트에서 서버 가동중입니다.`);
});

//bin   바이너리라는 뜻