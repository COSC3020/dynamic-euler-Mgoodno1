function factorial(n) {
    if(n === 0) return 1;
    else return n * factorial(n - 1);
}

function e(n) {
    let eApprox = 1;
    let factorial = 1;
    
    for (let i = 1; i <= n; i++) {
        factorial *= i;
        eApprox += 1 / factorial;
    }
    return eApprox;
}
