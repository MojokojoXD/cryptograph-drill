const bcrypt = require('bcryptjs');

const users = [];
module.exports ={
    register: (req, res) => {
        const {username, email, firstName,lastName,password} = req.body;
        

        let salt = bcrypt.genSaltSync(5);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const newUser = {
            username: username,
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: hashedPassword
        }

        const modifiedUser = {
            username: username,
            email: email,
            firstName: firstName,
            lastName: lastName
        }

        users.push(newUser);
        res.status(200).send(modifiedUser);
    },

    login: (req,res) => {
        const {username, password} = req.body;
        users.forEach((userObj) => {
            if (userObj.username === username){
                let existingPassword = bcrypt.compareSync(password, userObj.password)

                if(existingPassword){
                    const userCopy = {
                        username: username,
                        email: userObj.email,
                        firstName: userObj.firstName,
                        lastName: userObj.lastName,
                    }
                    res.status(200).send(userCopy);
                }
            }
        })
    }
}