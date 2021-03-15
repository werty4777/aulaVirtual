export interface NotasModel {
  alumno: string;
  idAlumno: string;
  bimestres: Bimestre[];
}

export interface Examenes {
  idExamen?: number;
  nota: number;
  tipo?:string;

}
export interface Practicas {
  idExamen: number;
  nota: number;
  tipo:number;

}
export interface Marzo {
  examenes: Examenes;
  practicas?: any;
}



export interface Abril {
  examenes?: Examenes;
  practicas: Practicas;
}

export interface Mayo {
  practicas?: any;
  bimestral?: any;
}

export interface Mayo2 {
  examenes?: any;
  practicas?: any;
}

export interface Junio {
  examenes?: any;
  practicas?: any;
}

export interface Julio {
  bimestral?: any;
  practicas?: any;
}

export interface Agosto {
  examenes?: any;
  practicas?: any;
}

export interface Setiembre {
  examenes?: any;
  practicas?: any;
}

export interface Octubre {
  bimestral?: any;
  practicas?: any;
}

export interface Octubre2 {
  examenes?: any;
  practicas?: any;
}

export interface Noviembre {
  examenes?: any;
  practicas?: any;
}

export interface Diciembre {
  bimestral?: any;
  practicas?: any;
}

export interface Me {
  marzo: Marzo[];
  abril: Abril[];
  mayo: Mayo[];
  mayos: Mayo2[];
  junio: Junio[];
  julio: Julio[];
  agosto: Agosto[];
  setiembre: Setiembre[];
  octubre: Octubre[];
  octubres: Octubre2[];
  noviembre: Noviembre[];
  diciembre: Diciembre[];

}

export interface Bimestre {
  mes: Me[];
  editable: boolean;
}

