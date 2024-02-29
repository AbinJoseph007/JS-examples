let n = 5; // number of rows
let pattern = '';


for(let i = n - 2; i >= 0; i--) {
    for(let j = 0; j < n - i; j++) {
        pattern += '  ';
    }
    for(let k = 0; k < (2 * i + 1); k++) {
        pattern += '* ';
    }
    pattern += '\n';
}
for(let i = 1; i < n; i++) {
    for(let j = 0; j < n - i; j++) {
        pattern += '  ';
    }
    for(let k = 0; k < (2 * i + 1); k++) {
        pattern += '* ';
    }
    pattern += '\n';
}


console.log(pattern);
