/**
 * MyNest
 * @constructor
 * @param scene - Reference to MyScene object
 */
 
 class MyNest extends CGFobject {
    constructor(scene) {
        super(scene);
        this.bot = new MyUnitCubeQuad(this.scene);
        this.wall = new MyUnitCubeQuad(this.scene);
        this.x = -40;
        this.y = 0;
        this.z = -30;
        
        this.initBuffers();
        this.init();
        this.display();
    }
     initBuffers() {
         this.vertices = [];
         this.indices = [];
         this.normals = [];

         this.primitiveType = this.scene.gl.TRIANGLES;
         this.initGLBuffers();
     }

     init() {
         //wood texture
         this.wood = new CGFappearance(this.scene);
         this.wood.setAmbient(0.1, 0.1, 0.1, 1);
         this.wood.setDiffuse(0.9, 0.9, 0.9, 1);
         this.wood.setSpecular(0.1, 0.1, 0.1, 1);
         this.wood.setShininess(10.0);
         this.wood.loadTexture('images/wood.jpg');
         this.wood.setTextureWrap('REPEAT', 'REPEAT');
     }

     display(){
         this.scene.pushMatrix();
         this.scene.translate(5,0,5);

        //bottom
        this.scene.pushMatrix();
        this.scene.scale(3, 0.5, 3);
        this.wood.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.bot.display();
        this.scene.popMatrix();

        //walls
        this.scene.pushMatrix();
        this.scene.translate(0,0.5,0);
        this.scene.scale(3, 1, 0.5);
        this.wood.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.bot.display();
        this.scene.popMatrix();

         this.scene.pushMatrix();
         this.scene.translate(0, 0.5, 2.5);
         this.scene.scale(3, 1, 0.5);
         this.wood.apply();
         this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
         this.bot.display();
         this.scene.popMatrix();

         this.scene.popMatrix();

     }
 }