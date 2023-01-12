function addition(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        if (Number.isInteger(a) && Number.isInteger(b)) {
        return a + b;
        } else {
            return 'ERROR! Integers Only!'
        }
    } else if (typeof a === 'number' && typeof b === 'undefined') {
        return a;
    } else {
        return 'ERROR!'
    }
};


module.exports = addition;