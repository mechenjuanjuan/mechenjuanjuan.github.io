window.onscroll = function(){
    //当有滚动事件发生时
    var scrollTop = scroll().top;
    scrollTop > 0 ? show():hide();//当滚动产生时显示小火箭，否则隐藏
}

//显示隐藏
function show(){
    $("#gotop1").css('display','block');
}
function hide(){
    $("#gotop1").css('display','none');
}
function scroll(){
    if(window.pageYOffset != null){
        //ie9+和各种最新浏览器，注意：为什么使用！=null,因为加载完页面pageYOffset就是0
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }else if(document.compatMode == "CSS1Compat"){
        //不是怪异模式(即声明了DTD)
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }else{
        //怪异模式(未声明DTD)
        return {
            left: document.body.scrollLeft,
            top: document.body.scrollTop
        }
    }
}

$("#gotop1").click(function(e) {
 TweenMax.to(window, 1.5, {scrollTo:0, ease: Expo.easeInOut});
 var huojian = new TimelineLite();
huojian.to("#gotop1", 1, {rotationY:720, scale:0.6, y:"+=40", ease:  Power4.easeOut})
.to("#gotop1", 1, {y:-1000, opacity:0, ease:  Power4.easeOut}, 0.6)
.to("#gotop1", 1, {y:0, rotationY:0, opacity:1, scale:1, ease: Expo.easeOut, clearProps: "all"}, "1.4");
});  

 	
