    document.addEventListener("deviceready", onDeviceReady, false);
    var lastStatus = "";
    function onDeviceReady() {
	  	//listen for changes
  		document.addEventListener("offline", disableLink, false);
  		document.addEventListener("online", enableLink, false);
  		if (parseFloat(window.device.version) >= 7.0) {
          document.body.style.marginTop = "20px";
          $(".ui-header").css("margin-top", "20px");
    	}
    }

		function disableLink() {
		  /* 
		  $('.constatus').on("tap", function(e){
  			e.preventDefault();
  			return false;
		  });
		  */
		  $('#idForm').button('disable');
		  $('.constatus').prop('href', 'javascript:alert("目前無法連上網路")');
		  $('#imgnews').attr("src", "images/news1.png");
		  $('#imgtable').attr("src", "images/table1.png");
		  $('#imgscore').attr("src", "images/score1.png");
		  $('#imgcourt').attr("src", "images/court1.png");
		  $('#imgsignup').attr("src", "images/signup1.png");
		  $('#imgabsent').attr("src", "images/absent1.png");
		  $('#imgmail').attr("src", "images/mail1.png");
		  $('#imgicampus').attr("src", "images/icampus1.png");
		  //$('#imgmap').attr("src", "images/map1.png");
		  $('#imgabout').attr("src", "images/about1.png");
		  $('#imgteacher').attr("src", "images/teacher1.jpg");
		  $('#imgdept').attr("src", "images/dept1.jpg");
		  $('#imgaudio').attr("src", "images/audio1.png");
		  $('#imgvideo').attr("src", "images/video1.jpg");

		  if(lastStatus != 'disconnected') {
		    lastStatus = 'disconnected';
		    /*
		    navigator.notification.alert(
		      "目前無法連上網路！", 
		      null, 
		      "貼心小提示",
		      "確定");
		    */
		  }
		}
		
		function enableLink() {
		  $('#idForm').button('enable');
		  $('#news').prop('href', 'headline.html');
		  $('#mail').prop('href', 'mail.html');
		  $('#table').prop('href', 'table.php');
		  $('#score').prop('href', 'score_index.html');
		  $('#court').prop('href', 'court_index.html');
		  $('#signup').prop('href', 'sign_index.html');
		  $('#absent').prop('href', 'absent_index.html');
		  $('#icampus').prop('href', 'http://icampus.ncue.edu.tw');
		  //$('#map').prop('href', 'ncue_map.html');
		  $('#brief').prop('href', 'brief.html');
		  $('#academic').prop('href', 'academic.html');
		  $('#executive').prop('href', 'executive.html');
		  $('#ncuesong').prop('href', 'ncue_song.html');
		  $('#ncuevideo').prop('href', 'ncue_video.html');
		  $('#imgnews').attr("src", "images/news.png");
		  $('#imgtable').attr("src", "images/table.png");
		  $('#imgscore').attr("src", "images/score.png");
		  $('#imgcourt').attr("src", "images/court.png");
		  $('#imgsignup').attr("src", "images/signup.png");
		  $('#imgabsent').attr("src", "images/absent.png");
		  $('#imgmail').attr("src", "images/mail.png");
		  $('#imgicampus').attr("src", "images/icampus.png");
		  //$('#imgmap').attr("src", "images/map.png");
		  $('#imgabout').attr("src", "images/about.png");
		  $('#imgteacher').attr("src", "images/teacher.jpg");
		  $('#imgdept').attr("src", "images/dept.jpg");
		  $('#imgaudio').attr("src", "images/audio.png");
		  $('#imgvideo').attr("src", "images/video.jpg");
		  
		  if(lastStatus != 'connected' && lastStatus != '') {
		    lastStatus = 'connected';
		    navigator.notification.alert(
		      "網路已連線！", 
		      null, 
		      "貼心小提示",
		      "確定");
		  }
		}
		
		document.addEventListener("backbutton", function(e){
	    if($.mobile.activePage.is('#index')){
	        /* 
	         Event preventDefault/stopPropagation not required as adding backbutton
	          listener itself override the default behaviour. Refer below PhoneGap link.
	        */
	        //e.preventDefault();

	        navigator.notification.confirm(
	            "是否要離開程式？",
	            function (button) {
	              if (button==2) {
	                navigator.app.exitApp();
	              }
	            }
	            ,
	            "提示",
	            ["取消","確定"]
	        );
	    }
	    else {
	        navigator.app.backHistory()
	    }
		}, false);