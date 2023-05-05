//BÀI TẬP 1
function getEle(id){
  return document.getElementById(id);
}
function ketquaxuatra1(){
  let sum = 0;
  let n = 0;
  while (sum < 10000) {
    n++;
    sum += n;
  }
  getEle("printKetQua1").innerHTML = "Số nguyên dương n nhỏ nhất là: " + n;
}

getEle("ket_qua1").onclick = function(){
  ketquaxuatra1();
}

//BÀI TẬP 2
function ketquaxuatra2(){
  let x = parseInt(getEle("nhapx").value);
  let n = parseInt(getEle("nhapn").value);
  let s = 0;
  if (isNaN(x) || isNaN(n) || n < 1) {
    getEle("printKetQua2").innerHTML = "Vui lòng nhập số hợp lệ!";
    return;
  }
  for (let i = 1; i <= n; i++) {
    s += Math.pow(x, i);
  }
  getEle("printKetQua2").innerHTML = "Vậy tổng của biểu thức S là: " + s;
}

getEle("ket_qua2").onclick = function(){
  ketquaxuatra2();
}

//BÀI TẬP 3
function ketquaxuatra3(){
  let n = parseInt(getEle("nhapnbai3").value);
  if (isNaN(n) || n < 0) {
    getEle("printKetQua3").innerHTML = "Vui lòng nhập số hợp lệ!";
    return;
  }
  let giaithua = 1;
  for (let i = 2; i <= n; i++){
    giaithua *=i;
  }
  getEle("printKetQua3").innerHTML = "Vậy giai thừa của số n nhập vào là: " +giaithua;
}

getEle("ket_qua3").onclick = function(){
  ketquaxuatra3();
}

//BÀI TẬP 4
function ketquaxuatra4() {
  let printKetQua4 = getEle("printKetQua4");
  printKetQua4.innerHTML = ""; 
  for (let i = 1; i <= 10; i++) {
    let div = document.createElement("div");
    div.innerText = "Thẻ Div " + i;
    if (i % 2 === 0) {
      div.style.backgroundColor = "red";
    } else {
      div.style.backgroundColor = "blue";
    }
    printKetQua4.appendChild(div);
  }
}
getEle("ket_qua4").onclick = function(){
  ketquaxuatra4();
}

//BÀI TẬP 5
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function ketquaxuatra5() {
  let n = getEle("nhapnbai5").value;
  res ="Các số nguyên tố từ 1 đến " + n + " là: ";
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      res += i + " ";
    }
  }
  getEle("printKetQua5").innerHTML = res;
}

getEle("ket_qua5").onclick = function(){
  ketquaxuatra5();
}