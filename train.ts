// MITASK - Z

function sumEvens(arr: number[]): number {
    let sum: number = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }

    return sum;
}

console.log(sumEvens([1, 2, 3])); // 2
console.log(sumEvens([2, 4, 6])); // 12
