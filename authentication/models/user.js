
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const filePath = path.join(process.cwd(), "data", "auth.json");

const readData = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                return reject(err);
            } else {
                resolve(JSON.parse(data.toString()));
            }
        })
    })

}
const writeData = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, JSON.stringify(data), (err) => {
            if (err) {
                return reject(err);
            } else {
                resolve();
            }
        })
    })
}

exports.createUser = async (userName, email, password, id) => {
    try {
        const data = await readData();
        const userCheck = data.find(user => user.email === email);
        if (userCheck) {
            throw new Error('USER ALREADY SIGNUP');   // add authorization kya user is already sign up
        } else {
            await writeData([...data, { userName, email, password, id }]);
            return "User Succesfully Created";
        }
    } catch (err) {
        throw err;
    }
}



exports.findUser = async (email) => {
    try {
        const data = await readData();
        const userCheck = data.find(user => user.email === email);;
        return userCheck;
    } catch (err) {
        throw err;
    }
}