//TASK 1
const str = "i am nour.";

    function Counter(str){
        var vowels=["a","e","i","o","y"]
        var space =0 ;
        var Vow=0;
        for (var i=0 ; i<str.length ; i++){
if(str[i]==" "){
space++;
}
else if(str[i]=="."){
if(str[i-1]!==" "){
}
else{
break;
}
}
else if(vowels.includes(str[i])){
Vow++;
}
        }
        return {Counter:space,
            numberOfVowels: Vow
        } ;
    }




//TASK 2
    const tab1=[3, 1, 7, 9];
    const tab2=[2, 4, 1, 9, 3]
    
    function Distinct(x,y){
        var sum =0;
        for (var i=0 ; i<x.length ; i++){
if(y.includes(x[i])==false){
                sum=sum+x[i]; 
}
    }
        for (var i=0 ; i<y.length ; i++){
if(x.includes(y[i])==false){
sum=sum+x[i]; 
}
        }
    return sum;
    }

