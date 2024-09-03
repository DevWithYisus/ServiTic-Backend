import { Request, Response, NextFunction } from 'express';
import jwt from "jsonwebtoken";

class Seguridad {

  public verificar(req: Request, res: Response, next: NextFunction) {
    if (req.headers.authorization) {
      try {
        const miLlavePrivada = String(process.env.CLAVE_SECRETA);
        const tokenRecibido = req.headers.authorization?.split(" ")[1] as string;
        const laInformacion = jwt.verify(tokenRecibido, miLlavePrivada);
        req.body.datosUsuario = laInformacion; //datosUsuario variable inventada
        next();
      } catch (error) {
        res.status(401).json({respuesta: "Intento de fraude"});
      }
    } else {
      res.status(401).json({respuesta: "Petición negada por el sistema de seguridad"});
    }
  }
};

const seguridad = new Seguridad();
export default seguridad;