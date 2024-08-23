var getbtnmodal = document.getElementById('btn-modal');
var getmodalbox = document.getElementById('loginmodal');
var getbtnclose = document.querySelector('.btn-close');
var resetdemo = document.querySelector('.reset');

getbtnmodal.addEventListener('click',openmodal);

getbtnclose.addEventListener('click',closemodal);

resetdemo.addEventListener('click',reset);


window.onclick = function(e){
 if(e.target === getmodalbox){
  getmodalbox.style.display = "none";
 }
}

function openmodal(){
 getmodalbox.style.display = "block";
}

function closemodal() {
 getmodalbox.style.display = "none";
}

function reset() {
    document.getElementById('demo').innerHTML = "";
}

function display(){
    if(document.getElementById('date').value > 0 && document.getElementById('date').value < 32)
    {
        if(document.getElementById('month').value == "December"){
            if(document.getElementById('date').value < 22){
                document.getElementById('demo').innerHTML = "Your sign is Sagittarius";
            }
            else{
                document.getElementById('demo').innerHTML = "Your sign is Capricorn";
            }
        }
        else if(document.getElementById('month').value == "January"){
            if(document.getElementById('date').value < 20){
                document.getElementById('demo').innerHTML = "Your sign is Capricorn";
            }
            else{
                document.getElementById('demo').innerHTML = "Your sign is Aquarius";
            }
        }
        else if(document.getElementById('month').value == "February"){
            if(document.getElementById('date').value < 19){
                document.getElementById('demo').innerHTML = "Your sign is Aquarius";
            }
            else if(document.getElementById('date').value >19 && document.getElementById('date').value < 30){
                document.getElementById('demo').innerHTML = "Your sign is Pisces";
            }
            else{
                document.getElementById('demo').innerHTML = "Your input is incorrect";
            }
        }
        else if(document.getElementById('month').value == "March"){
            if(document.getElementById('date').value < 21){
                document.getElementById('demo').innerHTML = "Your sign is Pisces";
            }
            else{
                document.getElementById('demo').innerHTML = "Your sign is Aries";
            }
        }
        else if(document.getElementById('month').value == "April"){
            if(document.getElementById('date').value < 20){
                document.getElementById('demo').innerHTML = "Your sign is Aries";
            }
            else if (document.getElementById('date').value >20 && document.getElementById('date').value < 31){
                document.getElementById('demo').innerHTML = "Your sign is Taurus";
            }
            else {
                document.getElementById('demo').innerHTML = "Your input is incorrect";
            }
        }
        else if(document.getElementById('month').value == "May"){
            if(document.getElementById('date').value < 21){
                document.getElementById('demo').innerHTML = "Your sign is Taurus";
            }
            else{
                document.getElementById('demo').innerHTML = "Your sign is Gemini";
            }
        }
        else if(document.getElementById('month').value == "June"){
            if(document.getElementById('date').value < 21){
                document.getElementById('demo').innerHTML = "Your sign is Gemini";
            }
             else if (document.getElementById('date').value >21 && document.getElementById('date').value < 31){
                document.getElementById('demo').innerHTML = "Your sign is Cancer";
            }


            else{
                document.getElementById('demo').innerHTML = "Your input is incorrect";
            }
        }
        else if(document.getElementById('month').value == "July"){
            if(document.getElementById('date').value < 23){
                document.getElementById('demo').innerHTML = "Your sign is Cancer";
            }
            else{
                document.getElementById('demo').innerHTML = "Your sign is Leo";
            }
        }
        else if(document.getElementById('month').value == "August"){
            if(document.getElementById('date').value < 23){
                document.getElementById('demo').innerHTML = "Your sign is Leo";
            }
            else{
                document.getElementById('demo').innerHTML = "Your sign is Virgo";
            }
        }
        else if(document.getElementById('month').value == "September"){
            if(document.getElementById('date').value < 23){
                document.getElementById('demo').innerHTML = "Your sign is Virgo";
            }
            else if (document.getElementById('date').value >23 && document.getElementById('date').value < 31){
                document.getElementById('demo').innerHTML = "Your sign is Libra";
            }

            else{
                document.getElementById('demo').innerHTML = "Your input is incorrect";
            }
        }
        else if(document.getElementById('month').value == "October"){
            if(document.getElementById('date').value < 23){
                document.getElementById('demo').innerHTML = "Your sign is Libra";
            }
            else{
                document.getElementById('demo').innerHTML = "Your sign is Scorpio";
            }
        }
        else if(document.getElementById('month').value == "November"){
            if(document.getElementById('date').value < 22){
                document.getElementById('demo').innerHTML = "Your sign is Scorpio";
            }
            else if (document.getElementById('date').value >22 && document.getElementById('date').value < 31){
                document.getElementById('demo').innerHTML = "Your sign is Sagittarius";
            }
            else{
                document.getElementById('demo').innerHTML = "Your input is incorrect";
            }
        }

    }
    else{
        document.getElementById('demo').innerHTML = "Your input is incorrect";
    }   
}


















