const pawdInput=document.getElementById('password');
const textStrength=document.getElementById('strength');
const check=document.getElementById('Submit');

pawdInput.addEventListener("input",function(){
    const password=pawdInput.value;
    const strength=getStrength(password);

    textStrength.textContent=strength.label;
    textStrength.style.color=strength.color;
});

check.addEventListener("click",function(){
    const password=pawdInput.value;
    const strength=getStrength(password);

    alert(`Password Strength :${strength.label}`);
})


function getStrength(password){

    let strength ={label:"Weak",color:"red"};

    const hasLetters=/[a-zA-z]/.test(password);
    const hasNumbers=/[0-9]/.test(password);
    const hasSpecial=/[!@#$%^&*(),.?:{}|<>]/.test(password);

    if(password.length>=8 && hasLetters && hasNumbers && hasSpecial){
        strength={label:"Strong",color:"green"};
    }else if (password.length>=6 && hasLetters && hasNumbers){
        strength={label:"Medium",color:"blue"};
    }

    return strength;
}
