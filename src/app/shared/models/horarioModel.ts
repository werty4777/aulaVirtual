
export interface HorarioModel{
  miCurso: MiCurso[];
  horario: Horario;


}
export interface MiCurso {
  curso: string;
  profesor: string;
  turno: string;
  grado:string;
}

export interface Horario {
  horario: string;
}
