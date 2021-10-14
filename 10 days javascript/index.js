/*var name;
var age;
name = "AVEEN ";
age= 1;

document.write( name+ "is " + age + " year old"); 
part 5 */

/*var num=20;

num=toString(num);

console.log(typeof(num));*/

/*var num = "20";

num = parseInt(num);

document.write(typeof(num));

var number = 2.5686553426;

document.write(number.toPrecision(4));


document.write(Number("12"))
part : 6 end 


//string concatination:

//document.write(" Aveen " + " Ayesha");

var firstName= "Aveen";
var lastName ="Sineen";
var age =2 ;

document.write(firstName + " "+  lastName + ("<br>") + "is " + age+ 
" year old");
document.write(("<br> <br>"));

var num1=50;
var num2=30;

document.write("Num1 = " + num1 +" Num2 = " + num2);
part 7; end


var text= "stockhlm is the capital of sweden";
 var len=text.length;
document.write(len);
   library function for string 
var text = prompt("Enter your favorite country name : " );

document.write(text);


var text = "bangladesh";
document.write(text.charAt(3));

concate 
var text1 = "Sweden";
var text2 = " is a beautiful country";
var text =text1.concat(text2);
document.write(text);


var text="sweden";
 text=text.slice(2, 4);
 document.write(text);
 
 var firstName= prompt("enter your first name: ");
 var lastName= prompt("enter your last name: ");

 var fullName=firstName+ " " +lastName;
 document.write(fullName);
 document.write(("<br> <br>"));
 var fullName1=fullName.length;
 document.write(fullName1);
 document.write(("<br> <br>"));
 document.write(fullName.toUpperCase());

 part:8 end
 

 var num1= prompt("Enter first number : ");
 var num2= prompt("enetr second number : "); 

 num1=parseInt(num1, 10);
 num2=parseInt(num2,10);

 var sum, sub, div, mul, rem; 

 sum=num1 + num2;
 document.write("Addition :- " + sum + "<br>");

 sub = num1 - num2;
 document.write("subtraction:- " +sub+ "<br>");

 div=num1 / num2;
 document.write("Division :- " + div + "<br>");

 mul=num1 * num2;
 document.write("Multification :- " + mul + "<br>");

 rem=num1 % num2;
 document.write("Reminder :- " + rem + "<br>");

 part 10; end 



    var base = parseInt(prompt("Enter Base :- "));
    var height = parseInt(prompt("Enter height :- "));

    var area = base * height;

    document.write("Area : " + area);

    
    var farn= parseFloat(prompt("Enter your farenhet :- "));
    var cels = (farn-32) * (5/9);

    document.write("Celsius:= " + cels);

        part 12 end ;
   
    relational operator and logical operator

    
    var grade= prompt("please enter your marks:= ");

    document.write(typeof(grade));
    if(grade => 80){
    document.write("Hurray u have got A+:  " + grade)
    }
   else if(grade => 70){
    document.write("Hurray u have got A:  " + grade )
    }
   else if(grade => 60){
    document.write("Hurray u have got B " )
    }
    
    else{
    document.write("C :- ")
    }
    part 13 end 
     

     letter grade program 
    
    var marks = prompt("Enter your marks : ");

    if(marks>100)
    document.write("invalid code");

    if(marks >=80 && marks <=100)
    document.write("A+");
     else if(marks >=70 && marks <=79)
    document.write("A");
     else if(marks >=60)
    document.write("A-");
     else if(marks >=50)
    document.write("B");
    else if(marks >=40)
    document.write("B-");
    else 
    document.write("Fail+");

    program using logical operator 

    digit spelling


      var digit = prompt("Enter your digit: ");

      switch(digit){
         case "0":
            document.write("zero");
            break;
            case "1":
            document.write("one");
            break;
            case "2":
            document.write("two");
            break;
            case "3":
            document.write("three");
            break;
            case "4":
            document.write("four");
            break;
            case "5":
            document.write("six");
            break;
            case "6":
            document.write("seven");
            break;

            default:
            document.write("not a valid diogit");
      }
     
     var letter=prompt("Enter any letter : ");
     letter = letter.toLocaleLowerCase();

     switch(letter){
        case "a":
           document.write("vowel");
           break;
           
        case "e":
           document.write("vowel");
           break;
        case "i":
           document.write("vowel");
           break;
        case "o":
           document.write("vowel");
           break;
        case "u":
           document.write("vowel");
           break;
           default:
              document.write("consonant");

     }
    
    var letter=prompt("Enter any letter : ");
     letter = letter.toLocaleLowerCase();

     switch(letter){
         case "a":
         case "e":
         case "i":  
         case "o":
         case "u":
         document.write("vowel");  
           default:
              document.write("consonant");



      for ( var x=2; x<=10; x=x+2){
         document.write(" " + x);
      }
      

      didnt work
      function sweden(bd){
         alert(bd);
   }
      sweden(cd);


   for(i=1; i<=30; i++){
      if(i==10){
         break;
      }
      document.write(", " +i);
   }

Ternary operator

var number = Number(prompt("enter your number "));
if(number>0){
   document.write("positive")
}
   else{
      document.write("negative");
   }
  
  var number = Number(prompt("enter your number "));
 var result = number > 0 ? "positive" : "negative"
   document.write(result);

   part 23  
   
    var number = Number(prompt("enter your number "));
    var result = number>0 ? "positive" : number<0 ? "negative" : "zero";
    document.write(result);
     function 24
    
      function sqaure(num1,num2) {
         
         var result = num1 * num2;
         document.write(" Result = " + result + "<br>");

      }
      sqaure(5,2);
      aRRAY LIST
     
     var name1, name2, name3, name4;
     name1 ="Mohona";
     name2 ="Kohona";
     name3 ="cohona";
     name4 ="dohona";
     document.write(name3);

     var names= new Array();
     names[0] = "Mohona";
     names[1] = "Kohona";
     names[2] = "Cohona";
     names[3] = "dohona";

     document.write(("<br> <br>"));
     document.write(names[0]);
     document.write(("<br> <br>"));
     document.write(names[2]);
     document.write(("<br> <br>"));
     document.write(names[3]);
     document.write(("<br> <br>"));
     document.write( " " + names);
     document.write(("<br> <br>"));
     document.write( " length : " + names.length);
      

     var name = ["Mohona", "Kohona", "Hohona"];

     document.write(name.length);

     name.pop("Sirin");

     document.write(name.length);

     push pop fungerar ej alls 

     25 end pop push array 
     

     var country1  =[ " bangladesh", "Sweden", "Modina"];
     var country2  =[ " Soudi arabia", "dubai", "turkey"];

     var country=country1.concat(country2);
     document.write(country);
    
     loop array part 26
         var num = [10,20,30,40,50];

         document.write(num[0]);
         document.write(num[1]);
         document.write(num[2]);
         document.write(num[3]);
         document.write(num[4]);
         
         fungade ej  
         var num = [10,20,30,40,50];
         var sum =0;

         for (var i  = 0; i<=5; i++){
            
            sum = sum + num[i];
         }
         document.write(" sum := " +sum);
        
 

         var names = ["Mohona", "Kohona", "Aveen", " kaniz"];
         document.write(names);
       
       
         names.unshift();

                 

         const num = [1,2,3,4];

         const moh=num.shift();

         document.write(moh);
         
        var names= ["mohona", "kohona", " malek", "sirin"];
        console.log(names);
    
         
        name ="mohona";
        age =22;
        gpa= 4.59;
        var lang= ["bangla", "swedish", "english"];
        document.write(age);

        var student1 = {
           name: "mohona",
           age : 21,
           gpa : ["bangla", "swedish", "english"]

        }
       
       var num = [10,20,30,40,50];
         var sum =0;

         for (var i  = 0; i<=5; i++){
            
            sum = sum + num[i];
         }
         document.write(" sum := " +sum);
 */
         









  
    








