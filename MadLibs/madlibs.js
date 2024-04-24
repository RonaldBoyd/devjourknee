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
alert(madlibs)
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

 story=`Once upon a time in a vibrant town called ${ hometown }, there lived a spirited young girl named ${ name }. At ${ age } years old, her curly hair shimmered with streaks of ${ color }, a color she adored for its uniqueness just like her personality. Her favorite food was a colorful rainbow ${ food }, a delightful mix of fresh veggies that matched her colorful outlook on life.

${ name }’s best friend was a playful and loyal golden ${ animal } named ${ petname }, who accompanied her on all her adventures. Together, they loved watching the classic movie "${ movie }," and their hearts would soar with the soundtrack's iconic song, "${ song }," echoing through their cozy home.

Despite her love for animals, ${ name } also had a passion for sports, especially ${ sport }. She would spend hours at the town’s shimmering lake, practicing her strokes and diving techniques with ${ petname } paddling alongside her. ${ name }'s favorite book was "${ book }" by ${ author }, which she would read under her favorite oak tree by the lake.

Every evening, ${ name } and her family would gather to watch their favorite show, "${ show }," a thrilling series about explorers discovering hidden treasures in far-off lands. ${ name }’s musical taste was as eclectic as her interests, and she adored the melodic tunes of the band ${ band }, whose lead singer’s voice always transported her to a world of dreams and possibilities.

One day, ${ hometown } hosted a grand talent show, and ${ name } decided to showcase her ${ sport } skills. With ${ petname } as her loyal companion, she dove gracefully, performing intricate underwater tricks that left the audience spellbound. The judges, impressed by her talent and determination, awarded her first prize.

As ${ name } stood on the stage, her heart full of joy, she realized that life, like her favorite colors, was a beautiful mosaic of experiences waiting to be explored. And with ${ petname } by her side and her love for music, books, and adventure, she knew that every day would be another chapter in her colorful journey.`

alert(story)

document.getElementById("mystory").innerHTML=story
}


