class Card{
    constructor(name, desc, image, atk, def){
        this.name = name;
        this.desc = desc;
        this.image = image;
        this.atk = atk;
        this.def = def;
    }
}

let cards = data

function addCardToCatalog(card) {
    // Get the catalog div
    const catalog = document.getElementById('catalog');
    
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
    cardImage.style.width = "100px";
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
    cardStats.textContent = `ATK: ${card.atk} | DEF: ${card.def}`;
    cardDiv.appendChild(cardStats);

    // Append the card to the catalog
    catalog.appendChild(cardDiv);
}

for(let i = 0; i < cards.length; i++){
    addCardToCatalog(cards[i])
}