const express = require('express')
const router = express.Router()
const bycrpt = require('bcrypt')
const User = require("../models/Client")
const jwt = require("jsonwebtoken")
const CheckAuth = require("../midleware/check-auth")



router.post('/add', (req, res,next) => {
    console.log(req.body)
    const newClient = new User()

   const hashedcode= bycrpt.hashSync(req.body.password,10)

     newClient.password = hashedcode
     newClient.username = req.body.username
     newClient.email = req.body.email

    newClient.save().then(user =>{
        res.json({
            message :'User Added Successfully !'
        })
    }).catch(err =>{
        res.json({
            message :'An error occured !'+err
        })

    })
}); 


router.get('/:email/:pass', (req, res) => {
    var mail = req.params.email
    var pass = req.params.pass

    User.findOne({
        $or : [{email :mail}]
    }).then(user =>{
        if(user){
         bycrpt.compare(pass,user.password,function(err,result){
             if(err){
                res.json({
                   error : err
                })
             }
             if(result){
                 let token = jwt.sign({username: user.username}, 'verySecretValue',{expiresIn: '1h'})
                 res.json({
                    message : 'login Successfuly !',
                   // token
                 })
             }else{
                res.json({
                    message : 'Password Incorrect !',
                 })
             }
         })
        }else{
            res.json({
                message :'no user Found !'
            })
        }

    })
})


router.post('/login',(req,res)=>{
    User.findOne({email : req.body.email})
    .then(user => {
        if(!user){
            return res.status(401).json({
                message :"Auth failed"
            });
        }

      return  bycrpt.compare(req.body.password,user.password)

    })  
    .then(result =>{
        if(!result){
            return res.status(401).json({
                message :"Auth failed"
            });
        }
        const token = jwt.sign({email:User.email, userId:User._id}, 'secret_this_should_be_good'
        ,{expiresIn :"1h"});
        res.status(200).json({
            token :token
        })
    })
    .catch(err =>{
        console.log(err)
    })
})

module.exports = router;