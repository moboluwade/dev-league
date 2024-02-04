const express = require('express');
const router = express.Router();
const Events = require('../model/events');



// get all the EVENTS
router.get('/', async (req, res)=>{
    try {

        const Event = await Events.find()
        .sort({date : -1});
        res.status(200).json({Events : Event})
    
        
    } catch (error) {
        res.status(500).json({error : error.message}) 
    }
 
})


// get specific event
router.get('/:id', async  (req, res)=>{
   
        try {
            const id =  req.params.id
            const Event = await Events.findOne({_id : id})
            res.status(200).json({event : Event})
            
        } catch (error) {
                res.status(500).json({error : error.message}) 
        }
})

// CREATE A NEW EVENT 
router.post('/', async (req, res)=>{
    const { date, title, description, eventType, eventStatus } = req.body;

    try {
        const event = new Events({
            date : date,
            title : title,
            description : description,
            eventType : eventType,
            eventStatus : eventStatus
        })
        const savedEvent = await  Events.create(event);
        res.status(201).json({ message: 'Events created successfully' ,  Event : savedEvent});
    } catch (error) {
        res.status(400).json({ error: error.message, message : "Events can either be VIRTUAL or ONSITE" });
    }

})

// update a specific event
router.patch('/:id', async (req, res)=>{
    try {
        const id = req.params.id;
        const update = req.body;
        const options = {new : true}
        const result = await Events.findByIdAndUpdate(id, update, options);
        res.status(200).json({message : 'Event updated successfully', event : result})
    } catch (error) {
        res.status(400).json({error : error.message})
    }
})

// GET EVENTS BY EVENT TYPE
router.get('/eventtype/:eventType', async (req, res)=>{
    try {
        const eventType = req.params.eventType;
        const Event = await Events.find({eventType : eventType});
        res.status(200).json({Events : Event})
    } catch (error) {
        res.status(500).json({error : error.message})
    }
})

// GET EVENTS BY EVENT STATUS
router.get('/eventstatus/:eventStatus', async (req, res)=>{
    try {
        const eventStatus = req.params.eventStatus;
        const Event = await Events.find({eventStatus : eventStatus});
        res.status(200).json({Events : Event})
    } catch (error) {
        res.status(500).json({error : error.message})
    }
})






module.exports = router