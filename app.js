"use strict"; //js 코드에는 이걸 하면 좋음
const express = require("express");
const app = express();
//앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");


const home = require("./routes/home");
app.use("/", home); // 미들웨어함수임 (요청과 응답 사이에서 실행하는 함수
//  절대경로 / 가 있으면 다 home 으로 보냄 

module.exports = app;

//패키지 록은 좀 더 자세히 설치한 모듈에 버전을 알려주는 것
//패키지 버전 앞에 붙어 있는 ^ 는 3.1.2 라면 3.2.2, 3,4,2 다 되는데 4,1,2  는 안된다 이거임.
  