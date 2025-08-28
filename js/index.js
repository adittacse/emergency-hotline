const callCost = 20;

// function to call police 2
function call(title, number) {
    const text = document.getElementById(title).innerText;
    const callingNumber = document.getElementById(number).innerText;
    alert(`📞 Calling ${text} ${callingNumber}...`);
}

// call button access
document.getElementById("btn-national-emergency-call").addEventListener("click", function(e) {
    let coinElement = document.getElementById("coin");
    let coin = parseInt(coinElement.innerText);

    if (coin < callCost) {
        alert("❌ You don't have enough coin. Minimum 20 coins are required to call.");
        return;
    }

    call("national-emergency-title", "national-emergency-number");
    
    coin = coin - callCost;
    coinElement.innerText = coin;
});

document.getElementById("btn-police1-call").addEventListener("click", function(e) {
    let coinElement = document.getElementById("coin");
    let coin = parseInt(coinElement.innerText);

    if (coin < callCost) {
        alert("❌ You don't have enough coin. Minimum 20 coins are required to call.");
        return;
    }

    call("police1-title", "police1-number");
    
    coin = coin - callCost;
    coinElement.innerText = coin;
});

document.getElementById("btn-police2-call").addEventListener("click", function(e) {
    let coinElement = document.getElementById("coin");
    let coin = parseInt(coinElement.innerText);

    if (coin < callCost) {
        alert("❌ You don't have enough coin. Minimum 20 coins are required to call.");
        return;
    }

    call("police2-title", "police2-number");
    
    coin = coin - callCost;
    coinElement.innerText = coin;
});

document.getElementById("btn-fire-service-call").addEventListener("click", function(e) {
    let coinElement = document.getElementById("coin");
    let coin = parseInt(coinElement.innerText);

    if (coin < callCost) {
        alert("❌ You don't have enough coin. Minimum 20 coins are required to call.");
        return;
    }

    call("fire-service-title", "fire-service-number");
    
    coin = coin - callCost;
    coinElement.innerText = coin;
});

document.getElementById("btn-ambulance-call").addEventListener("click", function(e) {
    let coinElement = document.getElementById("coin");
    let coin = parseInt(coinElement.innerText);

    if (coin < callCost) {
        alert("❌ You don't have enough coin. Minimum 20 coins are required to call.");
        return;
    }

    call("ambulance-title", "ambulance-number");
    
    coin = coin - callCost;
    coinElement.innerText = coin;
});

document.getElementById("btn-woman-and-child-call").addEventListener("click", function(e) {
    let coinElement = document.getElementById("coin");
    let coin = parseInt(coinElement.innerText);

    if (coin < callCost) {
        alert("❌ You don't have enough coin. Minimum 20 coins are required to call.");
        return;
    }

    call("woman-and-child-title", "woman-and-child-number");
    
    coin = coin - callCost;
    coinElement.innerText = coin;
});

document.getElementById("btn-anti-corruption-call").addEventListener("click", function(e) {
    let coinElement = document.getElementById("coin");
    let coin = parseInt(coinElement.innerText);

    if (coin < callCost) {
        alert("❌ You don't have enough coin. Minimum 20 coins are required to call.");
        return;
    }

    call("anti-corruption-title", "anti-corruption-number");
    
    coin = coin - callCost;
    coinElement.innerText = coin;
});

document.getElementById("btn-electricity-call").addEventListener("click", function(e) {
    let coinElement = document.getElementById("coin");
    let coin = parseInt(coinElement.innerText);

    if (coin < callCost) {
        alert("You don't have enough coin. Minimum 20 coins are required to call.");
        return;
    }

    call("electricity-title", "electricity-number");
    
    coin = coin - callCost;
    coinElement.innerText = coin;
});

document.getElementById("btn-brac-call").addEventListener("click", function(e) {
    let coinElement = document.getElementById("coin");
    let coin = parseInt(coinElement.innerText);

    if (coin < callCost) {
        alert("You don't have enough coin. Minimum 20 coins are required to call.");
        return;
    }

    call("brac-title", "brac-number");
    
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

    call("railway-title", "railway-number");
    
    coin = coin - callCost;
    coinElement.innerText = coin;
});