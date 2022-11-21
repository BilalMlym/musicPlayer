const router = require("express").Router();

const user = require("../models/user");

const admin = require("../config/firebase.config");

router.get("/Login", async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(500).send({ message: "invalid token" });
  }
  const token = req.headers.authorization.split(" ")[1];
  try {
    const decodeValue = await admin.auth().verifyIdToken(token);
    if (!decodeValue) {
      return res.status(505).json({ message: "un authorized" });
    } else {
      //checking user exist or not
      const userExist = await user.findOne({ user_id: decodeValue.user_id });
      if (!userExist) {
        newUserData(decodeValue, req, res);
      } else {
        updateUserData(decodeValue, req, res)
          }
    }
  } catch (error) {
    return res.status(505).json({ message: error });
  }
  // return res.send(req.headers.authorization)
});

const newUserData = async (decodeValue, req, res) => {
  const newUser = new user({
    name: decodeValue.name,
    email: decodeValue.email,
    imageURL: decodeValue.picture,
    user_id: decodeValue.user_id,
    email_verified: decodeValue.email_verified,
    role: "member",
    auth_time: decodeValue.auth_time,
  });
  try {
    const savedUser = await newUser.save();
    res.status(200).send({ user: savedUser });
  } catch (error) {
    res.status(400).send({ success: false, msg: error });
  }
};

const updateUserData = async (decodeValue, req, res) => {
  const filter = { user_id: decodeValue.user_id };
  const options = {
    upsert: true,
    new: true,
  };
  try {
    const result = await user.findOneAndUpdate(
      filter,
      { auth_time: decodeValue.auth_time },
      options
    );
    res.status(200).send({ user: result });
  } catch (error) {
    res.status(400).send({ success: false, msg: error });
  }
};

module.exports = router;


//test branch