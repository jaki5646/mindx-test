let primes = [];
let total = 0;
const btn = document.querySelector('#btn')
const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const input3 = document.querySelector('#input3')
const input4 = document.querySelector('#input4')
const primesDigits = document.querySelector('#primes')
const sum = document.querySelector('#sum')

btn.addEventListener('click',() => {
    loop: for(let i = input1.value; i < input2.value; i++) {
        for(let j = 2; j < i; j++) {
            if(i%j == 0) {
                continue loop;
            }
        }
        primes.push(i)
        }
    input3.innerHTML = input1.value;
    input4.innerHTML = input2.value;
    primesDigits.innerHTML = primes.join()
    for(let i = 0; i < primes.length; i++) {
        total += parseInt(primes[i])
    }
    sum.innerHTML = total;
    }
)