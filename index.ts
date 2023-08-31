import bodyParser from "body-parser";
import express, { Application } from "express";

const app: Application = express();
const port: number = 3001;

// CORS is a mechanism to tell the browser, whether a request that is
// dispatched from another web application domain or another origin, to our web application is allowed or not.
// app.use(cors());

// Parse JSON bodies for this app. Make sure you put
// `app.use(express.json())` **before** your route handlers!

//support parsing of application/x-www-form-urlencoded post data
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: false }));
// app.use('/api/sendNotification/', router);
//server running
app.listen(port, () => {
    console.log(`Server running at port ${port} `);
});