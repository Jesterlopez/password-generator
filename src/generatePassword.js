const numbers = '1234567890'
const symbols = "!#$%&'()*+-/<=>?@[]^_|~"
const letterLowerCase = 'abcdefghijklmnñopqrstuvwxyz'
const letterUpperCase = letterLowerCase.toUpperCase()

export const generatePassword = (config) => {
    const { length } = config
    let password = ''

    for (let i = 0; i < length; i++) {
        const settings = getSettings(config)
        password += settings
    }

    return password
}

const getSettings = (config) => {
    const { numbers, lower, upper, symbols, length } = config

    const setting = []

    if (numbers) {
        setting.push(getNumbers())
    }

    if (lower) {
        setting.push(getLettersLowerCase())
    }

    if (upper) {
        setting.push(getLettersUpperCase())
    }

    if (symbols) {
        setting.push(getSymbols())
    }

    if (length === 0) return;

    return setting[Math.floor(Math.random() * setting.length)]
}

const getNumbers = () => {
    return numbers[Math.floor(Math.random() * numbers.length)]
}

const getLettersLowerCase = () => {
    return letterLowerCase[Math.floor(Math.random() * letterLowerCase.length)]
}

const getLettersUpperCase = () => {
    return letterUpperCase[Math.floor(Math.random() * letterUpperCase.length)]
}

const getSymbols = () => {
    return symbols[Math.floor(Math.random() * symbols.length)]
}

export const validationInputChecked = (config) => {
    const { numbers, lower, upper, symbols, length } = config
    if (numbers === true || lower === true || upper === true || symbols === true) {
        return true
    }
    return false
}