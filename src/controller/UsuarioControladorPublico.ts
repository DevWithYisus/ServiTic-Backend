import { Request, Response } from 'express';
import UsuarioDaoPublico from "../dao/UsuarioDaoPublico";

class UsuarioControladorPublico extends UsuarioDaoPublico {

  public crear(req: Request, res: Response): void {
    const correo = { correoUsuario: req.body.correoUsuario };
    UsuarioControladorPublico.crearUsuario(correo, req.body, res);
  }

  public iniciar(req: Request, res: Response): void {
    UsuarioControladorPublico.iniciarSesion(req.body, res);
  }

};

const usuarioControlador = new UsuarioControladorPublico();
export default usuarioControlador;