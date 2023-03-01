function numberOneTriangle(num) {
    if (num < 1 || num > 10) {
        console.log("Số nhập vào phải trong khoảng từ 1 đến 10");
        return;
    }
    else{
    for (let i = 1; i <= num; i++) {
        let star = "";
        for (let j = 1; j <= i; j++) {
            star += "*";
        }
        console.log(star);
    }
}
}
numberOneTriangle(11);
const starOfTriangle=document.getElementById("star");
starOfTriangle.innerHTML=numberOneTriangle