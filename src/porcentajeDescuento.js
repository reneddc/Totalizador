function porcentaje_descuento(precioNeto) {
    if(precioNeto>=1000 && precioNeto<3000){
        return 3;
    }
    if(precioNeto>=3000 && precioNeto<7000){
        return 5;
    }
    if(precioNeto>=7000 && precioNeto<10000){
        return 7;
    }
    if(precioNeto>=10000 && precioNeto<30000){
        return 10;
    }
    if(precioNeto>=30000){
        return 15;
    }
    if(precioNeto<1000){
        return 0;
    }
}
export default porcentaje_descuento;