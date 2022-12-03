const add_product=(clicked, stock)=>{
    let id = clicked
    let cookie_car = getCookie("car");

    if(cookie_car){
        let shopping_car = JSON.parse(cookie_car);

        if(id in shopping_car){
            if(parseInt(shopping_car[id].quantity)>=(stock-1)){
                document.getElementById(id).disabled= true;
            }

            console.log("Aumenta cantidad");
            shopping_car[id].quantity = parseInt(shopping_car[id].quantity)+1;
            setCookie("car", JSON.stringify(shopping_car), 1);
            
        }else{
            console.log("Nuevo articulo");
            shopping_car[id] =  {
                quantity: 1
            }
            setCookie("car", JSON.stringify(shopping_car), 1);
        }
        
        var restore_product= getCookie(id)
        let cont = parseInt(restore_product)+1;
        //document.cookie = id + "=" + cont + ";" + expires + ";path=/";
    }else{
        var d = new Date();
        d.setTime(d.getTime() + (1*24*60*60*1000));
        var expires = "expires=" + d.toGMTString();
        let shopping_car = {}
        shopping_car[id] = {
                quantity: 1
            }
        setCookie("car", JSON.stringify(shopping_car), 1);
    }
}

function getCookie(name) {
    var cname = name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++){
        var c = ca[i];
        while(c.charAt(0) == ' '){
            c = c.substring(1);
        }
        if(c.indexOf(cname) == 0){
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}

function setCookie(name,value,exp_days) {
    var d = new Date();
    d.setTime(d.getTime() + (exp_days*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}




