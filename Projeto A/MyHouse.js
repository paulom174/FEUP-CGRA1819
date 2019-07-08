/**
 * MyHouse
 * @constructor
 * @param scene - Reference to MyScene object
 */
 
 class MyHouse extends CGFobject {
	 constructor(scene) {
        super(scene);
        this.base = new MyUnitCubeQuad(this.scene);
        this.colmid = new MyCylinder(this.scene, 20);
        this.colbase = new MyPrisma(this.scene, 6);
        this.colroof = new MyCone(this.scene, 20);
        this.cube = new MyUnitCubeQuad(this.scene);
        this.cube2 = new MyPrisma(this.scene, 4);
        this.roof = new MyPyramid(this.scene, 4);

        this.initBuffers();
        this.init();
        this.display();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals=[];
        
        this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
    }

    init(){


        //----------Materials to apply
    //white marble
	this.marble = new CGFappearance(this.scene);
    this.marble.setAmbient(0.1, 0.1, 0.1, 1);
    this.marble.setDiffuse(0.8, 0.8, 0.8, 1);
    this.marble.setSpecular(0.9, 0.9, 0.9, 1);
    this.marble.setShininess(10.0);
    this.marble.loadTexture('images/marble.jpg');
    this.marble.setTextureWrap('REPEAT', 'REPEAT');

    //rock on the floor
    this.rock = new CGFappearance(this.scene);
    this.rock.setAmbient(0.1, 0.1, 0.1, 1);
    this.rock.setDiffuse(0.9, 0.9, 0.9, 1);
    this.rock.setSpecular(0.1, 0.1, 0.1, 1);
    this.rock.setShininess(10.0);
    this.rock.loadTexture('images/rock.jpg');
    this.rock.setTextureWrap('REPEAT', 'REPEAT');

    //ceiling of the columns
	this.ceiling = new CGFappearance(this.scene);
    this.ceiling.setAmbient(0.1, 0.1, 0.1, 1);
    this.ceiling.setDiffuse(0.5, 0.5, 0.5, 1);
    this.ceiling.setSpecular(0.1, 0.1, 0.1, 1);
    this.ceiling.setShininess(10.0);
    this.ceiling.loadTexture('images/black_roof.jpg');
    this.ceiling.setTextureWrap('REPEAT', 'REPEAT');

     //white for the main building
	this.white = new CGFappearance(this.scene);
    this.white.setAmbient(0.1, 0.1, 0.1, 1);
    this.white.setDiffuse(0.8, 0.8, 0.8, 1);
    this.white.setSpecular(0.9, 0.9, 0.9, 1);
    this.white.setShininess(10.0);
    this.white.loadTexture('images/white.jpg');
    this.white.setTextureWrap('REPEAT', 'REPEAT');


    //glass texture
	this.glass = new CGFappearance(this.scene);
    this.glass.setAmbient(0.1, 0.1, 0.1, 1);
    this.glass.setDiffuse(0.55, 0.55, 0.55, 1);
    this.glass.setSpecular(0.9, 0.9, 0.9, 1);
    this.glass.setShininess(10.0);
    this.glass.loadTexture('images/glass.jpg');
    this.glass.setTextureWrap('REPEAT', 'REPEAT');

    }

    display(){

        //Scaling just to be realistic in comparison to the skybox
        this.scene.pushMatrix();
        this.scene.scale(4, 4, 4);


        //base 
        this.scene.pushMatrix();
        this.rock.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.translate(-5,0,-5);
        this.scene.scale(10, 1, 10);
        this.base.display();
        this.scene.popMatrix();

        //columns base
        this.scene.pushMatrix();
        this.marble.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.translate(4.2,1,4.2);
        this.scene.scale(0.5,1.5,0.5);
        this.colbase.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-4.2,1,4.2);
        this.scene.scale(0.5,1.5,0.5);
        this.colbase.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-4.2,1,-4.2);
        this.scene.scale(0.5,1.5,0.5);
        this.colbase.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(4.2,1,-4.2);
        this.scene.scale(0.5,1.5,0.5);
        this.colbase.display();
        this.scene.popMatrix();

        //column middle
        this.scene.pushMatrix();
        this.glass.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.translate(4.2,2.5,4.2);
        this.scene.scale(0.5,0.5,0.5);
        this.colmid.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-4.2,2.5,4.2);
        this.scene.scale(0.5,0.5,0.5);
        this.colmid.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-4.2,2.5,-4.2);
        this.scene.scale(0.5,0.5,0.5);
        this.colmid.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(4.2,2.5,-4.2);
        this.scene.scale(0.5,0.5,0.5);
        this.colmid.display();
        this.scene.popMatrix();

        //columns top
        this.scene.pushMatrix();
        this.marble.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.translate(4.2,3,4.2);
        this.scene.scale(0.5,1.5,0.5);
        this.colbase.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-4.2,3,4.2);
        this.scene.scale(0.5,1.5,0.5);
        this.colbase.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-4.2,3,-4.2);
        this.scene.scale(0.5,1.5,0.5);
        this.colbase.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(4.2,3,-4.2);
        this.scene.scale(0.5,1.5,0.5);
        this.colbase.display();
        this.scene.popMatrix();



        //columns roof
        this.scene.pushMatrix();
        this.ceiling.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.translate(4.2,4.5,4.2);
        this.scene.scale(0.5,0.5,0.5);
        this.colroof.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-4.2,4.5,4.2);
        this.scene.scale(0.5,0.5,0.5);
        this.colroof.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-4.2,4.5,-4.2);
        this.scene.scale(0.5,0.5,0.5);
        this.colroof.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(4.2,4.5,-4.2);
        this.scene.scale(0.5,0.5,0.5);
        this.colroof.display();
        this.scene.popMatrix();

        //main building
        this.scene.pushMatrix();
        this.white.apply();
        this.scene.translate(-2,1,-2);
        this.scene.scale(4,4,4);
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.cube.display();
        this.scene.popMatrix();

        //top cube
        this.scene.pushMatrix();
        this.scene.translate(0,5,0);
        this.scene.scale(2,0.5,2);
        this.scene.rotate(Math.PI/4, 0, 1, 0);
        this.cube2.display();
        this.scene.popMatrix();

        //pyramid roof
        this.scene.pushMatrix();
        this.glass.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.translate(0,5.5,0);
        this.scene.scale(2,0.5,2);
        this.scene.rotate(Math.PI/4, 0, 1, 0);
        this.roof.display();
        this.scene.popMatrix();

        //scale pop
        this.scene.popMatrix();
    }
 }