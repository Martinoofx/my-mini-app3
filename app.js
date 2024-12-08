// Boost kártyák adatai
const boostData = {
    'Core i9': {
        name: 'Core i9 - 10 GH/s',
        dailyProfit: '13.33 TON',
        totalProfit: '399.9456 TON',
        price: '60,000 TON',
        image: 'core-i9-icon.png'
    },
    'RTX 4090': {
        name: 'RTX 4090 - 100 GH/s',
        dailyProfit: '133.33 TON',
        totalProfit: '3999.456 TON',
        price: '500,000 TON',
        image: 'rtx-4090-icon.png'
    },
    'A100 GPU': {
        name: 'A100 GPU - 1000 GH/s',
        dailyProfit: '1333.33 TON',
        totalProfit: '39994.56 TON',
        price: '5,000,000 TON',
        image: 'a100-gpu-icon.png'
    }
};

// Funkció, hogy megjelenítse a Boost opciókat
function showBoostOptions() {
    document.getElementById('boost-options').style.display = 'flex';
}

// Funkció a kiválasztott kártya megjelenítéséhez
function selectBoost(boostName) {
    const selectedBoost = boostData[boostName];
    
    // Megjelenítjük a részletes adatokat
    document.getElementById('boost-name').textContent = selectedBoost.name;
    document.getElementById('daily-profit').textContent = 'Daily Profit: ' + selectedBoost.dailyProfit;
    document.getElementById('total-profit').textContent = 'Total Profit: ' + selectedBoost.totalProfit;
    document.getElementById('price').textContent = 'Price: ' + selectedBoost.price;
    document.getElementById('quantity').style.display = 'block';
    
    // Elrejtjük a kártyákat és csak a kiválasztott adatokat jelenítjük meg
    document.getElementById('boost-options').style.display = 'none';
    document.getElementById('boost-details').style.display = 'block';
}

// Funkció a bérlés végrehajtásához
function rentBoost() {
    const quantity = document.getElementById('quantity-input').value;
    const selectedBoostName = document.getElementById('boost-name').textContent.split(' ')[0]; // Get the selected boost name
    
    const selectedBoost = boostData[selectedBoostName];
    
    // A bérlés végrehajtása - itt lehet más műveletet is végezni, mint például az adatokat küldeni a botnak.
    alert(`You've rented ${quantity} x ${selectedBoost.name} for ${selectedBoost.price}.`);
}
