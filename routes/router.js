const express = require("express");
const {
    users_get,
    users_get_by_id,
    users_post,
    users_del,
  } = require("../controllers/users.controller");

  

  const router = express.Router();



router.get("/users", users_get);
router.post("/users", users_post);
router.get("/users/:id", users_get_by_id);
router.delete("/users/:id", users_del);



router.get("*", (req, res) => {
    res
      .status(404)
      .send("something went wrong, did not find what you were looking for ");
  });
  module.exports = router;