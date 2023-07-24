const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.TOKEN);
    const userId = decodedToken.userId;
    console.log(token, userId);
    if (req.body.userId && req.body.userId !== userId) {
      throw "Mot de passe invalide";
    } else {
      req.auth = {
        userId: userId,
      };
      next();
    }
  } catch (error) {
    res.status(401).json({ error });
    console.log(error);
  }
};
