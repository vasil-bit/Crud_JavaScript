import {
  validacionName as vName,
  validacionEmail as vEmail,
  validacionNumero as vNumero,
} from "./validaciones.js";
import {
  guardarUsuario,
  leerUsuarios,
  crearP,
  crearBtn,
  eliminarUsuario,
  abrirFormularioUsuario as openUpdate,
  updateUser
} from "./crudFunc.js";

const name = document.getElementById("name");
const number = document.getElementById("number");
const email = document.getElementById("email");
const form = document.getElementById("form");
const divPadre = document.getElementById("div-padre");
const inputName = document.getElementById("inputName");
const inputEmail = document.getElementById("inputEmail"); 
const inputNumber = document.getElementById("inputNumber");
const overlay = document.getElementById("formularioInput");
let currentUserId = null;

function setCurrentUserId(id) {
    currentUserId = id;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const na = name.value.trim();
  const ema = email.value.trim();
  const num = number.value.trim();
  if(vName(na) && vEmail(ema) && vNumero(num)){
    const user = {
      name: na,
      email: ema,
      number: num,
    };
    guardarUsuario(user)
  };
});

const USUARIOS = leerUsuarios();

for (let i = 0; i < USUARIOS.length; i++) {
  const element = USUARIOS[i];
  console.log(USUARIOS[i]);
  
  const p1 = crearP();
  p1.textContent = element.name
  const p2 = crearP();
  p2.textContent = element.email
  const p3 = crearP();
  p3.textContent = element.number
  const btnDelete = crearBtn()
  btnDelete.textContent = "Delete"

  btnDelete.dataset.userId= element.id

  btnDelete.addEventListener("click", ()=>{
    eliminarUsuario(element.id)
  }); 

  const btnUpdate = crearBtn()
  btnUpdate.textContent = "Update"

  btnUpdate.dataset.userId= element.id
  
  btnUpdate.addEventListener("click", () => {
    openUpdate(
      element.id,
      inputName,
      inputEmail,
      inputNumber,
      overlay,
      setCurrentUserId
    );
});
  const todo = document.createElement("div")
  todo.append(p1,p2,p3,btnDelete,btnUpdate)
  divPadre.append(todo)
}

function cerrarUpdate(){
  overlay.style.display = "none";
}
window.cerrarUpdate = cerrarUpdate;
window.updateUser = () =>{
  updateUser(currentUserId, inputName, inputEmail, inputNumber);
  overlay.style.display = "none";
}