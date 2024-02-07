// const isValid = function(s){
//     const stack = [];
//     const obj = {
//         '(' : ')',
//         '{' : '}',
//         '[' : ']',
//     }
//     for(let char of s){
//         if(char in obj){
//             stack.push(char);
//         }else{
//             const top = stack.pop();
//             if(char!==obj[top]){
//                 return false;
//             }
//         }
//     }
//     return stack.length===0;
// }

// console.log(isValid(')('));
// console.log(isValid('[]'));


const isValid = function(s){

    let stack =[];
    const obj = {
        '[' : ']',
        '{' : '}',
        '(' : ')'
    }
    for(let char of s){
        if(char in obj){
            stack.push(char);
        }else{
            const top = stack.pop();
            if(char!==obj[top]){
                return false;
            }
        }
    }
    return stack.length === 0;

}

console.log(isValid('()'));