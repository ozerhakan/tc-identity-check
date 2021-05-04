const checkTc = tc => {
    return tc.substr(0,1) !== '0' || tc.length !== 11;
}

const isValidTenthElement = (tenthElement, inputTenthElement) => {
    return tenthElement % 10 === parseInt(inputTenthElement);
}

const isValidEleventhElement = tc => {
    let characterTotal = 0;

    for (let i = 0; i < 10; i++) {
        characterTotal += parseInt(tc[i]);
    }

    return (characterTotal % 10) === parseInt(tc[10]);
}

const isIncorrectIdentity = tc => {
    const incorrectIdentity = [11111111110, 22222222220, 33333333330, 44444444440, 55555555550, 66666666660, 7777777770, 88888888880, 99999999990];
    return (incorrectIdentity.toString().indexOf(tc) === -1)
}

const isValidIdentity= tc => {
    if(!checkTc(tc)) {
        return false;
    };

    let odd = 0;
    let even = 0;

    for (let i = 0; i < tc.length; i++) {
        odd = parseInt(tc[0]) + parseInt(tc[2]) + parseInt(tc[4]) + parseInt(tc[6]) + parseInt(tc[8]);
        even = parseInt(tc[1]) + parseInt(tc[3]) + parseInt(tc[5]) + parseInt(tc[7])
    }

    const tenthElement = (odd * 7 - even) % 10;

    if(!isValidTenthElement(tenthElement,tc[9])) {
        return false;
    }

    if(!isValidEleventhElement(tc)){
        return false;
    };

    if(!isIncorrectIdentity(tc)){
        return false;
    }

    return true;
}

console.log(isValidIdentity('123'));