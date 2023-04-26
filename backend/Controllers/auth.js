const express = require("express");
const { validationResult } = require("express-validator");
const  Usuario  = require("../models/Usuario");


const crearUsuario = async (req, res = express.request) => {
  const { name, email, password } = req.body;

  try {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.status(200).json({
      ok: true,
      usuario,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      error,
    });
  }

  // const userExists = users.find((user) => user.email === email);
  // if (userExists) {
  //   return res.status(400).json({
  //     ok: false,
  //     errors: {
  //       email: {
  //         msg: "Email is already in use",
  //       },
  //     },
  //   });
  // }

  // Save user in memory
  // const newUser = {
  //   name,
  //   email,
  //   password,
  // };
  // Usuario.push(newUser);

  // res.status(200).json({
  //   ok: true,
  //   name,
  //   email,
  // });
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
