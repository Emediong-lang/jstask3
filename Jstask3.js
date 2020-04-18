function division(digit) {
    let data = [];
    for (var x = 1; x <= digit; x++) {
        if (x % 2 == 0 && x % 3 == 0 && x % 5 == 0) {
            data.push("yu-gi-oh")
        } else if (x % 3 == 0 && x % 5 == 0) {
            data.push("gi-oh");
        } else if (x % 2 == 0 && x % 5 == 0) {
            data.push("yu-oh");
        } else if (x % 2 == 0 && x % 3 == 0) {
            data.push("yu-gi");
        } else if (x % 5 == 0) {
            data.push("oh");
        } else if (x % 3 == 0) {
            data.push("gi");
        } else if (x % 2 == 0) {
            data.push("yu");
        } else {
            data.push(x);
        }    }
    return data
}
console.log(division(100));
