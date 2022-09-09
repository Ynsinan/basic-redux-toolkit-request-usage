export interface Df {
  date: string;
  ede: string;
}

export interface Mbsf {
  mbs: number;
}

export interface Lf {
  lid: number;
  ln: string;
  total: number;
}

export interface Cf {
  cgid: number;
  cgn: string;
  total: number;
  lf: Lf[];
}

export interface Data {
  mf: any[];
  df: Df[];
  mbsf: Mbsf[];
  cf: Cf[];
  kbf: any[];
}

export interface RootObject {
  isSuccess: boolean;
  data: Data;
  message: string;
  error?: any;
  info?: any;
  date?: any;
}
