const express = require('express');
const router = express.Router();
const Email = require('../model/Email')

router.get('/', (req, res)=>{
        console.log('hello world')
})

router.post('/', async(req,res)=>{
    const email= req.body.Email
    try {
                const existingUser = await Email.findOne({ email : email });

                if (existingUser) {
                    res.status(409).json({ message: 'Email already exists' });
                }
                        else{
                           
                            const newEmail = new Email({ Email :email  });
                            const savedEmail = await Email.create(newEmail);
                            res.status(201).json(savedEmail);
                        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error saving email' , error : error});
    }
})

module.exports = router