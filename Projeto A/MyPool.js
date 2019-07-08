 /**
 * MyPool
 * @constructor
 * @param scene - Reference to MyScene object
 */
 
 class MyPool extends CGFobject {
	 constructor(scene) {
        super(scene);
        this.pool = new MyUnitCubeQuad(this.scene);
        this.limit = new MyUnitCubeQuad(this.scene);
        this.init();
        this.display();
    }

    init(){
        //water texture
	    this.water = new CGFappearance(this.scene);
        this.water.setAmbient(0.1, 0.1, 0.1, 1);
        this.water.setDiffuse(0.9, 0.9, 0.9, 1);
        this.water.setSpecular(0.9, 0.9, 0.9, 1);
        this.water.setShininess(10.0);
        this.water.loadTexture('images/water.jpg');
        this.water.setTextureWrap('REPEAT', 'REPEAT');

        //white marble
	    this.marble = new CGFappearance(this.scene);
        this.marble.setAmbient(0.1, 0.1, 0.1, 1);
        this.marble.setDiffuse(0.8, 0.8, 0.8, 1);
        this.marble.setSpecular(0.9, 0.9, 0.9, 1);
        this.marble.setShininess(10.0);
        this.marble.loadTexture('images/marble.jpg');
        this.marble.setTextureWrap('REPEAT', 'REPEAT');
    }

    display(){

        //pool
        this.scene.pushMatrix();
        this.water.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.scale(60,0.75,20);
        this.pool.display();
        this.scene.popMatrix();

        //limits of the pool
        this.scene.pushMatrix();
        this.marble.apply();
        this.scene.translate(-1,0,-1);
        this.scene.scale(62,1,1);
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.limit.display();
        this.scene.popMatrix();

        //limits of the pool
        this.scene.pushMatrix();
        this.marble.apply();
        this.scene.translate(-1,0,20);
        this.scene.scale(62,1,1);
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.limit.display();
        this.scene.popMatrix();

         //limits of the pool
         this.scene.pushMatrix();
         this.marble.apply();
         this.scene.translate(-1,0,0);
         this.scene.scale(1,1,20);
         this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
         this.limit.display();
         this.scene.popMatrix();

         //limits of the pool
         this.scene.pushMatrix();
         this.marble.apply();
         this.scene.translate(60,0,0);
         this.scene.scale(1,1,20);
         this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
         this.limit.display();
         this.scene.popMatrix();         

    }
 }