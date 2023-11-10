
let songIndex;
let masterPlay = document.getElementById("masterPlay");
let progressBar = document.getElementById("progressBar");
let audioItem = new Audio("2.mp3");
let songItems = Array.from(document.getElementsByClassName("songItem"));
//
const songList = [
    { songName: "Mai nikla", filePath: "1.mp3", coverPath: "images07.jpg" },
    { songName: "Madhuban me kanaiyya", filePath: "2.mp3", coverPath: "images02.jpg" },
    { songName: "ishq ke dewane", filePath: "3.mp3", coverPath: "images03.jpg" },
    { songName: "Ek pal ka jeena", filePath: "4.mp3", coverPath: "images04.jpg" },
    { songName: "Malhari", filePath: "5.mp3", coverPath: "images05.jpg" },
    { songName: "Singham", filePath: "6.mp3", coverPath: "images06.jpg" },
    { songName: "Sari ke fall sa ", filePath: "7.mp3", coverPath: "images07.jpg" },
]

masterPlay.addEventListener("click", function () {

    if (audioItem.paused || audioItem.currentTime <= 0) {
        audioItem.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");


    }
    else {
        audioItem.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");

    }
   })


audioItem.addEventListener("timeupdate", function () {

    progress = parseInt((audioItem.currentTime / audioItem.duration) * 100);

    progressBar.value = progress;
})

progressBar.addEventListener('change', function () {

    audioItem.currentTime = (progressBar.value * audioItem.duration) / 100;

})
/*arr.forEach(function(){

})*/

//OR

/*
arr.forEach(()=>{

})


*/


songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songList[i].coverPath;
    element.getElementsByClassName("name7")[0].innerText = songList[i].songName;
})


function playAll(){

    Array.from(document.getElementsByClassName("playb")).forEach((element=>{

        
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");


    }))




    }




Array.from(document.getElementsByClassName("playb")).forEach((element)=>{

    element.addEventListener('click',function(e){

        songIndex=parseInt(e.target.id);
        audioItem.src=`${songIndex+1}.mp3`;

        
        
       
       playAll();

   
      audioItem.play();

          e.target.classList.remove("fa-circle-play");
          e.target.classList.add("fa-circle-pause");

          masterPlay.classList.remove("fa-circle-play");
          masterPlay.classList.add("fa-circle-pause");

     

    
       

   

})})



document.getElementById("next").addEventListener('click',function(){

    
if(songIndex>=6){

    songIndex=0;
}

else{
       songIndex=songIndex+1;
}



          audioItem.src=`${songIndex+1}.mp3`;
          audioItem.currentTime=0;
          audioItem.play();

          
          
    document.getElementById(`${songIndex-1}`).classList.remove("fa-circle-pause");
    document.getElementById(`${songIndex-1}`).classList.add("fa-circle-play");



    document.getElementById(`${songIndex}`).classList.remove("fa-circle-play");
    document.getElementById(`${songIndex}`).classList.add("fa-circle-pause");



          masterPlay.classList.remove("fa-circle-play");
          masterPlay.classList.add("fa-circle-pause");

         







})



document.getElementById('previous').addEventListener('click',function(){


    if(songIndex<=0){
    
        songIndex=0;
    }

    else{
    
        songIndex=songIndex-1;

    }

   
              audioItem.src=`${songIndex+1}.mp3`;
              audioItem.currentTime=0;
              audioItem.play();



              document.getElementById(`${songIndex}`).classList.remove("fa-circle-play");
              document.getElementById(`${songIndex}`).classList.add("fa-circle-pause");
          
          
          
              document.getElementById(`${songIndex+1}`).classList.remove("fa-circle-pause");
              document.getElementById(`${songIndex+1}`).classList.add("fa-circle-play");
          
    

                
              masterPlay.classList.remove("fa-circle-play");
              masterPlay.classList.add("fa-circle-pause");

})