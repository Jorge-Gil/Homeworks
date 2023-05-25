const { Schema, model } = require("mongoose");

const UsuarioScheme = Schema(
  {
    name: {
      type: String,
      required: [true, 'El nombre es obligatorio'],
    },
    email: {
      type: String,
      required: [true, 'El email es obligatorio'],
      unique: true,
    },
    password: {
      type: String,
      required: [true,  'La contraseña es obligatoria'],
    },
  },
  {
    toJSON: {
      virtual: true,
    },
    toObject: {
      virtual: true,
    },
  }
);

UsuarioScheme.virtual("tareas", {
  ref: "Task",
  localField: "_id",
  foreignField: "user",
  justOne: false,
});

module.exports = model("Usuario", UsuarioScheme);