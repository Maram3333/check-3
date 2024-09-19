function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
function getTicketPrice(age) {
    if (age <= 12) return "$10";
    if (age <= 17) return "$15";
    return "$20";
}
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
    function check(s, left, right) {
        if (left >= right) return true;
        if (s[left] !== s[right]) return false;
        return check(s, left + 1, right - 1);
    }
    return check(str, 0, str.length - 1);
}
function power(base, exponent) {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}
