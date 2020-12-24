function calc(x, y, type){
    if(type=="+"){
        return add(x,y);
    }
    else if(type=="-"){
        return sub(x,y);
    }
    else if(type=="*"){
        return mult(x,y);
    }
    else if(type=="/"){
        return div(x,y);
    }
    else if(type=="sqrt"){
        return sqrt(x,y);
    }
    
}
function add(x, y) {
    return x + y;
}
function sub(x, y) {
    return x - y;
}
function mult(x, y) {
    return x * y;
}
function div(x, y) {
    return x / y;
}
function sqrt(x,y) {
    return Math.sqrt(x + y);
}
module.exports = {
    calc
}