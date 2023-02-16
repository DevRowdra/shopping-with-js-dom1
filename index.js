let no = 0;
document.getElementById("fitst-btn").addEventListener("click", function () {
  const firstName = getElementinnnerText("first-name");
  const firstMoney = getElementinnnerText("first-money");
  no += 1;
  const firstQuantity = getElementinnnerText("first-quantity");
  const firstTotal = parseInt(firstMoney) * parseInt(firstQuantity);
  console.log(firstTotal);
  setElementToList(no, firstName, firstMoney, firstQuantity, firstTotal);
  document.getElementById("fitst-btn").disabled = true;
});
document.getElementById("second-btn").addEventListener("click", function () {
  const secondtName = getElementinnnerText("second-name");
  const secondMoney = getElementinnnerText("second-money");
  no += 1;
  const secondQuantity = getElementinnnerText("second-quantity");
  const secondTotal = parseInt(secondMoney) * parseInt(secondQuantity);
  // console.log(firstTotal);
  setElementToList(no, secondtName, secondMoney, secondQuantity, secondTotal);
  document.getElementById("second-btn").disabled = true;
});
document.getElementById("third-btn").addEventListener("click", function () {
  const thirdtName = getElementinnnerText("third-name");
  const thirdMoney = getElementinnnerText("third-money");
  no += 1;
  const thirdQuantity = getElementinnnerText("third-quantity");
  const thirdTotal = parseInt(thirdMoney) * parseInt(thirdQuantity);
  // console.log(firstTotal);
  setElementToList(no, thirdtName, thirdMoney, thirdQuantity, thirdTotal);
  document.getElementById("third-btn").disabled = true;
});
document.getElementById("fourth-btn").addEventListener("click", function () {
  const fourthtName = getElementinnnerText("fourth-name");
  const fourthMoney = getElementValue("fourth-money");
  const fourthQuantity = getElementValue("fourth-quantity");
  const fourthMoneyNumber = parseInt(fourthMoney);
  const fourthQuantityNumber = parseInt(fourthQuantity);
  const stock=document.getElementById('onStock').innerText
  let stockNumber=parseInt(stock)
  const stockMuins=stockNumber-fourthQuantityNumber;
  if (stockMuins<0) {
    alert('sorry bhaie ato Quantity naie. aktu komie nan')
  return;

    
  }
  document.getElementById('onStock').innerText=stockMuins;
  if (stockMuins == 0) {
  document.getElementById("fourth-btn").disabled = true;
    
  }
    

  console.log(typeof fourthQuantity);
  if (fourthQuantityNumber >= 5) {
    alert("not ok ato basi dita par bo na");
    return;
  }

  if (
    isNaN(fourthMoney) ||
    isNaN(fourthQuantity) ||
    fourthMoney == "" ||
    fourthQuantity == ""
  ) {
    alert("not ok");
    return;
  }
  no += 1;
  const fourthTotal = fourthMoneyNumber * fourthQuantityNumber;
  // console.log(firstTotal);
  setElementToList(no, fourthtName, fourthMoney, fourthQuantity, fourthTotal);
//   document.getElementById("fourth-btn").disabled = true;
});
