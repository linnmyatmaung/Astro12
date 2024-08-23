document.getElementById("form").addEventListener('submit',function(show){
    const name= document.getElementById("name").value;
    const mail = document.getElementById("email").value;
    const comment = document.getElementById("comment").value;
    
    document.getElementById("nameErr").textContent= ' ';
    document.getElementById("mailErr").textContent= ' ';
    document.getElementById("commentErr").textContent= ' ';
    var newLine="\r\n";
    if (name.trim() === ''){
      document.getElementById('nameErr').textContent="Name is required";
      document.getElementById('nameErr').style.display = "block";
      event.preventDefault();
    }
   else if(mail.trim() === ''){
      document.getElementById('mailErr').textContent="Email is required.";
      document.getElementById('mailErr').style.display = "block";
      event.preventDefault();
    }
    else if (comment.trim() === ''){
      document.getElementById('commentErr').textContent="Please Enter Comment.";
      document.getElementById('commentErr').style.display = "block";
      event.preventDefault();
    }
    else{
      alert("Your comment is received well." +newLine+ "Thanks For Your Comment." +newLine+ "Have A Good Ones.")
    }
  
  });

  document.getElementById("form").addEventListener('reset',function(){
    document.getElementById("nameErr").style.display = "none";
    document.getElementById("mailErr").style.display = "none";
    document.getElementById("commentErr").style.display = "none";

  });

