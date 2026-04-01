const convertBtn = document.getElementById('convert')
const reverseBtn = document.getElementById('reverse')
const result = document.getElementById('result')
const codesToConvert = document.getElementById('codes')

const LETTERS = ['A','B','C','D','E','F','G','H','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

// Build a lookup: letter -> index (0-24)
const LETTER_INDEX = {}
LETTERS.forEach((ch, i) => LETTER_INDEX[ch] = i)

function hasInvalidCodeChars(str) {
    return /[^0-9, \s]/.test(str)
}

function hasInvalidIPChars(str) {
    return /[^a-zA-Z0-9, \s]/.test(str)
}

function padSuffix(num) {
    return num < 10 ? '0' + num : '' + num
}

// --- Code (number) → IP (letter+digits or digits+letter) ---
function codeToIP(code) {
    if (code < 0 || code > 4999) return code + ' - invalid code'

    const group = Math.floor(code / 100)
    const suffix = padSuffix(code % 100)

    if (group < 25) {
        // 0-2499: letter prefix
        return LETTERS[group] + suffix
    } else {
        // 2500-4999: letter suffix
        return suffix + LETTERS[group - 25]
    }
}

// --- IP (e.g. "N34" or "34N") → code number ---
function ipToCode(ip) {
    ip = ip.toUpperCase()

    let letter, digits

    if (/^[A-Z]\d{2}$/.test(ip)) {
        // prefix format: N34
        letter = ip[0]
        digits = parseInt(ip.slice(1), 10)
        const idx = LETTER_INDEX[letter]
        if (idx === undefined) return ip + ' - invalid IP'
        return idx * 100 + digits
    } else if (/^\d{2}[A-Z]$/.test(ip)) {
        // suffix format: 34N
        letter = ip[2]
        digits = parseInt(ip.slice(0, 2), 10)
        const idx = LETTER_INDEX[letter]
        if (idx === undefined) return ip + ' - invalid IP'
        return (idx + 25) * 100 + digits
    } else {
        return ip + ' - invalid IP'
    }
}

async function ConvertCodes() {
    if (codesToConvert.value.trim() === '') return
    if (hasInvalidCodeChars(codesToConvert.value)) {
        result.textContent = "Invalid character entered! Please provide valid numeric codes"
        return
    }

    const codes = codesToConvert.value.split(",").map(s => s.trim()).filter(s => s !== "").map(Number)
    const output = codes.map(codeToIP).join(',')

    result.textContent = output
    await navigator.clipboard.writeText(output)
}

async function ReverseCodes() {
    if (codesToConvert.value.trim() === '') return
    if (hasInvalidIPChars(codesToConvert.value)) {
        result.textContent = "Invalid character entered! Please provide valid IPs"
        return
    }

    const ips = codesToConvert.value.split(",").map(s => s.trim()).filter(s => s !== "")
    const output = ips.map(ipToCode).join(',')

    result.textContent = output
    await navigator.clipboard.writeText(output)
}

convertBtn.addEventListener('click', ConvertCodes)
reverseBtn.addEventListener('click', ReverseCodes)