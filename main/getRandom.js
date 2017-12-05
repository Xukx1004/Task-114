// function getRandom(n){//获取随机数
//     let array = new Array(n)
//     .fill(0)
//     .map((v,i)=>i+1)
//     .sort(()=>0.5 - Math.random())
//     .filter((v,i)=>i<4);
//     console.log(array);
//     return array;
//     }
 
// getRandom(100);
// module.expors = getRandom;

function getRandom(Min,Max)
{  
    let array = [] ;
    while(array.length <=3 ){
        let Range = Max - Min;   
        let Rand = Math.random();   
        let num = (Min + Math.round(Rand * Range)); 
        if(array.indexOf(num) === -1){
            array.push(num);
        }
        
} 
//console.log(array);
return array;
}   
getRandom(5,10);
//module.exports = getRandom;