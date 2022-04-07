// captcha generator
function captchaGenerator() {
    var alpha = new Array('A', 'B','C','D','E','F','G','H', 'a','b','c','d','e','f','g','h');
    
    var a = alpha[Math.floor(Math.random() * alpha.length)];
    var b = alpha[Math.floor(Math.random() * alpha.length)];
    var c = alpha[Math.floor(Math.random() * alpha.length)];
    var d = alpha[Math.floor(Math.random() * alpha.length)];
    var e = alpha[Math.floor(Math.random() * alpha.length)];
    var f = alpha[Math.floor(Math.random() * alpha.length)];
    
    var result = a +" "+ b +" "+ c +" "+ d +" "+ e +" "+ f ;
    
    document.getElementById('mainCaptcha').value = result;

}

// isvalid

function isValid(){
    var one = removeSpaces(document.getElementById('mainCaptcha').value);
    var two = removeSpaces(document.getElementById('inputCaptcha').value);

    if (one == two){
        return true;
    } else{
        return false;
    }
}


// remove spaces

function removeSpaces(string){
    var x = string.split(" "); // return array
    var s = x.join("");  // return string

    return s
    // console.log( string.split(" ").join("") );
}
// console.log(removeSpaces("i am the best"));









//                     0    1   2   3
    // alpha[0] -> 'A'

    // console.log(alpha.length);
    // console.log(alpha[16]);

    // console.log(Math.random());

    // console.log(Math.floor(Math.random() * alpha.length));
    // console.log(alpha[Math.floor(Math.random() * alpha.length)]);
    