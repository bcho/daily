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
    var tmppath = window.URL.createObjectURL(event.target.files[0]);
    var img_address = $(this).val();
    console.log(img_address);
    // if upload image
    if (img_address!== null) {
      // set background, show image
      $("#background").css("background-image", 'url("' + tmppath + '")');
      $("#image").removeClass("hide");
      $("#image").addClass("show");
      // change font color
      $("#editable").addClass("darken");
    }
  });
  // delete image
  $("#btn-delete").click(function(e) {
    e.preventDefault();
    var img_address = $("#upload-img").val();
    // if image exists
    if (img_address!== null) {
      // hide image
      $("#image").removeClass("show");
      $("#image").addClass("hide");
      // change font color
      $("#editable").removeClass("darken");
      // clear image address
      $("#upload-img").val(null);
    }
  });
});