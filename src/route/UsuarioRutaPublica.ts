import { Router } from "express";
import usuarioControladorPublico from "../controller/UsuarioControladorPublico";

class UsuarioRutaPublica {

  public rutaAPI: Router;

  constructor() {
    this.rutaAPI = Router();
    this.configuracion();
  }

  public configuracion(): void {
    this.rutaAPI.post('/crear', usuarioControladorPublico.crear);
    this.rutaAPI.post('/iniciar', usuarioControladorPublico.iniciar);
  }

};

const usuarioRuta = new UsuarioRutaPublica();
export default usuarioRuta.rutaAPI;