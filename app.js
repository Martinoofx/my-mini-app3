document.addEventListener("DOMContentLoaded", () => {
    const boostButton = document.querySelector(".boost-btn");
    const rentButtons = document.querySelectorAll(".rent-btn");
    const claimButton = document.querySelector(".claim-btn");

    // Boost gomb interakció
    boostButton.addEventListener("click", () => {
        alert("Boost activated!");
    });

    // Rent gép gombok interakciója
    rentButtons.forEach(button => {
        button.addEventListener("click", () => {
            const minerType = button.getAttribute("data-miner");
            alert(`You have rented: ${minerType}`);
        });
    });

    // Claim napi jutalom gomb
    claimButton.addEventListener("click", () => {
        alert("You've claimed your daily reward!");
    });
});
