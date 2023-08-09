const express = require('express');
const router = express.Router();

const { User } = require('../models/sign-up');

router.post('/api/v1/sign-up', (req, res, next) => {
    const { email, firstName, lastName } = req.body;

    const user = new User({ email, firstName, lastName });

    user.save()
        .then(() => {
            res.status(200).json();
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ 
                error: "An error occurred while trying to create a user." 
            });
        });
});

module.exports = router;