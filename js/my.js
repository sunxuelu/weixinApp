 var swiper = new Swiper('.swiper-container', {
 	 onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	    swiperAnimateCache(swiper); //隐藏动画元素 
	    swiperAnimate(swiper); //初始化完成开始动画
	  }, 
	  onSlideChangeEnd: function(swiper){ 
	    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	  },
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical'
    });
    

//切换音乐
function playorpaused(obj){
	//通过id来找到音乐播放器
	var musicplayer = document.getElementById("musicplayer")

    if(musicplayer.paused){
    	//当音乐播放的时候，我们让音乐播放
    	musicplayer.play();
    	obj.src = "img/musicBtn.png";
    	//动画继续执行
    	obj.style.webkitAnimationPlayState = "running";
    }else{
    	//当音乐播放的时候，我们让音乐暂停
    	musicplayer.pause();
    	obj.src = "img/musicBtnOff.png";
    	//动画暂停
    	obj.style.webkitAnimationPlayState = "paused";
    }
}
	$(function(){
		 $(document).snowfall('clear');
	        $(document).snowfall({
	            image: "img/lllllll.png",
	            flakeCount:5,
	            minSize: 15,
	            maxSize: 15
	        });
	})
	

	//第二页效果
		

