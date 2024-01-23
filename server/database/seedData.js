const client = require("./setup")

const seedDB = async () => {
    try {
        await client.connect()
        console.log("Awaiting seeding 🌱")
        await client.db("words").collection("easy").drop()
        await client.db("words").collection("easy").insertMany([
            { level: "easy", length: 2, word: "to"},
            { level: "easy", length: 3, word: "the"},
            { level: "easy", length: 2, word: "hi"},
            { level: "easy", length: 2, word: "go"},
            { level: "easy", length: 3, word: "for"},
        ])
        console.log("Database seeded 🌾")
        await client.close()
    } catch (error) {
        console.log(error)
    }
}

seedDB()