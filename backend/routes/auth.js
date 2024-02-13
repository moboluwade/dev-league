const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../model/Admin');



router.get("/admin-login ",  async(req, res )=>{

    try{

    const { username, password } = req.body;

  // Find the user in the database
  const user = await User.findOne({ username });

  if (!user) {
    return res.json({ validation: false });
  }

  // Check if the password is correct
  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword || !user.isAdmin) {
    return res.json({ validation: false });
  }

  // If everything is okay, send a positive response
  return res.json({ validation: true });

    }catch(error){
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }

});

           module
        