const express = require('express');
const router = express.Router();

// THIS IS STILL IN TESTING 


router.get('/', (req, res)=>{
    const https = require('https')


    
    const params = JSON.stringify({
      "email": "customer@email.com",
      "amount": "200000"
    })
    
    const options = {
      hostname: 'api.paystack.co',
      port: 443,
      path: '/transaction/initialize',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`,
        'Content-Type': 'application/json'
      }
    }
    
    const reqpasytack = https.request(options, respaystack => {
      let data = ''
    
      respaystack.on('data', (chunk) => {
        data += chunk
      });
    
      respaystack.on('end', () => {
        res.json(data)
        console.log(JSON.parse(data))
      })
    }).on('error', error => {
      console.error(error)
    })
    
    reqpasytack.write(params)
    reqpasytack.end()
})



module.exports = router