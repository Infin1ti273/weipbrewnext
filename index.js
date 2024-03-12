// 数组操作
function arraySum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

function arrayAverage(arr) {
    if (arr.length === 0) return 0;
    return arraySum(arr) / arr.length;
}

// 字符串处理
function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function truncateString(str, length) {
    if (str.length > length) {
        return str.slice(0, length) + '...';
    }
    return str;
}

function getDaysDiff(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
}

// 对象操作
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function objectKeysToLowercase(obj) {
    const newObject = {};
    for (let key in obj) {
        newObject[key.toLowerCase()] = obj[key];
    }
    return newObject;
}

// 其他实用工具
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

module.exports = {
    arraySum,
    arrayAverage,
    capitalizeString,
    truncateString,
    getDaysDiff,
    deepClone,
    objectKeysToLowercase,
    randomInt,
    uuid
};