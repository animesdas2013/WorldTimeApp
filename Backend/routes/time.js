const express = require('express')
const axios = require('axios')
const router = express.Router()

router.get('/', async(req, res) => {
    const {timeZone} = req.query;
    if(!timeZone){
        return res.json(400).json({error: 'The zone parameter is required'});
    }

    try{
        const response = await axios.get('https://timeapi.io/api/Time/current/zone', {
            params:{timeZone},
        });

        const {time} = response.data

        res.status(200).json({time})
    } catch(error){
        console.error('Error fetching data from external API:', error);
        res.status(500).json({error: 'Internal server error'})
    }

});


module.exports = router