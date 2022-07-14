function mascaraTelefone(event){
    let tecla = event.key;
    let tel = event.target.value.replace(/\D+/g, "");
    
    if(/^[0-9]$/i.test(tecla)){
        tel = tel + tecla;

        let lenTel = tel.length;
        
        if(lenTel >= 12){
            return false;
        }

        if(lenTel > 10){
            tel = tel.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
        }
        else if(lenTel > 5){
            tel = tel.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
        }
        else if(lenTel > 2){
            tel = tel.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
        }
        else{
            tel = tel.replace(/^(\d*)/, "($1)");
        }

        event.target.value = tel;
    }

    if(!["Backspace", "Delete"].includes(tecla)) {
        return false;
    }
}
