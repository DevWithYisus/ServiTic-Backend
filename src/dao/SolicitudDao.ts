import { Response } from "express";
import { Types } from "mongoose";
import SolicitudEsquema from "../schema/SolicitudEsquema";
import UsuarioEsquema from "../schema/UsuarioEsquema";

class SolicitudDao {

  // Consultar los datos de un perfil por un código específico
  // ************************************************************************************
  protected static async obtenerUnaSolicitud(identificador: any, res: Response): Promise<any> {
    const jsonSolicitud = { _id: identificador };
    const existeSolicitud = await SolicitudEsquema.findOne(jsonSolicitud).exec();
    if (existeSolicitud) {
      res.status(200).json(existeSolicitud);
    } else {
      res.status(400).json({ respuesta: "La solicitud NO existe con ese identificador" });
    }

    // const jsonSolicitud = { _id: identificador };
    // SolicitudEsquema.findOne(jsonSolicitud)
    // .populate({ path: "codUsuario", select: "nombreUsuario correoUsuario" })
    // .exec((miError, objeto) => {
    //   if (miError) {
    //     res.status(400).json({ respuesta: "La solicitud NO existe con ese identificador" });
    //   } else {
    //     res.status(400).json(objeto);
    //   }
    // });

  }
  // ************************************************************************************

  // Obtener solicitudes en orden descendente (-1)
  // ************************************************************************************
  protected static async obtenerSolicitudes(res: Response): Promise<any> {
    const datos = await SolicitudEsquema.find().sort({ _id: -1 }); // Se conecta a la db con SolicitudEsquema y ordena los datos
    res.status(200).json(datos);

    // SolicitudEsquema.find().sort({ fechaSolicitud: 1 })
    //   .populate({ path: "codUsuario", select: "nombreUsuario correoUsuario" })
    //   .exec((miError, objeto) => {
    //     if (miError) {
    //       res.status(400).json({ respuesta: "Error en la consulta" });
    //     } else {
    //       res.status(200).json(objeto);
    //     }
    //   });
  }
  // ************************************************************************************

  // Crear solicitudes verificando su existencia
  // ************************************************************************************
  protected static async crearSolicitud(correousu: any, parametros: any, res: Response): Promise<any> {
    delete parametros._id;
    delete parametros.datosUsuario;
    // Validación existencia usuario
    // **************************************
    const existeUsuario = await UsuarioEsquema.findOne(correousu).exec();
    if (existeUsuario) {
      parametros.codUsuario = existeUsuario._id;
    } else {
      res.status(400).json({ respuesta: 'Error! El usuario no existe.' });
    }
    // **************************************

    const objSolicitud = new SolicitudEsquema(parametros);
    objSolicitud.save((elError, objeto) => {
      if (elError) {
        res.status(400).json({ respuesta: "La solicitud no se puede crear." });
      } else {
        res.status(200).json({ id: objeto._id });
      }
    });
  }
  // ************************************************************************************

  // Cantidad de solicitudes x el id de un usuario
  // ************************************************************************************
  protected static async cantidadSolicitudesUsuario(idUsuario: any, res: Response): Promise<any> {
    if (Types.ObjectId.isValid(idUsuario)) {
      const llave = { _id: idUsuario };
      const cantidad = await SolicitudEsquema.countDocuments({ codUsuario: llave });
      console.log(cantidad);
      res.status(200).json(cantidad);
    } else {
      res.status(400).json({ respuesta: "Identificador incorrecto" });
    }
  }
  // ************************************************************************************

  // Obtener todas las solicitudes para un usuario específico
  // ************************************************************************************
  protected static async obtenerSolicitudesUsuario(idUsuario: any, res: Response): Promise<any> {
    if (Types.ObjectId.isValid(idUsuario)) {
      const llave = { _id: idUsuario };
      SolicitudEsquema.find({ codUsuario: llave }).sort({ _id: -1 })
        .exec((miError, objeto) => {
          if (miError) {
            console.log(miError);
            res.status(400).json({ respuesta: "Error en la consulta" });
          } else {
            res.status(200).json(objeto);
          }
        });
    } else {
      res.status(400).json({ respuesta: "Identificador incorrecto" });
    }
  }
  // ************************************************************************************

  // Eliminar solicitud por código
  // ************************************************************************************
  protected static async eliminarSolicitud(
    codigo: any,
    res: Response
  ): Promise<any> {
    // const existe = await SolicitudEsquema.findById(codigo);
    const existe = await SolicitudEsquema.findById(codigo).exec();

    if (existe) {
      SolicitudEsquema.findByIdAndDelete(codigo, (elError: any, elObjeto: any) => {
        if (elError) {
          res.status(400).json({ respuesta: "El Solicitud no se pudo eliminar." });
        } else {
          res.status(200).json({ eliminado: elObjeto });
        }
      });
    } else {
      res.status(400).json({ respuesta: "El Solicitud no existe." });
    }
  }
  // ************************************************************************************

  // Actualizar perfil por código y con body JSON
  // ************************************************************************************
  protected static async actualizarSolicitud(codigo: any, objJson: any, res: Response): Promise<any> {
    // const existe = await SolicitudEsquema.findById(codigo);
    const existe = await SolicitudEsquema.findById(codigo).exec();

    if (existe) {
      SolicitudEsquema.findByIdAndUpdate(
        { _id: codigo },
        { $set: objJson },
        (elError: any, elObjeto: any) => {
          if (elError) {
            res.status(400).json({ respuesta: "El Solicitud no se pudo actualizar." });
          } else {
            res.status(200).json({ antes: elObjeto, despues: objJson });
          }
        }
      );
    } else {
      res.status(400).json({ respuesta: "El Solicitud no existe." });
    }
  }
  // ************************************************************************************
}

export default SolicitudDao;
