let cardsArray = [
    {
        'name': 'CSS',
        'img': 'image/css.png',
    },
    {
        'name': 'HTML',
        'img': 'image/html.jpg',
    },
    {
        'name': 'jQuery',
        'img': 'image/jquery.jpg',
    },
    {
        'name': 'JS',
        'img': 'image/js.jpg',
    },
    {
        'name': 'Node',
        'img': 'image/node.jpg',
    },
    {
        'name': 'Python',
        'img':'image/python.jpg',
    }
];


const parentDiv = document.querySelector('#card-section');
const gameCard = cardsArray.concat(cardsArray)
console.log(gameCard)
   const myNumbers = (array) => {
     for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1))
            // console.log(i, j)
             let temp = array[i]
            array[i] = array[j]
             array[j] = temp
        }
         return array
     }
          const shuffledChild = myNumbers(gameCard)
          let clickCount=0;
          let firstCard = "";
          let secondCard = "";
          const card_matches=()=>{
            let card_selected=  document.querySelectorAll('.card_selected');

            card_selected.forEach((curElem) => {
                curElem.classList.add('card_match')
            })
          }
          const resetGame = () => {
            firstCard = "";
            secondCard = "";
            clickCount = 0;
    
            let card_selected = document.querySelectorAll('.card_selected');
    
            card_selected.forEach((curElem) => {
                curElem.classList.remove('card_selected')
            })
            
        }
          parentDiv.addEventListener('click', (event) => {
            let curCard = event.target;
clickCount++;
if(clickCount<3){
    if(clickCount===1){
        firstCard=curCard.parentNode.dataset.name;
        curCard.parentNode.classList.add('card_selected')
    }
    else{
        secondCard=curCard.parentNode.dataset.name;
        curCard.parentNode.classList.add('card_selected')
    }
    if(firstCard!==""&& secondCard!==""){

    if(firstCard===secondCard){
     // curCard.classList.add('card_match')
     setTimeout(() => {
        card_matches();
     resetGame();
     },1000);
    }else{
        setTimeout(()=>{
            resetGame()
        },1000)
    }

}}

              if(curCard.id==="card-section"){return false}
           
           
          })
     
for(let i=0;i<gameCard.length;i++){
    const childDiv=document.createElement('div')
    childDiv.classList.add('card')
    childDiv.dataset.name=gameCard[i].name
    //childDiv.style.backgroundImage=`url(${gameCard[i].img})`
    const front_div = document.createElement('div');
    front_div.classList.add('front-card')

    const back_div = document.createElement('div');
    back_div.classList.add('back-card')
    back_div.style.backgroundImage=`url(${gameCard[i].img})`

    parentDiv.appendChild(childDiv)
childDiv.appendChild(front_div)
childDiv.appendChild(back_div)
}