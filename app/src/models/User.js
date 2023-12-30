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
            else {
                return { success: false, msg: "존재하지 않는 아이디나 비밀번호가 틀렸습니다." };
            }
        } catch (err) {
            return { success: false, msg: "로그인 중 오류가 발생했습니다." };
        }
    }

    async register() {
        const body = this.body;

        try {
            const response = await UserStorage.save(body);
            return response;
        } catch (err) {
            return { success: false, msg: err };
        }
    }
}

module.exports = User;
