var canvas = new fabric.Canvas('myCanvas');

var block_height = 30;
var block_width = 30;

var player_img_X = 10;
var player_img_Y = 10;

function player_update(){

    fabric.Image.fromURL("black panther.png", function(Img) {
    
    player_objects = Img;
    player_objects.scaleToWidth(150);
    player_objects.scaleToHeight(140);
    player_objects.set({
    
    top:player_img_Y,
    left:player_img_X
    
    });
    
    canvas.add(player_objects);
    
    });
    
    }

    function new_image(get_image){

        fabric.Image.fromURL(get_image , function(Img){
            
        block_image_objects = Img;
        block_image_objects.scaleToWidth(block_width);
        block_image_objects.scaleToHeight(block_height);
        block_image_objects.set({
        
        top:player_img_Y,
        left:player_img_X
        
        });
        
        canvas.add(block_image_objects);
        
        });
        
        }

    window.addEventListener("keydown",myKeydown);

function myKeydown(e){

var keypress = e.keyCode;
console.log(keypress);

if(keypress == '70'){

  new_image(ironman_face.png);
  console.log("F");

}

if(keypress == '66'){

    new_image(ironman_body.png);
    console.log("B");
  
}

if(keypress == '76'){

    new_image(ironman_legs.png);
    console.log("L");
  
}

if(keypress == '84'){

    new_image(ironaman_right_hand.png);
    console.log("R");
  
} 

if(keypress == '72'){

    new_image(captain_america_left_hand.png);
    console.log("H");
  
} 

if(keypress == '38'){

    up();
    console.log("UP");
  
} 

if(keypress == '40'){

    down();
    console.log("DOWN");
  
} 

if(keypress == '39'){

    right();
    console.log("RIGHT");
  
} 

if(keypress == '37'){

    left();
    console.log("LEFT");
  
} 
} 
function up(){

    if(player_img_Y >= 0){
 
        player_img_Y = player_img_Y - block_height;
      console.log("Block Image Height = " + block_height);
      console.log("When Up Is pressed, X= "+player_img_X + ", Y =" + player_img_Y);
      canvas.remove(player_objects);
      player_update();
 
    }
 
 }
 
function down(){

    if(player_img_Y <= 500){
 
        player_img_Y = player_img_Y - block_height;
      console.log("Block Image Height = " + block_height);
      console.log("When Down Is pressed, X= "+player_img_X + ", Y =" + player_img_Y);
      canvas.remove(player_objects);
      player_update();
 
    }
 
 }

function left(){

    if(player_img_X >= 0){
 
        player_img_X = player_img_X - block_width;
      console.log("Block Image Height = " + block_width);
      console.log("When Left Is pressed, X= "+player_img_X + ", Y =" + player_img_Y);
      canvas.remove(player_objects);
      player_update();
 
    }
 
 }

function right(){

    if(player_img_X <= 850){
 
        player_img_X = player_img_X - block_width;
      console.log("Block Image Height = " + block_width);
      console.log("When Right Is pressed, X= "+player_img_X + ", Y =" + player_img_Y);
      canvas.remove(player_objects);
      player_update();
 
    }
 
 }

