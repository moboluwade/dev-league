const express = require('express');
const router = express.Router();
const email = require('../model/Email')

// POSt THE EMAIL
router.post('/', async(req,res)=>{
    const Email= req.body.email
    try { 
                            const newEmail = new email({ email :Email  });
                            const savedEmail = await emailmail.create(newEmail);
                            res.status(201).json({status: 'success', message: 'Email stored successfully',  data : savedEmail} );
                        
    } catch (error) {
        if(error.code === 11000){
         return     res.status(409).json({ status: 'failed', message: 'Email already exists' }); 
        }
        
        res.status(500).json({ status: 'failed', message: 'Error saving email' });
    }
})

module.exports = router