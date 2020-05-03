let headerSketch = function(p) {
    let rotx = 0;
    let rotz = 0;
    let ilan, ilanTexture;

    p.preload = function() {
        ilan = p.loadModel("models/ilan.obj");
        ilanTexture = p.loadImage("models/ilantexture.png");
    }

    p.setup = function() {
        p.createCanvas(p.windowWidth, p.windowHeight * 0.8, p.WEBGL);
        
        p.stroke(250, 250, 250);
        p.noFill();
    }
    p.draw = function() {
        p.push();
        p.background(0, 0, 0);
        p.rotateX(rotx);
        p.box(p.width, p.width, p.width);

        p.rotateX(-rotx/2);
        p.rotateZ(rotz);
        p.box(p.width, p.width, p.width);

        p.rotateY(rotx);
        p.rotateZ(rotz);
        p.box(p.width, p.width, p.width);

        rotx += 0.05 * (p.deltaTime / 50);
        rotz += 0.02 * (p.deltaTime / 50);
        p.pop();

        p.push();
        p.noStroke();
        p.noFill();
        p.scale(200, -200);
        p.rotateY(rotx);
        p.texture(ilanTexture);
        p.model(ilan);
        p.pop();
    }
}
new p5(headerSketch, 'sketch-container');