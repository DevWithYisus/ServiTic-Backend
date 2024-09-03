import {Router} from "express";
import solicitudControlador from "../controller/SolicitudControlador";

class SolicitudRuta {
  // end points aqui
  public rutaApi: Router;

  constructor(){
    this.rutaApi = Router();
    this.activarRutas();
  };

  public activarRutas(){
    this.rutaApi.get("/todos", solicitudControlador.consulta);
    this.rutaApi.get('/uno/:codigo', solicitudControlador.consultaUno);
    this.rutaApi.post("/crear", solicitudControlador.crear);

    this.rutaApi.get("/cantsoliuser/:codigo", solicitudControlador.cantidadSolicitudesUsuario);
    this.rutaApi.get("/solicitudesuser/:codigo", solicitudControlador.consultarSolicitudesUsuario);

    this.rutaApi.delete("/eliminar/:codigo", solicitudControlador.eliminar);
    this.rutaApi.put("/actualizar/:codigo", solicitudControlador.actualizar);
  }

}

const solicitudRuta = new SolicitudRuta();
export default solicitudRuta.rutaApi;