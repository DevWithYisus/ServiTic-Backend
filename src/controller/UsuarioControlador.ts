import UsuarioDao from '../dao/UsuarioDao';
import { Request, Response } from 'express';

class UsuarioControlador extends UsuarioDao {

  public crear(req: Request, res: Response): void {
    const correo = { correoUsuario: req.body.correoUsuario };
    UsuarioControlador.crearUsuario(correo, req.body, res);
}

public consulta(req: Request, res: Response): void {
    UsuarioControlador.obtenerUsuarios(res);
}

public consultaUno(req: Request, res: Response): void {
    UsuarioControlador.obtenerUnUsuario(req.params.codigo, res);
}

public eliminar(req: Request, res: Response): void {
    UsuarioControlador.eliminarUsuario(req.params.codUsuario, res);
}

public actualizar(req: Request, res: Response): void {
    UsuarioControlador.actualizarUsuario(req.params.codUsuario, req.body, res);
}

public cantidadEnPerfil(req: Request, res: Response): void {
    UsuarioControlador.cantidadUsuariosEnPerfil(req.params.codPerfil, res);
}

public consultaXPerfil(req: Request, res: Response): void {
    UsuarioControlador.obtenerUsuariosPerfil(req.params.codPerfil, res);
}

};

const usuarioControlador = new UsuarioControlador();
export default usuarioControlador;