import mongoose, { mongo } from 'mongoose';

export async function connect(){
    try{
        //! Exclamination is used for if you dont know what is the return type
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        //IF THE CONNECTION ON EVENT connection then the code execute
        connection.on('connection', ()=>{
            console.log('DB Connected');
        });

        //IF THE CONNECTION ON EVENT error THENN THE CODE EXECUTE
        connection.on('error', (err)=>{
            console.log('DB Connection Error .. Please make sure DB is up and running...'+err);
            process.exit();
        });

    } catch(error){
        //IN CASE THE CONNECTION IS NOT ESTABLISHING DUE TO DB SERVER ERRORS
        console.log('Something went wrong in Database Connection');
        console.log(error);
    }
}