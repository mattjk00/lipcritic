let headerSketch = function(p) {
    let rotx = 0;
    let rotz = 0;
    let ilan, ilanTexture;
    let bret, bretTexture;

    p.preload = function() {
        ilan = p.loadModel("models/ilan.obj");
        ilanTexture = p.loadImage("models/ilantexture2.png");
        bret = p.loadModel("models/bret.obj");
        bretTexture = p.loadImage("models/brettexture.png");
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

        p.pointLight(255, 255, 255, 100, 100, 250);

        p.ambientMaterial(250);
        p.push();
        p.noStroke();
        p.scale(200, -200);
        p.rotateY(rotx/2);
        p.texture(ilanTexture);
        p.model(ilan);
        p.pop();

        p.push();
        p.noStroke();
        p.scale(200, -200);
        p.rotateY(rotx/3);
        p.translate(2, 0);
        p.texture(bretTexture);
        p.model(bret);
        p.pop();

        
    }
}
new p5(headerSketch, 'sketch-container');