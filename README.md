# MCI Test
Name: Mingmin Zhao
Student number: 20086440

MCI Test system is a web app that can do test online and and get results analysis based on node.js,express and Vue. Use mongoDB as database.

  - User information
  - Test information
  - Analytics information

#  Features

  - user (username,password,email,gender,age,medical_history):
 
     a post for register
  
     a post for login with username and password authentication
  
     a get for user to see his/her own information
  
     a put for user to change his/her own information
  
 - test (name,testername,testdate,grade):
 
    a post to add new test

    a get for  all test information
  
    a get for one test information

    a delete to delete the test information
    
### Test
       POST /user
    POST /user 200 16.130 ms - 43
            √ should return The username can not be empty
    POST /user 200 0.523 ms - 43
            √ should return The password can not be empty
    POST /user 200 0.488 ms - 40
            √ should return The email can not be empty
    POST /user 200 0.296 ms - 41
            √ should return The gender can not be empty
    POST /user 200 0.240 ms - 38
            √ should return The age can not be empty
    POST /user 200 1.559 ms - 211
            √ should return Username already exists
    POST /user 200 2.615 ms - 202
            √ should return Successfully registered and update mongodb
    GET /user/5dc189d6cb57a9217cdb23d1 200 4.394 ms - 358
          POST /user/login
    POST /user/login 200 1.776 ms - 28
            √ should return wrong password message
    POST /user/login 200 1.369 ms - 35
            √ should return username is not exist message
    POST /user/login 200 1.216 ms - 210
            √ should return Successfully login and update mongodb
          GET /user/:id
            when the id is valid
    GET /user/5dc189d6cb57a9217cdb23df 200 1.652 ms - 367
              √ should return the matching user information
            when the id is invalid
    GET /user/9999 200 1.431 ms - 220
              √ should return User not found message
          PUT /user/:id
            when the id is valid
              √ should return user updated information
    (node:8572) DeprecationWarning: Mongoose: `findOneAndUpdate()` and `findOneAndDelete()` without the `useFindAndModify` option set to false are deprecated. See: https://mongoosejs.com/docs/deprecations.html#-findandmodify-
            when the id is invalid
    PUT /user/5dc189d7cb57a9217cdb23e7 200 9.599 ms - 167
    GET /user/66666666666 200 0.968 ms - 241
              √ should return the User NOT Found! message
        Test
          POST /test
    POST /test 200 1.000 ms - 44
            √ should return The test name can not be empty
    POST /test 200 1.868 ms - 53
            √ should return The test is already exist
    POST /test 200 3.163 ms - 172
            √ should return Test Successfully added and update mongodb
    GET /test/5dc189d9cb57a9217cdb23fa 200 2.350 ms - 284
          GET /test
    GET /test 200 1.974 ms - 567
            √ should GET all the tests
          GET /test/:id
            when the id is valid
    GET /test/5dc189d9cb57a9217cdb2401 200 1.744 ms - 285
              √ should return the matching test
            when the id is invalid
    GET /test/34565676772 200 0.579 ms - 241
              √ should return Test not found message
          PUT /test/:id
            when the id is valid
    PUT /test/5dc189d9cb57a9217cdb2409 200 1.646 ms - 178
              √ should return repeated tester message
    PUT /test/5dc189d9cb57a9217cdb240d 200 5.551 ms - 182
              √ should return a message and update the tester name
    GET /test/5dc189d9cb57a9217cdb240d 200 1.523 ms - 284
            when the id is invalid
    GET /test/100000add 200 0.582 ms - 235
              √ should return the test not found message
          DELETE /test/:id
            when the id is valid
              √ should return confirmation message and update database
            when the id is invalid
              √ should return the NOT found message
    DELETE /test/1000000020202 200 0.695 ms - 247



### Tech

Dillinger uses a number of open source projects to work properly:

* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework 
* [MongoDB](https://www.mongodb.com/) - a cross-platform document-oriented database program
* Mocha, Chai, SuperTest, MongoDb-Memoryserver, ESLint, nyc, Git
   

### Installation

MCI Test requires [Node.js](https://nodejs.org/) v10.16.3  
NNPM version 6.9.0
[MongoDB](https://www.mongodb.com/) version v4.2.1 to run

### Todos

 - Write MORE Tests
 - Build MORE Schemas

### URL
github:https://github.com/jessiezhao216/MCI_Test
youtube:https://www.youtube.com/watch?v=83NjtYakTgc


### Reference

https://dillinger.io/
https://github.com/RichardLitt/standard-readme
https://www.jianshu.com/p/74f98c0c8551
http://tflin.com/2018/07/29/Node.js%20+%20Express%20+%20mongodb%20%E7%9A%84%E5%8D%9A%E5%AE%A2%E9%A1%B9%E7%9B%AE%E4%B9%8B%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E7%95%8C%E9%9D%A2%E5%8F%8A%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%EF%BC%88%E4%BA%94%EF%BC%89/
https://blog.csdn.net/zhouzhiwengang/article/details/88884633


   [node.js]: <http://nodejs.org>
   
   [express]: <http://expressjs.com>
   
