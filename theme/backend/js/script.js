/**
 * 
 * 实现上传图片功能
 * 
 */
$(document).ready(function(){
  window.URL = window.URL || window.webkitURL;
  // upload image
  $("#upload-img").change(function(event) {
    // create temporary url
    var tmpPath = window.URL.createObjectURL(event.target.files[0]);
    var imgAddress = $(this).val();
    console.log(imgAddress);
    // if upload image
    if (imgAddress!== null) {
      // set background, show image
      $("#background").css("background-image", 'url("' + tmpPath + '")');
      $("#image").removeClass("hide").addClass("show");
      // change font color
      $("#editable").addClass("darken");
    }
  });
  // delete image
  $("#btn-delete").click(function(e) {
    e.preventDefault();
    var imgAddress = $("#upload-img").val();
    // if image exists
    if (imgAddress!== null) {
      // hide image
      $("#image").removeClass("show").addClass("hide");
      // change font color
      $("#editable").removeClass("darken");
      // clear image address
      $("#upload-img").val(null);
    }
  });
});