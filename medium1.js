function specialreverse(str,ch){
    let str_reverse = '';
    for(let i=0;i<str.length;i++){
        if(str.charAt(i) == ch ){
            let count = 0;
            let stop = i;
            for(let j=i;str.charAt(j)!=' '&& j<str.length;j++) count++;
            for(let j=stop+count;j>=stop;j--){
                str_reverse+=str.charAt(j);
            }
            i=stop+count-1;
        }
        else{
            str_reverse+=str.charAt(i);
        }
    }
    return str_reverse;
}


console.log(specialreverse('first man to walk on the moon','m'));