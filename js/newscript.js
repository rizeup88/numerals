var converterArray = [{"1":["I","IV","V","IX"],
                       "2":["X","XL","L","XC"],
                       "3":["C","CD","D","CM"],
                       "4":["M"]}
                     ];

var convertToRoman = function(data) {
  var romanNumeral = [];
  var numArr = data.toString().split('');
  var numLength = numArr.length;
  data.forEach(function(num) {
  for (var i = 0; i<numArr.length; i++) {
    if (numArr[i] < 4) {
      for (var j = 0; j<numArr[i]; j++) {
        romanNumeral.push(converterArray[0][numLength][0]);
      }
    } else if (numArr[i] < 5) {
       for (var j = 3; j<numArr[i]; j++) {
        romanNumeral.push(converterArray[0][numLength][1]);
      }
    } else if (numArr[i] < 9) {
        romanNumeral.push(converterArray[0][numLength][2]);
        for (var j = 5; j<numArr[i]; j++) {
          romanNumeral.push(converterArray[0][numLength][0]);
      }
    } else if (numArr[i] < 10) {
        for (var j = 8; j<numArr[i]; j++) {
          romanNumeral.push(converterArray[0][numLength][3]);
      }
    }
    numLength--;
   }
 })
 return romanNumeral.join('');
}

$(document).ready(function() {
  $("form#numerals").submit(function(event) {
    event.preventDefault();
    var data = parseInt($("#numbers").val());
    var final = convertToRoman(data);
    $("#result").text(final).show()
  })
})