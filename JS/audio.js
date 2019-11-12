function audiosModel() {
	var i = 0;
	var oPlayEy = document.getElementsByClassName("audio-PlayEy")[0];
	var oPlay = document.getElementsByClassName("audio-Play")[0];
	var audios = document.getElementById('audios');
	oPlay.onclick = function () {
		var seii = setInterval(function () {
			(i == 360) ? i = 0 : i++;
			oPlayEy.style.transform = "rotate(" + i + "deg)";
			if (audios.paused) {
				clearInterval(seii)
			}
		}, 30);
		if (audios.paused) {
			audios.play();
			oPlay.style.backgroundImage = "url(img/play.png)";
			oPlay.style.backgroundSize = "100% 100%";
			// oPlay.style.width = .494792+"rem";
			// oPlay.style.height = .494792+"rem";
		} else {
			audios.pause();
			oPlay.style.backgroundImage = "url(img/pause.png)";
			oPlay.style.backgroundSize = "100% 100%";
			// oPlay.style.width = .494792 + "rem";
			// oPlay.style.height = .494792+"rem";
		}
	}
}

audiosModel();