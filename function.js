const tarotDeck = () => {
    var y = document.getElementsByClassName("tarotDeck");
    for(var i=0; i<5; i++) {
        y[i].src = "Tarotcard.jpeg";
    }
}

const tarotCard = () => {
    var x = document.getElementsByClassName("Tarotcard");
    for(var i=0; i<14; i++) {
        x[i].src = "Tarotcard.jpeg";
    }
}

const theDeath = () => {
    const paragraph1 = "There's a possibility of permanence here. If you're considering a commitment in a relationship or marriage this is a good sign.However, question your motives because here we have temptation and addiction, and a desire to be controlled or controlling. So use your intuition and if you recognise what you feel as being sincere, great. If not you still have a chance to change direction. If considering giving up a bad habit, such as smoking or drinking for example, now is a good time to start."
    const paragraph2 = "You are allowing yourself to be victimised and emotionally blackmailed by others or you're playing the martyr or victim to try to manipulate others. Don't be too materialistic or try and hang onto someone or something for all the wrong reasons. Someone or something has to go. You must find the ability to let go and give this up - don't worry it will turn out for the better for you."
    document.getElementById("cardImage").src = "https://mysticalbee.com/wp-content/uploads/2020/02/death-tarot-card.jpg";
    document.getElementById("Heading").innerHTML = "Death"
    document.getElementById("Title1").innerHTML = "What is going for you »"
    document.getElementById("Details1").innerHTML = paragraph1
    document.getElementById("Title2").innerHTML = " What is going against you »"
    document.getElementById("Details2").innerHTML = paragraph2
}

const theJudgment = () => {
    const paragraph1 = "You are self-assured and more than capable of influencing people or events to achieve what you want. What's more, support and guidance from your father, husband/partner or another man of significance in your life is there for the asking. Make the most of your resources."
    const paragraph2 = "There are conflicts around you, frustrations and possibly a breakup in a relationship. Be careful not to overreact and become too protective or dictatorial about your needs, and whatever you do, do not resort to emotional blackmail - it won't do you any favours. You may be experiencing infertility problems or an unplanned pregnancy. If so just know that there are people around you who love and care for you and will provide support."
    document.getElementById("cardImage").src = "https://upload.wikimedia.org/wikipedia/en/d/dd/RWS_Tarot_20_Judgement.jpg";
    document.getElementById("Heading").innerHTML = "Judgment"
    document.getElementById("Title1").innerHTML = "What is going for you »"
    document.getElementById("Details1").innerHTML = paragraph1
    document.getElementById("Title2").innerHTML = " What is going against you »"
    document.getElementById("Details2").innerHTML = paragraph2
}

const theHangedMan = () => {
    const paragraph1 = "The harvest is here; you are entering a cycle of abundance, happiness and joy. Creative energy is high so if you are considering starting a family, a new job or artistic endeavour this is a favourable time. Relax and enjoy."
    const paragraph2 = "It's like you're in a drug-induced haze - it feels great and always leaves you wanting more. This is addiction pure and simple, whether it's an obsessive sexual relationship, money deals that are too good to be true, materialism at any cost or recreational drugs. Take care - these pursuits won't lead to a happy ending. You may be overambitious at this time. Success may remain just out of your reach for a while. Are you being assertive and positive enough? Or are you using aggressive, bullying tactics to no avail?"
    document.getElementById("cardImage").src = "https://upload.wikimedia.org/wikipedia/en/2/2b/RWS_Tarot_12_Hanged_Man.jpg";
    document.getElementById("Heading").innerHTML = "Hanged Man"
    document.getElementById("Title1").innerHTML = "What is going for you »"
    document.getElementById("Details1").innerHTML = paragraph1
    document.getElementById("Title2").innerHTML = " What is going against you »"
    document.getElementById("Details2").innerHTML = paragraph2
}

const theKing = () => {
    const paragraph1 = "Despite the fear and bewilderment you feel, and the seeming difficulty of the path you have chosen, keep going - all will eventually turn out fine. The Moon is a good omen if you are in a clandestine affair; it also shows us how to be open to new and unexpected possibilities."
    const paragraph2 = "You may experience a few delays on your quest for success and achievement but don't worry, you'll get there in a blaze of glory. Success may go to your head a little, so a bit of modesty wouldn't go amiss. Other than a few minor delays, look forward to a period of joy and happiness. If you are experiencing problems with conceiving a baby, The Sun often heralds good news around children and a much wanted pregnancy or birth of a longed-for baby."
    document.getElementById("cardImage").src = "https://upload.wikimedia.org/wikipedia/en/0/04/Cups14.jpg";
    document.getElementById("Heading").innerHTML = "King of Cups"
    document.getElementById("Title1").innerHTML = "What is going for you »"
    document.getElementById("Details1").innerHTML = paragraph1
    document.getElementById("Title2").innerHTML = " What is going against you »"
    document.getElementById("Details2").innerHTML = paragraph2
}

const theQueen = () => {
    const paragraph1 = "All lines are open in your telephone exchange with your intuition, and there is no better guide than this intuition. Listen carefully and the secret you want revealed will be shared with you."
    const paragraph2 = "However hard you try to control events they just won't go your way. Unexpected challenges, upheaval and disappointment will bring expectations to an end. Subconsciously you may have wanted a solution - you just didn't expect it to happen this way. Use this period of change as an opportunity for a new beginning. If you have been planning to move home you will be experiencing setbacks. Do not misuse your authority. If you have requested help from a strong, successful man don't let him bully you - he either helps or leaves you to get on with things yourself."
    document.getElementById("cardImage").src = "https://cdn.shopify.com/s/files/1/1325/0879/files/queen-of-cups-meaning-rider-waite-tarot_large.jpg?v=1490201293";
    document.getElementById("Heading").innerHTML = "Queen of Cups"
    document.getElementById("Title1").innerHTML = "What is going for you »"
    document.getElementById("Details1").innerHTML = paragraph1
    document.getElementById("Title2").innerHTML = " What is going against you »"
    document.getElementById("Details2").innerHTML = paragraph2
}

const theStart = () => {
    const paragraph1 = "You feel there is hope, or if you don't, have faith - a tranquil period is imminent. If you have been ill, suffered bereavement or disappointment in love, take heart, good fortune is on its way. New horizons are indicated and you will feel a new zest for life. This is your wish card - if considering a new love affair, new job or career, or travel, then go for it. You may also receive a gift or gifts!"
    const paragraph2 = "This is a period of tension and frustrations: you feel pessimistic and fearful that your hopes will be dashed. Any bad luck you may be having is primarily down to your self-doubt and negativity. Have faith that your luck will change."
    document.getElementById("cardImage").src = "https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_17_Star.jpg";
    document.getElementById("Heading").innerHTML = "The Star"
    document.getElementById("Title1").innerHTML = "What is going for you »"
    document.getElementById("Details1").innerHTML = paragraph1
    document.getElementById("Title2").innerHTML = " What is going against you »"
    document.getElementById("Details2").innerHTML = paragraph2
}

const theStrenth = () => {
    const paragraph1 = "Brave heart! Your self-confidence and courageous spirit is unstoppable at the moment. Be patient and compassionate, self-disciplined and strong and you will reap great rewards for your courage."
    const paragraph2 = "This is a period of anxiety, depression and fear with all the turmoil and distressing events happening in your life. It's time to show what you are made of. What has now come to an end leaves room for brand new beginnings in life, love and career. However radical events may be in your life, believe that life goes on and life is what you make of it. You fear letting go, yet this place of limbo and indecision is not a good place to be. Are you being emotionally blackmailed so you don't leave? Don't be the victim. Sometimes we have to have the strength to let go to attract new positive possibilities into our life."
    document.getElementById("cardImage").src = "https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg";
    document.getElementById("Heading").innerHTML = "Strenth"
    document.getElementById("Title1").innerHTML = "What is going for you »"
    document.getElementById("Details1").innerHTML = paragraph1
    document.getElementById("Title2").innerHTML = " What is going against you »"
    document.getElementById("Details2").innerHTML = paragraph2
}

const theDevil = () => {
    const paragraph1 = "This is a transformational time for you. However turbulent or perhaps distressing some of the events in your life may be, endings always leave room for brand new beginnings. This is a fresh start in life for you, embrace it and live every day as though it were your last - life is for living!"
    const paragraph2 = "You may be overambitious at this time. Success may remain just out of your reach for a while. Are you being assertive and positive enough? Or are you using aggressive, bullying tactics to no avail? Do not misuse your authority. If you have requested help from a strong, successful man don't let him bully you - he either helps or leaves you to get on with things yourself."
    document.getElementById("cardImage").src = "https://upload.wikimedia.org/wikipedia/en/5/55/RWS_Tarot_15_Devil.jpg";
    document.getElementById("Heading").innerHTML = "The Devil"
    document.getElementById("Title1").innerHTML = "What is going for you »"
    document.getElementById("Details1").innerHTML = paragraph1
    document.getElementById("Title2").innerHTML = " What is going against you »"
    document.getElementById("Details2").innerHTML = paragraph2
}

const theLovers = () => {
    const paragraph1 = "New love and commitment will enter your life, even if there's no one on the horizon - be prepared for a surprise. Throw caution to the wind and expect joyous and happy times ahead."
    const paragraph2 = "You are afraid your world is falling apart: you're experiencing sudden changes and disruption and you don't know what to do. Perhaps subconsciously you've wanted a solution to an issue but didn't quite expect things to have turned out as they have. Use this change as an opportunity for a new beginning."
    document.getElementById("cardImage").src = "https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg";
    document.getElementById("Heading").innerHTML = "The Lovers"
    document.getElementById("Title1").innerHTML = "What is going for you »"
    document.getElementById("Details1").innerHTML = paragraph1
    document.getElementById("Title2").innerHTML = " What is going against you »"
    document.getElementById("Details2").innerHTML = paragraph2
}

const theEmpress = () => {
    const paragraph1 = "The harvest is here; you are entering a cycle of abundance, happiness and joy. Creative energy is high so if you are considering starting a family, a new job or artistic endeavour this is a favourable time. Relax and enjoy."
    const paragraph2 = "You are at risk of doing something hasty out of impatience and rage. This is not a time for irrational and impulsive behaviour - don't be cantankerous (if closer to old than young!) or arrogant and resentful (if closer to young than old!) Try and remain calm and let the rage go. Take time to make a cool and collected decision. The Hermit signals a warning not to make hasty decisions."
    document.getElementById("cardImage").src = "https://upload.wikimedia.org/wikipedia/en/d/d2/RWS_Tarot_03_Empress.jpg";
    document.getElementById("Heading").innerHTML = "The Empress"
    document.getElementById("Title1").innerHTML = "What is going for you »"
    document.getElementById("Details1").innerHTML = paragraph1
    document.getElementById("Title2").innerHTML = " What is going against you »"
    document.getElementById("Details2").innerHTML = paragraph2
}

const theMagician = () => {
    const paragraph1 = "You are instinctively taking time to relax and reflect, drawing on your inner strength and wisdom to guide you through this difficult period in your life. Time is a great healer, so even if you don't know quite what to do now, you will eventually make the right decision. The Hermit signals a warning not to make hasty decisions. Make sure you observe a period of rest and recuperation if you have been unwell."
    const paragraph2 = "However hard you try to control events they just won't go your way. Unexpected challenges, upheaval and disappointment will bring expectations to an end. Subconsciously you may have wanted a solution - you just didn't expect it to happen this way. Use this period of change as an opportunity for a new beginning. If you have been planning to move home you will be experiencing setbacks."
    document.getElementById("cardImage").src = "https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg";
    document.getElementById("Heading").innerHTML = "The Magician"
    document.getElementById("Title1").innerHTML = "What is going for you »"
    document.getElementById("Details1").innerHTML = paragraph1
    document.getElementById("Title2").innerHTML = " What is going against you »"
    document.getElementById("Details2").innerHTML = paragraph2
}

const theSun = () => {
    const paragraph1 = "The Sun is shining on you - it's your time for success, joy and happiness. You will feel confident and full of vitality. It's a time to celebrate with friends and loved ones, perhaps enjoy a well-earned holiday, a time of pleasure and good news around children or the conception or birth of a longed-for baby. If you are not feeling this way take heart, you will enter this period soon."
    const paragraph2 = "Life will seem hectic and full of challenges and you will find it hard to have the right perspective on things. You may have a rival in love or at work. Think about whether the relationship or the job is really right for you. This is a time for being calm and patient and life will soon have a sense of normality again."
    document.getElementById("cardImage").src = "https://upload.wikimedia.org/wikipedia/en/1/17/RWS_Tarot_19_Sun.jpg";
    document.getElementById("Heading").innerHTML = "The Sun"
    document.getElementById("Title1").innerHTML = "What is going for you »"
    document.getElementById("Details1").innerHTML = paragraph1
    document.getElementById("Title2").innerHTML = " What is going against you »"
    document.getElementById("Details2").innerHTML = paragraph2
}

const theMoon = () => {
    const paragraph1 = "At this time you desire clarity and less of those confused emotions that leave you fearful and vulnerable. You want to know the outcome because you are so unsure about how you feel. Use your intuition to guide you away from deception and ride this out - it will turn out alright in the end. The Moon is also a good omen if you are in a clandestine affair."
    const paragraph2 = "You fear letting go, yet this place of limbo and indecision is not a good place to be. Are you being emotionally blackmailed so you don't leave? Don't be the victim. Sometimes we have to have the strength to let go to attract new positive possibilities into our life."
    document.getElementById("cardImage").src = "https://upload.wikimedia.org/wikipedia/en/7/7f/RWS_Tarot_18_Moon.jpg";
    document.getElementById("Heading").innerHTML = "The Moon"
    document.getElementById("Title1").innerHTML = "What is going for you »"
    document.getElementById("Details1").innerHTML = paragraph1
    document.getElementById("Title2").innerHTML = " What is going against you »"
    document.getElementById("Details2").innerHTML = paragraph2
}