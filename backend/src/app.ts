import express,{ Application, Request, Response} from 'express'
import configuration from './configs/configs'
import mongoose, { ConnectOptions } from 'mongoose';
// import {Dog}  from './models/dog.model';
import {Dog, User} from './models/index'



const app: Application = express()



app.get('/', (req:Request, res:Response)=>{
    res.json({
        msg: 'welcome'
    });
});


// database connection
(async function () {
  try {
    await mongoose.connect(configuration.MONGO_URL!, { useNewUrlParser: true } as ConnectOptions);
    return console.log(`Successfully connected to ${configuration.MONGO_URL}`);
  } catch (error) {
    console.log("Error connecting to database: ", error);
    return process.exit(1);
  }
})();



app.listen(configuration.ENV_PORT, ()=>{
    console.log("App is running on PORT 4000")
})