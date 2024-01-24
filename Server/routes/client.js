const router = require('express').Router()
const Email = require('../model/Email')




/* GET /
/* GET ARTICLES */

router.get('/', (req, res)=>{
  console.log('home')
})










/* *POST / */
/* Save Email TO Database */
router.post('/', async (req, res)=>{
    try {
        console.log(req.body)
        const email = req.body.Email

            const newemail =new Email({
                Email : email
            })
            await Email.create(newemail);
            res.json({ message: 'Email saved successfully' });
        
    } catch (error) {
            console.error(error);
    if (error.code === 11000) {
      res.status(409).json({ error: 'Email already exists' });
    } else {
      res.status(500).json({ error: 'Failed to save email' });
    }
  
    }
})












module.exports = router