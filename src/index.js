module.exports = function reverse(n) {
    console.log(n);
    let res = n.toString().split("").reverse().join("");
    console.log(res.slice(0, -1));

    if (res.slice(-1) == "-") {
        return Number(res.slice(0, -1));
    }

    if (res.slice(0, 1) == "-") {
        return Number(res.slice(1));
    } else {
        return Number(res);
    }
};
