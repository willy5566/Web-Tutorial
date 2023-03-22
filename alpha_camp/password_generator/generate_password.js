// sample a element in collection
function sample(collection) {
    let randomIndex = Math.floor(Math.random() * collection.length)
    return collection[randomIndex]
}

function generatePassword(options) {
    // define things user might want
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const upperCaseLetters = lowerCaseLetters.toLocaleUpperCase()
    const numbers = '1234567890'
    const symbols = '~!@#$%^&*()-_+={}[]|;:"<>,.?/'

    // create a collection to store things user picked up
    let collection = []

    if (options.lowercase === 'on') {
        collection = collection.concat(lowerCaseLetters.split(''))
    }

    if (options.uppercase === 'on') {
        collection = collection.concat(upperCaseLetters.split(''))
    }

    if (options.numbers === 'on') {
        collection = collection.concat(numbers.split(''))
    }

    if (options.symbols === 'on') {
        collection = collection.concat(symbols.split(''))
    }

    // remove things user do not need
    if (options.excludeCharacters) {
        collection = collection.filter(charactor =>
            !options.excludeCharacters.includes(charactor)
        )
    }

    // return error notice if collection is empty
    if (collection.length === 0) {
        return 'There is no vaild characters in your selection.'
    }

    // start generating password
    let password = ''
    for (let i = 0; i < options.length; i++) {
        password += sample(collection)

    }

    // return password
    return password
}

// export generatePassword function for other files to use
module.exports = generatePassword