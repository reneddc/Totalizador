function porcentaje_descuento(precioNeto) {
    if(precioNeto>=1000 && precioNeto<3000){
        return 0.03;
    }
    if(precioNeto>=3000 && precioNeto<7000){
        return 0.05;
    }
    if(precioNeto>=7000 && precioNeto<10000){
        return 0.07;
    }
    if(precioNeto>=10000 && precioNeto<30000){
        return 0.10;
    }
    if(precioNeto>=30000){
        return 0.15;
    }
    if(precioNeto<1000){
        return 0;
    }
}
export default porcentaje_descuento;