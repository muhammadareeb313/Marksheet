document.write("Student Mark Sheet."+"<br/>")
var m = +prompt("Enter Your Math Marks ");
if(m>=50 && m<=100){document.write("Math Marks:"+ m +' '+"Pass"+ "<br/>")}
else if(m<=50){document.write("Math Marks:"+ m +' '+"fail" +"<br/>")}
else{document.write("beta number dalo"+ "<br/>")}

var e = +prompt("Enter Your English Marks");
if(e>=50 && e<=100){document.write("English Marks:"+ e +' '+"Pass"+ "<br/>")}
else if(e<=50){document.write("English Marks:"+ e +' '+"fail" +"<br/>")}
else{document.write("beta number dalo"+ "<br/>")}

var u = +prompt("Enter Your Urdu Marks")
if(u>=50 && u<=100){document.write("Urdu Marks:"+ u +' '+"Pass"+ "<br/>")}
else if (u<=50){document.write("Urdu Marks:"+ u +' '+"fail"+"<br/>") }
else{document.write("beta number dalo"+ "<br/>")}

var c = +prompt("Enter Your Chemistry Marks")
if(c>=50 && c<=100){document.write("Chemisry Marks:"+ c +' '+"Pass" + "<br/>")}
else if(c<=50){document.write("Chemisry Marks:"+ c +' '+"fail"+"<br/>")}
else{document.write("beta number dalo" +"<br/>")}

var p = +prompt("Enter Your Physics Marks")
if(p>=50 && p<=100){document.write("Physics Marks:"+ p + ' '+"Pass" +"<br/>")}
else if(p<=50){document.write("Physics Marks:"+ p +' '+"fail"+"<br/>")}
else{document.write("beta number dalo" + "<br/>")}

var z = m+e+u+c+p;
document.write("Obtained Marks out of 500:"+ z +"<br/>")



var percentage = (z/500)*100;
document.write("percentage:"+percentage +"<br/>");
if(percentage>= 80 && percentage<=100 ){
    document.write('   Grade A')
}
else if(percentage>=60 && percentage<80){
    document.write('   Grade B')
}
else if(percentage >=50 && percentage<60){
    document.write('   Grade C')
}
else{
    document.write('   Grade Fail')
}

