/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();
        this.updatePeriod = 50;
        this.caught = 0;

        //Background color
        this.gl.clearColor(1.0, 1.0, 1.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);
        this.setUpdatePeriod(this.updatePeriod);
		
		
		//------ Applied Material
		 
		 
		this.skybox = new CGFappearance(this);
        this.skybox.setAmbient(0.1, 0.1, 0.1, 1);
        this.skybox.setDiffuse(0.2, 0.2, 0.2, 1);
        this.skybox.setSpecular(0.1, 0.1, 0.1, 1);
        this.skybox.setShininess(10.0);
        this.skybox.loadTexture('images/skybox.png');
        this.skybox.setTextureWrap('REPEAT', 'REPEAT');

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.plane = new Plane(this, 32);
        this.bird = new MyBird(this);
        this.lightning = new MyLightning(this);
        this.terrain = new MyTerrain(this);
		this.cube=new MyUnitCube(this);
        this.house=new MyHouse(this);
        this.stick = new MyStick(this);
        this.nest = new MyNest(this);

        //Objects connected to MyInterface
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(80, 80, 80), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    checkKeys(t) {
        var text = "Keys pressed: ";
        var keysPressed = false;
        // Check for key codes e.g. in https://keycode.info/
        if (this.gui.isKeyPressed("KeyW")) {
            text += " W ";
            keysPressed = true;
			this.bird.changemovement(1);
        }
        if (this.gui.isKeyPressed("KeyS")) {
            text += " S ";
            keysPressed = true;
			this.bird.changemovement(4)
        }
		if (this.gui.isKeyPressed("KeyA")) {
            text += " A ";
            keysPressed = true;
			this.bird.changemovement(2);
			console.log("ola1");
        }
		if (this.gui.isKeyPressed("KeyD")) {
            text += " D ";
            keysPressed = true;
			this.bird.changemovement(3);
        }
        if (this.gui.isKeyPressed("KeyL")) {
            text += " L ";
            keysPressed = true;
            this.lightning.startAnimation(t);
        }
		if (this.gui.isKeyPressed("KeyR")) {
            text += " R ";
            keysPressed = true;
            this.bird.changemovement(5);
		}
		if (this.gui.isKeyPressed("KeyP")) {
            text += " P ";
            keysPressed = true;
            this.checkColision();
        }
        if (keysPressed)
            console.log(text);
    }

    checkColision() {
        if (Math.abs(this.bird.x - this.stick.x) < 5 && Math.abs(this.bird.z - this.stick.z) < 5 && this.caught == 0) {
            console.log("aqui1");

            this.caught = 1;
        }
        if (Math.abs(this.bird.x - this.nest.x) < 5 && Math.abs(this.bird.z - this.nest.z) < 5 && this.caught == 1) {
            console.log("aqui2");
            this.caught = 0;
        }
    }

    update(t){
        this.checkKeys(t);
        this.lightning.update(t);
		this.bird.update(t);
    }

    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        // Draw axis
        this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section

        this.pushMatrix();
        this.translate(-3, 0, -3);
        this.bird.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-45, -10, -35);
        this.nest.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-20, -17, 20);
        if (!this.caught)
            this.stick.display();
        this.popMatrix();


        this.lightning.display();
		
		this.pushMatrix();
		this.scale(0.5,0.5,0.5);
		this.translate(-60,-33,80);
		this.house.display();
		this.popMatrix();
		
		this.pushMatrix();		
		this.skybox.apply();
		this.translate(0,10,0);
		this.scale(250,250,250);
		this.cube.display();
		this.popMatrix();
		
		this.pushMatrix();
		this.translate(0,-30,0);
		this.scale(4,4,4);
        this.terrain.display();
		this.popMatrix();
        // ---- END Primitive drawing section
    }
}