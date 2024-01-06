const { createLogger, transports, format} = require("winston"); // winston.transports 하면 가독성 떨어지니까 이런식으로 가져올 수 있음
const { combine, timestamp, label, json, printf, simple, colorize } = format; //이것 또한 가독성 높이기 위한 것

const printformat = printf(({ timestamp, label, level, message })=>{
    return `${timestamp} [${label}] ${level} : ${message} 하하`;
});

const logformat = { //combine 을 통해 출력하고 싶은 것들을 파라미터로 던져주면 됨  
    file: combine(
        label({
            label: "백엔드 맛보기"
        }),                                                                                                                         
        timestamp({
            format: "YYYY-MM-DD HH:mm:dd",
        }),
        printformat,
    ),
    console: combine(
        colorize(),
        simple()
    ),
} 

const opts = {
    file: new transports.File({
        filename: "access.log",
        dirname: "./logs", //에러라는 로그 발생이 지금 app.js 에서 일어나고 있기 때문에 그 파일 기준으로 경로 설정하는 것임.
        level: "info",
        format: logformat.file,
    }),
    console: new transports.Console({
        level: "info",
        format: logformat.console,
    }),
}

const logger = createLogger({
    transports: [opts.file],
});

if(process.env.NODE_ENV !== "production"){
    logger.add(
        opts.console
    );
}

module.exports = logger;