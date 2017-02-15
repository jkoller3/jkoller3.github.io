var incrementScoreVar = 0;
var wallpaper;
//on load, the z-index of the image will be below the overlay. the confirm dialog will bring the image up to be available to a contextmenu in a taphold event 
$("#tobedownloaded").click(function (e) {
    var imageZshift = 'position:fixed;top:0px;left:0px;width:100%;height:100%;z-index:1;';
    $("#tobedownloaded").attr("style", imageZshift);
    $("#closeIMG").attr("style", "z-index:1;");
    //				$.ajax({
    //			type: "post"
    //			, url: "userPTupdate.php"
    //			, data: "pointIncrement=" + 1
    //			, success: function (data) {
    //				console.log(data);
    //			}
    //		});
    //		}
	//waiting on backend implementation here 
});
$("#introNextBTN").click(function (e) {
    $("#intro").css("visibility", "hidden");
    $("#gameModal").css("visibility", "visible");
		$("li.active a.DLimg").css("visibility","visible");
});
$(".DLimg").click(function (event) { 
		wallpaper = $(this).parent().find("img").attr("src");
    $("#gameModal").css("visibility", "hidden"); //hide modal to show new modal
		$("#instructions").attr("style","padding-top:52px;padding-bottom: 54px;visibility:show;");
		$("#instructions").css("visibility","visible");
		$(".modal").css("overflow","scroll"); //allows scrolling. should be adjusted according to current view.
		$("li.active a.DLimg").css("visibility","hidden");	
});
$("#carousel-close").click(function () {
    $("#gameModal").css("visibility", "hidden");
		$("#intro").css("visibility", "visible");
});
$("#instructions-close").click(function () {
    $("#instructions").css("visibility", "hidden");
		$("#gameModal").css("visibility", "visible");
		$("li.active a.DLimg").css("visibility","visible");
		$("section").css("overflow","hidden");
});

$("#gotitBTN").click(function(){
		$("#instructions").css("visibility","hidden");
    $("#wallpaperModal").attr("style", "visibility:visible; padding-top: 73px; padding-bottom: 54px;");
    $("#tobedownloaded").attr("src", wallpaper);
    incrementScoreVar++; //<- This is just for readibility. This is when the user agrees to download the image; we just trust that they do 
});

var carouselpage;
$("#game-close").click(function () {
    $("#wallpaperModal").attr("style", "visibility:hidden; padding-top: 73px; padding-bottom: 54px;");
		$("#gameModal").css("visibility", "visible");
			$("li.active a.DLimg").css("visibility","visible");
	$("section").css("overflow","hidden");
//    $("#gameModal").attr("style", "visibility:visible; padding-top: 73px; padding-bottom: 54px;");
});
