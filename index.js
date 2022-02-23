const Jimp = require('Jimp');

class Lyrics {
    constructor(background, output, author, lyrics, color) {
        this.background = background;
        this.output = output;
        this.author = author;
        this.lyrics = lyrics;
        this.color = color;
    }

    generate() {
        Jimp.read(this.background)
            .then(image => {
                let fontSize;
                let imgWidth = image.getWidth();
                console.log('img width -> ', imgWidth);
                if (this.color == "black") {
                    if (imgWidth > 2000 && imgWidth < 5000) {
                        fontSize = Jimp.FONT_SANS_128_BLACK;
                        image.blur(30);
                    }
                    else if (imgWidth > 1000 && imgWidth < 2000) {
                        fontSize = Jimp.FONT_SANS_64_BLACK;
                        image.blur(10);

                    }
                    else if (imgWidth > 100 && imgWidth < 1000) {
                        fontSize = Jimp.FONT_SANS_32_BLACK;
                        image.blur(10);

                    }
                } else if (this.color == "white") {
                    if (imgWidth > 2000 && imgWidth < 5000) {
                        fontSize = Jimp.FONT_SANS_128_WHITE;
                        image.blur(30);
                    }
                    else if (imgWidth > 1000 && imgWidth < 2000) {
                        fontSize = Jimp.FONT_SANS_64_WHITE;
                        image.blur(10);

                    }
                    else if (imgWidth > 100 && imgWidth < 1000) {
                        fontSize = Jimp.FONT_SANS_32_WHITE;
                        image.blur(10);

                    }
                }

                Jimp.loadFont(fontSize).then(font => {
                    image.print(
                        font,
                        image.getWidth() / 2 / 2,
                        0,
                        {
                            text: this.lyrics,
                            alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
                            alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
                        },
                        image.getWidth() / 2,
                        image.getHeight()
                    );
                    image.writeAsync(this.output);
                });
                Jimp.loadFont(fontSize).then(font => {
                    image.print(font,
                        0,
                        Jimp.measureTextHeight(font, this.lyrics, image.getWidth() / 2),
                        {
                            text: this.author,
                            alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
                            alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
                        },
                        image.getWidth(),
                        image.getHeight()
                    );
                    image.writeAsync(this.output);
                });
            })
            .catch(err => {
                // Handle an exception.
            });
    }
}

module.exports = Lyrics;