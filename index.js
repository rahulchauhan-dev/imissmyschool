function play1() {
  var imagesrc = document.getElementById('player-icon1');
  var audio = document.querySelector("#Talking");
  if (imagesrc.src.match("play_30.png")){
     imagesrc.src = "./icons/pause_30.png";
     audio.play();

   }
   else{
    imagesrc.src = "./icons/play_30.png";
    audio.pause();
  }

    const volumeSlider = document.querySelector(".volume-slider1");
    volumeSlider.addEventListener('input', (e) => {
    const value = e.target.value;
    audio.volume = value / 100;
});
}

function play2() {
  var imagesrc = document.getElementById('player-icon2');
  var audio = document.querySelector("#Hallway");
  if (imagesrc.src.match("play_30.png")){
     imagesrc.src = "./icons/pause_30.png";
     audio.play();

   }
   else{
    imagesrc.src = "./icons/play_30.png";
    audio.pause();
  }
  const volumeSlider = document.querySelector(".volume-slider2");
    volumeSlider.addEventListener('input', (e) => {
    const value = e.target.value;
    audio.volume = value / 100;
});
}

function play3() {
  var imagesrc = document.getElementById('player-icon3');
  var audio = document.querySelector("#Laugh");
  if (imagesrc.src.match("play_30.png")){
     imagesrc.src = "./icons/pause_30.png";
     audio.play();

   }
   else{
    imagesrc.src = "./icons/play_30.png";
    audio.pause();
  }
  const volumeSlider = document.querySelector(".volume-slider3");
    volumeSlider.addEventListener('input', (e) => {
    const value = e.target.value;
    audio.volume = value / 100;
});
}

function play4() {
  var imagesrc = document.getElementById('player-icon4');
  var audio = document.querySelector("#Playground");
  if (imagesrc.src.match("play_30.png")){
     imagesrc.src = "./icons/pause_30.png";
     audio.play();

   }
   else{
    imagesrc.src = "./icons/play_30.png";
    audio.pause();
  }
  const volumeSlider = document.querySelector(".volume-slider4");
    volumeSlider.addEventListener('input', (e) => {
    const value = e.target.value;
    audio.volume = value / 100;
});
}

function play5() {
  var imagesrc = document.getElementById('player-icon5');
  var audio = document.querySelector("#Library");
  if (imagesrc.src.match("play_30.png")){
     imagesrc.src = "./icons/pause_30.png";
     audio.play();

   }
   else{
    imagesrc.src = "./icons/play_30.png";
    audio.pause();
  }
  const volumeSlider = document.querySelector(".volume-slider5");
    volumeSlider.addEventListener('input', (e) => {
    const value = e.target.value;
    audio.volume = value / 100;
});
}

function play6() {
  var imagesrc = document.getElementById('player-icon6');
  var audio = document.querySelector("#ExamHall");
  if (imagesrc.src.match("play_30.png")){
     imagesrc.src = "./icons/pause_30.png";
     audio.play();

   }
   else{
    imagesrc.src = "./icons/play_30.png";
    audio.pause();
  }
  const volumeSlider = document.querySelector(".volume-slider6");
    volumeSlider.addEventListener('input', (e) => {
    const value = e.target.value;
    audio.volume = value / 100;
});
}

function play7() {
  var imagesrc = document.getElementById('player-icon7');
  var audio = document.querySelector("#Canteen");
  if (imagesrc.src.match("play_30.png")){
     imagesrc.src = "./icons/pause_30.png";
     audio.play();

   }
   else{
    imagesrc.src = "./icons/play_30.png";
    audio.pause();
  }
  const volumeSlider = document.querySelector(".volume-slider7");
    volumeSlider.addEventListener('input', (e) => {
    const value = e.target.value;
    audio.volume = value / 100;
});
}

function play8() {
  var imagesrc = document.getElementById('player-icon8');
  var audio = document.querySelector("#Rain");
  if (imagesrc.src.match("play_30.png")){
     imagesrc.src = "./icons/pause_30.png";
     audio.play();

   }
   else{
    imagesrc.src = "./icons/play_30.png";
    audio.pause();
  }
  const volumeSlider = document.querySelector(".volume-slider8");
    volumeSlider.addEventListener('input', (e) => {
    const value = e.target.value;
    audio.volume = value / 100;
});
}



var images = ["bg1.jpg","bg2.jpg", "bg3.jpg", "bg4.jpg","bg5.jpg","bg6.jpg","bg7.png","bg8.jpg","bg9.jpg","bg10.png","bg11.jpg",];
    $(function () {
        var i = 0;
        $("#dvImage").css("background-image", "url(./images/" + images[i] + ")");
        setInterval(function () {
            i++;
            if (i == images.length) {
                i = 0;
            }
            $("#dvImage").fadeOut("slow", function () {
                $(this).css("background-image", "url(./images/" + images[i] + ")");
                $(this).fadeIn("slow");
            });
        }, 10000);
    });
