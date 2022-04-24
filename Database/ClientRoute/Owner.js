const express = require('express')
const router = express.Router()
const bycrpt = require('bcrypt')
const Owner = require("../models/OwnerShema")
const jwt = require("jsonwebtoken")
const CheckAuth = require("../midleware/check-auth")

router.post('/add', (req, res,next) => {
    //console.log(req.body)
   const newOwner = new Owner()

   const hashedcode= bycrpt.hashSync(req.body.password,10)

   newOwner.password = hashedcode
   newOwner.firstname = req.body.firstname
   newOwner.lastname = req.body.lastname
   newOwner.phone = req.body.phone
   newOwner.email = req.body.email
   newOwner.adresse = req.body.adresse

   newOwner.save().then(owner =>{
        res.json({
            message :'Owner Added Successfully !'
        })
    }).catch(err =>{
        res.json({
            message :'An error occured !'+err
        })

    })
}); 

router.post('/login',(req,res)=>{
    Owner.findOne({email : req.body.email})
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
        const token = jwt.sign({email:Owner.email, userId:Owner._id}, 'secret_this_should_be_good'
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