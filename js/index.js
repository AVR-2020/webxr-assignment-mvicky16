var obs_slEl = document.getElementById('obs_sl');
var obs_cEl = document.getElementById('obs_c');
var obs_gEl = document.getElementById('obs_g');
var temp = document.getElementById('popup');
var golEL = document.getElementById('gol');
var golSound = document.getElementById('score');
var correctSound = document.getElementById('correct');
var wrongSound = document.getElementById('wrong');

var pertanyaanEl = document.getElementById('pertanyaan');
var aEl = document.getElementById('jwbA');
var bEl = document.getElementById('jwbB');
var cEl = document.getElementById('jwbC');
var dEl = document.getElementById('jwbD');

var pertanyaanEl1 = document.getElementById('pertanyaan1');
var answA = document.getElementById('jwbA1');
var answB = document.getElementById('jwbB1');
var answC = document.getElementById('jwbC1');
var answD = document.getElementById('jwbD1');

var pertanyaanEl2 = document.getElementById('pertanyaan2');
var jwbAEl = document.getElementById('jwbA2');
var jwbBEl = document.getElementById('jwbB2');
var jwbCEl = document.getElementById('jwbC2');
var jwbDEl = document.getElementById('jwbD2');

var pertanyaan = [
  "17 - 18 =",
  "2 x 4 =",
  "99 : 11 =",
  "22 - 10 =",
  "9 x (2 - 2) =",
  "4 : 2 + 2 =",
  "2 x (1 + 2) =",
  "14 - (-6) =",
  "-7 - (7) =",
  "12 - (-11) ="
];

var opt_A = [
  "-1",
  "11",
  "9",
  "13",
  "-16",
  "4",
  "-4",
  "-8",
  "14",
  "11"
];

var opt_B = [
  "2",
  "4",
  "10",
  "12",
  "20",
  "1",
  "3",
  "20",
  "0",
  "0"
];

var opt_C = [
  "17",
  "8",
  "17",
  "14",
  "3",
  "2",
  "6",
  "8",
  "12",
  "-1"
];

var opt_D = [
  "1",
  "22",
  "11",
  "1",
  "0",
  "4",
  "-4",
  "-8",
  "-14",
  "1"
];

var bener = [
  "A",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "D",
  "D"
];

var randomnum = 0;
var num = 3;
var random = 6;

golEL.addEventListener("collide", function(ev) {
  golSound.components.sound.playSound();
  setTimeout ("golSound.components.sound.stopSound()", 3000);
});

showPertanyaan1(randomnum);
showPertanyaan2(num);
showPertanyaan3(random);

var pilA = "A"
var iniB = "B"
var akuC = "C"
var sayaD = "D"

aEl.addEventListener("click", function(evt){
  check(pilA, randomnum);
})
answA.addEventListener("click", function(evt){
  check(pilA, num);
})
jwbAEl.addEventListener("click", function(evt){
  check(pilA, random);
})
bEl.addEventListener("click", function(evt){
  check(iniB, randomnum);
})
answB.addEventListener("click", function(evt){
  check(iniB, num);
})
jwbBEl.addEventListener("click", function(evt){
  check(iniB, random);
})
cEl.addEventListener("click", function(evt){
  check(akuC, randomnum);
})
answC.addEventListener("click", function(evt){
  check(akuC, num);
})
jwbCEl.addEventListener("click", function(evt){
  check(akuC, random);
})
dEl.addEventListener("click", function(evt){
  check(sayaD, randomnum);
})
answD.addEventListener("click", function(evt){
  check(sayaD, num);
})
jwbDEl.addEventListener("click", function(evt){
  check(sayaD, random);
})

function check(kpt, nomer) {
  if (nomer < 3) {
    if (kpt == bener[nomer]) {
      pertanyaanEl.setAttribute("value", "Jawaban anda benar!");
      pertanyaanEl.setAttribute("color", "#000");
      pertanyaanEl.setAttribute("position", "0 0.2 0.2");
      pertanyaanEl.setAttribute("height", "3");
      pertanyaanEl.setAttribute("width", "6");
      correctSound.components.sound.playSound();
      setTimeout ("obs_slEl.setAttribute('visible', false)", 2000);
      setTimeout ("correctSound.components.sound.stopSound()", 2000);
    }
    else{
      randomnum = randomnum + 1;
      if (randomnum > 2) {
        randomnum = 0;      
      }
      temp.setAttribute("visible", true);
      temp.setAttribute("value", "Jawaban anda salah!");
      temp.setAttribute("color", "#000");
      temp.setAttribute("position", "-1.2 0.2 0.2");
      temp.setAttribute("height", "3");
      temp.setAttribute("width", "6");
      wrongSound.components.sound.playSound();
      setTimeout(function() {
        showPertanyaan1(randomnum);
      }, 2000)
      setTimeout ("wrongSound.components.sound.stopSound()", 2000);    
    }
       
  }

  else if (nomer < 6) {
    if (kpt == bener[nomer]) {
      pertanyaanEl1.setAttribute("value", "Jawaban anda benar!");
      pertanyaanEl1.setAttribute("color", "#000");
      pertanyaanEl1.setAttribute("position", "0 0.2 0.2");
      pertanyaanEl1.setAttribute("height", "5");
      pertanyaanEl1.setAttribute("width", "8");
      correctSound.components.sound.playSound();
      setTimeout ("obs_gEl.setAttribute('visible', false)", 2000);
      setTimeout ("correctSound.components.sound.stopSound()", 2000);   
    }

    else{
      num = num + 1;
      if (num > 5) {
        num = 0;
      }
      setTimeout(function() {
        showPertanyaan2(num);
      }, 2000)
    }   
  }

  else{
    if (kpt == bener[nomer]) {
      pertanyaanEl2.setAttribute("value", "Jawaban anda benar!");
      pertanyaanEl2.setAttribute("color", "#000");
      pertanyaanEl2.setAttribute("position", "0 0.2 0.2");
      pertanyaanEl2.setAttribute("height", "5");
      pertanyaanEl2.setAttribute("width", "8");
      correctSound.components.sound.playSound();
      setTimeout ("obs_cEl.setAttribute('visible', false)", 2000);
      setTimeout ("correctSound.components.sound.stopSound()", 2000);
    }
    else{
      random = random + 1;
      if (random > 10) {
        random = 0;
      }
      setTimeout(function() {
        showPertanyaan3(random);
      }, 2000)
      
    }   
  } 
}

function showPertanyaan1(nomor) {
  pertanyaanEl.setAttribute("value", pertanyaan[nomor]);
  aEl.setAttribute("value", opt_A[nomor]);
  bEl.setAttribute("value", opt_B[nomor]);
  cEl.setAttribute("value", opt_C[nomor]);
  dEl.setAttribute("value", opt_D[nomor]);
  temp.setAttribute("visible", false);
}

function showPertanyaan2(nomor) {
  pertanyaanEl1.setAttribute("value", pertanyaan[nomor]);
  answA.setAttribute("value", opt_A[nomor]);
  answB.setAttribute("value", opt_B[nomor]);
  answC.setAttribute("value", opt_C[nomor]);
  answD.setAttribute("value", opt_D[nomor])
}

function showPertanyaan3(nomor) {
  pertanyaanEl2.setAttribute("value", pertanyaan[nomor]);
  jwbAEl.setAttribute("value", opt_A[nomor]);
  jwbBEl.setAttribute("value", opt_B[nomor]);
  jwbCEl.setAttribute("value", opt_C[nomor]);
  jwbDEl.setAttribute("value", opt_D[nomor])
}