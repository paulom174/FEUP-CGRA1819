/**
 * MyFloor
 * @constructor
 * @param scene - Reference to MyScene object
 */

 class MyFloor extends CGFobject {
	 constructor(scene) {
        super(scene);

        this.quad = new MyQuadFloor(this.scene);

        this.init();
        this.display();
    }


    init(){


    //sand texture
	this.sand = new CGFappearance(this.scene);
    this.sand.setAmbient(0.1, 0.1, 0.1, 1);
    this.sand.setDiffuse(0.9, 0.9, 0.9, 1);
    this.sand.setSpecular(0.1, 0.1, 0.1, 1);
    this.sand.setShininess(10.0);
    this.sand.loadTexture('images/sand.jpg');
    this.sand.setTextureWrap('REPEAT', 'REPEAT');

    }
    display(){
        //floor
        this.scene.pushMatrix();
        this.sand.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.scale(200, 1, 200);
        this.scene.rotate(-Math.PI/2, 1, 0, 0)
        this.quad.display();
        this.scene.popMatrix();
    }
 }

    