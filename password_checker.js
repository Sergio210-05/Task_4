
function getPasswordChecker(password) {
    return function(inputPass) {
        return (password === inputPass)
    }
}

const truePass = 'TerraNova'
const passChecker = getPasswordChecker(truePass)


console.log(passChecker('BraveNewWorld'))
console.log(passChecker('WildWildWild'))
console.log(passChecker('TerraNova'))