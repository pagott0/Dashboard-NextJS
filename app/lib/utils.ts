import mongoose from "mongoose";

export const connectToDB = async () => {

  const connection = {isConnected: false} as {isConnected: boolean | import("mongoose").ConnectionStates}
    try {
      if(connection.isConnected) return
      if(process.env.MONGO){
        const key = process.env.MONGO.toString()
        const db = await mongoose.connect(key);
        connection.isConnected = db.connections[0].readyState
      }
    } catch (error: any) {
      throw new Error(error);
    }
}