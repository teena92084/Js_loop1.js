a=require('readline-sync')
num=a.question("entet the how many input you want ")
i=1
s=0
while (i<=num){
	t=require('readline-sync')
	value=t.questionInt("entet the how many input you want ")
	
	s=s+value
	i=i+1
	console.log(s)
	
}




