var convertToRoman = function(num) {
  var romanNumerals = [];
  	var roman = [{"1":["I", "IV", "V", "IX"],
  				  "2":["X", "XL", "L", "XC"],
  				  "3":["C", "CD", "D", "CM"],
  				  "4":["M"]}];
  	var numArray = num.toString().split('');
  	var numLength = numArray.length;

  	for (var i = 0; i < numArray.length; i++) {
    	if (numArray[i] < 4) {
      		for (var j = 0; j < numArray[i]; j++) {
        		romanNumerals.push(roman[0][numLength][0]);
        	}
        } else if (numArray[i] < 5) {
       		for (var j = 3; j < numArray[i]; j++) {
        		romanNumerals.push(roman[0][numLength][1]);
      		}
    	} else if (numArray[i] < 9) {
        		romanNumerals.push(roman[0][numLength][2]);
        	for (var j = 5; j < numArray[i]; j++) {
          		romanNumerals.push(roman[0][numLength][0]);
      		}
    	} else if (numArray[i] < 10) {
        	for (var j = 8; j < numArray[i]; j++) {
          		romanNumerals.push(roman[0][numLength][3]);
      		}
    	}
    numLength--;
   }

 return romanNumerals.join('');
}


 $(document).ready(function() {
   $("form#numerals").submit(function(event) {
     event.preventDefault();
     var num = $("input#numbers").val();
     var final = convertToRoman(num);
     $("#result").text(final).show()
 })
})