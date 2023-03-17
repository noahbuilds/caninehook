import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../../.env') });



const configuration  = {
    ENV_PORT : process.env.PORT,
    MONGO_URL: process.env.MONGO_URL
}



export default configuration

