function replac(str){
    const a = ['1','2','3','4','5'];
    let str_return = '';
    for(let i=0;i<str.length;i++){
        if(str.charAt(i) == 'a'){
            str_return+=a[0];
        }
        else if(str.charAt(i) == 'e'){
            str_return+=a[1];
        }
        else if(str.charAt(i) == 'i'){
            str_return+=a[2];
        }
        else if(str.charAt(i) == 'o'){
            str_return+=a[3];
        }
        else if(str.charAt(i) == 'u'){
            str_return+=a[4];
        }
        else{
            str_return+=str.charAt(i);
        }
    }
    return str_return;
}

console.log(replac('amarwwe'));