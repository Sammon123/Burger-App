const express = require("express");

const PORT = process.env.PORT || 8080;
// set up express
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})

// Serve static content for the app from the "public" directory in the application directory

// Parse application body

// set up view engine to be handlebars

// set up html routes
