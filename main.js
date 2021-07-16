img="";

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}

function preLoad(){
    img = loadimage('dog_cat.jpg');
}

function draw(){
image(img,0,0,640,420);
fill("#8092ad");
text("Dog", 50,80);
noFill();
stroke("#424852")
rect(30,50,500,450)
}