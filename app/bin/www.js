"use strict";
const PORT = 3000;
const app = require("../app"); //이르케 할 때마다 해당 파일에다가 module.exports = app; 이런거 해줘야함 
app.listen(PORT, () => {
    console.log("서버 가동");
});

//bin   바이너리라는 뜻