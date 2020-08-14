function ans(arr){
    let flag=0;
    for(let i=0;i<=3;i++){
        if(arr[i]!=arr[i+1]) flag++;
    }
    if(flag==0) return true;
    else return false;
}

const ar = ['ama','ama','anm3','ama'];
console.log(ans(ar));