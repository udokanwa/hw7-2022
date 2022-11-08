var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay is set to " + video.autoplay)
	console.log("Loop is set to " + video.loop)
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector('#volume').innerHTML = video.volume * 100 + "%"
});


document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down")
	video.playbackRate *= .9;
	console.log("Video speed is set to " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up")
	video.playbackRate /= .9;
	console.log("Video speed is set to " + video.playbackRate);

});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead")
	if (video.currentTime < video.duration){
		video.currentTime += 10;
		console.log("Timestamp is " + video.currentTime);
	}
	else if (video.currentTime == video.duration){
		video.currentTime = 0.0;
		console.log("Timestamp is set to 0.0");
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted){
		video.muted = false;
		document.querySelector('#mute').innerHTML = "Mute"
		console.log("Unmuted Video");
	}
	else{
		video.muted = true;
		document.querySelector('#mute').innerHTML = "Unmute";
		console.log("Muted Video");
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Current volume is " + video.volume);
	video.volume = (this.value / 100);
	console.log("Current volume is " + video.volume);
	document.querySelector('#volume').innerHTML = video.volume * 100 + "%"
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool');
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool');
});