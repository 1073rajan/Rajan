
<!--================Code Hide Area =================-->

              var isCtrl = false;
document.onkeyup = function (e) {
    if (e.which == 17)
        isCtrl = false;
}
document.onkeydown = function (e) {
    if (e.which == 17)
        isCtrl = true;
    /*if((e.which == 85) || (e.which == 67) &amp;&amp; isCtrl == true)*/
    {
        // alert(&#8216;Keyboard shortcuts are cool!&#8217;);
        return false;
    }
}
var isNS = (navigator.appName == "Netscape") ? 1 : 0;
if (navigator.appName == "Netscape") document.captureEvents(Event.MOUSEDOWN || Event.MOUSEUP);
function mischandler() {
    return false;
}
function mousehandler(e) {
    var myevent = (isNS) ? e : event;
    var eventbutton = (isNS) ? myevent.which : myevent.button;
    if ((eventbutton == 2) || (eventbutton == 3)) return false;
}
document.oncontextmenu = mischandler;
document.onmousedown = mousehandler;
document.onmouseup = mousehandler;
		<!--================Code Hide Area End/=================-->