function count1(ch,str){
        let count = 0;
        for(let i=0;i<str.length;i++){
                if(ch == str.charAt(i)) count++;
        }
        return count;
}

console.log(count1('a','Amar'));