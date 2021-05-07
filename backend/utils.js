import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  // json web token - jwt
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || "somethingsecret",
    {
      // the time were password well be saved 30 day
      expiresIn: "30d",
    },
  );
};
