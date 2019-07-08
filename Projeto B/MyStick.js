/**
 * MyStick
 * @constructor
 * @param scene - Reference to MyScene object
 */
 
 class MyStick extends CGFobject {
    constructor(scene) {
        super(scene);
        this.stick = new MyUnitCubeQuad(this.scene);
        this.x = -20;
        this.y = 0;
        this.z = 20;
        
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
         this.scene.scale(2, 0.5, 0.5);
         this.wood.apply();
         this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
         this.stick.display();
         this.scene.popMatrix();
     }
 }