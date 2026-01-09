const covertBtn = document.getElementById('convert')
const result = document.getElementById('result')
const codesToConvert = document.getElementById('codes')

function ValidCode(str) {
    return /[^0-9, \s]/.test(str)
}

async function ConvertCodes() {
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

            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix
        }
        else if (100 <= currentCode && currentCode <= 199) {
            convertedIps += 'B'
            
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix
        }
        else if (200 <= currentCode && currentCode <= 299) {
            convertedIps += 'C'
            
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix
        }
        else if (300 <= currentCode && currentCode <= 399) {
            convertedIps += 'D'
            
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix
        }
        else if (400 <= currentCode && currentCode <= 499) {
            convertedIps += 'E'
            
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix
        }
        else if (500 <= currentCode && currentCode <= 599) {
            convertedIps += 'F'
            
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix
        }
        else if (600 <= currentCode && currentCode <= 699) {
            convertedIps += 'G'
            
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix
        }
        else if (700 <= currentCode && currentCode <= 799) {
            convertedIps += 'H'
            
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix
        }
        else if (800 <= currentCode && currentCode <= 899) {
            convertedIps += 'J'
            
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix
        }
        else if (900 <= currentCode && currentCode <= 999) {
            convertedIps += 'K'
            
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix
        }
        else if (1000 <= currentCode && currentCode <= 1099) {
            convertedIps += 'L'
            
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix
        }
        else if (1100 <= currentCode && currentCode <= 1199) {
            convertedIps += 'M'
            
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix
        }
        else if (1200 <= currentCode && currentCode <= 1299) {
            convertedIps += 'N'
            
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix
        }
        else if (1300 <= currentCode && currentCode <= 1399) {
            convertedIps += 'O'
            
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix
        }
        else if (1400 <= currentCode && currentCode <= 1499) {
            convertedIps += 'P'
            
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix
        }
        else if (1500 <= currentCode && currentCode <= 1599) {
            convertedIps += 'Q'
            
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix
        }
        else if (1600 <= currentCode && currentCode <= 1699) {
            convertedIps += 'R'
            
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix
        }
        else if (1700 <= currentCode && currentCode <= 1799) {
            convertedIps += 'S'
            
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix
        }
        else if (1800 <= currentCode && currentCode <= 1899) {
            convertedIps += 'T'
            
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix
        }
        else if (1900 <= currentCode && currentCode <= 1999) {
            convertedIps += 'U'
            
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix
        }
        else if (2000 <= currentCode && currentCode <= 2099) {
            convertedIps += 'V'
            
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix
        }
        else if (2100 <= currentCode && currentCode <= 2199) {
            convertedIps += 'W'
            
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix
        }
        else if (2200 <= currentCode && currentCode <= 2299) {
            convertedIps += 'X'
            
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix
        }
        else if (2300 <= currentCode && currentCode <= 2399) {
            convertedIps += 'Y'
            
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix
        }
        else if (2400 <= currentCode && currentCode <= 2499) {
            convertedIps += 'Z'
            
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix
        }
        else if (2500 <= currentCode && currentCode <= 2599) {
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix

            convertedIps += 'A'
        }
        else if (2600 <= currentCode && currentCode <= 2699) {
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix

            convertedIps += 'B'
        }
        else if (2700 <= currentCode && currentCode <= 2799) {
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix

            convertedIps += 'C'
        }
        else if (2800 <= currentCode && currentCode <= 2899) {
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix

            convertedIps += 'D'
        }
        else if (2900 <= currentCode && currentCode <= 2999) {
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix

            convertedIps += 'E'
        }
        else if (3000 <= currentCode && currentCode <= 3099) {
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix

            convertedIps += 'F'
        }
        else if (3100 <= currentCode && currentCode <= 3199) {
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix

            convertedIps += 'G'
        }
        else if (3200 <= currentCode && currentCode <= 3299) {
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix

            convertedIps += 'H'
        }
        else if (3300 <= currentCode && currentCode <= 3399) {
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix

            convertedIps += 'J'
        }
        else if (3400 <= currentCode && currentCode <= 3499) {
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix

            convertedIps += 'K'
        }
        else if (3500 <= currentCode && currentCode <= 3599) {
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix

            convertedIps += 'L'
        }
        else if (3600 <= currentCode && currentCode <= 3699) {
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix
            
            convertedIps += 'M'
        }
        else if (3700 <= currentCode && currentCode <= 3799) {
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix

            convertedIps += 'N'
        }
        else if (3800 <= currentCode && currentCode <= 3899) {
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix

            convertedIps += 'O'
        }
        else if (3900 <= currentCode && currentCode <= 3999) {
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix

            convertedIps += 'P'
        }
        else if (4000 <= currentCode && currentCode <= 4099) {
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix

            convertedIps += 'Q'
        }
        else if (4100 <= currentCode && currentCode <= 4199) {
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix

            convertedIps += 'R'
        }
        else if (4200 <= currentCode && currentCode <= 4299) {
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix

            convertedIps += 'S'
        }
        else if (4300 <= currentCode && currentCode <= 4399) {
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix

            convertedIps += 'T'
        }
        else if (4400 <= currentCode && currentCode <= 4499) {
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix
            
            convertedIps += 'U'
        }
        else if (4500 <= currentCode && currentCode <= 4599) {
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix

            convertedIps += 'V'
        }
        else if (4600 <= currentCode && currentCode <= 4699) {
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix

            convertedIps += 'W'
        }
        else if (4700 <= currentCode && currentCode <= 4799) {
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix

            convertedIps += 'X'
        }
        else if (4800 <= currentCode && currentCode <= 4899) {
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix

            convertedIps += 'Y'
        }
        else if (4900 <= currentCode && currentCode <= 4999) {
            let codeSuffix = currentCode % 100

            if (String(codeSuffix).length == 1) {
                convertedIps +='0'
            }

            convertedIps += codeSuffix

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

    await navigator.clipboard.writeText(convertedIps)
}

covertBtn.addEventListener('click', ConvertCodes)