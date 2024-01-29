const express = require('express');
const router = express.Router();
const Events = require('../model/events');




router.get('/', async (req, res)=>{
    const Event = await Events.find()
    .sort({date : -1});
    res.status(200).json({Events : Event})

})







router.post('/', async (req,res)=>{


        try {
            const date = req.body.date;
            const title = req.body.title;
            const description = req.body.description;
            const eventType = req.body.eventType;
            const eventStatus = req.body.eventStatus;



            const event = new Events({
                date : date,
                title : title,
                description : description,
                eventType : eventType,
                eventStatus : eventStatus
            })
            
                 const savedEvent = await  Events.create(event);
                 res.status(201).json({ message: 'Events created successfully' });


        } catch (error) {
            res.status(400).json({ error: error.message, message : "Events can either be VIRTUAL or ONSITE" });
        }
})


module.exports = router