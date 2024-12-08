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

  // Kiválasztott kártya adatainak frissítése
  document.getElementById("selectedCardName").innerText = cardName;
  document.getElementById("selectedCardImage").src = cardDetails[cardName].image;
  document.getElementById("dailyProfit").innerText = cardDetails[cardName].dailyProfit;
  document.getElementById("totalProfit").innerText = cardDetails[cardName].totalProfit;
  document.getElementById("price").innerText = cardDetails[cardName].price;
}

function confirmRent() {
  alert("You have successfully rented the miner!");
}
