
var q=require('readline-sync')
var num=q.question("enter the number")
i=1

while (i<=num){
     c=0
     j=1
     while (j<=i){
        if (i%j==0){
        	c=c+1
        	}
        j=j+1
        }
    if (c==2){
         console.log(i,"prime") 
         }       
    i=i+1  
}

