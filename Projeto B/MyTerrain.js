/**
 * MyTerrain
 * @constructor
 * @param scene - Reference to MyScene object
 */
 
 class MyTerrain extends CGFobject {
	 constructor(scene) {
        super(scene);
        this.init();
        this.plane = new Plane(this.scene, 60);  
    }
    
    init(){
         this.ter = new CGFtexture(this.scene, "images/terrain.png");
         this.ter_height = new CGFtexture(this.scene, "images/heightmap.png");
         this.ter_top = new CGFtexture(this.scene, "images/altimetry.png");


         this.map = new CGFappearance(this.scene);
         this.map.setAmbient(0.3, 0.3, 0.3, 1);
         this.map.setDiffuse(0.7, 0.7, 0.7, 1);
         this.map.setSpecular(0.0, 0.0, 0.0, 1);
         this.map.setShininess(120);

         this.map.setTexture(this.ter);

         this.testShader = new CGFshader(this.scene.gl, "shaders/terrain.vert", "shaders/terrain.frag");
         this.testShader.setUniformsValues({ uSampler2: 1 , uSampler3: 2});
    }

     display(){

         this.scene.setActiveShader(this.testShader);
         this.ter_height.bind(1);
         this.ter_top.bind(2);
         
         
        this.scene.pushMatrix();
        this.map.apply();
        this.scene.scale(60,1,60);
        this.scene.rotate(-Math.PI/2, 1,0,0);
        this.plane.display();
        this.scene.popMatrix();
		this.scene.setActiveShader(this.scene.defaultShader);

     }  

}