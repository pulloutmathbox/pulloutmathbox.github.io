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
const baseAudio = '../../assets/music/pengurangan/level_4/pengurangan_';
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

var total = [17, 20, 16, 19, 18];
var kurang = [2, 3, 4, 5, 7];
mulai.addEventListener('click', function() {
    arrayNumber = [
        [15],
        [17],
        [12],
        [14],
        [11],
    ]
    imgNumber = [
        [`${baseImg}angka_gif/pengurangan/level4/pengurangan_1.gif`],
        [`${baseImg}angka_gif/pengurangan/level4/pengurangan_2.gif`],
        [`${baseImg}angka_gif/pengurangan/level4/pengurangan_3.gif`],
        [`${baseImg}angka_gif/pengurangan/level4/pengurangan_4.gif`],
        [`${baseImg}angka_gif/pengurangan/level4/pengurangan_5.gif`],
    ]
    mulai.style.visibility = 'hidden';
    var tambah = document.getElementById('chi');
    for (let index = 0; index < total[0]; index++) {
        let newEl = document.createElement('div');
        newEl.classList = 'col-1 uwu';
        newEl.style = "width:50px";
        var imgEl = document.createElement('img');
        imgEl.src = '../../assets/img/help/pengurangan/apel.png';
        imgEl.classList = 'bottom-0 pb-4 position-fixed';
        imgEl.width = 50;
        newEl.appendChild(imgEl);
        tambah.appendChild(newEl);
        numbs = 0;
    }
});

gambarGif.addEventListener('click', function() {
    audioGif = new Audio(`${baseAudio}${count+1}.mp3`);
    audioGif.play()
});

var number = document.getElementsByClassName("number");
var numbs;
for (var i = 0; i < number.length; i++) {
    var num = 0;
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
                    var tambah = document.getElementById('chi');
                    while (tambah.firstChild) {
                        tambah.firstChild.remove()
                    }
                    num++;
                    numbs = num;
                    for (let index = 0; index < total[num]; index++) {
                        let newEl = document.createElement('div');
                        newEl.classList = 'col-1 uwu';
                        newEl.style = "width:50px";
                        var imgEl = document.createElement('img');
                        imgEl.src = '../../assets/img/help/pengurangan/apel.png';
                        imgEl.width = 50;
                        imgEl.classList = 'bottom-0 position-fixed pb-4';
                        // imgEl.classList = 'bottom-0 pb-4 position-fixed';

                        newEl.appendChild(imgEl);
                        tambah.appendChild(newEl);

                    }
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
        btn_help.style.width = 'auto';
    } else {
        help_img.style.display = 'none';
        btn_help.style.width = '5%';
    }
    change = !change;
})
var tambah = document.getElementById('chi');
var uwu = document.getElementsByClassName('uwu');
tambah.addEventListener('click', function() {
    var index2 = 0;
    for (index2; index2 < kurang[numbs]; index2++) {
        var imgES = document.createElement('img');
        imgES.classList = 'bottom-0 position-fixed pb-4';
        imgES.src = '../../assets/img/help/pengurangan/silang.png';
        imgES.width = 50;
        uwu[index2].appendChild(imgES);
    }
});