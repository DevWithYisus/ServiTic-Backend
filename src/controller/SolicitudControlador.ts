import {Request, Response} from "express";
import SolicitudDao from "../dao/SolicitudDao";

class SolicitudControlador extends SolicitudDao {

  public consulta (req: Request, res: Response){
    SolicitudControlador.obtenerSolicitudes(res);
  }

  public consultaUno (req: Request, res: Response){
    SolicitudControlador.obtenerUnaSolicitud(req.params.codigo, res);
  }

  public crear(req: Request, res: Response){
    const elCorreo = {correoUsuario: req.body.correoUsuSolicitud};
    SolicitudControlador.crearSolicitud(elCorreo, req.body, res);
  }

  public cantidadSolicitudesUsuario(req: Request, res: Response): void {
    SolicitudControlador.cantidadSolicitudesUsuario(req.params.codigo, res);
  }

  public consultarSolicitudesUsuario(req: Request, res: Response): void {
    SolicitudControlador.obtenerSolicitudesUsuario(req.params.codigo, res);
  }

  public eliminar(req: Request, res: Response){
    SolicitudControlador.eliminarSolicitud(req.params.codigo, res);
  }

  public actualizar(req: Request, res: Response){
    SolicitudControlador.actualizarSolicitud(req.params.codigo, req.body,res);
  }

}

const solicitudControlador = new SolicitudControlador();
export default solicitudControlador;