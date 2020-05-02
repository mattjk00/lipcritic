let els, klc;
let margin;

let songSketch = function(p) {
    p.preload = function () {
        els = new Album("", p.loadImage("img/els.jpg"), 0);
        klc = new Album("", p.loadImage("img/klc.jpg"), 45);
    }

    p.setup = function() {
        p.createCanvas(p.displayWidth, p.displayHeight, p.WEBGL);
        margin = p.width * 0.15;
    }

    p.draw = function() {//quad(margin, 0,  margin, 90, margin + 450, 100, margin + 400, 0,);
        p.background(0, 0, 0);

        p.push();
        p.stroke("#eeeeee");
        p.fill("#111111");
        p.box(p.width, p.height, p.width);
        p.pop();

        p.noStroke();
        p.texture(els.img);
        p.rect(-margin, 0, 100, 100);

        //drawAlbumCube(els, 0, 0, 0);
        //drawAlbumCube(klc, margin, 0, 0);
    }

    p.drawAlbumCube = function(album, x, y, z) {
        p.push();
        p.translate(x, y, z);
        p.rotateY(album.rotation);
        p.rotateZ(album.rotation);
        
        album.rotation += 0.01 * (deltaTime / 50);
        if (album.rotation > 360) { album.rotation = 0; }
        p.texture(album.img);
        p.box(margin/2, margin/2, margin/2);
        p.pop();
    }
}
new p5(songSketch, 'sidebar');