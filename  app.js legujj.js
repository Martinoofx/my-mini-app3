// Felhasználó egyenlege és hashrate-je (ezek később dinamikusan lesznek frissítve a botból)
let balance = 0.53;
let hashrate = 13;

// Gépek és árak
const boosters = {
    "Core i9": { ghs: 10, price: 60000, daily_profit: 13.33 },
    "RTX 4090": { ghs: 100, price: 500000, daily_profit: 133.33 },
    "A100 GPU": { ghs: 1000, price: 5000000, daily_profit: 1333.33 }
};

// Funkció a napi jutalom igényléséhez
function claimReward() {
    balance += 0.01;
    document.getElementById("balance").textContent = balance.toFixed(2) + " TON";
    alert("You've claimed your daily reward! 🎉");
}

// Funkció a hashrate növeléséhez
function boostHashrate() {
    if (balance >= 50) {
        balance -= 50;
        hashrate += 5;
        document.getElementById("balance").textContent = balance.toFixed(2) + " TON";
        document.getElementById("hashrate").textContent = hashrate + " GH/s";
        alert("Your mining speed has been boosted! New hashrate: " + hashrate + " GH/s.");
    } else {
        alert("You don't have enough balance for the booster! You need 50 TON.");
    }
}

// Funkció a bányász gép kiválasztásához
function rentBooster(boosterName) {
    const selectedBooster = boosters[boosterName];

    if (balance >= selectedBooster.price) {
        balance -= selectedBooster.price;
        hashrate += selectedBooster.ghs;
        document.getElementById("balance").textContent = balance.toFixed(2) + " TON";
        document.getElementById("hashrate").textContent = hashrate + " GH/s";
        alert(`You've rented the ${boosterName}! New hashrate: ${hashrate} GH/s`);
    } else {
        alert(`You don't have enough balance to rent the ${boosterName}. You need ${selectedBooster.price} TON.`);
    }
}

// Funkció a barátok meghívásához (itt például egy egyszerű alert)
function inviteFriends() {
    alert("Invite your friends and earn rewards!");
}
