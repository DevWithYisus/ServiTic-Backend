import { PerfilEntidad } from './PerfilEntidad';

export class UsuarioEntidad {
  public nombreUsuario: string;
  public correoUsuario: string;
  public claveUsuario: string;
  public fechaCreacionUsuario: Date;
  public estadoUsuario: number;
  public telefonoUsuario: number;
  public ciudadUsuario: string;
  public direccionUsuario: string;
  public codPerfil: PerfilEntidad;
  public avatarUsuario: string;
  public nombreImagenUsuario: string;
  
  constructor(nomp: string, esta: number, corr: string, clave: string, fecha: Date, tel: number, ciudad: string, direc: string, cope:PerfilEntidad, ava: string, nomava: string) {
    this.nombreUsuario = nomp;
    this.estadoUsuario = esta;
    this.correoUsuario = corr;
    this.claveUsuario = clave;
    this.fechaCreacionUsuario = fecha;
    this.telefonoUsuario = tel;
    this.ciudadUsuario = ciudad;
    this.direccionUsuario = direc;
    this.codPerfil = cope; 
    this.avatarUsuario = ava;
    this.nombreImagenUsuario = nomava;
  }
}

export default UsuarioEntidad;