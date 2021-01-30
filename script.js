function zapisZakladniCenu() {
	var typ = parseInt(document.getElementById("krmivo").value);
	var kg = parseInt(document.getElementById("kg").value);
	var celkem = typ * kg;
	document.getElementById("zakladni").value = celkem;
}

function zapisVyslednouCenu() {
	var zakladni = parseInt(document.getElementById("zakladni").value);
	var vysledna = zakladni;
	if (document.getElementById("bio").checked)
		vysledna += zakladni * 0.3; 
	if (document.getElementById("premium").checked)
		vysledna += zakladni * 0.5;
	if (document.getElementById("nekvalita").checked)
		vysledna -= zakladni * 0.15;
	if (document.getElementById("darek").checked)
		vysledna += 500;
	if (document.getElementById("kuryr").checked)
		vysledna *= 1.1; 
	if (document.getElementById("posta").checked)
		vysledna += 250;
	document.getElementById("celkem").value = vysledna.toFixed(2);
}

function spocitej() {
	var vysledna = parseInt(document.getElementById("celkem").value);
	var utrata = parseInt(document.getElementById("kUtrate").value);
	if (vysledna == "0" || "")
		alert ("Nemáte vybráno");
	if (utrata == "0" || "")
		alert ("Nezadali jste čásku k úhradě");
	if (vysledna <= utrata)
		document.getElementById("vyjde").innerHTML = "Muzete si nakup dovolit."; 
	else
		document.getElementById("vyjde").innerHTML = "Nakup si bohuzel nemuzete dovolit.";
}

/*kontrola nepovolených znaků
VARIANTA 1*/
var charCodeZero = "0".charCodeAt(0);
var charCodeNine = "9".charCodeAt(0);
var charCodea = "a".charCodeAt(0);
var charCodez = "z".charCodeAt(0);
var charCodeA = "A".charCodeAt(0);
var charCodeZ = "Z".charCodeAt(0);

function check_numbers(value) {
	c = value.charCodeAt(value.length - 1);
	return (c >= charCodeZero && c <= charCodeNine);
}

function check_letters(value) {
	c = value.charCodeAt(value.length - 1);
	return ((c >= charCodeA && c <= charCodeZ) || (c >= charCodea && c <= charCodez))
}

function kontrola(ref) {
	val = ref.value;
	result = false;
	result = check_letters(val) || check_numbers(val);
	
	if (!result) {
		ref.value = ref.value.substring(0, ref.value.length - 1);
	}}

/* VARIANTA 2 - regulární výraz
function kontrola(char) {
	var regex = /^[A-Za-z0-9 ]+$/;
    var isValid = regex.test(document.getElementById("email").value);
    if (!isValid) {
		char.value = char.value.substring(0, char.value.length - 1);
	}
    return isValid;
}*/

/*VARIANTA 3
function kontrola()			/*volání bez parametrů, keypress
    {
      with (event)
      {
        c1=(keyCode>32 && keyCode<48);
        c2=(keyCode>57 && keyCode<65);
        c3=(keyCode>90 && keyCode<97);
        c4=(keyCode>122 && keyCode<127);
        if (c1 || c2 || c3 || c4) returnValue=false;
	  }
    }*/