// Write your cade below:
//let random =  require('./getRandom.js');
// let fourNum = require('./enterNumber.js');
// let a = fourNum.toString();
// console.log(typeof random);
// let random = getRandom(2,10);
// function main() {
//   console.log('******猜数字游戏开始!******')
//   getRandom(10,100);
//   enterNumber();

//  }
//  module.exports = {
//    main
// }

//输入四个随机整数
let readlindSync = require('readline-sync');
function enterFourNum() {
  let num = readlindSync.question('Enter 4-digit integers, similar to 1234\n');
  while(num.toString().length !== 4){
      num = readlindSync.question('Please re-enter, enter a 4-digit integer, similar to 1234\n');
  }
  return num ;
}


//产生不重复的随机数
function randomString(min,max){
  let Range = max - min;   
  let Rand = Math.random();   
  let num = (Min + Math.round(Rand * Range))
    random= num.toString();
    for(let index = 0;index <= 3 ;index ++){
        i f(random.indexOf(num) === -1){
            random = randomString();//生成随机字符串
        }
    }
    return random;
}

//比较用户输入与产生的随机数
function compare(inputNum,random){
  let result = {
      'A':0,
      'B':0
  }
  let inputNumLength = inputNum.length;
  for(let index = 0;index < inputNumLength;index++){
      let value = inputNum[index];
      if(random.indexOf(value) !== -1){
          if(random.indexOf(value) === index){
              result['A']++;
          }else{
              result['B']++;
          }
      }
  }
  let resultString = `${result['A']}A${result['B']}B`;
  return resultString ;
}

//主函数
function main(){
    console.log('1.play\t2.exit');
    let choice = readlindSync.question();
    if(choice === '1'){
        randomString();
        console.log("******随机数已生成******")
        enterFourNum() ;//数字字符
        let result = compare(inputNum,random);
        while(result !== '4A0B'){
            console.log("------------------")
            console.log(result);
            console.log('不对哦！加油哦！');
            
        }
        console.log("YOU WIN！");
    }else{
        console.log('GAME OVER!');
    }
}





//比较用户输入与产生的随机数
function compare(inputNum,random){
    let result = {
        'A':0,
        'B':0
    }
    let inputNumLength = inputNum.length;
    for(let index = 0;index < inputNumLength;index++){
        let value = inputNum[index];
        if(random.indexOf(value) !== -1){
            if(random.indexOf(value) === index){
                result['A']++;
            }else{
                result['B']++;
            }
        }
    }
    let resultString = `${result['A']}A${result['B']}B`;
    return resultString ;
}
module.exports = {
    compare
  }