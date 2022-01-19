
                                            // INITIALISATION ET DÉMARRAGE JEU DÉBUT
    var game = new Game();
    function init() {                           // FONCTION INITIALISATION JEU
        game.init();
    };
                                            // INITIALISATION ET DÉMARRAGE JEU FIN

                                                // DÉFINITION DE TOUTES LES IMAGES DU JEU DÉBUT
/**
objet imageRepository contenant toutes les images du jeu afin de ne les créer qu'une seule fois
pattern Singleton (ensemble ne comprenant qu'un seul élément)
*/

var imageRepository = new function() {           // définition des images

                // IMAGES DU BACKGROUND
    this.background = new Image();                          // fond d'écran

    this.backgroundMoonBlue = new Image();                  // lune bleue
    this.backgroundMoonMiddle = new Image();                // lune grise

    this.backgroundPlanetPluton = new Image();              // planète pluton

    this.backgroundPlanetLightBlueSmall = new Image();      // planète lumière bleue petite
    this.backgroundPlanetMulticolorSmall = new Image();     // planète multicolore petite
    this.backgroundPlanetVenusSmall = new Image();          // planète venus petite
    this.backgroundPlanetEarthBlue = new Image();           // planète terre bleue
    this.backgroundPlanetDesert = new Image();              // planète désert

    this.backgroundPlanetLavaOne = new Image();             // planète lave 1
    this.backgroundPlanetLavaTwo = new Image();             // planète lave 2
    this.backgroundPlanetLavaThree = new Image();           // planète lave 3

    this.backgroundCloudsOne = new Image();                 // nuage 1 (orange)
    this.backgroundCloudsTwo = new Image();                 // nuage 2 (mauve)
    this.backgroundCloudsThree = new Image();               // nuage 3 (rose)

    this.backgroundPlasmaOne = new Image();                 // plasma 1 (multicolore)

    this.backgroundBrightStarOne = new Image();             // bright star 1
    this.backgroundBrightStarTwo = new Image();             // bright star 2
    this.backgroundBrightStarThree = new Image();           // bright star 3

    this.backgroundClassicOne = new Image();                // classic 1
    this.backgroundClassicTwo = new Image();                // classic 2
    this.backgroundClassicThree = new Image();              // classic 3

    this.backgroundDefaultOne = new Image();                // default 1
    this.backgroundDefaultTwo = new Image();                // default 2
    this.backgroundDefaultThree = new Image();              // default 3

    this.backgroundDistantSunOne = new Image();             // distant sun 1
    this.backgroundDistantSunTwo = new Image();             // distant sun 2
    this.backgroundDistantSunThree = new Image();           // distant sun 3

    this.backgroundGFlareHundredOneOne = new Image();       // g flare 101 1
    this.backgroundGFlareHundredOneTwo = new Image();       // g flare 101 2
    this.backgroundGFlareHundredOneThree = new Image();     // g flare 101 3

    this.backgroundGFlareHundredTwoOne = new Image();       // g flare 102 1
    this.backgroundGFlareHundredTwoTwo = new Image();       // g flare 102 2
    this.backgroundGFlareHundredTwoThree = new Image();     // g flare 102 3

    this.backgroundHiddenPlanetOne = new Image();           // hidden planet 1
    this.backgroundHiddenPlanetTwo = new Image();           // hidden planet 2
    this.backgroundHiddenPlanetThree = new Image();         // hidden planet 3

                // IMAGES DES VAISSEAUX
    this.spaceship = new Image();                           // vaisseau joueur
    this.bullet = new Image();                              // missile joueur

                // IMAGES DES MISSILES
    this.enemy = new Image();                               // vaisseau ennemi
    this.enemyBullet = new Image();                         // missile ennemi

                // s'assurer que toutes les images soient chargées avant de commencer le jeu
    var numImages = 41;                                     // nombre d'image ---------- !!! NE PAS OUBLIER DE MODIFIER
    var numLoaded = 0;

                // fonction pour charger les images avant qu'elles ne soient utilisées en jeu
    function imageLoaded() {
        numLoaded++;
        if (numLoaded === numImages) {
            window.init();
        }
    };

                    // IMAGES DU BACKGROUND
        this.background.onload = function() {                       // fond écran
            imageLoaded();
        };

        this.backgroundMoonBlue.onload = function() {               // lune bleue
            imageLoaded();
        };
        this.backgroundMoonMiddle.onload = function() {             // lune grise
            imageLoaded();
        };
        this.backgroundPlanetPluton.onload = function() {           // planète pluton
            imageLoaded();
        };

        this.backgroundPlanetLightBlueSmall.onload = function() {   // planète lumière bleue petite
            imageLoaded();
        };
        this.backgroundPlanetMulticolorSmall.onload = function() {  // planète multicolore petite
            imageLoaded();
        };
        this.backgroundPlanetVenusSmall.onload = function() {       // planète venus petite
            imageLoaded();
        };
        this.backgroundPlanetEarthBlue.onload = function() {        // planète terre bleue
            imageLoaded();
        };
        this.backgroundPlanetDesert.onload = function() {           // planète désert
            imageLoaded();
        };

        this.backgroundPlanetLavaOne.onload = function() {          // planète lave 1
            imageLoaded();
        };
        this.backgroundPlanetLavaTwo.onload = function() {          // planète lave 2
            imageLoaded();
        };
        this.backgroundPlanetLavaThree.onload = function() {        // planète lave 3
            imageLoaded();
        };

        this.backgroundCloudsOne.onload = function() {              // nuage (orange)
            imageLoaded();
        };
        this.backgroundCloudsTwo.onload = function() {              // nuage (mauve)
            imageLoaded();
        };
        this.backgroundCloudsThree.onload = function() {            // nuage (rose)
            imageLoaded();
        };

        this.backgroundPlasmaOne.onload = function() {              // plasma 1 (multicolore)
            imageLoaded();
        };

        this.backgroundBrightStarOne.onload = function() {          // bright star 1
            imageLoaded();
        };
        this.backgroundBrightStarTwo.onload = function() {          // bright star 2
            imageLoaded();
        };
        this.backgroundBrightStarThree.onload = function() {        // bright star 3
            imageLoaded();
        };

        this.backgroundClassicOne.onload = function() {             // classic 1
            imageLoaded();
        };
        this.backgroundClassicTwo.onload = function() {             // classic 2
            imageLoaded();
        };
        this.backgroundClassicThree.onload = function() {           // classic 3
            imageLoaded();
        };

        this.backgroundDefaultOne.onload = function() {             // default 1
            imageLoaded();
        };
        this.backgroundDefaultTwo.onload = function() {             // default 2
            imageLoaded();
        };
        this.backgroundDefaultThree.onload = function() {           // default 3
            imageLoaded();
        };

        this.backgroundDistantSunOne.onload = function() {          // distant sun 1
            imageLoaded();
        };
        this.backgroundDistantSunTwo.onload = function() {          // distant sun 2
            imageLoaded();
        };
        this.backgroundDistantSunThree.onload = function() {        // distant sun 3
            imageLoaded();
        };

        this.backgroundGFlareHundredOneOne.onload = function() {    // g flare 101 1
            imageLoaded();
        };
        this.backgroundGFlareHundredOneTwo.onload = function() {    // g flare 101 2
            imageLoaded();
        };
        this.backgroundGFlareHundredOneThree.onload = function() {  // g flare 101 3
            imageLoaded();
        };

        this.backgroundGFlareHundredTwoOne.onload = function() {    // g flare 102 1
            imageLoaded();
        };
        this.backgroundGFlareHundredTwoTwo.onload = function() {    // g flare 102 2
            imageLoaded();
        };
        this.backgroundGFlareHundredTwoThree.onload = function() {  // g flare 102 3
            imageLoaded();
        };

        this.backgroundHiddenPlanetOne.onload = function() {        // hidden planet 1
            imageLoaded();
        };
        this.backgroundHiddenPlanetTwo.onload = function() {        // hidden planet 2
            imageLoaded();
        };
        this.backgroundHiddenPlanetThree.onload = function() {      // hidden planet 3
            imageLoaded();
        };

                    // IMAGES DES VAISSEAUX
        this.spaceship.onload = function() {                        // vaisseau joueur
            imageLoaded();
        };
        this.enemy.onload = function() {                            // vaisseau ennemi
            imageLoaded();
        };

                    // IMAGES DES MISSILES
        this.bullet.onload = function() {                           // missile joueur
            imageLoaded();
        };
        this.enemyBullet.onload = function() {                      // missile ennemi
            imageLoaded();
        };

                            // GROUPE D'IMAGES LIENS
                    // IMAGES DU BACKGROUND
        this.background.src = "img/background.png";                                     // fond écran

        this.backgroundMoonBlue.src = "img/moon-blue.png";                              // lune bleue
        this.backgroundMoonMiddle.src = "img/moon-middle.png";                          // lune grise

        this.backgroundPlanetPluton.src = "img/planet-pluton.png";                      // planète pluton

        this.backgroundPlanetLightBlueSmall.src = "img/planet-light-blue-small.png";    // planète lumière bleue petite
        this.backgroundPlanetMulticolorSmall.src = "img/planet-multicolor-small.png";   // planète muticolore petite
        this.backgroundPlanetVenusSmall.src = "img/planet-venus-small.png";             // planète venus petite
        this.backgroundPlanetEarthBlue.src = "img/planet-earth-blue.png";               // planète terre bleue
        this.backgroundPlanetDesert.src = "img/planet-desert.png";                      // planète désert

        this.backgroundPlanetLavaOne.src = "img/planet-lava-one.png";                   // planète lave 1
        this.backgroundPlanetLavaTwo.src = "img/planet-lava-two.png";                   // planète lave 2
        this.backgroundPlanetLavaThree.src = "img/planet-lava-three.png";               // planète lave 3

        this.backgroundCloudsOne.src = "img/clouds-1.png";                              // nuage (orange)
        this.backgroundCloudsTwo.src = "img/clouds-2.png";                              // nuage (mauve)
        this.backgroundCloudsThree.src = "img/clouds-3.png";                            // nuage (rose)

        this.backgroundPlasmaOne.src = "img/plasma-1.png";                              // plasma 1 (multicolore)

        this.backgroundBrightStarOne.src = "img/bright-star-1.png";                     // bright star 1
        this.backgroundBrightStarTwo.src = "img/bright-star-2.png";                     // bright star 2
        this.backgroundBrightStarThree.src = "img/bright-star-3.png";                   // bright star 3

        this.backgroundClassicOne.src = "img/classic-1.png";                            // classic 1
        this.backgroundClassicTwo.src = "img/classic-2.png";                            // classic 2
        this.backgroundClassicThree.src = "img/classic-3.png";                          // classic 3

        this.backgroundDefaultOne.src = "img/default-1.png";                            // default 1
        this.backgroundDefaultTwo.src = "img/default-2.png";                            // default 2
        this.backgroundDefaultThree.src = "img/default-3.png";                          // default 3

        this.backgroundDistantSunOne.src = "img/distant-sun-1.png";                     // distant sun 1
        this.backgroundDistantSunTwo.src = "img/distant-sun-2.png";                     // distant sun 2
        this.backgroundDistantSunThree.src = "img/distant-sun-3.png";                   // distant sun 3

        this.backgroundGFlareHundredOneOne.src = "img/g-flare-101-1.png";               // g flare 101 1
        this.backgroundGFlareHundredOneTwo.src = "img/g-flare-101-2.png";               // g flare 101 2
        this.backgroundGFlareHundredOneThree.src = "img/g-flare-101-3.png";             // g flare 101 3

        this.backgroundGFlareHundredTwoOne.src = "img/g-flare-102-1.png";               // g flare 102 1
        this.backgroundGFlareHundredTwoTwo.src = "img/g-flare-102-2.png";               // g flare 102 2
        this.backgroundGFlareHundredTwoThree.src = "img/g-flare-102-3.png";             // g flare 102 3

        this.backgroundHiddenPlanetOne.src = "img/hidden-planet-1.png";                 // hidden planet 1
        this.backgroundHiddenPlanetTwo.src = "img/hidden-planet-2.png";                 // hidden planet 2
        this.backgroundHiddenPlanetThree.src = "img/hidden-planet-3.png";               // hidden planet 3

                    // IMAGES DES VAISSEAUX
        this.spaceship.src = "img/herbe2.png";                    // vaisseau joueur
        this.bullet.src = "img/herbepan.png";                     // missile joueur

                    // IMAGES DES MISSILES
        this.enemy.src = "img/money.png";                         // vaisseau ennemi
        this.enemyBullet.src = "img/dollar.png";                  // missile ennemi
};
                                                // DÉFINITION DE TOUTES LES IMAGES DU JEU FIN

                                                // CRÉATION OBJET QUI DESSINERA TOUTES LES IMAGES DU JEU DÉBUT
/**
Crée l'objet Drawable qui sera la classe de base pour tous les objets pouvant être dessinés dans le jeu.
↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
*/

function Drawable() {                           // FONCTION DE DESSIN
    this.init = function(x, y, width, height) {
                // variables par défaut
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    };
    this.speed = 0;
    this.canvasWidth = 0;
    this.canvasHeight = 0;
    this.collidableWith = "";
    this.isColliding = false;
    this.type = "";
    
    this.draw = function() {
    };
    this.move = function() {
    };
    this.isCollidableWith = function(object) {
        return (this.collidableWith === object.type);
    };
};

                        /* -------------------- CRÉATION DE TOUS LES OBJETS COMPOSANT LE FOND ÉCRAN ANIMÉ DÉBUT -------------------- */
/*
création de tous les objets animés qui vont composer le fond d'écran (chaque objet créé ice devindra un enfant de l'objet drawable)
définir la vitesse de défilement en px par image
condition en if pour réinitialiser l'image une fois sortie de l'écran
groupe d'image du backgound héritent des propriétés de Drawable (grâce à prototype)
*/
                                                        // BACKGROUND ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
        function Background() {
            this.speed = 0.25;
            this.draw = function() {
                this.y += this.speed;
                this.context.drawImage(imageRepository.background, this.x, this.y);
                        // dessiner une nouvelle image sur le bord supérieur de la première image
                this.context.drawImage(imageRepository.background, this.x, this.y - this.canvasHeight);
                    if (this.y >= this.canvasHeight) {
                        this.y = 0;
                    }
            };
        };
            Background.prototype = new Drawable();


                                                        // LUNE BLEUE ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
        function BackgroundMoonBlue() {
            this.speed = 1;
                this.draw = function() {
                this.y += this.speed;
                this.context.drawImage(imageRepository.backgroundMoonBlue, this.x, this.y);
                    if (this.y >= this.canvasHeight) {
                    this.y = 23825;
                    }
                };
        };
            BackgroundMoonBlue.prototype = new Drawable();
                                                        // LUNE GRISE ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
        function BackgroundMoonMiddle() {
            this.speed = 1;
                this.draw = function() {
                this.y += this.speed;
                this.context.drawImage(imageRepository.backgroundMoonMiddle, this.x, this.y);
                    if (this.y >= this.canvasHeight) {
                    this.y = -12825;
                    }
                };
        };
            BackgroundMoonMiddle.prototype = new Drawable();


                                                        // PLANÈTE PLUTON ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
        function BackgroundPlanetPluton() {
            this.speed = 1;
            this.draw = function() {
                this.y += this.speed;
                this.context.drawImage(imageRepository.backgroundPlanetPluton, this.x, this.y);
                    if (this.y >= this.canvasHeight) {
                    this.y = -2360;
                    }
            };
        };
        BackgroundPlanetPluton.prototype = new Drawable();


                                                        // PLANÈTE LUMIÈRE BLEUE PETITE ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
        function BackgroundPlanetLightBlueSmall() {
            this.speed = 1;
            this.draw = function() {
                this.y += this.speed;
                this.context.drawImage(imageRepository.backgroundPlanetLightBlueSmall, this.x, this.y);
                    if (this.y >= this.canvasHeight) {
                    this.y = -3525;
                    }
            };
        };
            BackgroundPlanetLightBlueSmall.prototype = new Drawable();
                                                        // PLANÈTE MULTICOLORE PETITE ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
        function BackgroundPlanetMulticolorSmall() {
            this.speed = 1;
            this.draw = function() {
                this.y += this.speed;
                this.context.drawImage(imageRepository.backgroundPlanetMulticolorSmall, this.x, this.y);
                    if (this.y >= this.canvasHeight) {
                    this.y = -1025;
                    }
            };
        };
            BackgroundPlanetMulticolorSmall.prototype = new Drawable();
                                                        // PLANÈTE VENUS PETITE ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
        function BackgroundPlanetVenusSmall() {
            this.speed = 1;
            this.draw = function() {
                this.y += this.speed;
                this.context.drawImage(imageRepository.backgroundPlanetVenusSmall, this.x, this.y);
                    if (this.y >= this.canvasHeight) {
                    this.y = -1525;
                    }
            };
        };
            BackgroundPlanetVenusSmall.prototype = new Drawable();
                                                        // PLANÈTE TERRE BLEUE ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
        function BackgroundPlanetEarthBlue() {
            this.speed = 1;
            this.draw = function() {
                this.y += this.speed;
                this.context.drawImage(imageRepository.backgroundPlanetEarthBlue, this.x, this.y);
                    if (this.y >= this.canvasHeight) {
                    this.y = -21525;
                    }
            };
        };
            BackgroundPlanetEarthBlue.prototype = new Drawable();
                                                        // PLANÈTE DÉSERT ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
        function BackgroundPlanetDesert() {
            this.speed = 1;
            this.draw = function() {
                this.y += this.speed;
                this.context.drawImage(imageRepository.backgroundPlanetDesert, this.x, this.y);
                    if (this.y >= this.canvasHeight) {
                    this.y = -28945;
                    }
            };
        };
            BackgroundPlanetDesert.prototype = new Drawable();


                                                        // PLANÈTE LAVE 1 ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
        function BackgroundPlanetLavaOne() {
            this.speed = 1;
            this.draw = function() {
                this.y += this.speed;
                this.context.drawImage(imageRepository.backgroundPlanetLavaOne, this.x, this.y);
                    if (this.y >= this.canvasHeight) {
                    this.y = -17925;
                    }
            };
        };
            BackgroundPlanetLavaOne.prototype = new Drawable();
                                                        // PLANÈTE LAVE 2 ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
        function BackgroundPlanetLavaTwo() {
            this.speed = 1;
            this.draw = function() {
                this.y += this.speed;
                this.context.drawImage(imageRepository.backgroundPlanetLavaTwo, this.x, this.y);
                    if (this.y >= this.canvasHeight) {
                    this.y = -23585;
                    }
            };
        };
            BackgroundPlanetLavaTwo.prototype = new Drawable();
                                                        // PLANÈTE LAVE 3 ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
        function BackgroundPlanetLavaThree() {
            this.speed = 1;
            this.draw = function() {
                this.y += this.speed;
                this.context.drawImage(imageRepository.backgroundPlanetLavaThree, this.x, this.y);
                    if (this.y >= this.canvasHeight) {
                    this.y = -39515;
                    }
            };
        };
            BackgroundPlanetLavaThree.prototype = new Drawable();


                                                        // NUAGE 1 (ORANGE) ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
        function BackgroundCloudsOne() {
            this.speed = 1.75;
            this.draw = function() {
                this.y += this.speed;
                this.context.drawImage(imageRepository.backgroundCloudsOne, this.x, this.y);
                    if (this.y >= this.canvasHeight) {
                    this.y = -1125;
                    }
            };
        };
            BackgroundCloudsOne.prototype = new Drawable();
                                                        // NUAGE 2 (MAUVE) ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
        function BackgroundCloudsTwo() {
            this.speed = 1.75;
            this.draw = function() {
                this.y += this.speed;
                this.context.drawImage(imageRepository.backgroundCloudsTwo, this.x, this.y);
                    if (this.y >= this.canvasHeight) {
                    this.y = -3515;
                    }
            };
        };
            BackgroundCloudsTwo.prototype = new Drawable();
                                                        // NUAGE 3 (ROSE) ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
        function BackgroundCloudsThree() {
            this.speed = 1.75;
            this.draw = function() {
                this.y += this.speed;
                this.context.drawImage(imageRepository.backgroundCloudsThree, this.x, this.y);
                    if (this.y >= this.canvasHeight) {
                    this.y = -5965;
                    }
            };
        };
            BackgroundCloudsThree.prototype = new Drawable();


                                                        // PLASMA (MULTICOLORE) ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
        function BackgroundPlasmaOne() {
            this.speed = 4;
            this.draw = function() {
                this.y += this.speed;
                this.context.drawImage(imageRepository.backgroundPlasmaOne, this.x, this.y);
                    if (this.y >= this.canvasHeight) {
                    this.y = -16275;
                    }
            };
        };
            BackgroundPlasmaOne.prototype = new Drawable();


                                                        // BRIGHT STAR 1 ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
        function BackgroundBrightStarOne() {
            this.speed = 1.5;
            this.draw = function() {
                this.y += this.speed;
                this.context.drawImage(imageRepository.backgroundBrightStarOne, this.x, this.y);
                    if (this.y >= this.canvasHeight) {
                    this.y = -11025;
                    }
            };
        };
            BackgroundBrightStarOne.prototype = new Drawable();
                                                        // BRIGHT STAR 2 ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
        function BackgroundBrightStarTwo() {
            this.speed = 2;
            this.draw = function() {
                this.y += this.speed;
                this.context.drawImage(imageRepository.backgroundBrightStarTwo, this.x, this.y);
                    if (this.y >= this.canvasHeight) {
                    this.y = -3655;
                    }
            };
        };
            BackgroundBrightStarTwo.prototype = new Drawable();
                                                        // BRIGHT STAR 3 ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
        function BackgroundBrightStarThree() {
            this.speed = 1;
            this.draw = function() {
                this.y += this.speed;
                this.context.drawImage(imageRepository.backgroundBrightStarThree, this.x, this.y);
                    if (this.y >= this.canvasHeight) {
                    this.y = -19125;
                    }
            };
        };
            BackgroundBrightStarThree.prototype = new Drawable();



                                                        // CLASSIC 1 ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
        function BackgroundClassicOne() {
            this.speed = 1.5;
            this.draw = function() {
                this.y += this.speed;
                this.context.drawImage(imageRepository.backgroundClassicOne, this.x, this.y);
                    if (this.y >= this.canvasHeight) {
                    this.y = -7775;
                    }
            };
        };
            BackgroundClassicOne.prototype = new Drawable();
                                                        // CLASSIC 2 ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
        function BackgroundClassicTwo() {
            this.speed = 1;
            this.draw = function() {
                this.y += this.speed;
                this.context.drawImage(imageRepository.backgroundClassicTwo, this.x, this.y);
                    if (this.y >= this.canvasHeight) {
                    this.y = -12835;
                    }
            };
        };
            BackgroundClassicTwo.prototype = new Drawable();
                                                        // CLASSIC 3 ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
        function BackgroundClassicThree() {
            this.speed = 1.5;
                this.draw = function() {
                this.y += this.speed;
                this.context.drawImage(imageRepository.backgroundClassicThree, this.x, this.y);
                    if (this.y >= this.canvasHeight) {
                    this.y = -4195;
                    }
                };
        };
            BackgroundClassicThree.prototype = new Drawable();


                                                        // DEFAULT 1 ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
        function BackgroundDefaultOne() {
            this.speed = 2;
            this.draw = function() {
                this.y += this.speed;
                this.context.drawImage(imageRepository.backgroundDefaultOne, this.x, this.y);
                    if (this.y >= this.canvasHeight) {
                    this.y = -1775;
                    }
            };
        };
            BackgroundDefaultOne.prototype = new Drawable();
                                                        // DEFAULT 2 ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
        function BackgroundDefaultTwo() {
            this.speed = 2;
            this.draw = function() {
                this.y += this.speed;
                this.context.drawImage(imageRepository.backgroundDefaultTwo, this.x, this.y);
                    if (this.y >= this.canvasHeight) {
                    this.y = -5775;
                    }
            };
        };
            BackgroundDefaultTwo.prototype = new Drawable();
                                                        // DEFAULT 3 ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
        function BackgroundDefaultThree() {
            this.speed = 1.5;
            this.draw = function() {
                this.y += this.speed;
                this.context.drawImage(imageRepository.backgroundDefaultThree, this.x, this.y);
                    if (this.y >= this.canvasHeight) {
                    this.y = -12775;
                    }
            };
        };
            BackgroundDefaultThree.prototype = new Drawable();


                                                        // DISTANT SUN 1 ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
        function BackgroundDistantSunOne() {
            this.speed = 2;
            this.draw = function() {
                this.y += this.speed;
                this.context.drawImage(imageRepository.backgroundDistantSunOne, this.x, this.y);
                    if (this.y >= this.canvasHeight) {
                    this.y = -1875;
                    }
            };
        };
            BackgroundDistantSunOne.prototype = new Drawable();
                                                        // DISTANT SUN 2 ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
        function BackgroundDistantSunTwo() {
            this.speed = 2;
            this.draw = function() {
                this.y += this.speed;
                this.context.drawImage(imageRepository.backgroundDistantSunTwo, this.x, this.y);
                    if (this.y >= this.canvasHeight) {
                    this.y = -7235;
                    }
            };
        };
            BackgroundDistantSunTwo.prototype = new Drawable();
                                                        // DISTANT SUN 3 ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
        function BackgroundDistantSunThree() {
            this.speed = 2.75;
            this.draw = function() {
                this.y += this.speed;
                this.context.drawImage(imageRepository.backgroundDistantSunThree, this.x, this.y);
                    if (this.y >= this.canvasHeight) {
                    this.y = -12875;
                    }
            };
        };
            BackgroundDistantSunThree.prototype = new Drawable();


                                                        // G FLARE 101 1 ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
        function BackgroundGFlareHundredOneOne() {
            this.speed = 1.75;
            this.draw = function() {
                this.y += this.speed;
                this.context.drawImage(imageRepository.backgroundGFlareHundredOneOne, this.x, this.y);
                    if (this.y >= this.canvasHeight) {
                    this.y = -4815;
                    }
            };
        };
            BackgroundGFlareHundredOneOne.prototype = new Drawable();
                                                        // G FLARE 101 2 ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
        function BackgroundGFlareHundredOneTwo() {
            this.speed = 1.75;
            this.draw = function() {
                this.y += this.speed;
                this.context.drawImage(imageRepository.backgroundGFlareHundredOneTwo, this.x, this.y);
                    if (this.y >= this.canvasHeight) {
                    this.y = -15875;
                    }
            };
        };
            BackgroundGFlareHundredOneTwo.prototype = new Drawable();
                                                        // G FLARE 101 3 ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
        function BackgroundGFlareHundredOneThree() {
            this.speed = 1.75;
            this.draw = function() {
                this.y += this.speed;
                this.context.drawImage(imageRepository.backgroundGFlareHundredOneThree, this.x, this.y);
                    if (this.y >= this.canvasHeight) {
                    this.y = -1875;
                    }
            };
        };
            BackgroundGFlareHundredOneThree.prototype = new Drawable();


                                                        // G FLARE 102 1 ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
        function BackgroundGFlareHundredTwoOne() {
            this.speed = 2;
            this.draw = function() {
                this.y += this.speed;
                this.context.drawImage(imageRepository.backgroundGFlareHundredTwoOne, this.x, this.y);
                    if (this.y >= this.canvasHeight) {
                    this.y = -2275;
                    }
            };
        };
            BackgroundGFlareHundredTwoOne.prototype = new Drawable();
                                                        // G FLARE 102 2 ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
        function BackgroundGFlareHundredTwoTwo() {
            this.speed = 2;
            this.draw = function() {
                this.y += this.speed;
                this.context.drawImage(imageRepository.backgroundGFlareHundredTwoTwo, this.x, this.y);
                    if (this.y >= this.canvasHeight) {
                    this.y = -18435;
                    }
            };
        };
            BackgroundGFlareHundredTwoTwo.prototype = new Drawable();
                                                        // G FLARE 102 3 ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
        function BackgroundGFlareHundredTwoThree() {
            this.speed = 2;
            this.draw = function() {
                this.y += this.speed;
                this.context.drawImage(imageRepository.backgroundGFlareHundredTwoThree, this.x, this.y);
                    if (this.y >= this.canvasHeight) {
                    this.y = -52645;
                    }
            };
        };
            BackgroundGFlareHundredTwoThree.prototype = new Drawable();


                                                        // HIDDEN PLANET 1 ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
        function BackgroundHiddenPlanetOne() {
            this.speed = 3;
            this.draw = function() {
                this.y += this.speed;
                this.context.drawImage(imageRepository.backgroundHiddenPlanetOne, this.x, this.y);
                    if (this.y >= this.canvasHeight) {
                    this.y = -52675;
                    }
            };
        };
            BackgroundHiddenPlanetOne.prototype = new Drawable();
                                                        // HIDDEN PLANET 2 ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
        function BackgroundHiddenPlanetTwo() {
            this.speed = 3;
            this.draw = function() {
                this.y += this.speed;
                this.context.drawImage(imageRepository.backgroundHiddenPlanetTwo, this.x, this.y);
                    if (this.y >= this.canvasHeight) {
                    this.y = -36455;
                    }
            };
        };
            BackgroundHiddenPlanetTwo.prototype = new Drawable();
                                                        // HIDDEN PLANET 3 ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓
        function BackgroundHiddenPlanetThree() {
            this.speed = 3;
            this.draw = function() {
                this.y += this.speed;
                this.context.drawImage(imageRepository.backgroundHiddenPlanetThree, this.x, this.y);
                    if (this.y >= this.canvasHeight) {
                    this.y = -18650;
                    }
            };
        };
            BackgroundHiddenPlanetThree.prototype = new Drawable();

                        /* -------------------- CRÉATION DE TOUS LES OBJETS COMPOSANT LE FOND ÉCRAN ANIMÉ FIN -------------------- */

                                            // MISSILE DÉBUT
/*
Crée l'objet Bullet que le vaisseau tire. Les bullet sont
dessinés sur le canvas principal.
*/

    function Bullet(object) {                   // FONCTION OBJET MISSILE
        this.alive = false;             // vrai si le bullet est en cours d'utilisation
        var self = object;
    /*
    * définir les valeurs des bullet
    */
        this.spawn = function(x, y, speed) {
            this.x = x;
            this.y = y;
            this.speed = speed;
            this.alive = true;
        };
    /*
    * Utilise un "rectangle sale" pour effacer le bullet et le déplacer.
    * Renvoi vrai si le bullet s'est déplacé hors de l'écran, indiquant que
    * le bullet est prêt à sortir de l'image, sinon tire
    * le bullet.
    */

        this.draw = function() {                // FONCTION DESSIN ET DÉPLACEMENT MISSILE
            this.context.clearRect(this.x-1, this.y-1, this.width+1, this.height+1);
            this.y -= this.speed;
            if (this.isColliding) {
                return true;
            }
            if (self === "bullet" && this.y <= 0 - this.height) {
                return true;
            }
            else if (self === "enemyBullet" && this.y >= this.canvasHeight) {
                return true;
            }
            else {
                if (self === "bullet") {
                    this.context.drawImage(imageRepository.bullet, this.x, this.y);
                }
                else if (self === "enemyBullet") {
                    this.context.drawImage(imageRepository.enemyBullet, this.x, this.y);
                }
                return false;
            }
        };
    /*
    * Réinitialise les valeurs des bullet
    */

        this.clear = function() {               // FONCTION DE RÉINITIALISATION DU MISSILE
            this.x = 0;
            this.y = 0;
            this.speed = 0;
            this.alive = false;
            this.isColliding = false;
        };
    };
    Bullet.prototype = new Drawable();
                                                // MISSILE FIN

                                                // CRÉATION PARTITIONNEMENT SPATIAL DÉBUT
/*
* QuadTree objet.
*
* Les index quadrant sont marqués comme ceci:
*     |
*  1  |  0
* —-+—-
*  2  |  3
*     |
*/

function QuadTree(boundBox, lvl) {
    var maxObjects = 10;
    this.bounds = boundBox || {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };
    var objects = [];
    this.nodes = [];
    var level = lvl || 0;
    var maxLevels = 5;
/*
* effacer tous les quadtree et noeuds d'objets
*/
    this.clear = function() {
        objects = [];
        for (var i = 0; i < this.nodes.length; i++) {
            this.nodes[i].clear();
        }
        this.nodes = [];
    };
/*
*obtenir tous les objets dans le quadTree
*/
    this.getAllObjects = function(returnedObjects) {
        for (var i = 0; i < this.nodes.length; i++) {
            this.nodes[i].getAllObjects(returnedObjects);
        }
        for (var i = 0, len = objects.length; i < len; i++) {
            returnedObjects.push(objects[i]);
        }
        return returnedObjects;
    };
/*
* Renvoyer tous les objets qui pourraient entrer en collision
*/
    this.findObjects = function(returnedObjects, obj) {
        if (typeof obj === "undefined") {
            return;
        }
        var index = this.getIndex(obj);
        if (index != -1 && this.nodes.length) {
            this.nodes[index].findObjects(returnedObjects, obj);
        }
        for (var i = 0, len = objects.length; i < len; i++) {
            returnedObjects.push(objects[i]);
        }
        return returnedObjects;
    };
/*
* Insérer l'objet dans le quadTree. Si l'arbre
* dépasse la capacité, il se divisera et ajoutera les
* objets à leurs noeuds correspondants.
*/
    this.insert = function(obj) {
        if (typeof obj === "undefined") {
            return;
        }
        if (obj instanceof Array) {
            for (var i = 0, len = obj.length; i < len; i++) {
                this.insert(obj[i]);
            }
            return;
        }
        if (this.nodes.length) {
            var index = this.getIndex(obj);
            if (index != -1) {
                this.nodes[index].insert(obj);
                return;
            }
        }
        objects.push(obj);
                            // empêcher un fractionnement infini
        if (objects.length > maxObjects && level < maxLevels) {
            if (this.nodes[0] == null) {
                this.split();
            }
            var i = 0;
            while (i < objects.length) {
                var index = this.getIndex(objects[i]);
                if (index != -1) {
                    this.nodes[index].insert((objects.splice(i,1))[0]);
                }
                else {
                    i++;
                }
            }
        }
    };
/*
* Déterminer à quel noeud l'objet appartient. -1 signifie que
* l'objet ne peut pas s'insérer complètement dans un noeud et fait partie du noeud courant
*/
    this.getIndex = function(obj) {
        var index = -1;
        var verticalMidpoint = this.bounds.x + this.bounds.width / 2;
        var horizontalMidpoint = this.bounds.y + this.bounds.height / 2;
                        // l'objet peut s'insérer complètement dans le quadrant supérieur
        var topQuadrant = (obj.y < horizontalMidpoint && obj.y + obj.height < horizontalMidpoint);
                        // l'objet peut s'insérer complètement dans le quadrant inférieur
        var bottomQuadrant = (obj.y > horizontalMidpoint);
                        // l'objet peut s'insérer complètement dans le quadrant gauche
        if (obj.x < verticalMidpoint &&
                obj.x + obj.width < verticalMidpoint) {
            if (topQuadrant) {
                index = 1;
            }
            else if (bottomQuadrant) {
                index = 2;
            }
        }
                        // l'objet peut s'insérer complètement dans le quadrant droit
        else if (obj.x > verticalMidpoint) {
            if (topQuadrant) {
                index = 0;
            }
            else if (bottomQuadrant) {
                index = 3;
            }
        }
        return index;
    };

/* diviser le noeud en 4 sous-noeuds */
    this.split = function() {
        var subWidth = (this.bounds.width / 2) | 0;
        var subHeight = (this.bounds.height / 2) | 0;
        this.nodes[0] = new QuadTree({
            x: this.bounds.x + subWidth,
            y: this.bounds.y,
            width: subWidth,
            height: subHeight
        }, level+1);
        this.nodes[1] = new QuadTree({
            x: this.bounds.x,
            y: this.bounds.y,
            width: subWidth,
            height: subHeight
        }, level+1);
        this.nodes[2] = new QuadTree({
            x: this.bounds.x,
            y: this.bounds.y + subHeight,
            width: subWidth,
            height: subHeight
        }, level+1);
        this.nodes[3] = new QuadTree({
            x: this.bounds.x + subWidth,
            y: this.bounds.y + subHeight,
            width: subWidth,
            height: subHeight
        }, level+1);
    };
};
                                                // CRÉATION PARTITIONNEMENT SPATIAL FIN 

/*
Objet Pool personnalisé (réutilise d'anciens objets afin de ne pas en créer ou en supprimer continuellement de nouveaux).
*/

function Pool(maxSize) {
    var size = maxSize;             // maximum de bullets autorisés dans le jeu en même temps
    var pool = [];

        
    /* renvoyer objets vivants dans le tableau */
    this.getPool = function() {
        var obj = [];
        for (var i = 0; i < size; i++) {
            if (pool[i].alive) {
                obj.push(pool[i]);
            }
        }
        return obj;
    };
/*
* Remplit le tableau de jeu avec des objets bullet
*/
    this.init= function(object) {
        if (object == "bullet") {
            for (var i = 0; i < size; i++) {        // nombre de fois que l'objet bullet doit être créé
                        // initialiser l'objet bullet
                var bullet = new Bullet("bullet");
                bullet.init(0,0, imageRepository.bullet.width, imageRepository.bullet.height);              // points de dessin à 0 et 0
                bullet.collidableWith = "enemy";
                bullet.type = "bullet";
                pool[i] = bullet;
            }
        }
        else if (object == "enemy") {               
            for (var i = 0; i < size; i++) {        // nombre de fois que l'objet enemy doit être créé
                var enemy = new Enemy();
                enemy.init(0,0, imageRepository.enemy.width, imageRepository.enemy.height);                 // points de dessin à 0 et 0
                pool[i] = enemy;
            }
        }
        else if (object == "enemyBullet") {         // nombre de fois que l'objet enemyBullet doit être créé
            for (var i = 0; i < size; i++) {
                var bullet = new Bullet("enemyBullet");
                bullet.init(0,0, imageRepository.enemyBullet.width, imageRepository.enemyBullet.height);    // points de dessin à 0 et 0
                bullet.collidableWith = "ship";
                bullet.type = "enemybullet";
                pool[i] = bullet;
            }
        }
    };

/*
* Saisit le dernier élément de la liste et l'initialise et
* le pousse vers l'avant du tableau
*/
    this.get = function(x, y, speed) {
        if(!pool[size - 1].alive) {
            pool[size - 1].spawn(x, y, speed);
            pool.unshift(pool.pop());
        }
    };
/*
* Utilisé pour que le vaissear puisse tirer deux bullet à la fois. Si
* seule la fonction get() est utilisée deux fois, le vaisseau ne tirera qu'un bullet au lieu de 2.
*/

    this.getTwo = function(x1, y1, speed1, x2, y2, speed2) {
        if(!pool[size - 1].alive && !pool[size - 2].alive) {
                this.get(x1, y1, speed1);
                this.get(x2, y2, speed2);
            }
    };

/*
* Dessine tous les bullet utilisés. Si un bullet sort de l'écran,
* l'efface et la pousse vers l'avant du tableau.
*/
    this.animate = function() {
        for (var i = 0; i < size; i++) {                // nombre de fois que l'objet bullet doit être créé
            if (pool[i].alive) {
                if (pool[i].draw()) {                   // dessine les bullet
                    pool[i].clear();                    // supprime les bullet
                    pool.push((pool.splice(i,1))[0]);   // ajoute les bullet au tableau (push) - modifie le contenu du tableau en ajoutant ou en retirant des bullet (splice)
                }
            }
            else
                break;
        }
    };
};

/**
Création objet vaisseau que le joueur contrôle. Le vaisseau est
dessiné sur le canvas "navire" et utilise des rectangles sales pour se déplacer
autour de l'écran.
*/

function Ship() {
    this.speed = 3;                     // vitesse du vaisseau de 3 px par mouvement
    this.bulletPool = new Pool(100);
    var fireRate = 10;                  // permet de tirer tous les 10 px
    var counter = 0;
    this.collidableWith = "enemyBullet";
    this.type = "ship";

    this.init = function(x, y, width, height) {
		                            // variables par défauts
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.alive = true;
		this.isColliding = false;
		this.bulletPool.init("bullet");
	}

    this.draw = function() {
        this.context.drawImage(imageRepository.spaceship, this.x, this.y);
    };
    this.move = function() {
        counter++;
                                    // Détermine si l'action est une action de déplacement
        if (KEY_STATUS.left || KEY_STATUS.right ||
            KEY_STATUS.down || KEY_STATUS.up) {
                                    // Le vaisseau s'est déplacé, alors effacez son image actuelle pour qu'il puisse être redessiné dans son nouvel emplacement
            this.context.clearRect(this.x, this.y, this.width, this.height);
/**
 * Mettre à jour x et y selon la direction à déplacer et
 * redessine le vaisseau. Remplacez les instructions else if par if
 * pour avoir un mouvement diagonal.
 */
            if (KEY_STATUS.left) {
                this.x -= this.speed
                if (this.x <= 0)    // garder le vaisseau dans l'écran de jeu
                    this.x = 0;
            }
            if (KEY_STATUS.right) {
                this.x += this.speed

                if (this.x >= this.canvasWidth - this.width)
                    this.x = this.canvasWidth - this.width;
            }
            if (KEY_STATUS.up) {
                this.y -= this.speed

                if (this.y <= this.canvasHeight/24*1)
                    this.y = this.canvasHeight/24*1;
            }
            if (KEY_STATUS.down) {
                this.y += this.speed

                if (this.y >= this.canvasHeight - this.height)
                    this.y = this.canvasHeight - this.height;
            }
                                    // finir en redessinant le vaisseau
            if (!this.isColliding) {
                this.draw();
            }
            else {
                this.alive = false;
                game.gameOver();
            }
        }
        if (KEY_STATUS.space && counter >= fireRate && !this.isColliding) {
            this.fire();
            counter = 0;
        }
    };
/* tirer 2 bullets*/
    this.fire = function() {
        this.bulletPool.getTwo(this.x+12, this.y, 3,
                            this.x+25, this.y, 3);
        game.laser.get();
    };
};
Ship.prototype = new Drawable();

/* création de l'objet vaisseau enemy */

function Enemy() {
    var percentFire = .01;
    var chance = 0;

    this.alive = false;
    this.collidableWith = "bullet";
    this.type = "enemy";

        // définir les valeurs de l'objet enemy
        this.spawn = function(x, y, speed) {
            this.x = x;
            this.y = y;
            this.speed = speed;
            this.speedX = 0;
            this.speedY = speed;
            this.alive = true;
            this.leftEdge = this.x - 90;
            this.rightEdge = this.x - 20;
            this.bottomEdge = this.y + 150;
        };

        // mouvement vaisseau ennemi
        this.draw = function() {
            this.context.clearRect(this.x-1, this.y, this.width+1, this.height);
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x <= this.leftEdge) {
                this.speedX = this.speed;
            }
            else if (this.x >= this.rightEdge + this.width) {
                this.speedX = -this.speed;
            }
            else if (this.y >= this.bottomEdge) {
                this.speed = 1.25;
                this.speedY = 0;
                this.y -= 5;
                this.speedX = -this.speed;
            }
            if (!this.isColliding) {
                this.context.drawImage(imageRepository.enemy, this.x, this.y);
                            // L'ennemi a une chance de tirer sur chaque mouvement
                chance = Math.floor(Math.random()*175);
                if (chance/100 < percentFire) {
                    this.fire();
                }
                return false;
            }
            else {
                game.playerScore += 10;
                game.explosion.get();
                return true;
            }

        };
        // tirer
        this.fire = function() {
            game.enemyBulletPool.get(this.x+this.width/2, this.y+this.height, -2.5);
        };
        // réinitialiser les valeurs de l'objet enemy
        this.clear = function() {
            this.x = 0;
            this.y = 0;
            this.speed = 0;
            this.speedX = 0;
            this.speedY = 0;
            this.alive = false;
            this.isColliding = false;
        };
    }
    Enemy.prototype = new Drawable();

/*
création de l'objet contenant le jeu et les données
*/
function Game() {
/*
Obtient des informations sur le canvas et le contexte et configure tous les objets du jeu
Renvoie true si le canevas est pris en charge et false dans le cas contraire. 
C'est pour empêcher l'animation de fonctionner constamment sur des navigateurs ne prennant pas en charge le canvas.
*/
    this.init = function() {
                                        // obtenir les éléments du !!! CANVAS !!!
        this.bgCanvas = document.getElementById('background');                                              // fond d'écran

        this.moonBlueCanvas = document.getElementById('background-moon-blue');                              // lune bleue
        this.moonMiddleCanvas = document.getElementById('background-moon-middle');                          // lune grise

        this.planetPlutonCanvas = document.getElementById('background-planet-pluton');                      // planète pluton

        this.planetLightBlueSmallCanvas = document.getElementById('background-planet-light-blue-small');    // planète lumière bleue petite
        this.planetMulticolorSmallCanvas = document.getElementById('background-planet-multicolor-small');   // planète multicolore petite
        this.planetVenusSmallCanvas = document.getElementById('background-planet-venus-small');             // planète venus petite
        this.planetEarthBlueCanvas = document.getElementById('background-planet-earth-blue');               // planète terre bleue
        this.planetDesertCanvas = document.getElementById('background-planet-desert');                      // planète désert

        this.planetLavaOneCanvas = document.getElementById('background-planet-lava-one');                   // planète lave 1
        this.planetLavaTwoCanvas = document.getElementById('background-planet-lava-two');                   // planète lave 2
        this.planetLavaThreeCanvas = document.getElementById('background-planet-lava-three');               // planète lave 3
        
        this.cloudOneCanvas = document.getElementById('background-clouds-one');                             // nuage 1 (orange)
        this.cloudTwoCanvas = document.getElementById('background-clouds-two');                             // nuage 2 (mauve)
        this.cloudThreeCanvas = document.getElementById('background-clouds-three');                         // nuage 3 (rose)

        this.plasmaOneCanvas = document.getElementById('background-plasma-one');                            // plasma 1 (multicolore)

        this.brightStarOneCanvas = document.getElementById('background-bright-star-one');                   // bright star 1
        this.brightStarTwoCanvas = document.getElementById('background-bright-star-two');                   // bright star 2
        this.brightStarThreeCanvas = document.getElementById('background-bright-star-three');               // bright star 3

        this.classicOneCanvas = document.getElementById('background-classic-one');                          // classic 1
        this.classicTwoCanvas = document.getElementById('background-classic-two');                          // classic 2
        this.classicThreeCanvas = document.getElementById('background-classic-three');                      // classic 3

        this.defaultOneCanvas = document.getElementById('background-default-one');                          // default 1
        this.defaultTwoCanvas = document.getElementById('background-default-two');                          // default 2
        this.defaultThreeCanvas = document.getElementById('background-default-three');                      // default 3

        this.distantSunOneCanvas = document.getElementById('background-distant-sun-one');                   // distant sun 1
        this.distantSunTwoCanvas = document.getElementById('background-distant-sun-two');                   // distant sun 2
        this.distantSunThreeCanvas = document.getElementById('background-distant-sun-three');               // distant sun 3

        this.gFlareHundredOneOneCanvas = document.getElementById('background-g-flare-hundred-one-one');     // g flare 101 1
        this.gFlareHundredOneTwoCanvas = document.getElementById('background-g-flare-hundred-one-two');     // g flare 101 2
        this.gFlareHundredOneThreeCanvas = document.getElementById('background-g-flare-hundred-one-three'); // g flare 101 3

        this.gFlareHundredTwoOneCanvas = document.getElementById('background-g-flare-hundred-two-one');     // g flare 102 1
        this.gFlareHundredTwoTwoCanvas = document.getElementById('background-g-flare-hundred-two-two');     // g flare 102 2
        this.gFlareHundredTwoThreeCanvas = document.getElementById('background-g-flare-hundred-two-three'); // g flare 102 3

        this.hiddenPlanetOneCanvas = document.getElementById('background-hidden-planet-one');               // hidden planet 1
        this.hiddenPlanetTwoCanvas = document.getElementById('background-hidden-planet-two');               // hidden planet 2
        this.hiddenPlanetThreeCanvas = document.getElementById('background-hidden-planet-three');           // hidden planet 3

        this.shipCanvas = document.getElementById('ship');                      // vaisseau joueur
        this.enemyCanvas = document.getElementById('enemy');                    // vaisseau ennemi

                                        // test pour voir si le canvas est prit en charge par le navigateur
        if (this.bgCanvas.getContext) {
            this.bgContext = this.bgCanvas.getContext('2d');                        // fond d'écran

            this.bgContext = this.moonBlueCanvas.getContext('2d');                  // lune bleue
            this.bgContext = this.moonMiddleCanvas.getContext('2d');                // lune grise

            this.bgContext = this.planetPlutonCanvas.getContext('2d');              // planète pluton

            this.bgContext = this.planetLightBlueSmallCanvas.getContext('2d');      // planète lumière bleue petite
            this.bgContext = this.planetMulticolorSmallCanvas.getContext('2d');     // planète multicolore petite
            this.bgContext = this.planetVenusSmallCanvas.getContext('2d');          // planète venus petite
            this.bgContext = this.planetEarthBlueCanvas.getContext('2d');           // planète terre bleue
            this.bgContext = this.planetDesertCanvas.getContext('2d');              // planète désert

            this.bgContext = this.planetLavaOneCanvas.getContext('2d');             // planète lave 1
            this.bgContext = this.planetLavaTwoCanvas.getContext('2d');             // planète lave 2
            this.bgContext = this.planetLavaThreeCanvas.getContext('2d');           // planète lave 3

            this.bgContext = this.cloudOneCanvas.getContext('2d');                  // nuage 1 (orange)
            this.bgContext = this.cloudTwoCanvas.getContext('2d');                  // nuage 2 (mauve)
            this.bgContext = this.cloudThreeCanvas.getContext('2d');                // nuage 3 (rose)

            this.bgContext = this.plasmaOneCanvas.getContext('2d');                 // plasma 1 (multicolore)

            this.bgContext = this.brightStarOneCanvas.getContext('2d');             // bright star 1
            this.bgContext = this.brightStarTwoCanvas.getContext('2d');             // bright star 2
            this.bgContext = this.brightStarThreeCanvas.getContext('2d');           // bright star 3

            this.bgContext = this.classicOneCanvas.getContext('2d');                // classic 1
            this.bgContext = this.classicTwoCanvas.getContext('2d');                // classic 2
            this.bgContext = this.classicThreeCanvas.getContext('2d');              // classic 3

            this.bgContext = this.defaultOneCanvas.getContext('2d');                // default 1
            this.bgContext = this.defaultTwoCanvas.getContext('2d');                // default 2
            this.bgContext = this.defaultThreeCanvas.getContext('2d');              // default 3

            this.bgContext = this.distantSunOneCanvas.getContext('2d');             // distant sun 1
            this.bgContext = this.distantSunTwoCanvas.getContext('2d');             // distant sun 2
            this.bgContext = this.distantSunThreeCanvas.getContext('2d');           // distant sun 3

            this.bgContext = this.gFlareHundredOneOneCanvas.getContext('2d');       // g flare 101 1
            this.bgContext = this.gFlareHundredOneTwoCanvas.getContext('2d');       // g flare 101 2
            this.bgContext = this.gFlareHundredOneThreeCanvas.getContext('2d');     // g flare 101 3

            this.bgContext = this.gFlareHundredTwoOneCanvas.getContext('2d');       // g flare 102 1
            this.bgContext = this.gFlareHundredTwoTwoCanvas.getContext('2d');       // g flare 102 2
            this.bgContext = this.gFlareHundredTwoThreeCanvas.getContext('2d');     // g flare 102 3

            this.bgContext = this.hiddenPlanetOneCanvas.getContext('2d');           // hidden planet 1
            this.bgContext = this.hiddenPlanetTwoCanvas.getContext('2d');           // hidden planet 2
            this.bgContext = this.hiddenPlanetThreeCanvas.getContext('2d');         // hidden planet 3

            this.shipContext = this.shipCanvas.getContext('2d');                    // vaisseau joueur
            this.enemyContext = this.enemyCanvas.getContext('2d');                  // vaisseau ennemi

                                        // contenir infos, contexte et canvas de chaque objet
                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ FOND ÉCRAN
            Background.prototype.context = this.bgContext;
            Background.prototype.canvasWidth = this.bgCanvas.width;
            Background.prototype.canvasHeight = this.bgCanvas.height;


                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ LUNE BLEUE
            BackgroundMoonBlue.prototype.context = this.bgContext;
            BackgroundMoonBlue.prototype.canvasWidth = this.moonBlueCanvas.width;
            BackgroundMoonBlue.prototype.canvasHeight = this.moonBlueCanvas.height;
                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ LUNE GRISE
            BackgroundMoonMiddle.prototype.context = this.bgContext;
            BackgroundMoonMiddle.prototype.canvasWidth = this.moonMiddleCanvas.width;
            BackgroundMoonMiddle.prototype.canvasHeight = this.moonMiddleCanvas.height;


                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ PLANÈTE PLUTON
            BackgroundPlanetPluton.prototype.context = this.bgContext;
            BackgroundPlanetPluton.prototype.canvasWidth = this.planetPlutonCanvas.width;
            BackgroundPlanetPluton.prototype.canvasHeight = this.planetPlutonCanvas.height;


                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ PLANÈTE LUMIÈRE BLEUE PETITE
            BackgroundPlanetLightBlueSmall.prototype.context = this.bgContext;
            BackgroundPlanetLightBlueSmall.prototype.canvasWidth = this.planetLightBlueSmallCanvas.width;
            BackgroundPlanetLightBlueSmall.prototype.canvasHeight = this.planetLightBlueSmallCanvas.height;
                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ PLANÈTE MULTICOLORE PETITE
            BackgroundPlanetMulticolorSmall.prototype.context = this.bgContext;
            BackgroundPlanetMulticolorSmall.prototype.canvasWidth = this.planetMulticolorSmallCanvas.width;
            BackgroundPlanetMulticolorSmall.prototype.canvasHeight = this.planetMulticolorSmallCanvas.height;
                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ PLANÈTE VENUS PETITE
            BackgroundPlanetVenusSmall.prototype.context = this.bgContext;
            BackgroundPlanetVenusSmall.prototype.canvasWidth = this.planetVenusSmallCanvas.width;
            BackgroundPlanetVenusSmall.prototype.canvasHeight = this.planetVenusSmallCanvas.height;
                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ PLANÈTE TERRE BLEUE
            BackgroundPlanetEarthBlue.prototype.context = this.bgContext;
            BackgroundPlanetEarthBlue.prototype.canvasWidth = this.planetEarthBlueCanvas.width;
            BackgroundPlanetEarthBlue.prototype.canvasHeight = this.planetEarthBlueCanvas.height;
                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ PLANÈTE DÉSERT
            BackgroundPlanetDesert.prototype.context = this.bgContext;
            BackgroundPlanetDesert.prototype.canvasWidth = this.planetDesertCanvas.width;
            BackgroundPlanetDesert.prototype.canvasHeight = this.planetDesertCanvas.height;


                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ PLANÈTE LAVE 1
            BackgroundPlanetLavaOne.prototype.context = this.bgContext;
            BackgroundPlanetLavaOne.prototype.canvasWidth = this.planetLavaOneCanvas.width;
            BackgroundPlanetLavaOne.prototype.canvasHeight = this.planetLavaOneCanvas.height;
                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ PLANÈTE LAVE 2
            BackgroundPlanetLavaTwo.prototype.context = this.bgContext;
            BackgroundPlanetLavaTwo.prototype.canvasWidth = this.planetLavaTwoCanvas.width;
            BackgroundPlanetLavaTwo.prototype.canvasHeight = this.planetLavaTwoCanvas.height;
                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ PLANÈTE LAVE 3
            BackgroundPlanetLavaThree.prototype.context = this.bgContext;
            BackgroundPlanetLavaThree.prototype.canvasWidth = this.planetLavaThreeCanvas.width;
            BackgroundPlanetLavaThree.prototype.canvasHeight = this.planetLavaThreeCanvas.height;


                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ NUAGE 1 (ORANGE)
            BackgroundCloudsOne.prototype.context = this.bgContext;
            BackgroundCloudsOne.prototype.canvasWidth = this.cloudOneCanvas.width;
            BackgroundCloudsOne.prototype.canvasHeight = this.cloudOneCanvas.height;
                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ NUAGE 2 (MAUVE)
            BackgroundCloudsTwo.prototype.context = this.bgContext;
            BackgroundCloudsTwo.prototype.canvasWidth = this.cloudTwoCanvas.width;
            BackgroundCloudsTwo.prototype.canvasHeight = this.cloudTwoCanvas.height;
                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ NUAGE 3 (ROSE)
            BackgroundCloudsThree.prototype.context = this.bgContext;
            BackgroundCloudsThree.prototype.canvasWidth = this.cloudThreeCanvas.width;
            BackgroundCloudsThree.prototype.canvasHeight = this.cloudThreeCanvas.height;


                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ PLASMA 1 (MULTICOLORE)
            BackgroundPlasmaOne.prototype.context = this.bgContext;
            BackgroundPlasmaOne.prototype.canvasWidth = this.plasmaOneCanvas.width;
            BackgroundPlasmaOne.prototype.canvasHeight = this.plasmaOneCanvas.height;


                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ BRIGHT STAR 1
            BackgroundBrightStarOne.prototype.context = this.bgContext;
            BackgroundBrightStarOne.prototype.canvasWidth = this.brightStarOneCanvas.width;
            BackgroundBrightStarOne.prototype.canvasHeight = this.brightStarOneCanvas.height;
                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ BRIGHT STAR 2
            BackgroundBrightStarTwo.prototype.context = this.bgContext;
            BackgroundBrightStarTwo.prototype.canvasWidth = this.brightStarTwoCanvas.width;
            BackgroundBrightStarTwo.prototype.canvasHeight = this.brightStarTwoCanvas.height;
                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ BRIGHT STAR 3
            BackgroundBrightStarThree.prototype.context = this.bgContext;
            BackgroundBrightStarThree.prototype.canvasWidth = this.brightStarThreeCanvas.width;
            BackgroundBrightStarThree.prototype.canvasHeight = this.brightStarThreeCanvas.height;


                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ CLASSIC 1
            BackgroundClassicOne.prototype.context = this.bgContext;
            BackgroundClassicOne.prototype.canvasWidth = this.classicOneCanvas.width;
            BackgroundClassicOne.prototype.canvasHeight = this.classicOneCanvas.height;
                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ CLASSIC 2
            BackgroundClassicTwo.prototype.context = this.bgContext;
            BackgroundClassicTwo.prototype.canvasWidth = this.classicTwoCanvas.width;
            BackgroundClassicTwo.prototype.canvasHeight = this.classicTwoCanvas.height;
                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ CLASSIC 3
            BackgroundClassicThree.prototype.context = this.bgContext;
            BackgroundClassicThree.prototype.canvasWidth = this.classicThreeCanvas.width;
            BackgroundClassicThree.prototype.canvasHeight = this.classicThreeCanvas.height;


                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ DEFAULT 1
            BackgroundDefaultOne.prototype.context = this.bgContext;
            BackgroundDefaultOne.prototype.canvasWidth = this.defaultOneCanvas.width;
            BackgroundDefaultOne.prototype.canvasHeight = this.defaultOneCanvas.height;
                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ DEFAULT 2
            BackgroundDefaultTwo.prototype.context = this.bgContext;
            BackgroundDefaultTwo.prototype.canvasWidth = this.defaultTwoCanvas.width;
            BackgroundDefaultTwo.prototype.canvasHeight = this.defaultTwoCanvas.height;
                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ DEFAULT 3
            BackgroundDefaultThree.prototype.context = this.bgContext;
            BackgroundDefaultThree.prototype.canvasWidth = this.defaultThreeCanvas.width;
            BackgroundDefaultThree.prototype.canvasHeight = this.defaultThreeCanvas.height;


                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ DISTANT SUN 1
            BackgroundDistantSunOne.prototype.context = this.bgContext;
            BackgroundDistantSunOne.prototype.canvasWidth = this.distantSunOneCanvas.width;
            BackgroundDistantSunOne.prototype.canvasHeight = this.distantSunOneCanvas.height;
                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ DISTANT SUN 2
            BackgroundDistantSunTwo.prototype.context = this.bgContext;
            BackgroundDistantSunTwo.prototype.canvasWidth = this.distantSunTwoCanvas.width;
            BackgroundDistantSunTwo.prototype.canvasHeight = this.distantSunTwoCanvas.height;
                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ DISTANT SUN 3
            BackgroundDistantSunThree.prototype.context = this.bgContext;
            BackgroundDistantSunThree.prototype.canvasWidth = this.distantSunThreeCanvas.width;
            BackgroundDistantSunThree.prototype.canvasHeight = this.distantSunThreeCanvas.height;


                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ G FLARE 101 1
            BackgroundGFlareHundredOneOne.prototype.context = this.bgContext;
            BackgroundGFlareHundredOneOne.prototype.canvasWidth = this.gFlareHundredOneOneCanvas.width;
            BackgroundGFlareHundredOneOne.prototype.canvasHeight = this.gFlareHundredOneOneCanvas.height;
                                                                   // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ G FLARE 101 2
            BackgroundGFlareHundredOneTwo.prototype.context = this.bgContext;
            BackgroundGFlareHundredOneTwo.prototype.canvasWidth = this.gFlareHundredOneTwoCanvas.width;
            BackgroundGFlareHundredOneTwo.prototype.canvasHeight = this.gFlareHundredOneTwoCanvas.height;
                                                                   // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ G FLARE 101 3
            BackgroundGFlareHundredOneThree.prototype.context = this.bgContext;
            BackgroundGFlareHundredOneThree.prototype.canvasWidth = this.gFlareHundredOneThreeCanvas.width;
            BackgroundGFlareHundredOneThree.prototype.canvasHeight = this.gFlareHundredOneThreeCanvas.height;


                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ G FLARE 102 1
            BackgroundGFlareHundredTwoOne.prototype.context = this.bgContext;
            BackgroundGFlareHundredTwoOne.prototype.canvasWidth = this.gFlareHundredTwoOneCanvas.width;
            BackgroundGFlareHundredTwoOne.prototype.canvasHeight = this.gFlareHundredTwoOneCanvas.height;
                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ G FLARE 102 2
            BackgroundGFlareHundredTwoTwo.prototype.context = this.bgContext;
            BackgroundGFlareHundredTwoTwo.prototype.canvasWidth = this.gFlareHundredTwoTwoCanvas.width;
            BackgroundGFlareHundredTwoTwo.prototype.canvasHeight = this.gFlareHundredTwoTwoCanvas.height;
                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ G FLARE 102 3
            BackgroundGFlareHundredTwoThree.prototype.context = this.bgContext;
            BackgroundGFlareHundredTwoThree.prototype.canvasWidth = this.gFlareHundredTwoThreeCanvas.width;
            BackgroundGFlareHundredTwoThree.prototype.canvasHeight = this.gFlareHundredTwoThreeCanvas.height;


                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ HIDDEN PLANET 1
            BackgroundHiddenPlanetOne.prototype.context = this.bgContext;
            BackgroundHiddenPlanetOne.prototype.canvasWidth = this.hiddenPlanetOneCanvas.width;
            BackgroundHiddenPlanetOne.prototype.canvasHeight = this.hiddenPlanetOneCanvas.height;
                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ HIDDEN PLANET 2
            BackgroundHiddenPlanetTwo.prototype.context = this.bgContext;
            BackgroundHiddenPlanetTwo.prototype.canvasWidth = this.hiddenPlanetTwoCanvas.width;
            BackgroundHiddenPlanetTwo.prototype.canvasHeight = this.hiddenPlanetTwoCanvas.height;
                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ HIDDEN PLANET 3
            BackgroundHiddenPlanetThree.prototype.context = this.bgContext;
            BackgroundHiddenPlanetThree.prototype.canvasWidth = this.hiddenPlanetThreeCanvas.width;
            BackgroundHiddenPlanetThree.prototype.canvasHeight = this.hiddenPlanetThreeCanvas.height;


                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ VAISSEAU JOUEUR
            Ship.prototype.context = this.shipContext;
            Ship.prototype.canvasWidth = this.shipCanvas.width;
            Ship.prototype.canvasHeight = this.shipCanvas.height;

                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ VAISSEAU ENNEMI
            Bullet.prototype.context = this.enemyContext;
            Bullet.prototype.canvasWidth = this.enemyCanvas.width;
            Bullet.prototype.canvasHeight = this.enemyCanvas.height;

                                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ MISSILE JOUEUR
            Enemy.prototype.context = this.enemyContext;
            Enemy.prototype.canvasWidth = this.enemyCanvas.width;
            Enemy.prototype.canvasHeight = this.enemyCanvas.height;


                                        // initialiser les objets
                                                                                // initialiser les objets
                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ BACKGROUND
            this.background = new Background();
            this.background.init(0,0);


                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ LUNE BLEUE
            this.backgroundMoonBlue = new BackgroundMoonBlue();
            this.backgroundMoonBlue.init('425',-1640);
                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ LUNE GRISE
            this.backgroundMoonMiddle = new BackgroundMoonMiddle();
            this.backgroundMoonMiddle.init('150',-325);


                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ PLANÈTE PLUTON
            this.backgroundPlanetPluton = new BackgroundPlanetPluton();
            this.backgroundPlanetPluton.init(0,-35690);


                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ PLANÈTE LUMIÈRE BLEUE PETITE
            this.backgroundPlanetLightBlueSmall = new BackgroundPlanetLightBlueSmall();
            this.backgroundPlanetLightBlueSmall.init('275',-225);
                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ PLANÈTE MULTICOLORE PETITE
            this.backgroundPlanetMulticolorSmall = new BackgroundPlanetMulticolorSmall();
            this.backgroundPlanetMulticolorSmall.init('475',-725);
                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ PLANÈTE VENUS PETITE
            this.backgroundPlanetVenusSmall = new BackgroundPlanetVenusSmall();
            this.backgroundPlanetVenusSmall.init('95',-1025);
                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ PLANÈTE TERRE BLEUE
            this.backgroundPlanetEarthBlue = new BackgroundPlanetEarthBlue();
            this.backgroundPlanetEarthBlue.init('395',-2125);
                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ PLANÈTE DÉSERT
            this.backgroundPlanetDesert = new BackgroundPlanetDesert();
            this.backgroundPlanetDesert.init('395',-12125);


                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ PLANÈTE LAVE 1
            this.backgroundPlanetLavaOne = new BackgroundPlanetLavaOne();
            this.backgroundPlanetLavaOne.init('395',-7125);
                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ PLANÈTE LAVE 2
            this.backgroundPlanetLavaTwo = new BackgroundPlanetLavaTwo();
            this.backgroundPlanetLavaTwo.init('245',-12635);
                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ PLANÈTE LAVE 3
            this.backgroundPlanetLavaThree = new BackgroundPlanetLavaThree();
            this.backgroundPlanetLavaThree.init('465',-26810);


                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ NUAGE 1 (ORANGE)
            this.backgroundCloudsOne = new BackgroundCloudsOne();
            this.backgroundCloudsOne.init(0,-1025);
                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ NUAGE 2 (MAUVE)
            this.backgroundCloudsTwo = new BackgroundCloudsTwo();
            this.backgroundCloudsTwo.init(0,-2015);
                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ NUAGE 3 (ROSE)
            this.backgroundCloudsThree = new BackgroundCloudsThree();
            this.backgroundCloudsThree.init(0,-3070);


                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ PLASMA 1 (MULTICOLORE)
            this.backgroundPlasmaOne = new BackgroundPlasmaOne();
            this.backgroundPlasmaOne.init(0,-4725);


                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ BRIGHT STAR 1
            this.backgroundBrightStarOne = new BackgroundBrightStarOne();
            this.backgroundBrightStarOne.init(0,-2925);
                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ BRIGHT STAR 2
            this.backgroundBrightStarTwo = new BackgroundBrightStarTwo();
            this.backgroundBrightStarTwo.init(0,-9545);
                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ BRIGHT STAR 3
            this.backgroundBrightStarThree = new BackgroundBrightStarThree();
            this.backgroundBrightStarThree.init(0,-23060);


                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ CLASSIC 1
            this.backgroundClassicOne = new BackgroundClassicOne();
            this.backgroundClassicOne.init(0,-1920);
                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ CLASSIC 2
            this.backgroundClassicTwo = new BackgroundClassicTwo();
            this.backgroundClassicTwo.init(0,-9625);
                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ CLASSIC 3
            this.backgroundClassicThree = new BackgroundClassicThree();
            this.backgroundClassicThree.init('-195',-22335);



                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ DEFAULT 1
            this.backgroundDefaultOne = new BackgroundDefaultOne();
            this.backgroundDefaultOne.init(0,-4720);
                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ DEFAULT 2
            this.backgroundDefaultTwo = new BackgroundDefaultTwo();
            this.backgroundDefaultTwo.init(0,-23845);
                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ DEFAULT 3
            this.backgroundDefaultThree = new BackgroundDefaultThree();
            this.backgroundDefaultThree.init(0,-36540);


                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ DISTANT SUN 1
            this.backgroundDistantSunOne = new BackgroundDistantSunOne();
            this.backgroundDistantSunOne.init(0,-2925);
                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ DISTANT SUN 2
            this.backgroundDistantSunTwo = new BackgroundDistantSunTwo();
            this.backgroundDistantSunTwo.init(0,-17925);
                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ DISTANT SUN 3
            this.backgroundDistantSunThree = new BackgroundDistantSunThree();
            this.backgroundDistantSunThree.init(0,-38925);


                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ G FLARE 101 1
            this.backgroundGFlareHundredOneOne = new BackgroundGFlareHundredOneOne();
            this.backgroundGFlareHundredOneOne.init(0,-5125);
                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ G FLARE 101 2
            this.backgroundGFlareHundredOneTwo = new BackgroundGFlareHundredOneTwo();
            this.backgroundGFlareHundredOneTwo.init(0,-13045);
                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ G FLARE 101 3
            this.backgroundGFlareHundredOneThree = new BackgroundGFlareHundredOneThree();
            this.backgroundGFlareHundredOneThree.init(0,-9385);


                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ G FLARE 102 1
            this.backgroundGFlareHundredTwoOne = new BackgroundGFlareHundredTwoOne();
            this.backgroundGFlareHundredTwoOne.init(0,-9325);
                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ G FLARE 102 2
            this.backgroundGFlareHundredTwoTwo = new BackgroundGFlareHundredTwoTwo();
            this.backgroundGFlareHundredTwoTwo.init(0,-26325);
                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ G FLARE 102 3
            this.backgroundGFlareHundredTwoThree = new BackgroundGFlareHundredTwoThree();
            this.backgroundGFlareHundredTwoThree.init(0,-42325);


                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ HIDDEN PLANET 1
            this.backgroundHiddenPlanetOne = new BackgroundHiddenPlanetOne();
            this.backgroundHiddenPlanetOne.init(0,-2725);

                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ HIDDEN PLANET 2
            this.backgroundHiddenPlanetTwo = new BackgroundHiddenPlanetTwo();
            this.backgroundHiddenPlanetTwo.init(0,-2725);

                                                    // ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ ↓↓↓ HIDDEN PLANET 3
            this.backgroundHiddenPlanetThree = new BackgroundHiddenPlanetThree();
            this.backgroundHiddenPlanetThree.init(0,-2725);


                                        // vaisseau
            this.ship = new Ship();
                                        // faire apparaître le vaisseau en bas au milieu
            this.shipStartX = this.shipCanvas.width/2 - imageRepository.spaceship.width;
            this.shipStartY = this.shipCanvas.height/4*3 + imageRepository.spaceship.height*2;
            this.ship.init(this.shipStartX, this.shipStartY,
                            imageRepository.spaceship.width, imageRepository.spaceship.height);

                                        // pool enemy
                                                                    // initialiser l'objet pool enemy
            this.enemyPool = new Pool(32);
            this.enemyPool.init("enemy");
            this.spawnWave();

            this.enemyBulletPool = new Pool(50);
            this.enemyBulletPool.init("enemyBullet");

            // démarrer le Quadtree
            this.quadTree = new QuadTree({x:0,y:0,width:this.enemyCanvas.width,height:this.enemyCanvas.height});

            this.playerScore = 0;

                    // fichiers audio
            this.laser = new SoundPool(10);
            this.laser.init("laser");

            this.explosion = new SoundPool(20);
            this.explosion.init("explosion");

            this.backgroundAudio = new Audio("sounds/music-game.mp3");
            this.backgroundAudio.loop = true;
            this.backgroundAudio.volume = .50;
            this.backgroundAudio.load();

            this.gameOverAudio = new Audio("sounds/game-over.mp3");
            this.gameOverAudio.loop = true;
            this.gameOverAudio.volume = .50;
            this.gameOverAudio.load();

            this.checkAudio = window.setInterval(function(){checkReadyState()},1000);
        }
    };
                        // générer de nouvelles vagues ennemies
    this.spawnWave = function() {
        var height = imageRepository.enemy.height;
        var width = imageRepository.enemy.width;
        var x = 100;
        var y = -height;
        var spacer = y * 1.25;
        for (var i = 1; i <= 32; i++) {         // nombre ennemis
            this.enemyPool.get(x,y,2);
            x += width + 25;
            if (i % 8 == 0) {                   // nombre ennemis par lignes
                x = 100;
                y += spacer
            }
        }
    };

                        // démarrer la boucle de l'animation
    this.start = function() {
        this.ship.draw();
        this.backgroundAudio.play();
        animate();
    };

    // Game over
    this.gameOver = function() {
        this.backgroundAudio.pause();
        this.gameOverAudio.currentTime = 0;
        this.gameOverAudio.play();
        document.getElementById('game-over').style.display = "block";
    };
    // redémarrer le jeu
    this.restart = function() {
        this.gameOverAudio.pause();

        document.getElementById('game-over').style.display = "none";
        this.bgContext.clearRect(0,0, this.bgCanvas.width, this.bgCanvas.height);                                          // fond d'écran

        this.bgContext.clearRect(0,0, this.moonBlueCanvas.width, this.moonBlueCanvas.height);                              // lune bleue
        this.bgContext.clearRect(0,0, this.moonMiddleCanvas.width, this.moonMiddleCanvas.height);                          // lune grise

        this.bgContext.clearRect(0,0, this.planetPlutonCanvas.width, this.planetPlutonCanvas.height);                      // planète pluton

        this.bgContext.clearRect(0,0, this.planetLightBlueSmallCanvas.width, this.planetLightBlueSmallCanvas.height);      // planète lumière bleue petite
        this.bgContext.clearRect(0,0, this.planetMulticolorSmallCanvas.width, this.planetMulticolorSmallCanvas.height);    // planète multicolore petite
        this.bgContext.clearRect(0,0, this.planetVenusSmallCanvas.width, this.planetMulticolorSmallCanvas.height);         // planète venus petite
        this.bgContext.clearRect(0,0, this.planetEarthBlueCanvas.width, this.planetEarthBlueCanvas.height);                // planète terre bleue
        this.bgContext.clearRect(0,0, this.planetDesertCanvas.width, this.planetDesertCanvas.height);                      // planète désert

        this.bgContext.clearRect(0,0, this.planetLavaOneCanvas.width, this.planetLavaOneCanvas.height);                    // planète lave 1
        this.bgContext.clearRect(0,0, this.planetLavaTwoCanvas.width, this.planetLavaTwoCanvas.height);                    // planète lave 2
        this.bgContext.clearRect(0,0, this.planetLavaThreeCanvas.width, this.planetLavaThreeCanvas.height);                // planète lave 3

        this.bgContext.clearRect(0,0, this.cloudOneCanvas.width, this.cloudOneCanvas.height);                              // nuage 1 (orange)
        this.bgContext.clearRect(0,0, this.cloudTwoCanvas.width, this.cloudTwoCanvas.height);                              // nuage 2 (mauve)
        this.bgContext.clearRect(0,0, this.cloudThreeCanvas.width, this.cloudThreeCanvas.height);                          // nuage 3 (rose)

        this.bgContext.clearRect(0,0, this.plasmaOneCanvas.width, this.plasmaOneCanvas.height);                            // plasma 1 (multicolore)

        this.bgContext.clearRect(0,0, this.brightStarOneCanvas.width, this.brightStarOneCanvas.height);                    // bright star 1
        this.bgContext.clearRect(0,0, this.brightStarTwoCanvas.width, this.brightStarTwoCanvas.height);                    // bright star 2
        this.bgContext.clearRect(0,0, this.brightStarThreeCanvas.width, this.brightStarThreeCanvas.height);                // bright star 3

        this.bgContext.clearRect(0,0, this.classicOneCanvas.width, this.classicOneCanvas.height);                          // classic 1
        this.bgContext.clearRect(0,0, this.classicTwoCanvas.width, this.classicTwoCanvas.height);                          // classic 2
        this.bgContext.clearRect(0,0, this.classicThreeCanvas.width, this.classicThreeCanvas.height);                      // classic 3

        this.bgContext.clearRect(0,0, this.defaultOneCanvas.width, this.defaultOneCanvas.height);                          // default 1
        this.bgContext.clearRect(0,0, this.defaultTwoCanvas.width, this.defaultTwoCanvas.height);                          // default 2
        this.bgContext.clearRect(0,0, this.defaultThreeCanvas.width, this.defaultThreeCanvas.height);                      // default 3

        this.bgContext.clearRect(0,0, this.distantSunOneCanvas.width, this.distantSunOneCanvas.height);                    // distant sun 1
        this.bgContext.clearRect(0,0, this.distantSunTwoCanvas.width, this.distantSunTwoCanvas.height);                    // distant sun 2
        this.bgContext.clearRect(0,0, this.distantSunThreeCanvas.width, this.distantSunThreeCanvas.height);                // distant sun 3

        this.bgContext.clearRect(0,0, this.gFlareHundredOneOneCanvas.width, this.gFlareHundredOneOneCanvas.height);        // g flare 101 1
        this.bgContext.clearRect(0,0, this.gFlareHundredOneTwoCanvas.width, this.gFlareHundredOneTwoCanvas.height);        // g flare 101 2
        this.bgContext.clearRect(0,0, this.gFlareHundredOneThreeCanvas.width, this.gFlareHundredOneThreeCanvas.height);    // g flare 101 3

        this.bgContext.clearRect(0,0, this.gFlareHundredTwoOneCanvas.width, this.gFlareHundredTwoOneCanvas.height);        // g flare 102 1
        this.bgContext.clearRect(0,0, this.gFlareHundredTwoTwoCanvas.width, this.gFlareHundredTwoTwoCanvas.height);        // g flare 102 2
        this.bgContext.clearRect(0,0, this.gFlareHundredTwoThreeCanvas.width, this.gFlareHundredTwoThreeCanvas.height);    // g flare 102 3

        this.bgContext.clearRect(0,0, this.hiddenPlanetOneCanvas.width, this.hiddenPlanetOneCanvas.height);                // hidden planet 1
        this.bgContext.clearRect(0,0, this.hiddenPlanetTwoCanvas.width, this.hiddenPlanetTwoCanvas.height);                // hidden planet 2
        this.bgContext.clearRect(0,0, this.hiddenPlanetThreeCanvas.width, this.hiddenPlanetThreeCanvas.height);            // hidden planet 3

        this.shipContext.clearRect(0,0, this.shipCanvas.width, this.shipCanvas.height);        // vaisseau joueur
        this.enemyContext.clearRect(0,0, this.enemyCanvas.width, this.enemyCanvas.height);     // vaisseau ennemi

        this.quadTree.clear();

        this.background.init(0,0);                                   // fond d'écran

        this.backgroundMoonMiddle.init('425',-1125);                 // lune bleue
        this.backgroundMoonMiddle.init('150',-325);                  // lune grise

        this.backgroundPlanetPluton.init(0,-29560);                  // planète pluton

        this.backgroundPlanetLightBlueSmall.init('275',-325);        // planète lumière bleue petite
        this.backgroundPlanetMulticolorSmall.init('375',-425);       // planète multicolore petite
        this.backgroundPlanetVenusSmall.init('95',-425);             // planète venus petite
        this.backgroundPlanetEarthBlue.init('95',-2425);             // planète terre bleue
        this.backgroundPlanetDesert.init(0,-18425);                  // planète désert

        this.backgroundPlanetLavaOne.init('155',-2425);              // planète lave 1
        this.backgroundPlanetLavaTwo.init('295',-12425);             // planète lave 2
        this.backgroundPlanetLavaThree.init('395',-22425);           // planète lave 3

        this.backgroundCloudsOne.init(0,-500);                       // nuage 1 (orange)
        this.backgroundCloudsTwo.init(0,-1000);                      // nuage 2 (mauve)
        this.backgroundCloudsThree.init(0,-1500);                    // nuage 3 (rose)

        this.backgroundPlasmaOne.init(0,-2575);                      // plasma 1 (multicolore)

        this.backgroundBrightStarOne.init(0,-4775);                  // bright star 1
        this.backgroundBrightStarTwo.init(0,-1275);                  // bright star 2
        this.backgroundBrightStarThree.init(0,-2275);                // bright star 3

        this.backgroundClassicOne.init(0,-1725);                     // classic 1
        this.backgroundClassicTwo.init(0,-5725);                     // classic 2
        this.backgroundClassicThree.init(0,-9725);                   // classic 3

        this.backgroundDefaultOne.init(0,-1825);                     // default 1
        this.backgroundDefaultTwo.init(0,-4825);                     // default 2
        this.backgroundDefaultThree.init(0,-9825);                   // default 3

        this.backgroundDistantSunOne.init(0,-925);                   // distant sun 1
        this.backgroundDistantSunTwo.init(0,-3925);                  // distant sun 2
        this.backgroundDistantSunThree.init(0,-7925);                // distant sun 3

        this.backgroundGFlareHundredOneOne.init(0,-24625);           // g flare 101 1
        this.backgroundGFlareHundredOneTwo.init(0,-15725);           // g flare 101 2
        this.backgroundGFlareHundredOneThree.init(0,-4235);          // g flare 101 3

        this.backgroundGFlareHundredTwoOne.init(0,-4560);            // g flare 102 1
        this.backgroundGFlareHundredTwoTwo.init(0,-12855);           // g flare 102 2
        this.backgroundGFlareHundredTwoThree.init(0,-36520);         // g flare 102 3

        this.backgroundHiddenPlanetOne.init(0,-1825);                // hidden planet 1
        this.backgroundHiddenPlanetTwo.init(0,-1825);                // hidden planet 2
        this.backgroundHiddenPlanetThree.init(0,-1825);              // hidden planet 3

        this.ship.init(this.shipStartX, this.shipStartY,
                        imageRepository.spaceship.width, imageRepository.spaceship.height);

        this.enemyPool.init("enemy");
        this.spawnWave();
        this.enemyBulletPool.init("enemyBullet");

        this.playerScore = 0;

        this.backgroundAudio.currentTime = 0;
        this.backgroundAudio.play();

        this.start();
    };
};

/*
charger le son avant de démarrer le jeu
*/
function checkReadyState() {
	if (game.gameOverAudio.readyState === 4 && game.backgroundAudio.readyState === 4) {
		window.clearInterval(game.checkAudio);
		document.getElementById('loading').style.display = "none";
		game.start();
	}
}

function SoundPool(maxSize) {
	var size = maxSize; // son maximum permis
	var pool = [];
	this.pool = pool;
	var currSound = 0;
/*
* remplit le tableau avec le son donné
*/
	this.init = function(object) {
		if (object == "laser") {
			for (var i = 0; i < size; i++) {
				// initialiser le son
				var laser = new Audio("sounds/laser.wav");
				laser.volume = .12;
				laser.load();
				pool[i] = laser;
			}
		}
		else if (object == "explosion") {
			for (var i = 0; i < size; i++) {
				var explosion = new Audio("sounds/explosion.wav");
				explosion.volume = .12;
				explosion.load();
				pool[i] = explosion;
			}
		}
	};
/*
* jouer le son
*/
	this.get = function() {
		if(pool[currSound].currentTime == 0 || pool[currSound].ended) {
			pool[currSound].play();
		}
		currSound = (currSound + 1) % size;
	};
};

/*
La boucle d'animation. Appelle le requestAnimationFrame 
optimise la boucle de jeu et dessine tous les objets du jeu. Cette
la fonction doit être une fonction globale et ne peut pas être dans un
objet.
*/
function animate() {
    document.getElementById('score').innerHTML = game.playerScore;

                // insérer les objets dans le quadtree
    game.quadTree.clear();
    game.quadTree.insert(game.ship);
    game.quadTree.insert(game.ship.bulletPool.getPool());
    game.quadTree.insert(game.enemyPool.getPool());
    game.quadTree.insert(game.enemyBulletPool.getPool());

    detectCollision();

                // plus aucun ennemis
    if (game.enemyPool.getPool().length === 0) {
    game.spawnWave();
    }

                // animer les objets du jeu
    if (game.ship.alive) {
        requestAnimFrame(animate);
                // objets du background
    game.background.draw();                         // fond d'écran

    game.backgroundMoonBlue.draw();                 // lune bleue
    game.backgroundMoonMiddle.draw();               // lune grise

    game.backgroundPlanetPluton.draw();             // planète pluton

    game.backgroundPlanetLightBlueSmall.draw();     // planète lumière bleue petite
    game.backgroundPlanetMulticolorSmall.draw();    // planète multicolore petite
    game.backgroundPlanetVenusSmall.draw();         // planète venus petite
    game.backgroundPlanetEarthBlue.draw();          // planète terre bleue
    game.backgroundPlanetDesert.draw();             // planète désert

    game.backgroundPlanetLavaOne.draw();            // planète lave 1
    game.backgroundPlanetLavaTwo.draw();            // planète lave 2
    game.backgroundPlanetLavaThree.draw();          // planète lave 3

    game.backgroundCloudsOne.draw();                // nuage 1 (orange)
    game.backgroundCloudsTwo.draw();                // nuage 2 (mauve)
    game.backgroundCloudsThree.draw();              // nuage 3 (rose)

    game.backgroundPlasmaOne.draw();                // plasma 1 (multicolore)

    game.backgroundBrightStarOne.draw();            // bright star 1
    game.backgroundBrightStarTwo.draw();            // bright star 2
    game.backgroundBrightStarThree.draw();          // bright star 3

    game.backgroundClassicOne.draw();               // classic 1
    game.backgroundClassicTwo.draw();               // classic 2
    game.backgroundClassicThree.draw();             // classic 3

    game.backgroundDefaultOne.draw();               // default 1
    game.backgroundDefaultTwo.draw();               // default 2
    game.backgroundDefaultThree.draw();             // default 3

    game.backgroundDistantSunOne.draw();            // distant sun 1
    game.backgroundDistantSunTwo.draw();            // distant sun 2
    game.backgroundDistantSunThree.draw();          // distant sun 3

    game.backgroundGFlareHundredOneOne.draw();      // g flare 101 1
    game.backgroundGFlareHundredOneTwo.draw();      // g flare 101 2
    game.backgroundGFlareHundredOneThree.draw();    // g flare 101 3

    game.backgroundGFlareHundredTwoOne.draw();      // g flare 102 1
    game.backgroundGFlareHundredTwoTwo.draw();      // g flare 102 2
    game.backgroundGFlareHundredTwoThree.draw();    // g flare 102 3

    game.backgroundHiddenPlanetOne.draw();          // hidden planet 1
    game.backgroundHiddenPlanetTwo.draw();          // hidden planet 2
    game.backgroundHiddenPlanetThree.draw();        // hidden planet 3

                // vaisseaux
    game.ship.move();                               // vaisseau joueur
    game.ship.bulletPool.animate();                 // missile joueur
                // missiles
    game.enemyPool.animate();                       // vaisseau ennemi
    game.enemyBulletPool.animate();                 // missile ennemi
    }
};

    /* fonction de détection des collisions */
    function detectCollision() {
        var objects = [];
        game.quadTree.getAllObjects(objects);
        for (var x = 0, len = objects.length; x < len; x++) {
            game.quadTree.findObjects(obj = [], objects[x]);

            for (y = 0, length = obj.length; y < length; y++) {

                            //algorithme de détection des collisions
                if (objects[x].collidableWith === obj[y].type &&
                    (objects[x].x < obj[y].x + obj[y].width &&
                    objects[x].x + objects[x].width > obj[y].x &&
                    objects[x].y < obj[y].y + obj[y].height &&
                    objects[x].y + objects[x].height > obj[y].y)) {
                    objects[x].isColliding = true;
                    obj[y].isColliding = true;
                }
            }
        }
    };
    // codes des touches à presser pour effectuer des actions en jeu
    KEY_CODES = {
        32: 'space',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
    };

                                            // Crée le tableau pour contenir les KEY_CODES et définir toutes leurs valeurs
                                            // à faux. quand la touche a été enfoncée et laquelle et l'action à effectuer
    KEY_STATUS = {};
        for (code in KEY_CODES) {
            KEY_STATUS[ KEY_CODES[ code ]] = false;
    };
                                            // création fonction de détection d'événements liés à l'enfoncement des touches du clavier
    document.onkeydown = function(e) {
        var keyCode = (e.keyCode) ? e.keyCode : e.charCode;
        if (KEY_CODES[keyCode]) {
            e.preventDefault();
            KEY_STATUS[KEY_CODES[keyCode]] = true;
        }
    };
                                            // création fonction de détection d'événements liés au relâchement des touches du clavier
    document.onkeyup = function(e) {
        var keyCode = (e.keyCode) ? e.keyCode : e.charCode;
        if (KEY_CODES[keyCode]) {
            e.preventDefault();
            KEY_STATUS[KEY_CODES[keyCode]] = false;
        }
    };


/*
requiert l'image png se trouvant plus haut
trouve la première API qui fonctionne pour optimiser la boucle d'animation,
sinon la valeur par défaut est setTimeout()
*/

window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame       ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame    ||
			window.oRequestAnimationFrame      ||
			window.msRequestAnimationFrame     ||
			function(/* function */ callback, /* DOMElement */ element){
				window.setTimeout(callback, 1000 / 60);
			};
})();
