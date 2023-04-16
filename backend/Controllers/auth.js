const express = require("express");
const { validationResult } = require("express-validator");

const crearUsuario = (req, res = express.response) => {
  const { name, email, password } = req.body;

  const userExists = users.find((user) => user.email === email);
  if (userExists) {
    return res.status(400).json({
      ok: false,
      errors: {
        email: {
          msg: "Email is already in use",
        },
      },
    });
  }

  // Save user in memory
  const newUser = {
    name,
    email,
    password,
  };
  users.push(newUser);

  res.status(200).json({
    ok: true,
    name,
    email,
  });
};

const loginUsuario = (req, res = express.response) => {
  res.json({
    ok: true,
  });
};

const revalidarToken = (req, res = express.response) => {
  res.json({
    ok: true,
  });
};

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
};
