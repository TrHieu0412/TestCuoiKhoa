function sumOfPrime() {
    var num1 = parseInt(document.getElementById("num-1").value);
    var num2 = parseInt(document.getElementById("num-2").value);
    var tong = 0;
    if (num1 < num2) {
        for (var i = num1; i <= num2; i++) {
            if (Prime(i)) {
                tong += i;
            }
        }
        document.getElementById("ket-qua").innerHTML =
            "Tổng các số nguyên tố trong khoảng từ " + num1 + " đến " + num2 + " là: " + tong;
    } else {
        document.getElementById("ket-qua").innerHTML = "Số thứ 2 phải lớn hơn số thứ 1, yêu cầu nhập lại";
    }
}
function Prime(n) {
    if (n < 2) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}