var arrayNumber = [];
var imgNumber = [];
var index = 0;
var count = 0;

var mulai = document.getElementById('mulai');
var lanjut = document.getElementById('lanjut');
var imageOne = document.getElementById("1");
var imageTwo = document.getElementById("2");
var imageThree = document.getElementById("3");
var gambarGif = document.getElementById("gambarGif");
var data = document.getElementById("data");
var cek = document.getElementById("cek");
var message = document.getElementById("message");

const baseUrl = '../assets/music/';
const baseImg = '../assets/img/'
const baseAudio = '../assets/music/evaluasi/penjumlahan_';
const baseError = '../assets/music/evaluasi/error.mp3';
var audio = new Audio();
var audioGif = new Audio();
var audioSuccess = new Audio(`${baseUrl}goodJob.mp3`);
var audioFinish = new Audio(`${baseUrl}excelent.mp3`);
var audioError = new Audio(`${baseError}`);

var imgLoad = document.getElementById("ids");

//Init
window.onload = function(e){ 
    lanjut.style.visibility = 'hidden';
}

mulai.addEventListener('click', function(){
    arrayNumber = [
        [9],
        [6],
        [8],
        [10],
        [10],
    ]
    imgNumber = [
        [`${baseImg}evaluasi/penjumlahan_1.gif`],
        [`${baseImg}evaluasi/penjumlahan_2.gif`],
        [`${baseImg}evaluasi/penjumlahan_3.gif`],
        [`${baseImg}evaluasi/penjumlahan_4.gif`],
        [`${baseImg}evaluasi/penjumlahan_5.gif`],
    ]
    mulai.style.visibility = 'hidden';
});

gambarGif.addEventListener('click', function(){
    audioGif = new Audio(`${baseAudio}${count+1}.mp3`);
    audioGif.play()
});

cek.addEventListener('click', function(){
    if (arrayNumber.length == 0) {
        alert('Silahkan Klik Mulai');
        message.src = `${baseImg}cancel.png`
    } else {
        if(data.value == arrayNumber[count]){
            if (count == 4) {
                lanjut.style.visibility = 'visible';
                audioSuccess.play();
                data.value = ''
            }else {
                message.src = `${baseImg}check.png`
                count = count+1;
                gambarGif.src = imgNumber[count]
                audioSuccess.play();
                data.value = ''
            }
        } else{
            audioError.play();
            message.src = `${baseImg}cancel.png`
        }
    }
});