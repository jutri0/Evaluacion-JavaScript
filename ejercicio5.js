let vector1=[1,2,3];
let vector2=[3,2,1];

function suma(vector1,vector2){
    let operacion= (vector1.length+vector2.length);
    return operacion;
}

function suma2(vector1,vector2){
    let operacion1= (vector1[0]+vector2[1]);
    return operacion1;
}

console.log('Suma elementos dentro de array'+suma(vector1,vector2));
suma2(vector1,vector2);