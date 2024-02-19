const AllData = require("../modals/dataModel");

const createDataController = async (req, res) => {
  const header = req.user.id; //this id is coming from header auth
  // console.log(header);
  const data = req.body;
  // console.log(data);
  const Obj = {
    ...data,
    user_id: header,
  };
  const Details = await AllData.create(Obj);
  return res.status(201).json(Details);
};

const getDataController = async (req, res) => {
  const details = await AllData.find({ user_id: req.user.id });
  return res.status(200).json(details);
};

const deletedataController = async (req, res) => {
  const Data = req.body;
  // console.log(Data._id);
  await AllData.findByIdAndDelete({ _id: Data._id });
  return res.status(200).json({ msg: "Deleted" });
  // console.log(deletedData);
};

module.exports = {
  createDataController,
  getDataController,
  deletedataController,
};
