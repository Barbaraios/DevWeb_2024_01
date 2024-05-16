let matrix1=[
    [1,2,3],
    [4,5,6],
]
 console.log('Antes:');
 console.log(matrix1);

 //alternando o valor do arry
 console.clear();
 matrix1[0][2]=-10; 
 console.log('Depois')
 console.log('matrix1')



 console.clear();
 let numArry=[1,2,3,4];
 console.log (typeof numArry);

 let numArry2=numArry.toString();
 console.log(typeof numArry2)



 console.clear();
 let teste1=[0,1,2,3,4,5];
 let teste2=teste1.join('***');

 console.log(teste2);
 console.log(typeof teste2);



 console.clear();
 let arry=[0,1,2,3,4];
 console.log(arry.length)



 console.clear();
 const frutas2=['Banana','Laranja','Maçã','Manga'];
 let y=frutas2.push('Kiwi');
 console.log(frutas2);
 console.log(y);


 console.clear();
 const frutas3=['Banana','Laranja'];
 let z= frutas3.shift(); //z=Banana
 console.log(frutas3);
 console.log(z);


 console.clear();
 const frutas4=['Banana','Laranja'];
 let w= frutas4.shift(); //z=Banana
 console.log(frutas4);
 console.log(w);


 console.clear();
 const frutas5=['Banana','Laranja','Maçã','Manga'];
 delete frutas5[2];
 console.log(frutas5);




console.clear();
 function addNums(num1=1, num2=1){
    return num1+num2;
 }

 //chamada a função addNums
 let x= addNums(4,5);
 console.log(x);

 
 function myFunc(num1=4, num2=5){
    return num1*num2;
 }

 //chamada a função myFunc
 let r = myFunc(5,4);
 console.log(x);











 