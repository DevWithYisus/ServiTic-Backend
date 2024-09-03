import { UsuarioEntidad } from './UsuarioEntidad';

export class SolicitudEntidad{
  public tipoSolicitud: number;
  public descripSolicitud: string;
  public fechaSolicitud: Date;
  public correoUsuSolicitud: string;
  public codUsuario: UsuarioEntidad; // para sacar los datos del usuario que hace la solicitud
  
  constructor(tipoSoli: number, descripSoli: string, fechaSoli: Date, correoUsu: string, codusu: UsuarioEntidad){
    this.tipoSolicitud = tipoSoli;
    this.descripSolicitud = descripSoli;
    this.fechaSolicitud = fechaSoli;
    this.correoUsuSolicitud = correoUsu;
    this.codUsuario = codusu;
  }
}
export default SolicitudEntidad;
