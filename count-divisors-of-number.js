// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

//solution

function getDivisorsCnt(n){
    x = 0
    for(i = 1; i <= n; i++){
        if(n%i === 0){
            x+= 1
        }
    }
    return x
}