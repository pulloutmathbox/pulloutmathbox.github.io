var arrayNumber = [];
var imgNumber = []
var index = 0;
var count = 0;

var mulai = document.getElementById('mulai');
var lanjut = document.getElementById('lanjut');
var pindah = document.getElementById('pindah');
var imageOne = document.getElementById("1");
var imageTwo = document.getElementById("2");
var imageThree = document.getElementById("3");

const baseUrl = '../../assets/music/';
const baseImg = '../../assets/img'
var audio = new Audio();
var audioSuccess = new Audio(`${baseUrl}goodJob.mp3`);
var audioFinish = new Audio(`${baseUrl}excelent.mp3`);

//Init
window.onload = function(e) {
    lanjut.style.visibility = 'hidden';
    pindah.style.visibility = 'hidden';
    help_img.style.display = 'none';
}

mulai.addEventListener('click', function() {
    arrayNumber = [
        [6, 1, 6],
        [7, 2, 14],
        [8, 2, 16],
    ]
    imgNumber = [
        [`${baseImg}/angka/6.png`, `${baseImg}/angka/1.png`, `${baseImg}/angka/6.png`],
        [`${baseImg}/angka/7.png`, `${baseImg}/angka/2.png`, `${baseImg}/angka/14.png`],
        [`${baseImg}/angka/8.png`, `${baseImg}/angka/2.png`, `${baseImg}/angka/16.png`],
    ]
    mulai.style.visibility = 'hidden';
});

lanjut.addEventListener('click', function() {
    index += 1;
    audioFinish.play();
    if (index === 3) {
        pindah.style.visibility = 'visible';
        help_img.style.visibility = 'hidden';
    } else {
        resetData(imgNumber[index][0], imgNumber[index][1], imgNumber[index][2])
    }
    lanjut.style.visibility = 'hidden';
});

function resetData(srcOne, srcTwo, srcThree) {
    document.getElementById(1).style.backgroundColor = "transparent";
    document.getElementById(2).style.backgroundColor = "transparent";
    document.getElementById(3).style.backgroundColor = "transparent";
    //
    imageOne.style.transition = "all 2s ease-in-out";
    imageOne.src = srcOne;
    imageTwo.style.transition = "all 2s ease-in-out";
    imageTwo.src = srcTwo;
    imageThree.style.transition = "all 2s ease-in-out";
    imageThree.src = srcThree;
    count = 0;
}

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function() {
        audio = new Audio(`${baseUrl}${this.id}.mp3`);
        if (arrayNumber.length == 0) {
            alert('Silahkan Klik Mulai');
        } else {
            if (arrayNumber[index][count] == this.id) {
                alert('Silahkan Lanjutkan');
                if (count === 2) {
                    lanjut.style.visibility = 'visible';
                }
                document.getElementById(count + 1).style.backgroundColor = "green";
                count += 1;
                audioSuccess.play();
            } else {
                audio.play();
                alert('salah');
            }
        }
    });
}
var help = document.getElementById('help');
var help_img = document.getElementById('help_img');
var change = true;
help.addEventListener('click', function() {
    if (change == true) {
        help_img.style.display = 'block';
    } else {
        help_img.style.display = 'none';
    }
    change = !change;
})