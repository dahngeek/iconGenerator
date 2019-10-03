const mergeImages = require('merge-images');
const {Canvas,Image}=require('canvas');
Canvas.Image=Image;
 
var BACKGROUND_IMAGES_COUNT = 7;
var FOREGROUND_IMAGES_COUNT = 7;

/* for (var bgnumber=1; bgnumber <= BACKGROUND_IMAGES_COUNT; bgnumber++){
    for (var iconnumber=0; iconnumber <= FOREGROUND_IMAGES_COUNT; iconnumber++) {
        var bg = './backgrounds/fondo.png';
        var fg = './icons/Fruta.png';
        mergeImages([bg,fg], {
            Canvas: Canvas
          }).catch(error => { throw error}).then(function (b64){
            var base64Data = b64.replace(/^data:image\/png;base64,/, "");
            var number = bgnumber * iconnumber;
            require("fs").writeFile("./output/icon"+number+".png", base64Data, 'base64', function(err) {
              console.log(err);
            });
          });
    }

} */
var number = 1;
(async function loop() {
  for (var bgnumber=1; bgnumber <= BACKGROUND_IMAGES_COUNT; bgnumber++){
    for (var iconnumber=1; iconnumber <= FOREGROUND_IMAGES_COUNT; iconnumber++) {
        var bg = './backgrounds/fondo '+bgnumber+'.jpg';
        var fg = './icons/Fruta '+iconnumber+'.png';
        await mergeImages([bg,fg], {
            Canvas: Canvas
          }).catch(error => { throw error}).then(function (b64){
            var base64Data = b64.replace(/^data:image\/png;base64,/, "");
            require("fs").writeFile("./output/icon"+number+".png", base64Data, 'base64', function(err) {
              console.log(err);
            });
            number = number+1;
          });
    }
  }
})();