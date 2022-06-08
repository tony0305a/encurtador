import mongoose from 'mongoose'
import { configURL } from '../config/Constants'

export class MongoConnection {
    public async connect(): Promise<void>{
        try{
            await mongoose.connect(configURL.MONGO_CONNECTION)
            console.log('database connected')
        }catch (error){
            throw error
            process.exit(1)
        }
    }
}