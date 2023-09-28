// console.log(`jay shree ram`);

let btn = document.querySelector("button");
let userText = document.querySelector("textarea");
let utternace = new SpeechSynthesisUtterance();

let voices = [];
let selectVoice = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = (e) => {
  voices = window.speechSynthesis.getVoices();


  
  // Filter the voices for Hindi and English
  const hindiVoices = voices.filter((voice) => voice.lang.startsWith("hi"));
  const englishVoices = voices.filter((voice) => voice.lang.startsWith("en"));


  // Set the default voice to the first Hindi or English voice
  utternace.voice = hindiVoices[0] || englishVoices[0];



  // Populate the select options only with Hindi and English voices
  hindiVoices.concat(englishVoices).forEach((element, i) => {
    selectVoice.options[i] = new Option(element.name, i);
  });
};

btn.addEventListener("click", () => {
  utternace.text = userText.value;
  // utternace.lang = "hi-IN";
  window.speechSynthesis.speak(utternace);
});


document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
})

document.addEventListener('keydown', (e) => {
    if((e.ctrlKey && e.key == "u")){
        e.preventDefault();
    }
});


document.addEventListener('keydown', (e) => {
    if(e.ctrlKey && e.key == "s" || e.keyCode == 83){
        e.preventDefault();
    }
})