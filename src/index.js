module.exports = function toReadable(number) {
    const string = String(number)
    const length = string.length
    const hundred = 'hundred'
    if (length < 2) {
        return numOneToNine(string[0])
    }
    if (length >= 2 && length < 3) {
        if (number % 10 === 0) {
            return numTens(string[0])
        }
        else if (string[0] == '1') {
            return numElevenToNineteen(string)
        }
        else if (number % 10) {
            return numTens(string[0]) + ' ' + numOneToNine(string[1])
        }
    }
    if (length >= 3) {
        if (number % 100 === 0) {
            return numOneToNine(string[0]) + ' ' + hundred
        }
        else if (string[2] == '0') {
            return numOneToNine(string[0]) + ' ' + hundred + ' ' + numTens(string[1])
        }
        else if (string[1] == '0') {
            return numOneToNine(string[0]) + ' ' + hundred + ' ' + numOneToNine(string[2])
        }
        else if (string[1] == '1') {
            return numOneToNine(string[0]) + ' ' + hundred + ' ' + numElevenToNineteen(string[1] + string[2])
        }
        else if (number % 100) {
            return numOneToNine(string[0]) + ' ' + hundred + ' ' + numTens(string[1]) + ' ' + numOneToNine(string[2])
        }

    }

}


function numOneToNine(num) {
    switch (num) {
        case '0':
            return 'zero'
            break;
        case '1':
            return 'one'
            break;
        case '2':
            return 'two'
            break;
        case '3':
            return 'three'
            break;
        case '4':
            return 'four'
            break;
        case '5':
            return 'five'
            break;
        case '6':
            return 'six'
            break;
        case '7':
            return 'seven'
            break;
        case '8':
            return 'eight'
            break;
        case '9':
            return 'nine'
            break;
    }
}
function numElevenToNineteen(num) {
    switch (num) {
        case '11':
            return 'eleven'
            break;
        case '12':
            return 'twelve'
            break;
        case '13':
            return 'thirteen'
            break;
        case '14':
            return 'fourteen'
            break;
        case '15':
            return 'fifteen'
            break;
        case '16':
            return 'sixteen'
            break;
        case '17':
            return 'seventeen'
            break;
        case '18':
            return 'eighteen'
            break;
        case '19':
            return 'nineteen'
            break;

    }
}
function numTens(num) {
    switch (num) {
        case '1':
            return 'ten'
            break;
        case '2':
            return 'twenty'
            break;
        case '3':
            return 'thirty'
            break;
        case '4':
            return 'forty'
            break;
        case '5':
            return 'fifty'
            break;
        case '6':
            return 'sixty'
            break;
        case '7':
            return 'seventy'
            break;
        case '8':
            return 'eighty'
            break;
        case '9':
            return 'ninety'
            break;

    }
}
