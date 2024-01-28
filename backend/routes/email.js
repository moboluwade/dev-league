const express = require('express');
const router = express.Router();
const Email = require('../model/Email')

router.get('/', async(req, res)=>{
                try {

                const email = await Email.find()
                res.send(email)

                } catch (error) {
                    res.json({error})
                }
})

router.post('/', async(req,res)=>{
    const email= req.body.Email
    try { 
                            const newEmail = new Email({ Email :email  });
                            const savedEmail = await Email.create(newEmail);
                            res.status(201).json(savedEmail);
                        
    } catch (error) {
        if(error.code === 11000){
         return    res.status(409).json({ message: 'Email already exists' });
        }
        
        res.status(500).json({ error: error.message });
    }
})

module.exports = router