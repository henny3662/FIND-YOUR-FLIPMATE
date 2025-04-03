const questions = [
    {
        question: "你和KICKFLIP在準備去演唱會的路上，途中卻發生了一點小插曲——巴士突然拋錨了！大家只好下車在路邊等候維修。這時，成員們的反應各不相同，你最想跟哪位成員一起行動？",
        answers: [
            { text: "「笑死，這種事也能遇到？」", type: "A" },
            { text: "「其實這樣也不錯吧？」", type: "B" },
            { text: "「欸，維修車子感覺很酷耶！」", type: "C" },
            { text: "「有點餓了……」", type: "D" },
            { text: "「欸欸，那邊有籃球場！」", type: "E" },
            { text: "「趁這時間來打把遊戲？」 ", type: "F" },
            { text: "「先整理一下狀況吧。」", type: "G" }

        ]
    },
    {
        question: "KICKFLIP決定辦一場遊戲比賽度過這個漫長的時間，贏的人可以獲得特別獎勵！你選擇？",
        answers: [
            { text: "炸雞大胃王比賽 ", type: "D" },
            { text: "BRAWL STARS對戰", type: "F" },
            { text: "頭腦型策略遊戲", type: "G" },
            { text: "叢林闖關賽", type: "B" },
            { text: "解謎類遊戲", type: "C" },
            { text: "籃球比賽", type: "E" },
            { text: "誰先笑就輸了比賽", type: "A" }

        ]
    },
    {
        question: "你的獎勵是體驗一天偶像生活，在粉絲見面會上，你上台後的第一句話是？",
        answers: [
            { text: "「大家今天都開心嗎？希望你們也有好心情！」(露出燦爛的笑容)", type: "B" },
            { text: "「啊，大家好…」(手緊握麥克風，想努力遮掩自己緊張的心情)", type: "E" },
            { text: "「大家好!我是XXX」(超熱情，嗓門超大，一值再飯撒)", type: "F" },
            { text: "「(一上台就先唱一小段)」", type: "G" },
            { text: "「大家吃飯了嗎?晚餐要吃什麼呢」(把所有食物都想過一遍了)", type: "D" },
            { text: "「我今天染頭髮了」（帽子戴的實實的，但其實根本沒染）", type: "A" },
            { text: "「大家辛苦了!一定有很多大老遠跑來看我的粉絲吧!」(心疼又開心)", type: "C" }

        ]
    },
    {
        question: "過了好一段時間，車終於修好了，在演出前你要與成員們一起吃飯，你會選擇？",
        answers: [
            { text: "速食店", type: "D" },
            { text: "燒肉店", type: "A" },
            { text: "日式拉麵店", type: "F" },
            { text: "戶外咖啡廳", type: "B" },
            { text: "美式酒吧", type: "E" },
            { text: "老式復古咖啡廳", type: "C" },
            { text: "高級西餐廳", type: "G" }

        ]
    },
    {
        question: "吃飯聊天實，成員們要你推薦一套屬於他們的服裝，你會選擇？",
        answers: [
            { text: "強烈潮流風格的服裝", type: "C" },
            { text: "成熟的質感西裝", type: "G" },
            { text: "軟萌系服裝", type: "F" },
            { text: "簡單舒適的寬鬆服裝", type: "B" },
            { text: "布偶裝", type: "A" },
            { text: "韓系服裝", type: "D" },
            { text: "美式運動風的服裝", type: "E" }

        ]
    },
    {
        question: "吃飽飯後，你們拍了一張照做紀念，你的動作是？",
        answers: [
            { text: "沒什麼動作，表情淡淡的比個耶", type: "D" },
            { text: "臉頰愛心", type: "G" },
            { text: "把耶放在你隔壁成員的頭上", type: "A" },
            { text: "手戳臉頰微笑", type: "C" },
            { text: "嘟嘴比耶", type: "F" },
            { text: "傻傻地笑著比個讚", type: "E" },
            { text: "露齒笑做小狗耳朵", type: "B" }

        ]
    },
    {
        question: "到達演出現場後，你發現你擔一個人呆呆的呆在角落，你的反應是？",
        answers: [
            { text: "拿食物走到他面前問他要不要", type: "D" },
            { text: "觀察許久後小心翼翼的關心", type: "E" },
            { text: "認真地看著他問:「你還好嗎？」", type: "G" },
            { text: "遞上一瓶水，默默關注但不打擾", type: "B" },
            { text: "拿出手機跟他自拍一張", type: "C" },
            { text: "從後面嚇他", type: "A" },
            { text: "抱著他撒嬌問怎麼了", type: "F" }

        ]
    },
    {
        question: "演出進行中，你發現他們準備了特別影片給粉絲，希望內容是？",
        answers: [
            { text: "個人魅力展現影片", type: "G" },
            { text: "整人策畫影片", type: "A" },
            { text: "收藏品分享", type: "C" },
            { text: "運動健身日常", type: "E" },
            { text: "吃播", type: "D" },
            { text: "遊戲實況轉播", type: "F" },
            { text: "成員們去露營的VLOG", type: "B" }

        ]
    },
    {
        question: "演出結束後，你被邀請成為他們的內部工作人員，你最想負責團隊裡的哪個角色？",
        answers: [
            { text: "營養師", type: "D" },
            { text: "經紀人", type: "A" },
            { text: "舞蹈總監", type: "F" },
            { text: "音樂製作人", type: "B" },
            { text: "創意總監", type: "C" },
            { text: "宣傳公關", type: "E" },
            { text: "聲樂總監", type: "G" }

        ]
    },
    {
        question: "一覺醒來，你發現這只是一場夢，如果你的人生是一部電影，你希望是哪種類型？",
        answers: [
            { text: "奇幻冒險", type: "E" },
            { text: "時尚青春", type: "C" },
            { text: "電競科技", type: "F" },
            { text: "美食紀錄", type: "D" },
            { text: "人生傳記", type: "G" },
            { text: "爆笑喜劇", type: "A" },
            { text: "治癒溫暖", type: "B" }

        ]
    }
];

let currentQuestionIndex = 0;
let score = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0};

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

function startQuiz() {
    currentQuestionIndex = 0;
    score = { A: 0, B: 0,  C: 0, D: 0, E: 0, F: 0, G: 0};
    nextButton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer.type));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    answerButtons.innerHTML = "";
   
    
}

function selectAnswer(type) {
    score[type]++;
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    // 找出得分最高的類型
    let maxKey = Object.keys(score).reduce((a, b) => score[a] > score[b] ? a : b);

    // 對應結果
    let resultText = {
        A: "Kyehoon是你的專屬flipmate!你的幽默感讓大家離不開你，總能在關鍵時刻拯救冷場，讓氣氛變得超輕鬆！但別以為你只是搞笑擔當，其實你內心很有責任感，當朋友遇到困難時，你總是第一個跳出來幫忙！",
        B: "Amaru是你的專屬flipmate!你的存在就像一杯溫暖的茶，讓人忍不住想依靠。你喜歡照顧別人，對於周圍人的情緒很敏感，總是能在對的時機給出安慰和支持。和你相處讓人覺得非常放鬆！",
        C: "Donghwa是你的專屬flipmate!你喜歡有格調、有深度的事物，對美感超級敏感，無論是穿搭、攝影還是音樂品味，都走在潮流最前線。你的腦袋裡總是有很多點子，有時候小劇場也有點多，但這正是你的魅力所在！",
        D: "Juwang是你的專屬flipmate!你不太愛搶風頭，習慣待在舒適的角落，但你的魅力就在於這種神祕感，雖然話不多，但一開口總能讓人印象深刻!",
        E: "Minje是你的專屬flipmate!你擁有一顆善良純淨的心，遇到困難時會有想放棄的瞬間，但一旦挺過去了，你會擁有極大的行動力。但你的出色的外型常常帶著一點呆萌氣質，讓人覺得很反差可愛！",
        F: "Keiju是你的專屬flipmate!性格很好的你總會給大家帶來許多能量，你的內心柔軟，容易被小事感動。當你在追夢，做著熱愛的事情時，你整個人都在發光!",
        G: "Donghyeon是你的專屬flipmate!你給人一種穩重成熟的感覺，言行舉止總是讓人覺得很可靠，很會照顧身邊的人，無論是生活大小事還是情緒安慰，你都能處理得很好。當你想展現魅力的時候，會讓人無法招架！"
    };
    
    // 顯示測驗結果
    console.log(resultText[maxKey]); // 這裡之後可以改成顯示在網頁上
    document.body.className = ""; // 先清空 class
    document.body.classList.add(`bg-${maxKey}`); // 加上對應的背景 class

    questionElement.innerText = resultText[maxKey]; // 修正這一行
    answerButtons.innerHTML = ""; // 清空答案區，避免殘留
    nextButton.innerText = "重新測驗";
    nextButton.style.display = "block";
    nextButton.onclick = startQuiz; // 修正事件綁定方式
}

startQuiz();
