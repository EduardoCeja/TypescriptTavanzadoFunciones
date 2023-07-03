//Se crea la interface y se define el tipado
//Se coloca el export para que la interface se pueda importar en otros archivos
//Se coloca readonly a las propiedades "id" y "createdAt"
export interface BaseModel{
  readonly id: string;
  readonly createdAt: Date;
  updatedAt: Date;
}
