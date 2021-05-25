import { Imprimivel, Igualavel } from './index';

export interface MeuObjeto<T> extends Imprimivel, Igualavel<T> {}

//interface com objetivo de evitar ficar implementando vários objetos