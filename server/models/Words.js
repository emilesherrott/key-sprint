const client = require("../database/setup")

class Words {
    constructor(data) {
        this.id = data.id
        this.level = this.level
        this.word = this.word
        this.length = this.word.length
    }

    static async getAllEasy() {
        await client.connect()
        const response = await client.db("words").collection("easy").find()
        const allValues = await response.toArray()
        return allValues
    }
}

module.exports = Words