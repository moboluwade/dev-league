const express = require('express');
const router = express.Router();
const Email = require('../model/Email');
const checkAuth = require('../middlewares/auth');

// POSt THE EMAIL
router.post('/', async (req, res) => {
    try {
        const { email, } = req.body;
        
        // check if teh email already exist
        const emailExist = await Email.find({email : email});
        if(emailExist && emailExist.length > 0){
            return res.status(400).json({message : 'Email already exist'});
        }
        else{
            const newEmail = new Email({email});
            const savedEmail = await newEmail.save();
            res.json({message : 'Email sent successfully', Email : savedEmail, status : 'success'});
        }

        
    } catch (error) {
     
        return res.status(500).json({message : 'Internal server error', error : error, status : 'failed'});
    }       
})

// get all email 
router.get('/', checkAuth , async (req, res) => {
    try{
    const Emails = await Email.find();
    if(!Emails){
        return res.status(404).json({message : 'Emails not found'});
    }
    res.json({Emails : Emails});
}
catch(err){
    console.log(err);
    return res.json(err);
}
})



module.exports = router