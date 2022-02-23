const Citation = require('./index.js');

// const citation = new Citation("./sunset.jpg", "new-img.png", "Julien", "Php c'est mieux que JS grace à lui j'suis sortie de la hess", "black");
const citation = new Citation("./akhenaton.jpg", "new-img.png", "Akhenaton", "Borsalino ou science de la rime les gens sdiront toujours mais qui scache dans ces signes ?", "black");
// const citation = new Citation("./dorian.jpg", "new-img.png", "Dorian", "Si il n'y est plus c'est que je l'ai vendu", "white");
// const citation = new Citation();
citation.generate();