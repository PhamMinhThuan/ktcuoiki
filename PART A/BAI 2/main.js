function merge2String(strX, strY){
    let str="";
    // strX.length = strY.length;
    if(strX.length==strY.length){
        for(let i=0;i<strX.length;i=i+1){
            str=str+strX[i]+strY[i];
        }
        return str;
        // strX.length < strY.length;
    } else if(strX.length<strY.length){
        for(let i=0;i<strX.length;i=i+1){
            str=str+strX[i]+strY[i];
        }
        for(let i=strX.length;i<strY.length;i=i+1){
            str=str+strY[i];
        }
    return str;
            // strX.length > strY.length;
    } else{
        for(let i=0;i<strY.length;i=i+1){
            str=str+strX[i]+strY[i];
        }
        for(let i=strY.length;i<strX.length;i=i+1){
            str=str+strX[i];
        }
        return str;
    }
}
merge2String("abc","123");