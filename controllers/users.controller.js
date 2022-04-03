const { usersModel } = require("../models/users.moel");

const users_get = async (req, res) => {
  try {
    let users = await usersModel.find();
    res.status(200).json(users);
  } catch (e) {
    res.status(502).send("something went wrong here ::...");
  }
};

const users_del = async (req, res) => {
  try {
    let id = req.params.id;
    let users = await usersModel.deleteOne({ _id: id });
    res.status(200).json(users);
  } catch (e) {
    res.status(502).send("something went wrong here ::...");
  }
};

const users_get_by_id = async (req, res) => {
  try {
    let id = req.params.id;
    let users = await usersModel.findById(id);
    res.status(200).json(users);
  } catch (e) {
    res.status(502).send("something went wrong here ::...");
  }
};

const users_post = async (req, res) => {
  try {
    delete req.body._id;
    let addedToCart = await usersModel.create(req.body);
    res.status(200).json(addedToCart);
  } catch (e) {
    res.status(502).send("something went wrong here ::...");
  }
};

module.exports = {
  users_get,
  users_get_by_id,
  users_post,
  users_del,
};