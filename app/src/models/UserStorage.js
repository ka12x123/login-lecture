"use strict";

const fs = require("fs").promises;

class UserStorage{
    static #getUsersinfo(data, id){  // <--- 암묵적인 룰... private 상단에 두기
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id); //인자로 받은 id 에 위치(인덱스) idx 에 저장
        const userskeys = Object.keys(users); // users에 있는 모든 키목록 저장하기
        const userInfo = userskeys.reduce((newUsers, info)=>{
            newUsers[info] = users[info][idx]; // id 에 2번째 꺼 키에 2번째 꺼 저장하겠다는 소라
            return newUsers;
        }, {});
        return userInfo;
    }
    static GetUsersinfo(id) 
    {
        return fs.readFile("./src/databases/users.json")  //promise 로 만들어서 리턴되게 한거임
        .then((data) => {
            return this.#getUsersinfo(data, id);
        })
        .catch(console.error);
    }
    static GetUsers(isAll, ...fields){
        return fs.readFile("./src/databases/users.json")  //promise 로 만들어서 리턴되게 한거임
        .then((data) => {
            return this.#GetUsers(data, fields, isAll);
        })
        .catch(console.error);
    };
    static #GetUsers(data, fields, isAll){
        const users = JSON.parse(data);
        if(isAll){
            return users;
        }
          const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field))  //hasOwnProperty 는 fields 에 내용이 users에  정의되어 있냐임
            {
                newUsers[field] = users[field]; 
            }
            return newUsers;
        }, {});
        return newUsers;
    }   
    static async save(userInfo){
        const users = await this.GetUsers(true); 
        console.log(users);
        if(users.id.includes(userInfo.id)){
            throw "이미 존재하는 아이디입니다."; //return new Error 로 하면 그냥 진짜 에러가 되어서 종료됨 and Error 붙이면 스트링이 아니여서 빼고 ㄱㄱ
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));   //stringify 와 parse 는 그냥 반대 서로   
        return { success : true };
    }   
}

module.exports = UserStorage;