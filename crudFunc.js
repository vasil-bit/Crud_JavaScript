import { 
    validacionName as vName,
    validacionEmail as vEmail,
    validacionNumero as vNumber
} from "./validaciones.js"; 

export function guardarUsuario(user){
    const usuarios = JSON.parse(localStorage.getItem("USUARIOS")) || [];

    let nextId = Number(localStorage.getItem("nextUserId")) || 1;

    let newUser ={
        id: nextId,
        ...user
    };

    usuarios.push(newUser);
    console.log(usuarios);
    localStorage.setItem("USUARIOS", JSON.stringify(usuarios));

    nextId++
    localStorage.setItem("nextUserId", nextId);
};

export function leerUsuarios(){
  const usuarios = JSON.parse(localStorage.getItem("USUARIOS")) || [];    
  let array = []
  usuarios.forEach(usuario => {
    array.push(usuario)
    });
    return array
}

export function crearBtn(){
    const btn = document.createElement("button")
    btn.classList.add("btnUser")
    return btn
}

export function crearP(){
    const p = document.createElement("p");
    p.classList.add("pUser");
    return p;
};

export function eliminarUsuario(id){
    const usuarios = JSON.parse(localStorage.getItem("USUARIOS")) || [];
    const nuevo = usuarios.filter(u=> u.id !== id)
    localStorage.setItem("USUARIOS",JSON.stringify(nuevo))
}

export function abrirFormularioUsuario(id, inputName, inputEmail, inputNumber, overlay, setCurrentUserId) {
  const usuarios = JSON.parse(localStorage.getItem("USUARIOS")) || [];
  const user = usuarios.find(u => u.id === id);

  inputName.value = user.name;
  inputEmail.value = user.email;
  inputNumber.value = user.number;
  
  setCurrentUserId(id)

  overlay.style.display = "flex";
}

export function updateUser(id, inputName, inputEmail, inputNumber){
    const usuarios = JSON.parse(localStorage.getItem("USUARIOS")) || [];

    if(!vName(inputName.value) || !vEmail(inputEmail.value) || !vNumber(inputNumber.value)){
        return;
    }
    const nuevos = usuarios.map(u=>{
        if(u.id === id){
            return{
                ...u,
                name: inputName.value,
                email: inputEmail.value,
                number: inputNumber.value
            };
        }
        return u;
    });

    localStorage.setItem("USUARIOS", JSON.stringify(nuevos));
} 
