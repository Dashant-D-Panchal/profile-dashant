document.getElementById("myform").addEventListener("submit", function (event) {
  event.preventDefault();
});
function sub() {
  fname()
  user()
  email()
  psw()
  cpsw()
  numb()
  validateAge();
  gndr()
  subm()
}

// this is for name
const fname = () => {
  const name = document.getElementById("fname").value;
  if (name.length == 0) {
    alert("Please enter your name");
    return false
  }else if (name.length < 5) {
    alert("Name is too short");
    return false;
  } else {
    return true;
  }
};

// this is for username
const user = () => {
  const usern = document.getElementById("uname").value;
  if (usern.length == 0) {
    alert("Please enter username");
    return false
  } else if (usern.length < 8) {
    alert("username is too short");
    return false;
  } else {
    return true;
  }
};

// this is for email
const email = () => {
  const mail = document.getElementById("email").value;
  if (mail.length > 50) {
    alert("email is too long");
    return false;
  } else {
    return true;
  }
};

// this is for password
const psw = () => {
  const pswd = document.getElementById("psw").value;
  if (pswd.length == 0) {
    alert("please enter password");
  } else if (
    /[a-z]/.test(pswd) &&
    /[A-Z]/.test(pswd) &&
    /[0-9]/.test(pswd) &&
    /[!@#$%&]/.test(pswd)
  ) {
    return true;
  } else {
    alert("Please enter valid Password");
    return false;
  }
};

//this is for password conformation
const cpsw = () => {
  const psw = document.getElementById("psw").value;
  const cpsw = document.getElementById("cpsw").value;
  if (cpsw !== psw) {
    alert("please chack password");
    return false;
  } else {
    return true;
  }
};

// this is for phone number
const numb = () => {
  const num = document.getElementById("pnum").value;
  if (num.length == 0) {
    alert("Please enter phone number");
    return false
  } else if (num.length !== 10) {
    alert("Please enter valid Number");
    return false
  } else {
    if (num.length == 10) {
      let a = num % 1000000000;
      let b = (num - a) / 1000000000;
      if (b == 6 || b == 7 || b == 8 || b == 9) {
        return true;
      } else {
        alert("check Phone Number");
        return false
      }
    }
  }
};

//this is for birth date
function validateAge() {
  const dobInput = document.getElementById("dob").value;
  const result = document.getElementById("text");

  if (!dobInput) {
    result.textContent = "Please select your date of birth.";
    result.style.color = "red";
    return;
  }

  const dob = new Date(dobInput);
  const today = new Date();

  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  const dayDiff = today.getDate() - dob.getDate();
  
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  if (age >= 18) {
    result.textContent = "You are eligible. Age: " + age;
    return true
  } else {
    result.textContent = "You must be at least 18 years old. Age: " + age;
    result.style.color = "red";
    return false
  }
}


//this is for gender
const gndr = () => {
  const gnder = document.getElementById("gender").value;

  if(gnder == "select"){
    alert("Plese select your gender")
    return false
  }else if(gnder == "female"){
    return true 
  }else if(gnder == "male"){
    return true 
  }else{
    return true 
  }
}

//this is for submit form
function subm(){
  var usern = document.getElementById("uname").value;
  var naam = document.getElementById("fname").value;
  var mail = document.getElementById("email").value;
  var pswd = document.getElementById("psw").value;
  var num = document.getElementById("pnum").value;
  var dobInput = document.getElementById("dob").value;
  var gnder = document.getElementById("gender").value;

  var pereson = [usern, naam, mail, pswd, num, dobInput, gnder]
  // const usercount = localStorage.length + 1;
  localStorage.setItem(`${usern}`, JSON.stringify(pereson))

const storedValue = localStorage.getItem(`${usern}`);

if (storedValue !== null) {
  console.log(`Data exists for username "${usern}"`);
} else {
  // Data does not exist for the specified key
  console.log(`No data found for key '${pereson}'.`);
}
  if(fname() == false || user() == false || email() == false || psw() == false || cpsw() == false || numb() == false || validateAge() == false || gndr() == false){
    console.log("function is not working");
  }
  else{
    console.log("function is working");
    document.getElementById("subtext").innerHTML = "Your Form Is Submited";
    document.getElementById("subtext").style.color = "green";
    let main = document.querySelector(".main");
    main.scrollIntoView({behavior: "smooth", block: "end"})
    setTimeout(() => {
      location.reload()
    }, 4000);
  }
}