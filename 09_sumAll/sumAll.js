const sumAll = function(a, b) {
    if(!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || a < 0) return 'ERROR';
    if(a > b) [a, b] = [b, a];
    return ((b * (b + 1)) / 2) - ((a * (a - 1)) / 2);
};

// Do not edit below this line
module.exports = sumAll;
