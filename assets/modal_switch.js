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
});
$("#introNextBTN").click(function (e) {
    $("#intro").css("visibility", "hidden");
    $("#gameModal").css("visibility", "visible");
});
$(".DLimg").click(function (event) {
    wallpaper = $(this).parent().find("img").attr("src");
		$("#instructions").css("visibility","show");
    $("#gameModal").css("visibility", "hidden"); //hide modal to show new modal
		$(".modal-iframe").css("overflow","scroll"); //allows scrolling. should be adjusted according to current view.
	
//    $("#wallpaperModal").attr("style", "visibility:show; padding-top: 73px; padding-bottom: 54px;");
//    $("#tobedownloaded").attr("src", wallpaper);
    incrementScoreVar++; //<- just for readibility.
//    alert("Tap and hold on the image to download the wallpaper!");
});
$("#carousel-close").click(function () {
    $("#gameModal").css("visibility", "hidden");
		$("#intro").css("visibility", "visible");
});
var carouselpage;
$("#game-close").click(function () {
    $("#wallpaperModal").css("visibility", "hidden");
		$("#gameModal").css("visibility", "visible");
//    $("#gameModal").attr("style", "visibility:visible; padding-top: 73px; padding-bottom: 54px;");
});
