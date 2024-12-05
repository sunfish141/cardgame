

class Card{
    constructor(name, desc, image, atk, def, amount, depcost, ucost, keys, type){
        this.name = name;
        this.desc = desc;
        this.image = image;
        this.atk = atk;
        this.def = def;
        this.max = amount;
        this.amount = amount;
        this.deploymentcost = depcost;
        this.usecost = ucost;
        this.keywords = keys;
        this.type = "unit";
        this.cid = 'e';
        this.did = 'e';
    }
}

let cards = []
let deck = {}
function addCardToCatalog(card) {
    if (card.cid != 'e'){
        console.log('ere')
        console.log(card.cid);
        let cardStats = document.getElementById(card.cid); //id not working
        cardStats.textContent = `ATK: ${card.atk} | DEF: ${card.def} | AMOUNT: ${card.amount}`;
        return
    }
    // Get the catalog div
    const catalog = document.getElementById('catalog');
    
    // Create a container for the card
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.style.border = "1px solid black";
    cardDiv.style.margin = "10px";
    cardDiv.style.padding = "10px";
    cardDiv.style.width = "300px"
    cardDiv.style.height = "400px"
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
    let cardStats = document.createElement('p');
    cardStats.textContent = `ATK: ${card.atk} | DEF: ${card.def} | AMOUNT: ${card.amount}`;
    cardStats.id = `card-stats-${card.name.replace(/\s+/g, '-').toLowerCase()}`;
    console.log(cardStats.id)
    card.cid = cardStats.id;
    console.log(card.cid)
    cardDiv.appendChild(cardStats);

    cardDiv.onclick = function () {
        let statsId = `card-stats-${cardDiv.querySelector('h3').textContent.replace(/\s+/g, '-').toLowerCase()}`;
        console.log(statsId);
        let cardStatsElement = document.getElementById(statsId);
        for(let i = 0; i < cards.length;i++){
            if(cards[i].cid == statsId){
                deck[cards[i].name] += 1;
                cards[i].amount-=1;
                console.log('e');
                cardStatsElement.textContent = `ATK: ${cards[i].atk} | DEF: ${cards[i].def} | AMOUNT: ${cards[i].amount}`;
                if(card.amount <= 0){
                    catalog.removeChild(cardDiv);
                    cards[i].cid = 'e';
                }
                addCardToDeck(cards[i]);
                return;
            }
        }
    }
    // Append the card to the catalog
    catalog.appendChild(cardDiv);
}

function addCardToDeck(card){
    // Get the catalog div
    if (card.did != 'e'){
        let cardStats = document.getElementById(card.did); //id not working
        cardStats.textContent = `ATK: ${card.atk} | DEF: ${card.def} | AMOUNT: ${card.max - card.amount}`;
        return
    }
    const deck = document.getElementById('deck');
    
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

    let cardStats = document.createElement('p');
    cardStats.textContent = `ATK: ${card.atk} | DEF: ${card.def} | AMOUNT: ${card.max - card.amount}`;
    cardStats.id = `card-stats-${card.name.replace(/\s+/g, '-').toLowerCase()}-cid`;
    card.did = cardStats.id
    console.log(card.did)
    cardDiv.appendChild(cardStats);

    cardDiv.onclick = function () {
        let statsId = `card-stats-${cardDiv.querySelector('h3').textContent.replace(/\s+/g, '-').toLowerCase()}-cid`;
        let cardStats = document.getElementById(statsId);
        for(let i = 0; i < cards.length; i++){
            if(cards[i].did == statsId){
                deck[cards[i].name] -= 1;
                cards[i].amount+=1;
                cardStats.textContent = `ATK: ${cards[i].atk} | DEF: ${cards[i].def} | AMOUNT: ${cards[i].max - cards[i].amount}`;
                if((cards[i].max - cards[i].amount)<=0){
                    deck.removeChild(cardDiv);
                    cards[i].did='e';
                }
                addCardToCatalog(cards[i]);
                return;
            }
        }
        
    };
    // Append the card to the catalog
    deck.appendChild(cardDiv);
}
for(let i = 0; i < data.length; i++){
    newCard = new Card(data[i]["name"], data[i]["desc"], data[i]["image"], data[i]['atk'], data[i]['def'], 
        data[i]['amount'], data[i]['deploymentcost'], data[i]['usecost'],
        data[i]['keywords'], data[i]['type'])
    addCardToCatalog(newCard);
    console.log(newCard);
    cards.push(newCard);
}

