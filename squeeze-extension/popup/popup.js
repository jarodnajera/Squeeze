const covertBtn = document.getElementById('convert')
const result = document.getElementById('result')
const codesToConvert = document.getElementById('codes')

function ValidCode(str) {
    return /[^0-9, \s]/.test(str)
}

function ConvertCodes() {
    if (codesToConvert.value === '') return
    if (ValidCode(codesToConvert.value)) {
        result.textContent = "Invalid character entered! Please provide valid codes"
        return
    }

    let repCodes = codesToConvert.value.split(",").map(s => s.trim()).filter(s => s !== "").map(Number)
    let convertedIps = ""

    for (let i = 0; i < repCodes.length; i++) {
        let currentCode = repCodes[i]

        if (0 <= currentCode && currentCode <= 99) {
            convertedIps += 'A'
            convertedIps += currentCode % 100
        }
        else if (100 <= currentCode && currentCode <= 199) {
            convertedIps += 'B'
            convertedIps += currentCode % 100
        }
        else if (200 <= currentCode && currentCode <= 299) {
            convertedIps += 'C'
            convertedIps += currentCode % 100
        }
        else if (300 <= currentCode && currentCode <= 399) {
            convertedIps += 'D'
            convertedIps += currentCode % 100
        }
        else if (400 <= currentCode && currentCode <= 499) {
            convertedIps += 'E'
            convertedIps += currentCode % 100
        }
        else if (500 <= currentCode && currentCode <= 599) {
            convertedIps += 'F'
            convertedIps += currentCode % 100
        }
        else if (600 <= currentCode && currentCode <= 699) {
            convertedIps += 'G'
            convertedIps += currentCode % 100
        }
        else if (700 <= currentCode && currentCode <= 799) {
            convertedIps += 'H'
            convertedIps += currentCode % 100
        }
        else if (800 <= currentCode && currentCode <= 899) {
            convertedIps += 'J'
            convertedIps += currentCode % 100
        }
        else if (900 <= currentCode && currentCode <= 999) {
            convertedIps += 'K'
            convertedIps += currentCode % 100
        }
        else if (1000 <= currentCode && currentCode <= 1099) {
            convertedIps += 'L'
            convertedIps += currentCode % 100
        }
        else if (1100 <= currentCode && currentCode <= 1199) {
            convertedIps += 'M'
            convertedIps += currentCode % 100
        }
        else if (1200 <= currentCode && currentCode <= 1299) {
            convertedIps += 'N'
            convertedIps += currentCode % 100
        }
        else if (1300 <= currentCode && currentCode <= 1399) {
            convertedIps += 'O'
            convertedIps += currentCode % 100
        }
        else if (1400 <= currentCode && currentCode <= 1499) {
            convertedIps += 'P'
            convertedIps += currentCode % 100
        }
        else if (1500 <= currentCode && currentCode <= 1599) {
            convertedIps += 'Q'
            convertedIps += currentCode % 100
        }
        else if (1600 <= currentCode && currentCode <= 1699) {
            convertedIps += 'R'
            convertedIps += currentCode % 100
        }
        else if (1700 <= currentCode && currentCode <= 1799) {
            convertedIps += 'S'
            convertedIps += currentCode % 100
        }
        else if (1800 <= currentCode && currentCode <= 1899) {
            convertedIps += 'T'
            convertedIps += currentCode % 100
        }
        else if (1900 <= currentCode && currentCode <= 1999) {
            convertedIps += 'U'
            convertedIps += currentCode % 100
        }
        else if (2000 <= currentCode && currentCode <= 2099) {
            convertedIps += 'V'
            convertedIps += currentCode % 100
        }
        else if (2100 <= currentCode && currentCode <= 2199) {
            convertedIps += 'W'
            convertedIps += currentCode % 100
        }
        else if (2200 <= currentCode && currentCode <= 2299) {
            convertedIps += 'X'
            convertedIps += currentCode % 100
        }
        else if (2300 <= currentCode && currentCode <= 2399) {
            convertedIps += 'Y'
            convertedIps += currentCode % 100
        }
        else if (2400 <= currentCode && currentCode <= 2499) {
            convertedIps += 'Z'
            convertedIps += currentCode % 100
        }
        else if (2500 <= currentCode && currentCode <= 2599) {
            convertedIps += currentCode % 100
            convertedIps += 'A'
        }
        else if (2600 <= currentCode && currentCode <= 2699) {
            convertedIps += currentCode % 100
            convertedIps += 'B'
        }
        else if (2700 <= currentCode && currentCode <= 2799) {
            convertedIps += currentCode % 100
            convertedIps += 'C'
        }
        else if (2800 <= currentCode && currentCode <= 2899) {
            convertedIps += currentCode % 100
            convertedIps += 'D'
        }
        else if (2900 <= currentCode && currentCode <= 2999) {
            convertedIps += currentCode % 100
            convertedIps += 'E'
        }
        else if (3000 <= currentCode && currentCode <= 3099) {
            convertedIps += currentCode % 100
            convertedIps += 'F'
        }
        else if (3100 <= currentCode && currentCode <= 3199) {
            convertedIps += currentCode % 100
            convertedIps += 'G'
        }
        else if (3200 <= currentCode && currentCode <= 3299) {
            convertedIps += currentCode % 100
            convertedIps += 'H'
        }
        else if (3300 <= currentCode && currentCode <= 3399) {
            convertedIps += currentCode % 100
            convertedIps += 'J'
        }
        else if (3400 <= currentCode && currentCode <= 3499) {
            convertedIps += currentCode % 100
            convertedIps += 'K'
        }
        else if (3500 <= currentCode && currentCode <= 3599) {
            convertedIps += currentCode % 100
            convertedIps += 'L'
        }
        else if (3600 <= currentCode && currentCode <= 3699) {
            convertedIps += currentCode % 100
            convertedIps += 'M'
        }
        else if (3700 <= currentCode && currentCode <= 3799) {
            convertedIps += currentCode % 100
            convertedIps += 'N'
        }
        else if (3800 <= currentCode && currentCode <= 3899) {
            convertedIps += currentCode % 100
            convertedIps += 'O'
        }
        else if (3900 <= currentCode && currentCode <= 3999) {
            convertedIps += currentCode % 100
            convertedIps += 'P'
        }
        else if (4000 <= currentCode && currentCode <= 4099) {
            convertedIps += currentCode % 100
            convertedIps += 'Q'
        }
        else if (4100 <= currentCode && currentCode <= 4199) {
            convertedIps += currentCode % 100
            convertedIps += 'R'
        }
        else if (4200 <= currentCode && currentCode <= 4299) {
            convertedIps += currentCode % 100
            convertedIps += 'S'
        }
        else if (4300 <= currentCode && currentCode <= 4399) {
            convertedIps += currentCode % 100
            convertedIps += 'T'
        }
        else if (4400 <= currentCode && currentCode <= 4499) {
            convertedIps += currentCode % 100
            convertedIps += 'U'
        }
        else if (4500 <= currentCode && currentCode <= 4599) {
            convertedIps += currentCode % 100
            convertedIps += 'V'
        }
        else if (4600 <= currentCode && currentCode <= 4699) {
            convertedIps += currentCode % 100
            convertedIps += 'W'
        }
        else if (4700 <= currentCode && currentCode <= 4799) {
            convertedIps += currentCode % 100
            convertedIps += 'X'
        }
        else if (4800 <= currentCode && currentCode <= 4899) {
            convertedIps += currentCode % 100
            convertedIps += 'Y'
        }
        else if (4900 <= currentCode && currentCode <= 4999) {
            convertedIps += currentCode % 100
            convertedIps += 'Z'
        }
        else {
            convertedIps += currentCode
            convertedIps += ' - invalid code'
        }
        
        if (i < repCodes.length - 1) {
            convertedIps += ','
        }
    }

    result.textContent = convertedIps
}

covertBtn.addEventListener('click', ConvertCodes)