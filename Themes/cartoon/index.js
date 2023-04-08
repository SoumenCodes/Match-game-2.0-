// My Array 
let cardsArray = [
    {
        'name': "CSS",
        'img': "img/doremon.png",
    },
    {
        'name': "HTML",
        'img': "img/hulk.png",
    },
    {
        'name': "jQuery",
        'img': "img/nobita.png",
    },
    {
        'name': "node",
        'img': "img/sinchain.png",
    },
    {
        'name': "JS",
        'img': "img/spider.png",
    },
    {
        'name': "Python",
        'img': "img/spiderman.png",
    },
];

//   duplicate the array 
const duplicateArrays = cardsArray.concat(cardsArray);

const parentDiv = document.querySelector("#card-section");

// created shuffle method and calling it 
const shuffle = (array) => {
    for (let index = array.length - 1; index > 0; index--) {
        let j = Math.floor(Math.random() * (index + 1))
        tempsave = array[index]
        array[index] = array[j]
        array[j] = tempsave
    }
    return array
}
const shuffledChild = shuffle(duplicateArrays)


// step 5
let clickCount = 0;
let firstCard = "";
let secondCard = "";

// style the final match cards 
const card_matches = () =>{
    let card_selected = document.querySelectorAll('.card_selected')

    card_selected.forEach((curElem) =>{
        curElem.classList.add('card_match')
    })
}


// step 7
const resetGame = () =>{
    firstCard = "";
    secondCard = "";
    clickCount = 0;

    let card_selected = document.querySelectorAll(".card_selected")

    card_selected.forEach((curElem)=>{
        curElem.classList.remove('card_selected')
    })
}

// step4 selected card 
parentDiv.addEventListener('click', (event) => {
    let curCard = event.target;

    if (curCard.id === 'card-section') { return false }
    clickCount++;

    if (clickCount < 3) {
        if (clickCount === 1) {
            firstCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected')

        }  else if (clickCount === 2){
            secondCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected')
        }
        if (firstCard !== "" && secondCard !== "") {
            if (firstCard === secondCard) {
                // curCard.classList.add('card_match')

                setTimeout(()=>{

                    card_matches()
                    resetGame()
                },1000)
            }else{
                setTimeout(() => {
                    resetGame()
                },1000)
            }
        }
    }
   

})



//   createing no of child divs as no of array 

for (let index = 0; index < shuffledChild.length; index++) {

    const childDiv = document.createElement('div')
    childDiv.classList.add('card')
    childDiv.dataset.name = shuffledChild[index].name;
    // childDiv.style.backgroundImage = `url(${shuffledChild[index].img})`
   

    const front_div  = document.createElement('div')
    front_div.classList.add("front-card")

    const back_div  = document.createElement('div')
    back_div.classList.add("back-card")
    back_div.style.backgroundImage = `url(${shuffledChild[index].img})`

    parentDiv.appendChild(childDiv)

    childDiv.appendChild(front_div)
    childDiv.appendChild(back_div)
}

