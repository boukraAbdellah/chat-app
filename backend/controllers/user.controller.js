const User = require("../models/user.model");


const getUsersForSidebar = async (req,res) => {
  try {
    const loggedInUserId = req.user._id;
    const users = await User.find({ _id: { $ne: loggedInUserId } }).select("-password"); // $ne => not equal

    res.status(200).json(users);

  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    console.log('error from getUsersForSidebar controller ',error.message)
  }
}

module.exports = {getUsersForSidebar};