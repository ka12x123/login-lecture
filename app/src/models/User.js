"use strict";
const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const body = this.body;

        try {
            const userInfo = await UserStorage.GetUsersinfo(body.id);

            if (userInfo && body.id === userInfo.id && body.psword === userInfo.psword) {
                return { success: true };
            } 
            return { success: false, msg: "존재하지 않는 아이디나 비밀번호가 틀렸습니다." };  //else 를 안쓰면 if 문이 작동해도 출력하니까 오류가 생긴 듯
        } catch (err) {
            return { success: false, err };
        }
    }

    async register() {
        const body = this.body;

        try {
            const response = await UserStorage.save(body);
            return response;
        } catch (err) {
            return { success: false, err };
        }
    }
}

module.exports = User;
