"use strict";

const { query } = require("express");
const db = require("../config/db");

class UserStorage{
    static GetUsersinfo(id) 
    {
        return new Promise((resolve, reject)=>{
            db.query("SELECT * FROM users WHERE id = ?;", [id], (err, data) => {  //fs.file 과는 다르게 프로미스를 지원해주지 않음 만들어 줘야함
                if(err) reject(`${err}`);  //문자열 처리    
                console.log(data[0]);
                resolve(data[0]);
            });
        });
    }
    static async save(userInfo){
        return new Promise((resolve, reject)=>{
            const query = "insert into users(id, name, psword) VALUES(?,?,?);";
            db.query(query, [userInfo.id, userInfo.name, userInfo.psword], (err) => {  //fs.file 과는 다르게 프로미스를 지원해주지 않음 만들어 줘야함
                if(err) reject(`${err}`);
                resolve({success : true});
            });
        });
    }   
}

module.exports = UserStorage;