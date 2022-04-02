// captcha generator
function captchaGenerator() {
    var alpha = new Array('A', 'B','C','D','E','F','G','H', 'a','b','c','d','e','f','g','h');
    //                     0    1   2   3
    // alpha[0] -> 'A'

    // console.log(alpha.length);
    // console.log(alpha[16]);

    // console.log(Math.random());

    console.log(Math.floor(Math.random() * alpha.length));
    console.log(alpha[Math.floor(Math.random() * alpha.length)]);
    



}
captchaGenerator();


// isvalid


// remove spaces