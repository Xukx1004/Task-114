let readlindSync = require('readline-sync');
    
function enterNumber(){
    let num = readlindSync.question('Please input four numbers!\n');
    while(num.toString().length != 4){
        num = readlindSync.question('Please input four numbers! similar to 1234\n');
    }
   
    return num ;
}
 enterNumber();

