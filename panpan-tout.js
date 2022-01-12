
                                            // INITIALISATION ET DÉMARRAGE JEU DÉBUT
/**
* Initialiser et démarrer le jeu
*/

    var game = new Game();
    function init() {                           // FONCTION INITIALISATION JEU
        game.init();
    };
                                                // INITIALISATION ET DÉMARRAGE JEU FIN

                                                // DÉFINITION DE TOUTES LES IMAGES DU JEU DÉBUT
    /**
 * Définir un objet pour contenir toutes nos images pour le jeu donc images
 * ne sont créés qu'une seule fois. Ce type d'objet est connu sous le nom de
 * singleton (ensemble ne comprenant qu'un seul élément)
 */

    var imageRepository =  new function() {
                    // définition des images
        this.background = new Image();
        this.backgroundTwo = new Image();
        this.spaceship = new Image();
        this.bullet = new Image();
        this.enemy = new Image();
        this.enemyBullet = new Image();
        this.explosionEnemy = new Image();
                    // s'assurer que toutes les images soient chargées avant de commencer le jeu
        var numImages = 7;                                  // nombre d'image
        var numLoaded = 0;
                    // fonction pour charger les images avant qu'elles ne soient utilisées en jeu
        function imageLoaded() {
            numLoaded++;
            if (numLoaded === numImages) {
                window.init();
            }
        };
        this.background.onload = function() {               // fond écran
            imageLoaded();
        };
        this.backgroundTwo.onload = function() {            // planète
            imageLoaded();
        };
        this.spaceship.onload = function() {                // vaisseau joueur
            imageLoaded();
        };
        this.bullet.onload = function() {                   // missile joueur
            imageLoaded();
        };
        this.enemy.onload = function() {                    // vaisseau ennemi
            imageLoaded();
        };
        this.enemyBullet.onload = function() {              // missile ennemi
            imageLoaded();
        }
        this.explosionEnemy.onload = function() {           // explosion ennemi
            imageLoaded();
        }

                    // groupe d'images liens
        this.background.src = "img/bg.png";
        this.backgroundTwo.src = "img/planet1.png";
        this.spaceship.src = "img/ship.png";
        this.bullet.src = "img/bullet.png";
        this.enemy.src = "img/enemy.png";
        this.enemyBullet.src = "img/bullet_enemy.png";
        this.explosionEnemy.src = "gif/explosion-enemy.gif";
    };
                                                // DÉFINITION DE TOUTES LES IMAGES DU JEU FIN

                                                // CRÉATION OBJET QUI DESSINERA TOUTES LES IMAGES DU JEU DÉBUT
/**
 * Crée l'objet Drawable qui sera la classe de base pour
 * tous les objets pouvant être dessinés dans le jeu. Configure les variables par défaut
 * que tous les objets enfants hériteront, ainsi que la valeur par défaut
 * les fonctions.
 */

    function Drawable() {                       // FONCTION DE DESSIN
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
                                                // CRÉATION OBJET QUI DESSINERA TOUTES LES IMAGES DU JEU FIN

                                                // CRÉATION OBJET BACKGROUND ANIMÉ DÉBUT
    /**
 * Crée l'objet Background qui deviendra un enfant de
 * l'objet Drawable. Le fond est dessiné sur le canvas "background"
 * et crée l'illusion de se déplacer en faisant un panoramique de l'image de haut en bas.
 */

    function Background() {                     // FONCTION BACKGROUND
                    // redéfinir la vitesse du background (1 px par image)
        this.speed = 1;
                    // implémenter la fonction abstraite
        this.draw = function() {
                    // fond d'écran
            this.y += this.speed;
            this.context.drawImage(imageRepository.background, this.x, this.y);
                    // dessiner une nouvelle image sur le bord supérieur de la première image
            this.context.drawImage(imageRepository.background, this.x, this.y - this.canvasHeight);
                    // si l'image sort de l'écran, la réinitialiser
            if (this.y >= this.canvasHeight)
                this.y = 0;
        };
    };
                    // groupe d'image du backgound héritent des propriétés de Drawable (grâce à prototype)
    Background.prototype = new Drawable();
                                                // CRÉATION OBJET BACKGROUND ANIMÉ FIN
                                                // CRÉATION OBJET PLANÈTE ANIMÉE DÉBUT
function BackgroundTwo() {
        // redéfinir la vitesse du backgroundTwo (1 px par image)
    this.speed = 1.5;
        // implémenter la fonction abstraite
    this.draw = function() {
        // fond d'écran
    this.y += this.speed;
    this.context.drawImage(imageRepository.backgroundTwo, this.x, this.y);
        // si l'image sort de l'écran, la réinitialiser
    if (this.y >= this.canvasHeight)
    this.y = -825;                              // mettre la planète plus haut pour qu'elle ne réapparaisse pas direct
    };
};
// groupe d'image du backgound héritent des propriétés de Drawable (grâce à prototype)
    BackgroundTwo.prototype = new Drawable();
                                                // CRÉATION OBJET PLANÈTE ANIMÉE FIN
                                                // CRÉATION OBJET MISSILE DÉBUT 
    /**
 * Crée l'objet Bullet que le vaisseau tire. Les bullet sont
 * dessinés sur le canvas principal.
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
                                                // CRÉATION OBJET MISSILE FIN 

                                                // CRÉATION PARTITIONNEMENT SPATIAL DÉBUT                                               
/**
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

/**
 * Objet Pool personnalisé (réutilise d'anciens objets afin de ne pas en créer ou en supprimer continuellement de nouveaux).
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
 * Création objet vaisseau que le joueur contrôle. Le vaisseau est
 * dessiné sur le canvas "navire" et utilise des rectangles sales pour se déplacer
 * autour de l'écran.
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
            this.rightEdge = this.x - 90;
            this.bottomEdge = this.y + 140;
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
                this.speed = 0.75;
                this.speedY = 0;
                this.y -= 10;
                this.speedX = -this.speed;
            }
            if (!this.isColliding) {
                this.context.drawImage(imageRepository.enemy, this.x, this.y);
                            // L'ennemi a une chance de tirer sur chaque mouvement
                chance = Math.floor(Math.random()*101);                         // 1% chance de tirer lors de chaque mouvement
                if (chance/100 < percentFire) {
                    this.fire();
                }
                return false;
            }
            else {
                game.playerScore += 10;
                game.explosion;
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

/**
 * création de l'objet contenant le jeu et les données
 */
function Game() {
/*
* Obtient des informations sur le canvas et le contexte et configure tous les objets du jeu
* Renvoie true si le canevas est pris en charge et false dans le cas contraire. 
* C'est pour empêcher l'animation de fonctionner constamment sur des navigateurs ne prennant pas en charge le canvas.
*/
    this.init = function() {
                                        // obtenir les éléments du canvas
        this.bgCanvas = document.getElementById('background');
        this.bgCanvasTwo = document.getElementById('background-two');
        this.shipCanvas = document.getElementById('ship');
        this.mainCanvas = document.getElementById('main');

                                        // test pour voir si le canvas est prit en charge par le navigateur
        if (this.bgCanvas.getContext) {
            this.bgContext = this.bgCanvas.getContext('2d');
            this.bgContext = this.bgCanvasTwo.getContext('2d');
            this.shipContext = this.shipCanvas.getContext('2d');
            this.mainContext = this.mainCanvas.getContext('2d');

                                        // initialiser les objets pour contenir les infos leur contexte et leur canvas
            Background.prototype.context = this.bgContext;
            Background.prototype.canvasWidth = this.bgCanvas.width;
            Background.prototype.canvasHeight = this.bgCanvas.height;
            
            BackgroundTwo.prototype.context = this.bgContext;
            BackgroundTwo.prototype.canvasWidth = this.bgCanvasTwo.width;
            BackgroundTwo.prototype.canvasHeight = this.bgCanvasTwo.height;

            Ship.prototype.context = this.shipContext;
            Ship.prototype.canvasWidth = this.shipCanvas.width;
            Ship.prototype.canvasHeight = this.shipCanvas.height;

            Bullet.prototype.context = this.mainContext;
            Bullet.prototype.canvasWidth = this.mainCanvas.width;
            Bullet.prototype.canvasHeight = this.mainCanvas.height;

            Enemy.prototype.context = this.mainContext;
            Enemy.prototype.canvasWidth = this.mainCanvas.width;
            Enemy.prototype.canvasHeight = this.mainCanvas.height;

                                        // initialiser l'objet background
            this.background = new Background();
            this.background.init(0,0)   // définir les points de dessin à 0 et 0
                                        // initialiser l'objet planète
            this.backgroundTwo = new BackgroundTwo();
            this.backgroundTwo.init('150',-125)    // définir les points de dessin

                                        // initialiser l'objet vaisseau
            this.ship = new Ship();
                                        // faire apparaître le vaisseau en bas au milieu
            this.shipStartX = this.shipCanvas.width/2 - imageRepository.spaceship.width;
            this.shipStartY = this.shipCanvas.height/4*3 + imageRepository.spaceship.height*2;
            this.ship.init(this.shipStartX, this.shipStartY,
                            imageRepository.spaceship.width, imageRepository.spaceship.height);

                                        // initialiser l'objet pool enemy
            this.enemyPool = new Pool(30);
            this.enemyPool.init("enemy");
            this.spawnWave();

            this.enemyBulletPool = new Pool(50);
            this.enemyBulletPool.init("enemyBullet");

            // démarrer le Quadtree
            this.quadTree = new QuadTree({x:0,y:0,width:this.mainCanvas.width,height:this.mainCanvas.height});

            this.playerScore = 0;

                    // fichiers audio
            this.laser = new SoundPool(10);
			this.laser.init("laser");

			this.explosion = new SoundPool(20);
			this.explosion.init("explosion");

			this.backgroundAudio = new Audio("sounds/music.wav");
			this.backgroundAudio.loop = true;
			this.backgroundAudio.volume = .25;
			this.backgroundAudio.load();
            
			this.gameOverAudio = new Audio("sounds/game_over.wav");
			this.gameOverAudio.loop = true;
			this.gameOverAudio.volume = .25;
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
        var spacer = y * 1.5;
        for (var i = 1; i <= 18; i++) {
            this.enemyPool.get(x,y,2);
            x += width + 25;
            if (i % 6 == 0) {
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
		this.bgContext.clearRect(0, 0, this.bgCanvas.width, this.bgCanvas.height);
		this.shipContext.clearRect(0, 0, this.shipCanvas.width, this.shipCanvas.height);
		this.mainContext.clearRect(0, 0, this.mainCanvas.width, this.mainCanvas.height);

		this.quadTree.clear();

		this.background.init(0,0);
		this.backgroundTwo.init('150',-125);
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

/**
* charger le son avant de démarrer le jeu
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
				laser = new Audio("sounds/laser.wav");
				laser.volume = .12;
				laser.load();
				pool[i] = laser;
			}
		}
		else if (object == "explosion") {
			for (var i = 0; i < size; i++) {
				var explosion = new Audio("sounds/explosion.wav");
				explosion.volume = .1;
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

/**
 * La boucle d'animation. Appelle le requestAnimationFrame 
 * optimise la boucle de jeu et dessine tous les objets du jeu. Cette
 * la fonction doit être une fonction globale et ne peut pas être dans un
 * objet.
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
        
    game.background.draw();
    game.backgroundTwo.draw();
    game.ship.move();
    game.ship.bulletPool.animate();
    game.enemyPool.animate();
    game.enemyBulletPool.animate();
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


/**
 * requiert l'image png se trouvant plus haut
 * Trouve la première API qui fonctionne pour optimiser la boucle d'animation,
 * sinon la valeur par défaut est setTimeout()
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
