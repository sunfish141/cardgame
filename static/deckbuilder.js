class Card{
    constructor(name, desc, image, atk, def, amount, depcost, ucost, keys, type){
        this.name = name;
        this.desc = desc;
        this.image = image;
        this.atk = atk;
        this.def = def;
        this.amount = amount;
        this.id = '';
        this.deploymentcost = depcost,
        this.usecost = ucost,
        this.keywords = [],
        this.type = "unit"
    }
}

let cards = []
let deck = {}
remaining = {}
function addCardToCatalog(card) {
    // Get the catalog div
    const catalog = document.getElementById('catalog');
    const deck = document.getElementById('deck');
    
    // Create a container for the card
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.style.border = "1px solid black";
    cardDiv.style.margin = "10px";
    cardDiv.style.padding = "10px";
    cardDiv.style.backgroundColor = "white";

    // Add card image
    const cardImage = document.createElement('img');
    cardImage.src = card.image;
    cardImage.alt = `?`;
    cardImage.style.width = "50px";
    cardImage.style.height = "auto";
    cardDiv.appendChild(cardImage);

    // Add card name
    const cardName = document.createElement('h3');
    cardName.textContent = card.name;
    cardDiv.appendChild(cardName);

    // Add card description
    const cardDesc = document.createElement('p');
    cardDesc.textContent = card.desc;
    cardDiv.appendChild(cardDesc);

    // Add card attack and defense stats
    const cardStats = document.createElement('p');
    cardStats.textContent = `ATK: ${card.atk} | DEF: ${card.def} | AMOUNT: 4`;
    cardStats.id = `card-stats-${card.name.replace(/\s+/g, '-').toLowerCase()}`;
    card.id = cardStats.id
    cardDiv.appendChild(cardStats);

    cardDiv.onclick = function () {
        const statsId = `card-stats-${cardDiv.querySelector('h3').textContent.replace(/\s+/g, '-').toLowerCase()}`;
        const cardStatsElement = document.getElementById(statsId);
        cardStatsElement.textContent = `ATK: ${card.atk} | DEF: ${card.def} | AMOUNT: ${newAmount}`;
        catalog.removeChild(cardDiv);
        addCardToDeck(card);
    }
    // Append the card to the catalog
    catalog.appendChild(cardDiv);
}

function addCardToDeck(card){
    // Get the catalog div
    const deck = document.getElementById('deck');
    const catalog = document.getElementById('catalog');
    
    // Create a container for the card
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.style.border = "1px solid black";
    cardDiv.style.margin = "5px";
    cardDiv.style.padding = "5px";
    cardDiv.style.backgroundColor = "white";
    // Add card name
    const cardName = document.createElement('h3');
    cardName.textContent = card.name;
    cardDiv.appendChild(cardName);

    // Add card description
    const cardDesc = document.createElement('p');
    cardDesc.textContent = card.desc;
    cardDiv.appendChild(cardDesc);

    cardDiv.onclick = function () {
        deck.removeChild(cardDiv);
        addCardToCatalog(card);
    };
    // Append the card to the catalog
    deck.appendChild(cardDiv);
}
for(let i = 0; i < data.length; i++){
    newCard = new Card(data[i]["name"], data[i]["desc"], data[i]["image"], data[i]['atk'], data[i]['def'], 
        data[i]['amount'], data[i]['deploymentcost'], data[i]['usecost'],
        data[i]['keywords'], data[i]['type'])
        cards.append(newCard)
    addCardToCatalog(newCard)
}