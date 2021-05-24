function t(id){
	return document.getElementById(id);
}
function audioApp(){
	var audio = new Audio();
	var audio_index = 1;
	var is_playing = false;
	var playingtrack;
	var trackbox = t("playlist");
	var tracks = {
	    "track1":["UNNATURAL", "우주소녀（宇宙少女）", "music/UNNATURAL.mp3", "img/1.jpg"],
    "track2":["WE GO", "프로미스나인（fromis_9）", "music/WE GO.mp3", "img/2.jpg"],
    "track3":["IN THE MORNING", "있지（ITZY）", "music/IN THE MORNING.mp3", "img/3.jpg"],
    "track4":["Dun Dun Dance", "오마이걸(OH MY GIRL)", "music/Dun Dun Dance.mp3", "img/4.jpg"],
    "track5":["Ring Ring", "로켓펀치（Rocket Punch）", "music/Ring Ring.mp3", "img/5.jpg"],
    "track6":["Easy", "우주소녀 더블랙（WJSN THE BLACK）", "music/Easy.mp3", "img/6.jpg"],
	};
	for(var track in tracks){
		var tb = document.createElement("div");
    var pb = document.createElement("div");
    var tn = document.createElement("div");
    var ta = document.createElement("div");
    var tg = document.createElement("div");
    var tq = document.createElement("div");
    var ti = document.createElement("div");
    
		tb.id = "play_item";
	  pb.className = "item_play fa fa-play";
	  tn.className = "item_name";
	  ta.className = "item_artist";
	  tg.className = "item_gif";
    tq.className = "item_quote";
    ti.className = "item_icons";
    ti.innerHTML = "<i class='fa fa-check' aria-hidden='true'></i> <i class='fa fa-share-alt' aria-hidden='true'></i> <i class='fa fa-heart-o' aria-hidden='true'></i> <i class='fa fa-ellipsis-h' aria-hidden='true'></i> ";
    
		tn.innerHTML = tracks[track][0];
    ta.innerHTML = tracks[track][1];
    pb.id = tracks[track][2];
    tg.innerHTML = "<div style='background: url("+tracks[track][3]+") center center; background-size: cover;'></div>";
    tq.innerHTML = tracks[track][4];
    pb.addEventListener("click", switchTrack);
    
    tb.appendChild(pb);
    tb.appendChild(tn);
    tb.appendChild(ta);
    tb.appendChild(tg);
    tb.appendChild(tq);
    tb.appendChild(ti);
    trackbox.appendChild(tb);
    
		audio_index++;
	}
	audio.addEventListener("ended",function(){
	    t(playingtrack).className = "item_play fa fa-play";
		playingtrack = "";
		is_playing = false;
	});
	function switchTrack(event){
		if(is_playing){
		    if(playingtrack != event.target.id){
			    is_playing = true;
				t(playingtrack).className = "item_play fa fa-play";
          t(playingtrack).parentElement.className = "no";
			    event.target.className = "item_play fa fa-pause";
          event.target.parentElement.className = "active";
			    audio.src = event.target.id;
	            audio.play();
			} else {
			    audio.pause();
			    is_playing = false;
				event.target.className = "item_play fa fa-play";
        event.target.parentElement.className = "no";
			}
		} else {
			is_playing = true;
			event.target.className = "item_play fa fa-pause";
      event.target.parentElement.className = "active";
			if(playingtrack != event.target.id){
				audio.src = event.target.id;
        event.target.parentElement.className = "no";
			}
	        audio.play();
      event.target.parentElement.className = "active";
		}
		playingtrack = event.target.id;
	}
}
window.addEventListener("load", audioApp);