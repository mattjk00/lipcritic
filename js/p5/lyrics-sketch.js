let lyricsSketch = function(p) {
    let lyrics = [
        "Piece by piece we lost the world",
        "We bought the world baby piece by piece",
        "You can have it all",
        "If you loose it all",
        "We can loose it all baby piece by piece",
        "",
        "Just ate the world baby all this black mud in my gut all this black mud in my gut",
        "Black black mud in my gut",
        "Just ate the world baby all this black mud in my gut",
        "Black black mud in my gut",
        "Black black mud in my gut",
        "",
        "Piece by piece",
        "We bought the world",
        "We lost the world",
        "Baby piece by piece",
        "You can have it all",
        "If you loose it all",
        "We can loose it all baby piece by piece",
        "",
        "When I feel nothing relinquished",
        "You feel nothing relinquished",
        "You feel nothing relinquished",
        "I feel no pain relinquished",
        "You feel nothing relinquished",
        "We are all things relinquished",
        "",
        "Piece by piece",
        "You could have it all",
        "You could loose it all",
        "Baby piece by piece",
        "",
        "Say one by one",
        "Blow past the world",
        "No part of me left blow past the world baby",
        "Piece by piece",
        "We can lose it all",
        "We can buy it all baby",
        "Piece by piece",
        "Piece by piece",
        "We can have it all",
        "If you loose it all baby we can loose it",
        "We can loose it",
        "We can loose it",
        "We can loose it",
        "We can loose it",
        "Piece by piece baby we can loose it",
        "We can loose it",
        "Piece by piece baby we can loose it",
        "We can loose it",
        "",
        "Just ate the world baby all this black mud in my gut all this black mud in my gut",
        "Black black mud in my gut",
        "Just ate the world baby all this black mud in my gut",
        "Black black mud in my gut",
        "Black black mud in my gut",
        "Black black mud in my gut",
        "",
        "Yeah all this black mud in my gut",
        "gut",
        "All this black mud in my gut",
        "All this black mud in my gut",
        "Just ate the world baby",
        "All this black mud in gut",
        "Black black mud in my gut"
        ];
    let lyricBlock = [];
    let count = 0;
    p.setup = function() {
        p.createCanvas(p.displayWidth * 0.3, p.displayHeight * 0.5);

        for (let i = 0; i < lyrics.length; i++) {
            let block = {};
            block.text = lyrics[i];
            block.y = i * 16;
            block.x = 0;
            lyricBlock.push(block);
        }
        p.textFont('Helvetica');
    }

    p.draw = function() {
        p.background(0, 0, 0);
        p.fill(255);
        for (let i = 0; i < lyricBlock.length; i++) {
            p.text(lyricBlock[i].text, lyricBlock[i].x, lyricBlock[i].y);
            lyricBlock[i].y--;
            if (lyricBlock[i].y < -16) {
                lyricBlock[i].y = lyricBlock[lyricBlock.length - 1].y + 16 * (count + 1);
                count ++;
                lyricBlock[i].x = p.random(0, 200);
                if (count > lyricBlock.length) { count = 0; }
            }
        }
    }
}

new p5(lyricsSketch, 'lyric-sketch-container');