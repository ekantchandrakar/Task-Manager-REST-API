const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Task-Manager-API", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});
