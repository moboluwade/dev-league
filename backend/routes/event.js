const express = require('express');
const router = express.Router();
const { Event } = require('../model/CreateModels');
const checkAuth = require('../middlewares/auth');
const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});


// Configure Multer for handling file uploads

// get all the EVENTS
router.get('/', async (req, res) => {
    try {
        const events = await Event.find()
            .sort({ id: -1 });
        res.status(200).json({ Events: events })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// get last 5 EVENTS
router.get('/last-five', async (req, res) => {
    try {
        const events = await Event.find()
            .sort({ id: -1 })
            .limit(5);
        res.status(200).json({ Events: events })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// get specific event
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const event = await Event.findOne({ _id: id })
        res.status(200).json({ Event: event })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


// CREATE A NEW EVENT 
router.post('/', checkAuth, async (req, res) => {
    try {
        const { startDate, endDate, title, description, eventType, regLink, eventBanner, eventBannerName } = req.body;


        // Upload image to Cloudinary
        const cloudinaryUploadPromise = new Promise((resolve, reject) => {
            cloudinary.uploader.upload(eventBanner, { public_id: eventBannerName }, function (error, result) {
                if (error) {
                    reject(error);
                } else {
                    resolve(result.url);
                }
            });
        });


        // Wait for Cloudinary upload response
        const cloudinaryResponse = await cloudinaryUploadPromise;

        const event = new Event({
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            title: title,
            description: description,
            eventType: eventType,
            regLink: regLink,
            imageUrl: cloudinaryResponse
        })

        const savedEvent = await Event.create(event);
        res.status(201).json({ message: 'Events created successfully', Event: savedEvent });
    } catch (error) {
        res.status(400).json({ error: error.message, message: "Events can either be VIRTUAL or ONSITE" });
    }

})

// GET EVENTS BY EVENT TYPE (})

router.get('/:eventType', async (req, res) => {
    try {
        const eventType = req.params.eventType;
        const event = await Event.find({ eventType: eventType });
        res.status(200).json({ Events: Event })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// GET EVENTS BY EVENT STATUS
router.get('/:eventStatus', async (req, res) => {
    try {
        const eventStatus = req.params.eventStatus;
        const event = await Event.find({ eventStatus: eventStatus });
        res.status(200).json({ Events: Event })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


// UPDATE SPECIFIC EVENTS BY ID
router.patch('/update/:id', checkAuth, async (req, res) => {
    try {
        const id = req.params.id;
        const updates = req.body;
        const options = { new: true }
        const updatedEvent = await Event.findOneAndUpdate({ _id: id }, updates, options);
        res.status(200).json({ message: `Event with id: ${id} successfully updated`, event: updatedEvent });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// // update a specific event
// router.patch('/:id', checkAuth, async (req, res) => {
//     try {
//         const id = req.params.id;
//         const update = req.body;
//         const options = { new: true }
//         const result = await Event.findByIdAndUpdate(id, update, options);
//         res.status(200).json({ message: 'Event updated successfully', event: result })
//     } catch (error) {
//         res.status(400).json({ error: error.message })
//     }
// })


// DELETE SPECIFIC SELECTED EVENT
router.delete('/delete/:id', checkAuth, async (req, res) => {
    try {
        const id = req.params.id;
        const event = await Event.findByIdAndDelete(id)
        res.status(200).json({ message: `Event with id: ${id} successfully deleted` })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

module.exports = router