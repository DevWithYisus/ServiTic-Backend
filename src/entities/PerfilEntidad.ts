export class PerfilEntidad {
  public nombrePerfil: string;
  public estadoPerfil: number;

  constructor(nomP: string, esta: number) {
    this.nombrePerfil = nomP;
    this.estadoPerfil = esta;
  }
}

export default PerfilEntidad;
