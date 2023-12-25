"use strict"; //js 코드에는 이걸 하면 좋음
//모듈
const express = require("express");
const bodyparser = require("body-parser");
const app = express();
//앱 세팅
app.set("views", "./src/views"); //꼭 중요한거!!!! 뷰 위치를 알아야 찾아가니까
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyparser.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyparser.urlencoded({extended: true}));
const home = require("./src/routes/home");
app.use("/", home); // 미들웨어함수임 (요청과 응답 사이에서 실행하는 함수
//  절대경로 / 가 있으면 다 home 으로 보냄 

module.exports = app;

//패키지 록은 좀 더 자세히 설치한 모듈에 버전을 알려주는 것
//패키지 버전 앞에 붙어 있는 ^ 는 3.1.2 라면 3.2.2, 3,4,2 다 되는데 4,1,2  는 안된다 이거임.
  