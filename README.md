# Roman Numeral Converter

#### This page is designed to convert normal numbers/integers into Roman numerals,  Updated as of August 26, 2019

#### By Chase J. Smith

## Description

This page provides a way for users to enter in a number between 1 and 3,999, and will automatically convert that number into the proper Roman numerals that correspond to that number.

## Specifications

A small entry bar that is presented to a user, which allows them to enter an integer or number between 1 and 9. Anything entered as a string of text will not be converted, including numbers written in text form.

When you enter in integers, you can enter in up to four numbers

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

Depending on the number you enter in, and specific factors when displaying Roman numerals, the following scenarios can take place:

More than three of the same character cannot be entered in a row. When this happens, you will switch over to subtracting one from the next higher numeral...

* Ex. When typing 4, instead of seeing "IIII," the value will display as "IV."

When entering in four integers, no more than four of the same integer may be entered in a row...

* Ex. When entering in 40 as an integer, instead of seeing XXXX, the numerals displayed will switch to XL (refer to previous example regarding next higher numeral subtraction).

Given that Roman numerals only go up to 1,000 in value (M = 1,000), the highest integer value that can be entered with Roman numerals returned is 3,999.


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