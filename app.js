const quiz = [
  {
    question:"ケモショタはえっちですか？",
    answers: [
      "えっちです！",
      "健全です！",
      ],
    correct: "えっちです！"
  },  {
    question:"ケモショタはオスですか？",
    answers: [
      "当然、オスです！",
      "メスのケモショタもいるかもしれない…。",
    ],
    correct: "当然、オスです！"
  },  {
    question:"偶然拾った奴隷ケモショタを…",
    answers: [
      "温かく迎え入れて、美味しいごはんを食べさせたい。",
      "調教して、えちえちにしたい。",
    ],
    correct: "温かく迎え入れて、美味しいごはんを食べさせたい。"
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;




const $button = document.getElementsByTagName("button");
const buttonLength = $button.length

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  
  let buttonIndex = 0;
  
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert("正解！") ; 
    score++;
    } else {
     window.alert("不正解！");
    }

    quizIndex++;

    if(quizIndex < quizLength){
     setupQuiz()
    } else {
      window.alert("終了！あなたの正解数は"+ score + "/" + quizLength + "です！");
      window.alert("お疲れ様でした!\nこのクイズアプリは勉強用に作ったものです。\n正解・不正解に特に意味はありませんので、あまり気になさらないでください。\n次は画像の表示方法を学んでいこうと思います。\n\n遊んでくださり、ありがとうございました！")
    }
};

//解答するとハンドラーインデックスが１増える。

let handlerIndex = 0;

while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
    });

  handlerIndex++;
}



