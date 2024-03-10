import { connect, disconnect } from "mongoose";

async function connectToDatabse() {
    try {
        await connect(process.env.MONGO_URL)
    } catch (error) {
        console.log(error)
        throw new error("it cannot connect to mangodb")
    }
}

async function disconnectFromDatabase() {
    try {
        await disconnect()
    } catch (error) {
        console.log(error)
        throw new error("it cannot disconnect to mangodb")
    }
}

export { connectToDatabse, disconnectFromDatabase };