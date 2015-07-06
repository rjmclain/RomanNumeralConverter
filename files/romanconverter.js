// JavaScript source code

function romanConverter() {
    var romanOutput = ""; // establish output
    var enteredNum = prompt('What number would you like converted between 1 and 3999?'); // Entered value prompt
    var romanNum = [
        ['', 'M', 'MM', 'MMM'], // Thousands place
        ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'], // Hundreds place
        ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'], // These are for the tens place
        ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'] // Ones place 
    ];
    // Check that entry is within number range
    if (parseInt(enteredNum) > 3999 || parseInt(enteredNum) < 1) {
        alert("I'm sorry that's not a valid entry");
        enteredNum = prompt('What number would you like converted between 1 and 3999?');
    } else {
        // Print what value was entered
        document.write('<p class="entered-amount"> You entered ' + enteredNum + '</p>');
        // Add zeros to make sure entry is 4 digits to avoid any additional complications
        while (enteredNum.length < 4) {
            enteredNum = '0' + enteredNum;
        }
        // Match decimal place to correct array, and then find proper string within the array
        for (var i = 0; i < enteredNum.length; i += 1) {
            var currentNum = parseInt(enteredNum.charAt(i));
            romanOutput += romanNum[i][currentNum];
        }
    }
    // Return Value
    document.write('<p class="return-val"> In Roman Numerals that would be ' + romanOutput + '</p>');
}
romanConverter();