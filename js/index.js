const callCost = 20;

// function to call police 2
function callPolice2(title, number) {
    const text = document.getElementById(title).innerText;
    const callingNumber = document.getElementById(number).innerText;
    alert(`📞 Calling ${text} ${callingNumber}...`);
}

// function to call railway
function callRailway(title, number) {
    const text = document.getElementById(title).innerText;
    const callingNumber = document.getElementById(number).innerText;
    alert(`📞 Calling ${text} ${callingNumber}...`);
}

// call button access
document.getElementById("btn-police2-call").addEventListener("click", function(e) {
    let coinElement = document.getElementById("coin");
    let coin = parseInt(coinElement.innerText);

    if (coin < callCost) {
        alert("❌ You don't have enough coin. Minimum 20 coins are required to call.");
        return;
    }

    callPolice2("police2-title", "police2-number");
    
    coin = coin - callCost;
    coinElement.innerText = coin;
});

document.getElementById("btn-railway-call").addEventListener("click", function(e) {
    let coinElement = document.getElementById("coin");
    let coin = parseInt(coinElement.innerText);

    if (coin < callCost) {
        alert("You don't have enough coin. Minimum 20 coins are required to call.");
        return;
    }

    callRailway("railway-title", "railway-number");
    
    coin = coin - callCost;
    coinElement.innerText = coin;
});