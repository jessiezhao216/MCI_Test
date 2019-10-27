let Test = require('../models/test');
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MCItest');

router.addTest = (req, res) => {

    res.setHeader('Content-Type', 'application/json');

    var name = req.body.name;
    var testername = req.body.testername;
    var testdate = req.body.testdate;
    var grade = req.body.grade;

    if (name == '') {
        res.json({message: 'The test name can not be empty'});
        return;
    }
    Test.findOne({
        name:name
    },function (err, info) {
        if(info){
            res.json({ message: 'The test is already exist',errmsg : err} );
            return;
        }
        var test = new Test({
            name: name,
            testername : testername,
            testdate :testdate,
            grade :grade
        });
        test.save(function(err) {
            if (err)
                res.json({ message: 'Test not added', errmsg : err } );
            else
                res.json({ message: 'Test Successfully added', data: test });
        });
    });
}

router.findAll = (req, res) => {
    // Return a JSON representation of our list
    res.setHeader('Content-Type', 'application/json');

    Test.find(function(err, test) {
        if (err)
            res.send(err);

        res.send(JSON.stringify(test,null,10));
    });
}

router.findOne = (req, res) => {

    res.setHeader('Content-Type', 'application/json');

    Test.find({ "name" : req.params.name },function(err, test) {
        if (err)
            res.json({ message: 'Test NOT Found!', errmsg : err } );
        else
            res.send(JSON.stringify(test,null,10));
    });

}

router.deleteTest = (req, res) => {

    Test.findByIdAndRemove(req.params.id, function(err) {
        if (err)
            res.json({ message: 'Test NOT Found!', errmsg : err } );
        else
            res.json({ message: 'Test Successfully Deleted!'});
    });
}

module.exports = router;