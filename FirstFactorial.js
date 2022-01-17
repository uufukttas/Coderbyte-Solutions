function FirstFactorial(num) {
    return num !== 1 ? num * FirstFactorial(num - 1) : num
}

FirstFactorial(8)