const numberInput = document.getElementById('number');
const qr1 = document.getElementById('output');
const qr2 = document.getElementById('output2');
const qr3 = document.getElementById('output3');
const qr4 = document.getElementById('output4');

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  function calculateIQR(data) {
    data = data.split(',').map(Number);
  
    data.sort(function(a, b) {
      return a - b;
    });
  
    let median;
    if (data.length % 2 === 0) {
      median = (data[data.length/2 - 1] + data[data.length/2]) / 2;
    } else {
      median = data[Math.floor(data.length/2)];
    }
  
    let lowerHalf = data.slice(0, Math.floor(data.length/2));
    let q1;
    if (lowerHalf.length % 2 === 0) {
      q1 = (lowerHalf[lowerHalf.length/2 - 1] + lowerHalf[lowerHalf.length/2]) / 2;
    } else {
      q1 = lowerHalf[Math.floor(lowerHalf.length/2)];
    }
  
    let upperHalf = data.slice(Math.ceil(data.length/2));
    let q3;
    if (upperHalf.length % 2 === 0) {
      q3 = (upperHalf[upperHalf.length/2 - 1] + upperHalf[upperHalf.length/2]) / 2;
    } else {
      q3 = upperHalf[Math.floor(upperHalf.length/2)];
    }
  
    // Calculate the interquartile range
    let iqr = q3 - q1;
    qr1.textContent = `Lower quartile: ${q1}`;
    qr2.textContent = `Median: ${median}`;
    qr3.textContent = `Upper quartile: ${q3}`;
    qr4.textContent = `Interquartile range: ${iqr}`
    
    return iqr;
  }
  
  // Example usage
  let data = numberInput.value;
  let iqr = calculateIQR(data);
  numberInput.focus();
});
