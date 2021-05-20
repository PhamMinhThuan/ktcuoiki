function findOppositeNumber(n, inputNumber){
    if((n%2!=0||(n<=4)||n>=20)){
        console.log("Moi nhap lai n");
    } else if((inputNumber<0)||(inputNumber>(n-1))){
        console.log("Moi nhap lai inputNumber");
    } else {
        if(inputNumber<(n/2)){
            return inputNumber=inputNumber+(n/2);
        } else{
            return inputNumber=inputNumber-(n/2);
        }
    }
}
console.log(findOppositeNumber(10,2));
