import express, { request, response } from "express";
import { PORT, mongoDBURL} from './config.js';
import mongoose from "mongoose";
import { Book } from './models/bookModel.js';
const app = express();

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome to Book Shop');
});

//Saving a new book
app.post('/books', async  (request, response) => {
    try {
     } catch (error) {
            console.log(error.message);
            response.status(500).send({message: error.message});
     }
    
});

mongoose
.connect(mongoDBURL)
.then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
        console.log(`Server is listening to port: ${PORT}`);
    });  
})
.catch((error) => {
    console.log(error);
});