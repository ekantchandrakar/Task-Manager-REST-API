require("../src/db/mongoose");
const Task = require("../src/models/task");

/*
  Task.findByIdAndDelete("60994ec51c5f5fb99420f589").then((task) => {
    console.log(task);
    return Task.countDocuments({
      completed: false
    });
  }).then((result) => {
    console.log(result);
  }).catch((e) => {
    console.log(e);
  });
*/

const deleteTaskAndCount = async (id) => {
  const deletedTask = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });

  return count;
}

deleteTaskAndCount("609accb91a98c5c7302f6a56").then((count) => {
  console.log(count);
}).catch((e) => {
  console.log(e);
});
