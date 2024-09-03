import { Router } from "express";
import usuarioControlador from "../controller/UsuarioControlador";

class UsuarioRuta {

  public rutaAPI: Router;

  constructor() {
    this.rutaAPI = Router();
    this.configuracion();
  }

  public configuracion(): void {
    this.rutaAPI.post('/crear', usuarioControlador.crear);
    this.rutaAPI.get('/todos', usuarioControlador.consulta);
    this.rutaAPI.get('/uno/:codigo', usuarioControlador.consultaUno);
    this.rutaAPI.delete('/eliminar/:codUsuario', usuarioControlador.eliminar);
    this.rutaAPI.put('/actualizar/:codUsuario', usuarioControlador.actualizar);
    this.rutaAPI.get('/todos/:codPerfil', usuarioControlador.consultaXPerfil);
    this.rutaAPI.get('/cantxperfil/:codPerfil', usuarioControlador.cantidadEnPerfil);
  }

};

const usuarioRuta = new UsuarioRuta();
export default usuarioRuta.rutaAPI;