export interface ProfileModel{

  profile: Profile;
  apoderados?: Apoderado[];
  grado?:string;
}

export interface Profile {
  name: string;
  lastName: string;
  email: string;
  age: string;
  birth: string;
  dni: string;
  address: string;
  sex: string;
  foto: string;
  telefono: string;
}

export interface Apoderado {
  name: string;
  lastName: string;
  email: string;
  age?: any;
  birth?: any;
  dni: string;
  address: string;
  sex: string;
  foto?: any;
  telefono: string;
}
