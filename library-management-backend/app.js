import express  from 'express';
import router from './routes/routers.js';
import cors from 'cors'



const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: 'http://localhost:3000',  
  methods: ['GET', 'POST'], 
}));




app.use('/', router);



// Start the server and listen for requests
const listener = app.listen(process.env.PORT || 5000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});

export default app;
