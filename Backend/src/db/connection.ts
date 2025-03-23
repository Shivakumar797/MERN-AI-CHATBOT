
import {connect,disconnect} from 'mongoose'
async function connectToDatabase(){
    try{
        await connect(process.env.MONGODB_URL);
    }
    catch(error){
        console.log(error);
        
        throw new Error('COULD NOT CONNECT TO MONGOGB')
    }

}

async function dissConnectFromDatabase() {
    try {
        await disconnect();
        
    } catch (error) {
        console.log(error);
        throw new Error('COULD NOT DISCONNECT TO MONGOGB')
        
    }
    
}

export {connectToDatabase, dissConnectFromDatabase}