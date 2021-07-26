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
const baseAudio = '../../assets/music/penjumlahan/level_3/penjumlahan_';
var audio = new Audio();
var audioGif = new Audio();
var audioSuccess = new Audio(`${baseUrl}goodJob.mp3`);
var audioFinish = new Audio(`${baseUrl}excelent.mp3`);

var imgLoad = document.getElementById("ids");

//Init
window.onload = function(e) {
    lanjut.style.visibility = 'hidden';
    help_img.style.display = 'none';
    help_img.style.visibility = 'hidden';
}

var x = [10, 11, 12, 13, 15];
var y = [3, 4, 2, 1, 1];
mulai.addEventListener('click', function() {
    arrayNumber = [
        [13],
        [15],
        [14],
        [14],
        [16],
    ]
    imgNumber = [
        [`${baseImg}angka_gif/penjumlahan/level3/penjumlahan_1.gif`],
        [`${baseImg}angka_gif/penjumlahan/level3/penjumlahan_2.gif`],
        [`${baseImg}angka_gif/penjumlahan/level3/penjumlahan_3.gif`],
        [`${baseImg}angka_gif/penjumlahan/level3/penjumlahan_4.gif`],
        [`${baseImg}angka_gif/penjumlahan/level3/penjumlahan_5.gif`],
    ]
    mulai.style.visibility = 'hidden';
    var X = document.getElementById('tambahX');
    var Y = document.getElementById('tambahY');
    for (let index = 0; index < x[0]; index++) {
        let newEl = document.createElement('div');
        newEl.classList = 'col';
        var imgEl = document.createElement('img');
        imgEl.src = '../../assets/img/help/penjumlahan/pisang.png';
        imgEl.width = 60;
        newEl.appendChild(imgEl);
        X.appendChild(newEl);
        numbs = 0;
    }
    for (let index = 0; index < y[0]; index++) {
        let newEl = document.createElement('div');
        newEl.classList = 'col';
        var imgEl = document.createElement('img');
        imgEl.src = '../../assets/img/help/penjumlahan/pisang.png';
        imgEl.width = 60;
        newEl.appendChild(imgEl);
        Y.appendChild(newEl);
        numbs = 0;
    }
});

gambarGif.addEventListener('click', function() {
    audioGif = new Audio(`${baseAudio}${count+1}.mp3`);
    audioGif.play()
});

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
    var num = 0;
    number[i].addEventListener('click', function() {
        audio = new Audio(`${baseUrl}${this.id}.mp3`);
        if (arrayNumber.length == 0) {
            alert('Silahkan Klik Mulai');
        } else {
            if (arrayNumber[count] == this.id) {
                if (count == 4) {
                    audioSuccess.play();
                    count = count + 1;

                    audioSuccess.play();
                    alert('Benar');
                    lanjut.style.visibility = 'visible';
                } else {
                    count = count + 1;
                    gambarGif.src = imgNumber[count];
                    audioSuccess.play();
                    alert('Benar');
                    var X = document.getElementById('tambahX');
                    var Y = document.getElementById('tambahY');
                    while (X.firstChild) {
                        X.firstChild.remove()
                    }
                    while (Y.firstChild) {
                        Y.firstChild.remove()
                    }
                    num++;
                    numbs = num;

                    for (let index = 0; index < x[num]; index++) {
                        let newEl = document.createElement('div');
                        newEl.classList = 'col';
                        var imgEl = document.createElement('img');
                        imgEl.src = '../../assets/img/help/penjumlahan/pisang.png';
                        imgEl.width = 60;
                        newEl.appendChild(imgEl);
                        X.appendChild(newEl);
                        numbs = 0;
                    }
                    for (let index = 0; index < y[num]; index++) {
                        let newEl = document.createElement('div');
                        newEl.classList = 'col';
                        var imgEl = document.createElement('img');
                        imgEl.src = '../../assets/img/help/penjumlahan/pisang.png';
                        imgEl.width = 60;
                        newEl.appendChild(imgEl);
                        Y.appendChild(newEl);
                        numbs = 0;
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
        help_img.style.visibility = 'visible';
    } else {
        help_img.style.display = 'none';
        help_img.style.visibility = 'hidden';
    }
    change = !change;
})