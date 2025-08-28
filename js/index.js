const callCost = 20;
const callHistory = [];
let heart = 0;

// count heart
function countHeart() {
    const heartElement = document.getElementById("nav-heart");
    heart += 1;
    heartElement.innerText = heart;
}

// call function
function call(title, number) {
    const text = document.getElementById(title).innerText;
    const callingNumber = document.getElementById(number).innerText;
    alert(`📞 Calling ${text} ${callingNumber}...`);

    callHistory.push({
        name: text,
        number: callingNumber,
        time: new Date().toLocaleTimeString()
    });
    
    const finalCallHistory = document.getElementById("call-history");
    finalCallHistory.innerHTML = "";

    for (const data of callHistory) {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="flex items-center justify-between rounded-lg p-4 bg-[#FAFAFA] mb-2">
            <div>
                <h3 class="text-lg font-semibold">${data.name}</h3>
                <p class="text-lg text-[#5C5C5C]">${data.number}</p>
            </div>
            <p>${data.time}</p>
        </div>
        `;
        finalCallHistory.appendChild(div);
    }
}

// clear call history
document.getElementById("btn-clear").addEventListener("click", function() {
    callHistory = [];
    const finalCallHistory = document.getElementById("call-history");
    finalCallHistory.innerHTML = "";
    console.log(callHistory);
});

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