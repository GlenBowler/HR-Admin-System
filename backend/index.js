const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();

//adding cors
app.use(cors());
app.use(express.json());

//Mongo DB Setup
const port = process.env.PORT || 5000;
const uri = process.env.URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection establish");
});

//routes
const staffRouter = require("./routes/staff_route");
const deptRouter = require("./routes/dept_route");
app.use("/dept", deptRouter);
app.use("/staff", staffRouter);
app.use("*", (req, resp) =>
  resp.status(404).json({ error: "Could not find this route" })
);

//Listening to port
app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
