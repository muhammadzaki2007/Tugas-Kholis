const express = require("express")

const cors = require("cors")

const app = express();

app.use(cors())

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./App/Model/index")

db.sequelize.sync()

// routes

app.get("/test", (req, res) => {

    res.json({ message: "App started" });

});

// secured routes

require("./App/Route/cv.router")(app)
require("./App/Route/overview.routes")(app)
require("./App/Route/about_router")(app)

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {

  console.log(`Server is running on port ${PORT}.`);

});