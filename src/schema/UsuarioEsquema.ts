import { model, Schema, Types } from "mongoose";
import { UsuarioEntidad } from "./../entities/UsuarioEntidad";

const UsuarioEsquema = new Schema<UsuarioEntidad>(
  {
    nombreUsuario: { type: String, required: true, trim: true },
    estadoUsuario: { type: Number, enum: [1, 2, 3], default: 1 },
    correoUsuario: { type: String, required: true, unique: true },
    claveUsuario: { type: String, required: true },
    fechaCreacionUsuario: { type: Date, default: Date.now() },
    telefonoUsuario: { type: Number, required: true, unique: true},
    ciudadUsuario: { type: String, required: true, trim: true },
    direccionUsuario: { type: String, required: true },
    codPerfil: { type: Types.ObjectId, ref: "Perfil", required: true },
    avatarUsuario: { type: String, default: "noAvatar" },
    nombreImagenUsuario: { type: String, default: "noAvatar.png" }
  },
  { versionKey: false }
);

export default model("Usuario", UsuarioEsquema, "Usuario");
