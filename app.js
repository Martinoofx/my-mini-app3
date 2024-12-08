function selectCard(cardName) {
  let cardDetails = {
    "Core i9": {
      image: "images/corei9.png",
      dailyProfit: "13.33 TON",
      totalProfit: "399.9456 TON",
      price: "60,000 TON"
    },
    "RTX 4090": {
      image: "images/rtx4090.png",
      dailyProfit: "133.33 TON",
      totalProfit: "3999.456 TON",
      price: "500,000 TON"
    },
    "A100 GPU": {
      image: "images/a100gpu.png",
      dailyProfit: "1333.33 TON",
      totalProfit: "39994.56 TON",
      price: "5,000,000 TON"
    }
  };

  // Update selected card details
  document.getElementById("selectedCardName").innerText = cardName;
  document.getElementById("selectedCardImage").src = cardDetails[cardName].image;
  document.getElementById("dailyProfit").innerText = cardDetails[cardName].dailyProfit;
  document.getElementById("totalProfit").innerText = cardDetails[cardName].totalProfit;
  document.getElementById("price").innerText = cardDetails[cardName].price;
}

function confirmRent() {
  // Get selected card details
  let selectedCardName = document.getElementById("selectedCardName").innerText;
  let price = document.getElementById("price").innerText.replace(' TON', '').replace(',', ''); // Remove "TON" and commas

  // Send a request to the backend to initiate the payment with Binance Pay
  fetch('/initiate-payment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      cardName: selectedCardName,
      price: price
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      // Redirect to Binance Pay payment link
      window.location.href = data.paymentLink;
    } else {
      alert("Payment initiation failed.");
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error initiating payment');
  });
}
