function expect(value) {
    return{
        toBe: exp => {
            if(value === exp){
                console.log('Success')
            } else {
                console.error('value and exp are not equal')
            }
        }
    }
}

const sum = (a, b) => a + b

const nativeNull = () => null

module.exports = {sum, nativeNull}

// console.log(sum(14, 4))
// expect(sum(14, 4)).toBe(14)
