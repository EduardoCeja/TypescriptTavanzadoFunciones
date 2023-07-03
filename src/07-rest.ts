//Enums
//Lista de valores de Roles
enum ROLES {
  ADMIN1 = "admin",
  SELLER1 = "seller",
  CUSTOMER1 = "customer",
}
//Creacion de typado de Usuarios
type User1 = {
  //Caracteristicas del usuario
  username:string; //username se le asigna el tipo de dato string
  //Defincion de rol
  role:ROLES;//El tipado va ser cuando se asigne un rol, tiene que estar dentro de ese conjunto de opciones
}
//Se crea un constante "currentUser" y contendra el tipado de "User" esto quiere decir que debe que tener un username y role
const currentUser: User = {
  username: 'nicobytes',//Asignación de nombre
  role: ROLES.CUSTOMER1//Rol que contendra
}
//Funcion checkAdminRole validación de ROL
const checkAdminRole = () => {
  //Valida si la constante currentUser el rol que se le difinio es admin retornara un true
  if (currentUser.role === ROLES.ADMIN1) {
    return true;
  }
  //En un dado caso que la validación no se cumpla retornara un false
  return false;
}
//Constante que ejecutara la funcion y realizara la validación
const rta = checkAdminRole();
//Impresion de la constante
console.log('checkAdminRole', rta);


//Constante con una validación con parametros por default de su tipo de dato string
const checkRole = (role1: string, role2:string) => {
  if (currentUser.role === role1) {//Valida si la constante currentUser el role es igual que al parametro que esta por default "String"
    //Si la validación es correcta retonra un valor booleano true
    return true;
  }
  //Segunda validacion si en la constante currentUser el rol es igual que el parametro role2 mandara un true
  if (currentUser.role === role2) {
    return true;
  }
  //En un dado caso que no se cumpla ninguna de las condiciones anteriores mandar un false
  return false;
}
//Constante que ejecutara la funcion y realizara la validación de los roles
const rta2 = checkRole(ROLES.ADMIN1, ROLES.SELLER1);
console.log('checkRole', rta2);//Retonra un false ya que al principio se le definio como customer

//Contante checkRoleV2 que cuenta con una funcion con un parametro definido como un string vacio
const checkRoleV2 = (roles: string[]) => {
  //Valida si el array cuenta con un determinado elemento
  if (roles.includes(currentUser.role)) {
    //Si lo encuentra mandara true
    return true;
  }
  //En un dado caso que no lo encuentra retorna false
  return false;
}
//Ejecución de la funcion danado el valor del parametro para la validación si encuentra los roles  ADMIN1 y SELLER1
const rta3 = checkRoleV2([ROLES.ADMIN1, ROLES.SELLER1]);
console.log('checkRoleV2', rta3);//retorna false ya que el valor definifo es CUSTOMER1 = "customer",

//Validacion acertada con n parametros
const checkRoleV3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}
const rta4 = checkRoleV3(ROLES.ADMIN1, ROLES.SELLER1, ROLES.CUSTOMER1);
console.log('checkRoleV2', rta4);
