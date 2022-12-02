/* const add_product=(clicked, stock)=>{
    let id = clicked

    if(parseInt(localStorage.getItem(id))>=(stock-1)){
        document.getElementById(id).disabled= true;
    }
    if(localStorage.getItem(id)){
        let restore_product = (localStorage.getItem(id));
        let cont = parseInt(restore_product)+1;
        localStorage.removeItem(id);
        localStorage.setItem(id, cont);
    }else{
        localStorage.setItem(id,1)
    }
} */
const add_product=(clicked, stock)=>{
    let id = clicked

    if(parseInt(getCookie(id))>=(stock-1)){
        document.getElementById(id).disabled= true;
    }
    if(getCookie(id)){
        var d = new Date();
        d.setTime(d.getTime() + (1*24*60*60*1000));
        var expires = "expires=" + d.toGMTString();
        var restore_product= getCookie(id)
        let cont = parseInt(restore_product)+1;
        document.cookie = id + "=" + cont + ";" + expires + ";path=/";
    }else{
        var d = new Date();
        d.setTime(d.getTime() + (1*24*60*60*1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = id + "=" + "1;" + expires + ";path=/";
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




