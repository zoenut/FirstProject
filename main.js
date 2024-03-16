
function towerOfHanoi(n, start,  inter,  des) 
    { 
        if (n == 0) 
        { 
            return; 
        } 
        towerOfHanoi(n - 1, start, inter, des); 
        console.log("Move disk " + n + " from rod " + start + 
        " to rod " + inter);
        towerOfHanoi(n - 1, start, inter, des); 
    } 
  
    let N = 4; 
      
    // A, B and C are names of rods 
    towerOfHanoi(N, 'A', 'C', 'B');  

function fact(num){
    if(num===0){
        return 1;
    }
        return num * fact(num-1)
}

console.log(fact(5))

function fib(n1){
    if(n1<2){
        return 1;
    }

    return fib(n1-1) + fib(n1-2);
 
}

console.log(fib(5));