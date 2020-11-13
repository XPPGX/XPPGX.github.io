if (Hls.isSupported()) {
    const video1 = document.getElementById("video1");
    const hls1 = new Hls();
    hls1.attachMedia(video1);
  
    hls1.on(Hls.Events.MEDIA_ATTACHED, function() {
      console.log("video and hls.js are now bound together !");
      hls1.loadSource(
        "http://18.232.139.159:8080/hls/test.m3u8"
      );
    });
  
    const video2 = document.getElementById("video2");
    const hls2 = new Hls();
    hls2.attachMedia(video2);
  
    hls2.on(Hls.Events.MEDIA_ATTACHED, function() {
      console.log("video and hls.js are now bound together !");
      hls2.loadSource(
        "http://18.232.139.159:8080/hls/test1.m3u8"
      );
    });
    



  }