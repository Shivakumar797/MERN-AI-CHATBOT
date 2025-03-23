
import app from './app.js';

import { connectToDatabase } from './db/connection.js';
const PORT=process.env.PORT
connectToDatabase().then(()=>{
    app.listen(PORT,()=>console.log('server Run on port 5000'))

}).catch((err)=> console.log(err));

