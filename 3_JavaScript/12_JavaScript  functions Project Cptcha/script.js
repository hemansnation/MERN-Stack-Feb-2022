// declaration of function
function indore(){
    alert("Hello from Indore function");
}

// calling of a function

// indore();
// indore();

// a = "Vishal"
function goa(a){
    console.log("Hello "+ a);
}

goa("Vishal");


// event function

function getName(){
    var x = document.getElementById('userinput').value;

    document.getElementById('one').innerHTML = x;
}


// on change event

function cap() {
    var y = document.getElementById('capital').value;
    var c = y.toUpperCase();

    document.getElementById('capital').value = c;
}