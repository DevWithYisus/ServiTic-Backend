import { SolicitudEntidad } from './../entities/SolicitudEntidad';
import {model, Schema, Types} from "mongoose";

const SolicitudEsquema = new Schema<SolicitudEntidad>({
  tipoSolicitud:{ type: Number, enum: [1,2,3,4], default: 1 },
  descripSolicitud:{ type: String, required: true},
  fechaSolicitud: { type: Date, default: Date.now()},
  correoUsuSolicitud: { type: String, required: true},
  codUsuario: { type: Types.ObjectId, ref: "Usuario", required: true }
},{versionKey:false}); // Esquema de tipo PerfilEntidad

export default model("Solicitud", SolicitudEsquema,"Solicitud");