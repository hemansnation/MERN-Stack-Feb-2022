let x = "Hello from main module";

function calculator(a, b) {
    let z = a + b;
    return z;
}

exports default {x, calculator};

// module.export  = {x, calculator};