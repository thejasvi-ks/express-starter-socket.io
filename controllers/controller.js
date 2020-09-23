const data = require("../data");

exports.getDetails = (req, res, next) => {
  let newData = [];

  console.log(data);
  data.forEach((item) => {
    const newItem = {
      Character: item.name,
      SummedUpValue: data
        .filter((p) => p.name.toString() === item.name.toString())
        .map((q) => q.value)
        .reduce((a, b) => a + b)
    };
    newData.push(newItem);
  });
  res.json(newData);
};
