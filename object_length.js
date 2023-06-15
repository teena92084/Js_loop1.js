//bird={"name":"teena","age":"22","color":"black"}
//console.log(Object.keys(bird).length)

//console.log(Object.values(bird).length)


// both will work 





// take n as 2 and tell the output
let n=require("readline-sync");
let num=parseInt(n.question("enter number: "));
for (let i=1;i<=10;i++) {
       multi=num*i;
       console.log(num + " *" + i + "=" + multi)
  }
