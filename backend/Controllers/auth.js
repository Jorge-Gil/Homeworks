const express = require("express");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/Usuario");

const crearUsuario = async (req, res = express.request) => {
  const { name, email, password } = req.body;

  try {
    let usuario = await Usuario.findOne({ email: email });
    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario ya existe con ese email",
      });
    }

    usuario = new Usuario(req.body);
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);
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

const loginUsuario = async (req, res = express.request) => {
  const { email, password } = req.body;

  try {
    let usuario = await Usuario.findOne({ email: email });
    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario no existe ",
      });
    }
    const passwordValid = bcrypt.compareSync(password, usuario.password);
    if (!passwordValid) {
      return res.status(400).json({
        ok: false,
        msg: "Password incorrecto",
      });
    }
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
