const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;


app.get('/kshitiz', async (req, res) => {
    try {
        const twitterVdoUrl = req.query.url;

       
        const response = await axios.get(`https://tools.betabotz.eu.org/tools/twitterdl?url=${twitterVdoUrl}`);

       
        const url = response.data.result.mediaURLs[0];

        
        res.json({ "url": url });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
