/*const content=["Who is the first President of the United States?",
"James Madison","Benjamin Franklin","George Washington","Thomas Jefferson","3",
"What is the binary representation of 6?",
'0110','0010','1001','0100',"1"
]*/
const content={
	ques:["Who is the first President of the United States?",
	"What is the binary representation of 6?","What is a good estimate for the age of the earth?"],
	options:[["James Madison","Benjamin Franklin","George Washington","Thomas Jefferson"],
	['0110','0010','1001','0100'],["6000","4.5 billion","10000","1 million"]],
	correct:[3,1,2]
}

q=[`<p id='question'>${content.ques[0]}:</p>`,
`<input name='q1' type='radio' value='1'>  ${content.options[0][0]}`,
`<input name='q1' type='radio' value='2'> ${content.options[0][1]}`,
`<input name='q1' type='radio' value='3'> ${content.options[0][2]}`,
`<input name='q1' type='radio' value='4'> ${content.options[0][3]}`,
`<span id='correctAnswer'>${content.correct[0]}</span>`]

function makeTest(){
	for(let i=0;i<content.ques.length;i++){
		buildQuestion(i)
	}
}
function buildQuestion(n){
	const para = document.createElement('p')
	para.innerHTML=content.ques[n]
	document.getElementById('question').appendChild(para)

	const olist = document.createElement('ol')
	for(let i=0; i<4;i++){
		let litem = document.createElement('li')
		litem.innerHTML=`<input name='q${n}' type='radio' value='${i+1}'>`
		let textnode=document.createTextNode(content.options[n][i])
		litem.appendChild(textnode)
		olist.appendChild(litem)
	}
	document.getElementById('question').appendChild(olist)

	let correctAns=document.createElement('span')
	correctAns.setAttribute('id','correctAnswer')
	correctAns.innerHTML=content.correct
	document.getElementById('question').appendChild(correctAns)
}

function askQuestion(){
	//alert("Hello")
	for(i=0;i<q.length;i++){
		document.getElementById("question").innerHTML+=q[i]+'<br>'
	}
}

function checkAnswer(){
	let answer=parseurl()
	let score=0
	document.getElementById("output").innerHTML=""
	for(let i=0;i<answer.length;i++){
	if(answer[i]==content.correct[i]){
		alert("Right!")
		score++
	} else {
		alert("Wrong!")
		document.getElementById("output").innerHTML+="Wrong ==>"
	}
	document.getElementById("output").innerHTML+=content.ques[i]+'<br>'

}
alert(Math.round(100*score/content.correct.length))
document.getElementById("output").innerHTML+=score+" of "+content.correct.length
//window.location.reload(true)
}

function parseurl(){
	qstring=window.location.href.split('?')[1]
	let setOfAns=[]
	for(let i=0;i<content.correct.length;i++){
		ans=qstring.split('&')[i]
		ans=ans.split('=')[1]
		window.alert(ans)
		setOfAns.push(ans)
	}
	console.log(setOfAns)
	return setOfAns
}