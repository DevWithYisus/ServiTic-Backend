import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import express from "express";
import ConexionDB from "./ConexionDB";

// Imports para ruteo
import rutaApiPerfil from "../route/PerfilRuta";
import rutaApiUsuario from "../route/UsuarioRuta";
import rutaApiSolicitud from "../route/SolicitudRuta";
import seguridad from "../middleware/Seguridad";
import rutaApiPublicaUsuario from "../route/UsuarioRutaPublica";
// ******************************** //

class Servidor {
  public app: express.Application;

  constructor(){
    dotenv.config({path: "variables.env"});
    ConexionDB();
    this.app = express();
    this.cargarConfiguracion();
    this.activarRutas();
  }

  public cargarConfiguracion(){
    this.app.set("PORT", process.env.PORT);
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json({limit: "100MB"}));
    this.app.use(express.urlencoded({ extended: true }));
  }

  public activarRutas() {

    // Parte publica
    this.app.use("/api/publica/usuarios",rutaApiPublicaUsuario);

    // Parte privado
    this.app.use("/api/privada/perfiles", seguridad.verificar, rutaApiPerfil);
    this.app.use("/api/privada/usuarios", seguridad.verificar, rutaApiUsuario);
    this.app.use("/api/privada/solicitudes", seguridad.verificar,rutaApiSolicitud);

  }

  public iniciarServidor(){
    this.app.listen(this.app.get("PORT"),() => {
      console.log("Servidor escuchando en ",this.app.get("PORT"));
    });
  }

}

export default Servidor;