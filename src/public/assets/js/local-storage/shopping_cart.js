const add_product=(clicked, stock)=>{
    let id = clicked
    const button = document.getElementById(id);

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
}


