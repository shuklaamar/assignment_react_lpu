function ans(obj){
    let return_array=[];
   for(i=0;i<obj.length;i++)
   {
    dummy =  obj[i].split("") ;
        for(j = 0; j< dummy.length;j++)
            {
                if(dummy[j] >="0" && dummy[j]<="9")
                {
                    return_array.push(dummy.join(""));
                    break;
                }
                

            }
   }
   return console.log(return_array);
}
ans(["sdfga1","asdfgh3","sdfghb","sdfgh","hrfgh"]);
