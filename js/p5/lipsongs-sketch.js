let els, klc;
let margin;

function preload() {
    els = new Album("", loadImage("img/els.jpg"), 0);
    klc = new Album("", loadImage("img/klc.jpg"), 45);
}

function setup() {
    createCanvas(displayWidth, displayHeight, WEBGL);
    margin = width * 0.15;
}

function draw() {//quad(margin, 0,  margin, 90, margin + 450, 100, margin + 400, 0,);
    background(0, 0, 0);

    push();
    stroke("#eeeeee");
    fill("#111111");
    box(width, height, width);
    pop();

    noStroke();
    texture(els.img);
    rect(-margin, 0, 100, 100);

    //drawAlbumCube(els, 0, 0, 0);
    //drawAlbumCube(klc, margin, 0, 0);
}

function drawAlbumCube(album, x, y, z) {
    push();
    translate(x, y, z);
    rotateY(album.rotation);
    rotateZ(album.rotation);
    
    album.rotation += 0.01 * (deltaTime / 50);
    if (album.rotation > 360) { album.rotation = 0; }
    texture(album.img);
    box(margin/2, margin/2, margin/2);
    pop();
}