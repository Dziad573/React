var res = 1;
var n = 0;
if(n<0){
    console.log("niepoprawna wartość");
    return 0;
}else{
    while(n>0){
    res = res * n;
    n--;
}
}

console.log(res);
return 0;