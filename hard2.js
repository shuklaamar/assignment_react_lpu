function check(obj){
    let ans = [];
    ans=obj.filter(k => {
        var pattern = /^[0-9]*/;
        let flag=0;
        for(let i=0;i<k.length;i++){
            if(pattern == Number(k.charAt(i))) flag=1;
            console.log(k.charAt(i));
            console.log(typeof(Number(k.charAt(i))));
        }
        if(flag==1) return true;
        else return false;
    })
    return ans;
}

let arr = ['qwert1','qwerty','12345'];
console.log(check(arr));