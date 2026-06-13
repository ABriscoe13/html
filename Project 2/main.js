const pBox = document.getElementById('P');
const rBox = document.getElementById('r');
const nBox = document.getElementById('n');
const answerSpan = document.querySelector('span');

const calculateMortgage = function(){
    const pValue = Number(pBox.value);
    const rValue = Number(rBox.value) / 1200;
    const nValue = Number(nBox.value) * 12;

    const monthlyPayment = (pValue * rValue) / (1 - Math.pow(1 + rValue, -nValue));
    answerSpan.textContent = "" + monthlyPayment.toFixed(2);
}