//array


var num = [];
var va = [];
var resul = 0
var dis = 0
var ins= 0
var sg= 0
var ig= 0
var ResultadoAcomulado = 0




var Calculadora = (function(num1,num2){
var resultado =0
function actualizarResultado(nuevoResultado){
	resultado= nuevoResultado
}
return {

	sumar: function(num1,num2){

	var resultado = num1 + num2
	actualizarResultado(resultado)
	},
restar: function(num1,num2){

	var resultado = num1 - num2
	actualizarResultado(resultado)
	},

multiplicar: function(num1,num2){

	var resultado = num1 * num2
	actualizarResultado(resultado)
	},

dividir: function(num1,num2){

	var resultado = num1 / num2
	actualizarResultado(resultado)
	},
resultado: function(){
return resultado
}
}})

var cal= Calculadora()


function insertEvent() {
tc= document.getElementsByClassName("tecla")
for(i=0;i < tc.length;i++)
{
tc[i].onclick= function() { cl(this) }
tc[i].onmousedown= function() { reducir(this) }
tc[i].onmouseup= function() { aumentar(this) }
}
}
insertEvent()

function reducir(e){
	e.style.transition = "0.1s";
	e.style.transform = "scale(0.8)"
}

function aumentar(e){
	e.style.transition = "0.1s";
	e.style.transform = "scale(1)"
}



function cl(t){

var ob1=  parseFloat(t.id)
if(ins <= 1){
var ar =  parseFloat(num.join(""))
} else {
ar = ResultadoAcomulado
}
var ar2 =  parseFloat(va.join(""))
vali= Number.isNaN(ob1);

if(vali == false) {
	if(ins == 0){
if( num[0] != 0) {
if(num.length <=7){
	num.push(ob1);
	dis = num.join("")
}
}
else{
num.length=0
}

}  else {
	if( va[0] != 0) {
		if(va.length <=7){
		va.push(ob1);
		dis = va.join("")
		}
	}
	else{
	va.length=0
	}
}

}else{

if(ins < 1 ){

	if ( t.id == "punto") {
	var varl= " "
	for(i=0;i < num.length;i++)
		{
	if(num[i] == '.'){
	varl = 1
	break;
	}else{
	varl = 0
		}
	}
if( (varl == 0) && (num.length != 0)) {
	num.push('.')
	dis = num.join("")
	}
	}

if((t.id == "sign") && ( num.length != 0 )){
if(num[0] == "-" ){
num.splice(0,1)
dis = num.join("")
}else{
num.unshift('-')
dis = num.join("")
}
}



}else{

	if ( t.id == "punto") {
	var varl= " "
	for(i=0;i < va.length;i++)
		{
	if(num[i] == '.'){
	varl = 1
	break;
	}else{
	varl = 0
		}
	}
if( (varl == 0) && (va.length != 0)) {
	va.push('.')
	dis = va.join("")
	}
	}
if((t.id == "sign") && ( va.length != 0 )){
if(va[0] == "-" ){
va.splice(0,1)
dis = va.join("")
}else{
va.unshift('-')
dis = va.join("")
}
}


}

ResultadoAcomulado = calcular(sg);

if(t.id == "dividido"){
dis=document.getElementById('display').innerHTML= " "
sg="dividido"
if(num.length != 0){
ins= ins+1
}


if(!isNaN(ResultadoAcomulado)){
ar= ResultadoAcomulado
va= []
ar2= 0
}


}
if(t.id == "por"){
dis=document.getElementById('display').innerHTML= " "
sg="por"
if(num.length != 0){
ins= ins+1
}


if(!isNaN(ResultadoAcomulado)){
ar= ResultadoAcomulado
va= []
ar2= 0
}

}
if(t.id == "menos"){
dis=document.getElementById('display').innerHTML= " "
sg="menos"
if(num.length != 0){
ins= ins+1
}


if(!isNaN(ResultadoAcomulado)){
ar= ResultadoAcomulado
va= []
ar2= 0
}


}
if(t.id == "mas"){
dis=document.getElementById('display').innerHTML= " "
sg="mas"

if(num.length != 0){
ins= ins+1
}


if(!isNaN(ResultadoAcomulado)){
ar= ResultadoAcomulado
va= []
ar2= 0
}

}

function calcular(estado){
var estado = estado

if(estado == "dividido"){
	cal.dividir(ar,ar2)
resul= cal.resultado()
return resul
}
if(estado == "por"){
cal.multiplicar(ar,ar2)
resul= cal.resultado()
return resul
}

if(estado == "menos"){
cal.restar(ar,ar2)
resul= cal.resultado()
return resul
}

if(estado == "mas"){
cal.sumar(ar,ar2)
resul= cal.resultado()
return resul
}

}

if(t.id == "igual"){
if(!isNaN(ResultadoAcomulado)){
	document.getElementById('display').innerHTML= ResultadoAcomulado
	ig=1
}
	}

}

function pant(){

if(t.id == "on")
{

	document.getElementById('display').innerHTML= "0"

	num.splice(0, num.length)
	va.splice(0, va.length)
	ar= 0
	ar2= 0
	ig= 0
	sg= 0
	ins = 0
	resul = 0
	ResultadoAcomulado= 0
}


if(ig != 1)
{

if(sg == 0){

for(i=0;i < num.length;i++)
{
document.getElementById('display').innerHTML= dis
}

//document.getElementById('display').innerHTML = t.id
}

else {
for(i=0;i < va.length;i++)
	{
	document.getElementById('display').innerHTML= dis
	}


}

}
}
pant()
}
