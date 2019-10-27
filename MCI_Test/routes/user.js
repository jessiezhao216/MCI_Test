let User = require('../models/user');
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MCItest');

// register
router.register = (req,res) => {
    res.setHeader('Content-Type', 'application/json');

    var username = req.body.username
    var password = req.body.password
    var email = req.body.email
    var gender = req.body.gender
    var age = req.body.age
    var medical_history = req.body.medical_history


    if( username == ''){
        res.json({ message: 'The username can not be empty'} );
        return;
    }
    if( password == ''){
        res.json({ message: 'The password can not be empty'} );
        return;
    }
    if( email == ''){
        res.json({ message: 'The email can not be empty'} );
        return;
    }
    if( gender == ''){
        res.json({ message: 'The gender can not be empty'} );
        return;
    }
    if( age == ''){
        res.json({ message: 'The age can not be empty'} );
        return;
    }
    User.findOne({
        username:username
    },function (err, info) {
        if(info){
            res.json({ message: 'Username already exists',data : info} );
            return;
        }
        var user = new User({
            username: username,
            password: password,
            email:email,
            gender: gender,
            age: age,
            medical_history:  medical_history
        });
        user.save(function(err) {
            if (err)
                res.json({ message: 'Registered failed', errmsg : err } );
            else
                res.json({ message: 'Successfully registered', data: user });
        });
    });

}

// login
router.login = (req,res) => {
    res.setHeader('Content-Type', 'application/json');

    var username = req.body.username
    var password = req.body.password


    User.findOne({
        username:username
    },function (err, user) {
        if(user){
            if(user.password == password){
                res.json({ message: 'Successfully logged in',data:user});
                return;
            }
            res.json({ message: 'Wrong Password'});
        }
        else{
            res.json({ message: 'Username is not exist'});
        }

    });
}

// editInfo
router.editInfo = (req,res)=>{
    const UserName = {};
    if(req.body.name) UserName.username = req.body.username;
    if(req.body.password)UserName.password = req.body.password;
    if(req.body.gender) UserName.gender = req.body.gender;
    if(req.body.email) UserName.email = req.body.email;
    if(req.body.age)UserName.age = req.body.age;
    if(req.body.medical_history) UserName.medical_history = req.body.medical_history;
    //更新数据
    User.findByIdAndUpdate({ _id: req.params.id },
        { $set: UserName }, { new: true })
        .then(user => {
            if (!user) {
                return res.status(400).json("user not exist");
            }
            res.json(user);
        })
        .catch(err => {
            return res.status(404).json(err);
        });
}
//findAll
router.userInfo = (req, res) => {

    res.setHeader('Content-Type', 'application/json');

    User.find({ "username" : req.params.username },function(err, user) {
        if (err)
            res.json({ message: 'User NOT Found!', errmsg : err } );
        else
            res.send(JSON.stringify(user,null,10));
    });
}

module.exports = router;