const Words = require("../models/Words")

const index = async (req, res) => {
    try {
        const words = await Words.getAllEasy()
        res.status(200).json({
            "success": true,
            "words": words
        })
    } catch (error) {
        res.status(500).json({
            "success": false,
            "error": error
        })
    }
}

module.exports = {
    index
}