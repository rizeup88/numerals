# Roman Numeral Converter

#### This page is designed to convert normal numbers/integers into Roman numerals,  Updated as of August 26, 2019

#### By Chase J. Smith

## Description

This page provides a way for users to enter in a number between 1 and 3,999, and will automatically convert that number into the proper Roman numerals that correspond to that number.

## Specifications

A small entry bar that is presented to a user, which allows them to enter an integer or number between 1 and 9. Anything entered as a string of text will not be converted, including numbers written in text form.

When you enter in numbers, you can enter in up to four. As numbers are entered, they are broken down into individual strings, which will be evaluated to determine the correct Roman numeral (and amount of that numeral) to apply.

As you enter your number, the program will use the following values displayed below, and return the proper characters corresponding to the value of those symbols when added together:

* I = 1
* IV = 4
* V = 5
* IX = 9
* X = 10
* XL = 40
* L = 50
* XC = 90
* C = 100
* CD = 400
* D = 500
* CM = 900
* M = 1000

To insure proper results, the following conditions must be met:

More than three of the same character cannot be entered in a row. When this happens, you will switch over to subtracting one from the next higher numeral...

* Ex. When typing 4, instead of seeing "IIII," the value will display as "IV."

When entering in four integers, no more than four of the same integer may be entered in a row...

* Ex. When entering in 40 as an integer, instead of seeing XXXX, the numerals displayed will switch to XL (refer to previous example regarding next higher numeral subtraction).

Given that Roman numerals only go up to 1,000 in value (M = 1,000), the highest integer value that can be entered with Roman numerals returned is 3,999.

To accomplish this, each set of numerals will be generated using the following array grid:

* ["1":["I", "IV", "V", "IX"]
*  "2":["X", "XL", "L", "XC"]
*  "3":["C", "CD", "D", "CM"]
*  "4":["M"]}]

Using this grid, for each number entered in the following results will be created...

* For every number detected that is less than 4 in the array created, Roman numerals will be pushed out from the first array specified, and will come from the first position specified, depending on the number entered.

* For any number less than 5 in the array (this can only be 4), the numeral specified in the first array in the second position will be pushed out in its place.

* For any number less than 9 in the array, the numeral specified in the first array in the third position will be pushed out, along with additional numerals from the first array in the first position (with the exception of 5, which will only push out the roman numeral "V").

* For any number less than 10, but greater than or equal to 9, the numeral specified in the first array in the fourth position will be pushed out.

For subsequent numbers that exceed 10 (up to the number 3,999), this loop sequence will be executed through each array shown, until the condition is met (Ex. If the number is 10, the loop will then push out the numeral from the second array in the first position "X").

## Known bugs

None

## Contact info

If you should have any questions regarding this page's content or structure, please contact me at chasesmithstudios@gmail.com

## Technologies used

* Sublime Text
* Bootstrap
* HTML/CSS
* JavaScript/jQuery
* GitHub

### License

Creative Commons license

Copyright (c) 2019 ** Chase J. Smith