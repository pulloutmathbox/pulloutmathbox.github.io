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

const baseUrl = '../../assets/music/';
const baseImg = '../../assets/img/';
const baseAudio = '../../assets/music/perkalian/level_2/perkalian_';
var audio = new Audio();
var audioGif = new Audio();
var audioSuccess = new Audio(`${baseUrl}goodJob.mp3`);
var audioFinish = new Audio(`${baseUrl}excelent.mp3`);

var imgLoad = document.getElementById("ids");

//Init
window.onload = function(e) {
    lanjut.style.visibility = 'hidden';
    help_img.style.display = 'none';
}

mulai.addEventListener('click', function() {
    arrayNumber = [
        [6],
        [8],
        [9],
        [4],
        [10],
    ]
    imgNumber = [
        [`${baseImg}angka_gif/perkalian/level2/perkalian_1.gif`],
        [`${baseImg}angka_gif/perkalian/level2/perkalian_2.gif`],
        [`${baseImg}angka_gif/perkalian/level2/perkalian_3.gif`],
        [`${baseImg}angka_gif/perkalian/level2/perkalian_4.gif`],
        [`${baseImg}angka_gif/perkalian/level2/perkalian_5.gif`],
    ]
    mulai.style.visibility = 'hidden';
});

gambarGif.addEventListener('click', function() {
    audioGif = new Audio(`${baseAudio}${count+1}.mp3`);
    audioGif.play()
});

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function() {
        audio = new Audio(`${baseUrl}${this.id}.mp3`);
        if (arrayNumber.length == 0) {
            alert('Silahkan Klik Mulai');
        } else {
            if (arrayNumber[count] == this.id) {
                if (count == 4) {
                    count = count + 1;
                    audioSuccess.play();
                    alert('Benar');
                    lanjut.style.visibility = 'visible';
                } else {
                    count = count + 1;
                    gambarGif.src = imgNumber[count];
                    audioSuccess.play();
                    alert('Benar');
                }
            } else {
                audio.play();
                alert('Salah');
            }
        }
    });
}
var help = document.getElementById('help');
var help_img = document.getElementById('help_img');
var btn_help = document.getElementById('btn_help');
var change = true;
help.addEventListener('click', function() {
    if (change == true) {
        help_img.style.display = 'block';
        btn_help.style.width = '60%';
    } else {
        help_img.style.display = 'none';
        btn_help.style.width = '20%';
    }
    change = !change;
})