// make box
// make drop down
// currency change info
// 드랍다운 리스트ㅔ서 아이템 선택하면 아이테이 바낌
// 금액 입력하면 환전이 된다.
// 드랍다운 리스트에서 아이템을 선택하면다시 그 단위 기준으로 선택이 됨.
// 숫자를 한국어로 읽는법
// 반대로  밑에 박스에서 숫자를 바껃 의에 박스에 환율이 적용이 된다.

let currencyRatio = {
  USD: {
    KRW: 1187.02,
    USD: 1,
    VND: 22.85,
    unit: "달러",
  },
  KRW: {
    KRW: 1,
    USD: 0.00084,
    VND: 19.4,
    unit: "원",
  },
  VND: {
    KRW: 0.052,
    USD: 0.000044,
    VND: 1,
    unit: "동",
  },
};
//console.log(currencyRatio.USD.unit);

//console.log(currencyRatio['VND'],["unit"]);

let fromCurrency = 'USD';
let toCurrency = 'KRW';

document.querySelectorAll("#from-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    //1. 버튼 가져오기

    document.getElementById("from-button").textContent = this.textContent;
    //2. 버튼 값 변경
    //3. 선택된 currency 값을 저장 변수에 저장해 준다.
    fromCurrency = this.textContent;
    console.log("formCurrency는", fromCurrency);
    convert()
  })
);

document.querySelectorAll("#to-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    document.getElementById("to-button").textContent = this.textContent;
    toCurrency = this.textContent;
    console.log("toCurrency는", toCurrency);
    convert()
  })
);

function convert(){
   // 2. 환전
  // 얼마를 환전 가지고 있는 돈이 뭔지, 바꾸고자하는 돈이 뭔지
    let amount = document.getElementById("from-input").value;
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
    console.log("ghkswjs",convertedAmount);
    
    document.getElementById("to-input").value = convertedAmount;
   // 돈 * 환율 = 환전금액
}


//1. 키를 입력하는 순간 환전이 되어서
// 환전된 값이 보인다. 

//1. 드랍다운 리스트에 값이 바낄 때 마다 환전을 다시한다. 



