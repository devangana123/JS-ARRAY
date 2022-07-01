question_list=["which is the capital of India ?","who is prime minister of India ?","which course teach in Navgurukul ?","when was Maharashtra established ?","which is the cleanest city of India ?"]
option=[
    ["Goa","Karnatak","Kerla","New Delhi"],
     ["Ramnath Kovind","Jawaharlal Nehru","Narendra Modi","Atalbihari Vajpei"],
     ["Software Engineering","Agriculture","Science and Technologi","Medical Course"],
     ["1947","1960","1950","1989"],
     ["Indore","jaipur","mumbai","lackhnau"]
 ]
 op50_50=[["1)Goa","4)New Delhi"],["2)Jawaharlal Nehru","3) Narendra Modi"],["1)Softwaere Engineering","3)Science and Technology"],["1947","1960"],["1)lakhnau","2)Indore"]]
 ans_list=[4,3,1,2,1]
 console.log("kon banega karodpati,kbc\nlets start the game")
 var i=0
 var c=0
 var s=10000
 while (i<question_list.length){
     console.log(question_list[i])
     var j=0
     while (j<option[i].length){
         // var k=option[i][j]
         console.log(j+1,option[i][j])
         j++
     }
     l=require("readline-sync")
     life_line=l.question("do you want to use life line:-")
     if (life_line=="yes"){
         // l=require("readline-sync")
         // life_line=l.question("do you want to use life line:-")
         if (c==0){
             var k=0
             while (k<op50_50[i].length){
                 console.log(op50_50[i][k])
                 s+=10000
                 k++
             }
             a=require("readline-sync")
             Ans=a.questionInt("enter your answer:-")
             if(ans_list[i]==Ans){
                 console.log("correct answer")
                 s+=10000
             }
             else{
                 console.log("incorrect option")
                 break
             }
             c+=1

         }else{
             console.log("you can use lifeline only once.")
             a=require("readline-sync")
             Ans=a.questionInt("enter your answer:-")
             if (ans_list[i]==Ans){
                 console.log("corect answer")
             }
             else{
                 console.log("incorrect answer")
                 break
             }
         }

     }else{
         a=require("readline-sync")
         Ans=a.questionInt("enter your answer:-")
         if (ans_list[i]==Ans){
             console.log("your answer is correct,you won",s,"rupees")
             s+=10000
         }
         else{
             console.log("your answer is wrong")
            break
        }
    }

    i++
}






// # // a=require("readline-sync")
// # // n=q.question("enter the number")
// # // console.log()


a=[1,2,5,7,7,4]
b=[4,6,8,9,3,6]
c=a-b
console.log(c)