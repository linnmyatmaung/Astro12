var message= document.getElementById('message');
var guess = document.getElementById('btn');
var reset = document.getElementById('reset');
function show(){
    message.style.marginTop="50px"
    message.style.padding ="30px";
    message.style.width="100vh"
    message.style.border="2px solid"
    message.style.boxShadow="rgba(0,0, 0, 0.6) 0px 22px 70px 5px";
    message.style.borderRadius="2px"
    message.style.display="block";
    if(document.getElementById('guess').value >0 && document.getElementById('guess').value <32)
    {
    if(document.getElementById('guess').value==1){
            document.getElementById('message').innerHTML ="You are a self-starter with very innovative ways of creating opportunity. You’ve never been afraid to be the first to try something new. Your determination and endurance are powerful and will help you get through times of struggle and reach success.";
          }
   else if(document.getElementById('guess').value==2){
                document.getElementById('message').innerHTML  ="If your birthday is the 2nd, you have a great talent for finding solutions. Your intuitive and unbiased nature allows you to see all sides of any situation and advise others toward the most fair and beneficial outcome. ";
             }
    else if(document.getElementById('guess').value==3){
        document.getElementById('message').innerHTML  ="Expression comes naturally to you. You are very skilled at communicating your thoughts through conversation and creative pursuits, and your upbeat, charismatic presence inspires others to get onboard with your ideas. "
    }
    else if(document.getElementById('guess').value==4){
        document.getElementById('message').innerHTML  ="With a birthday number of 4, you bring stability and rationality to any situation. You are the rock and your hard work and perseverance make you a dependable friend, colleague, parent, and partner.        "
    }
    else if(document.getElementById('guess').value==5){
        document.getElementById('message').innerHTML  ="Flexibility is your forte. When life throws you a curveball, you can easily adapt to new circumstances and find excitement in the unexpected change. This ability to turn on a dime gives you the power to jump on brief opportunities others may miss.        "
    }
    else if(document.getElementById('guess').value==6){
        document.getElementById('message').innerHTML  ="If your date of birth is the 6th, then your heart is your gift. You are a natural-born nurturer and have a great talent for helping and healing others. You are the epitome of self-sacrifice and a fierce protector of those you love.        "
    }
    else if(document.getElementById('guess').value==7){
        document.getElementById('message').innerHTML  ="You possess a very refined mind and a deep urge to uncover life’s mysteries. Your ability to acquire vast knowledge on both the informational and spiritual planes gives you a greater awareness than most.        "
    }
    else if(document.getElementById('guess').value==8){
        document.getElementById('message').innerHTML  ="With a birthday number of 8, yours is a story of success. Your talent for setting and reaching goals is like no other. You are self-sufficient and capable and hold a great amount of power to achieve your ambitions.        "
    }
    else if(document.getElementById('guess').value==9){
        document.getElementById('message').innerHTML  ="It’s your compassion that makes you shine. You’re devoted to helping the greater good and have a strong talent for speaking up for others. Your soul is most satisfied when you are giving and being of service.        "
    }
    else if(document.getElementById('guess').value==10){
        document.getElementById('message').innerHTML  ="Your birthday number of 10 blesses you with great leadership skills. Your mind is sharp and allows you to dream up ingenious ideas and organize all the details, then direct others how to carry things out.        "
    }
    else if(document.getElementById('guess').value==11){
        document.getElementById('message').innerHTML  ="You have a keen awareness of what’s happening around you. A strong intuition is your gift and will help you understand the unspoken feelings, thoughts, and fears of others. This insight allows you to be a great guide and supporter.        "
    }
    else if(document.getElementById('guess').value==12){
        document.getElementById('message').innerHTML  ="With the number 12 as your date of birth, creativity is a driving force in your life. Your imagination is rich and you are able to express your feelings and insights in unique ways that others can benefit from.        "
    }
    else if(document.getElementById('guess').value==13){
        document.getElementById('message').innerHTML  ="Driven by the number 13, you are a conscientious worker with a knack for coming up with creative ideas and turning them into something real. An optimistic but practical outlook keeps you determined and on track as you work steadily toward your goals.        "
    }
    else if(document.getElementById('guess').value==14){
        document.getElementById('message').innerHTML  ="You are open-minded and always up to try something new, yet you are wise enough to stop and think before you jump right into things. This pragmatic approach helps ensure your time, attention, and efforts are directed into meaningful experiences.        "
    }
    else if(document.getElementById('guess').value==15){
        document.getElementById('message').innerHTML  ="If you were born on the 15th day of the month, your love for others is powerful and you are able to spread your gift of support far and wide. Your curious and social nature brings you into contact with a variety of people, all who would benefit from your heartfelt words of wisdom.        "
    }
    else if(document.getElementById('guess').value==16){
        document.getElementById('message').innerHTML  ="Your birthday number of 16 blesses you with an inquisitive mind that allows you to uncover important truths. You have a special ability to read into other people’s feelings and motives and share with them your wisdom.        "
    }
    else if(document.getElementById('guess').value==17){
        document.getElementById('message').innerHTML  ="You are both open-minded and open-hearted and your ambition is to leave this world better than you found it. You are independent by nature but will feel most fulfilled and successful when you are of service to others.  "
    }
    else if(document.getElementById('guess').value==18){
        document.getElementById('message').innerHTML  ="You are both open-minded and open-hearted and your ambition is to leave this world better than you found it. You are independent by nature but will feel most fulfilled and successful when you are of service to others.        "
    }
    else if(document.getElementById('guess').value==19){
        document.getElementById('message').innerHTML  ="With your birthday number being 19, independence and self-sufficiency are necessities to you. You are extremely capable in life and work and aren’t afraid to take big risks to achieve the life you desire.        "
    }
    else if(document.getElementById('guess').value==20){
        document.getElementById('message').innerHTML  ="You relate to others on an almost cosmic level. You are dedicated to building cooperative, harmonious relationships of all kinds and can use your sensitive intuition to sense and address the needs of others.        "
    }
    else if(document.getElementById('guess').value==21){
        document.getElementById('message').innerHTML  ="If your birthday is on the 21st, you thrive in active social settings and find great value in connecting with people. Your natural charm paired with your creative styles of thinking and communicating makes you an exciting and inspiring presence to those in your life.        "
    }
    else if(document.getElementById('guess').value==22){
        document.getElementById('message').innerHTML  ="A birthday number of 22 gives you the power to create great things. You are determined and hardworking and your ability to cooperate with others makes you an effective teammate or leader.        "
    }
    else if(document.getElementById('guess').value==23){
        document.getElementById('message').innerHTML  ="You have a real zest for life and you’re eager to experience anything and everything possible. You approach relationships and situations in an easygoing way and are a source of optimism and inspiration for others.        "
    }
    else if(document.getElementById('guess').value==24){
        document.getElementById('message').innerHTML  ="With your birthday number being 24, you have a heart of gold and are very skilled at maintaining balanced, stable relationships. You are loyal to your loved ones and are able to be the nurturer, protector, and provider all at once.        "
    }
    else if(document.getElementById('guess').value==25){
        document.getElementById('message').innerHTML  ="You have a great ability to take in and process information on both conscious and subconscious levels. Your curiosity is endless and your desire to dive deep into a variety of subjects will bring you an immense awareness of the world.        "
    }
    else if(document.getElementById('guess').value==26){
        document.getElementById('message').innerHTML  ="If you were born on the 26th day of the month, you have a desire to succeed and will feel most accomplished when your work benefits others. Your intuitive awareness of what people want allows you to come up with innovative solutions to meet their needs.        "
    }
    else if(document.getElementById('guess').value==27){
        document.getElementById('message').innerHTML  ="Your mind is wide open and you are tolerant and compassionate toward all ways of life. You are able to take in a vast amount of insights and information and apply this knowledge toward the greater good.        "
    }
    else if(document.getElementById('guess').value==28){
        document.getElementById('message').innerHTML  ="In an effort to accomplish great things, you recognize the value of working with others. You make a capable and compassionate leader who can bring people together and drive the team toward achievement.        "
    }
    else if(document.getElementById('guess').value==29){
        document.getElementById('message').innerHTML  ="With a birthday number of 29, you have an amazing ability to bring things together. You receive powerful subconscious insights that help you clearly see how everything and everyone is connected.        "
    }
    else if(document.getElementById('guess').value==30){
        document.getElementById('message').innerHTML  ="If the date of your birth is the 30th, you are an original, innovative thinker and an excellent communicator. You have a great talent for using creativity to convey your ideas and your optimistic attitude has an uplifting effect on others.        "
    }
    else if(document.getElementById('guess').value==31){
        document.getElementById('message').innerHTML  ="Your approach to life is an effective mix of both practicality and imagination. Your mind is stirring with creative ideas and you have the organizational skills to manifest them on the physical plane.        "
    }
}
else{
    document.getElementById('message').innerHTML="Please enter 1 to 31";
}
}
window.onclick = function(e){
    if(e.target === reset){
      message.style.display="none"
    }
}
function change(){
    document.getElementById('guess').value= " ";
}