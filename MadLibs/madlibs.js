const userprompts=[
    "What is your name?",
    "What is your age?",
    "What is your home town?",
    "What is your favorite color?",
    "What is your favorite food?",
    "What is your favorite animal?",
    "What is your pet's name?",
    "What is your favorite movie?",
    "What is your favorite song?",
    "What is your favorite sport?",
    "What is your favorite book?",
    "What is your favorite TV show?",
    "What is your favorite band?",
    "What is your favorite actor?",
    "What is your favorite actress?",
    "What is your favorite singer?",
    "What is your favorite author?"
]

function populatevars(vars){
let libvars=[]
    for(i=0;i<vars.length;i++){
        libvar=prompt(vars[i])
        libvars.push(libvar)
    }
    return libvars
}

function executeprog(){
let madlibs=populatevars(userprompts)
//alert(madlibs)
for(let i=0;i<madlibs.length;i++){
    console.log(madlibs[i]+'\n')   
}

//let story=`${ madlibs[0] } ${ madlibs[1] } ${ madlibs[2] } ${ madlibs[3] } ${ madlibs[4] } ${ madlibs[5] }${ madlibs[6] } ${ madlibs[7] } ${ madlibs[8] } ${ madlibs[9] } ${ madlibs[10] } ${ madlibs[11] } ${ madlibs[12] } ${ madlibs[13] } ${ madlibs[14] } ${ madlibs[15] } ${ madlibs[16] }`

let name=madlibs[0],
    age=madlibs[1],
    hometown=madlibs[2]
    color=madlibs[3],
    food=madlibs[4],
     animal=madlibs[5],
     petname=madlibs[6]
     movie=madlibs[7],
     song=madlibs[8],
     sport=madlibs[9],
     book=madlibs[10],
      show=madlibs[11],
     band=madlibs[12],
     actor=madlibs[13],
     actress=madlibs[14],
     singer=madlibs[15],
     author=madlibs[16]

 story=`Once upon a time in a vibrant town called <span>${ hometown }</span>, there lived a spirited young girl named <span>${ name }</span>. At <span>${ age }</span> years old, her curly hair shimmered with streaks of <span>${ color }</span>, a color she adored for its uniqueness just like her personality. Her favorite food was a colorful rainbow <span>${ food }</span>, a delightful mix of fresh veggies that matched her colorful outlook on life.

<span>${ name }</span>’s best friend was a playful and loyal golden <span>${ animal }</span> named <span>${ petname }</span>, who accompanied her on all her adventures. Together, they loved watching the classic movie "<span>${ movie }</span>," and their hearts would soar with the soundtrack's iconic song, "<span>${ song }</span>," echoing through their cozy home.

Despite her love for animals, <span>${ name }</span> also had a passion for sports, especially <span>${ sport }</span>. She would spend hours at the town’s shimmering lake, practicing her strokes and diving techniques with <span>${ petname }</span> paddling alongside her. <span>${ name }</span>'s favorite book was "<span>${ book }</span>" by <span>${ author }</span>, which she would read under her favorite oak tree by the lake.

Every evening, <span>${ name }</span> and her family would gather to watch their favorite show, "<span>${ show }</span>," a thrilling series about explorers discovering hidden treasures in far-off lands. <span>${ name }</span>’s musical taste was as eclectic as her interests, and she adored the melodic tunes of the band <span>${ band }</span>, whose lead singer’s voice always transported her to a world of dreams and possibilities.

One day, <span>${ hometown }</span> hosted a grand talent show, and <span>${ name }</span> decided to showcase her <span>${ sport }</span> skills. With <span>${ petname }</span> as her loyal companion, she dove gracefully, performing intricate underwater tricks that left the audience spellbound. The judges, impressed by her talent and determination, awarded her first prize.

As <span>${ name }</span> stood on the stage, her heart full of joy, she realized that life, like her favorite colors, was a beautiful mosaic of experiences waiting to be explored. And with <span>${ petname }</span> by her side and her love for music, books, and adventure, she knew that every day would be another chapter in her colorful journey.`

//alert(story)

document.getElementById("mystory").innerHTML=story
}


