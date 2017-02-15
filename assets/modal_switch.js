var incrementScoreVar = 0; //reference for hooking up backend
var wallpaper; // will be used in css image-background property for the user to download 
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

//understanding the instructions, user presses "next":
$("#introNextBTN").click(function (e) {
	$("#intro").css("visibility", "hidden");
	$("#gameModal").css("visibility", "visible");
	$("li a.DLimg").css("visibility", "visible");
});
//download link on selected carousel image
$(".DLimg").click(function (event) {
	wallpaper = $(this).parent().find("img").attr("src");
	$("#gameModal").css("visibility", "hidden"); //hide modal to show new modal
	$("#instructions").attr("style", "padding-top:52px;padding-bottom: 54px;visibility:show;");
	$("#instructions").css("visibility", "visible");
	$(".modal").css("overflow", "scroll"); //allows scrolling. should be adjusted according to current view.
	$("li a.DLimg").css("visibility", "hidden");
//	$(".bg").css("visibility", "hidden");
});
//closing carousel:
$("#carousel-close").click(function () {
	$("#gameModal").css("visibility", "hidden");
	$("#intro").css("visibility", "visible");
	$("li a.DLimg").css("visibility", "hidden");
});
//closing instructions page:
$("#instructions-close").click(function () {
	$("#instructions").css("visibility", "hidden");
	$("#gameModal").css("visibility", "visible");
	$("li a.DLimg").css("visibility", "visible");
	$("section").css("overflow", "hidden");
});
//pressing "got it" on instructions page:
$("#gotitBTN").click(function () {
	$("#instructions").css("visibility", "hidden");
	$("#wallpaperModal").attr("style", "visibility:visible; padding-top: 73px; padding-bottom: 54px;");
	$("#tobedownloaded").attr("src", wallpaper);
	incrementScoreVar++; //<- This is just for readibility. This is when the user agrees to download the image; we just trust that they do 
});
//closing carousel game, going back to first introduction page 
$("#game-close").click(function () {
	$("#wallpaperModal").attr("style", "visibility:hidden; padding-top: 73px; padding-bottom: 54px;");
	$("#gameModal").css("visibility", "visible");
	$("li a.DLimg").css("visibility", "visible");
//	$(".bg").css("visibility", "visible");
	$("section").css("overflow", "hidden");
	//    $("#gameModal").attr("style", "visibility:visible; padding-top: 73px; padding-bottom: 54px;");
});