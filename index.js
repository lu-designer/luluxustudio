



var images = [
  {
    over: 'images/SJET-index-mouseHover1_6.gif',
    out: 'images/forest_cat.jpg'
  },
  {
    over: 'images/big-w1.png',
    out: 'images/mushroom_jungle.jpg'
  },
  {
    over: 'images/mushroom_jungle.jpg',
    out: "images/nsw electoral new.png"
  },
  {
    over: 'images/sapa_woman.jpg',
    out: "images/sapa_woman.jpg"
  },
  {
    over: 'images/girl_fly_on_bird.jpg',
    out: 'images/girl_fly_on_bird.jpg'
  }
]

function setImg(projectId,img) {
  const {over,out} = images[projectId - 1]
  document.getElementById('project' + projectId).src = images[projectId - 1][img];
}

function preloadImages(){
  images.forEach((item, i) => {
      var i = new Image();
      console.log(item.over)
      i.src = item.over;
  });
}

(function(){
  preloadImages();
})()


