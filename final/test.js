let checker = false;
let primes = []

function aaaaa(a, b) {
    loop: for(let i = a; i < b; i++) {
        for(let j = 2; j < i; j++) {
            if(i%j == 0) {
                checker = true;
                continue loop;
            }
        }
        primes.push(i)
}}
aaaaa(12, 50)
console.log(primes)