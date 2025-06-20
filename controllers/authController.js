const { readJSON } = require("../services/fileServices");
const USERS_FILE = "./data/users.json";
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET

exports.login = (req, res) => {
  const users = readJSON(USERS_FILE);
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username);

  if (!user || user.password !== password) {
    return res.status(401).json({
      error: "Unauthorized",
      message: "Invalid username or password",
    });
  }

  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
};
