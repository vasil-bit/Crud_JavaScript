export function validacionName(name){
    if(!name.trim()) {
        const  msg1 = "Nombre no asignado"; 
        alert(msg1)
        return false
    };        
    if(typeof name === "string" && !/\d/.test(name)){
        return true
    }
    const msg2 = "El nombre no es String o Contiene numeros"; 
    alert(msg2)
    return false
}
export function validacionEmail(email){
    if(!email) {
        const msg1 = "Email no asignado"; 
        alert(msg1)
        return false
    };  
    const emailTrim = email.trim();
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;      
    if(!patron.test(emailTrim)){
        const msg2 = "Formato de correo invalido";
        alert(msg2);
        return false
    }
    return true
}
export function validacionNumero(num){
    if(!num){
        const msg1 = "Numero no asignado"
        alert(msg1)
        return false
    }
    if(!/^\d{10}$/.test(num)){
        const msg3 = "Tienen que ser 10 digitos"
        alert(msg3)
        return false
    }
    return true    
}