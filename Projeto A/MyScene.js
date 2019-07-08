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

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
		this.enableTextures(true);
		
		
		//------ Textures
        var texture1 = 'images/treeTrunktexture.jpg';
        var texture2 = 'images/treeToptexture.jpg';
		
		//------ Applied Material
		 
		 
		this.skybox = new CGFappearance(this);
        this.skybox.setAmbient(0.1, 0.1, 0.1, 1);
        this.skybox.setDiffuse(0.9, 0.9, 0.9, 1);
        this.skybox.setSpecular(0.1, 0.1, 0.1, 1);
        this.skybox.setShininess(10.0);
        this.skybox.loadTexture('images/skybox.png');
        this.skybox.setTextureWrap('REPEAT', 'REPEAT');

        //Initialize scene objects
        this.axis = new CGFaxis(this);

		this.treegroup1=new MyTreeGroupPatch(this,2,1,1,4,texture1,texture2,4);
		this.treegroup2=new MyTreeGroupPatch(this,2,1,1,2,texture1,texture2,5);
		this.treegroup3=new MyTreeGroupPatch(this,2,1,1,2,texture1,texture2,5);
        this.treegroup4=new MyTreeGroupPatch(this,2,1,1,2,texture1,texture2,5);
        
        this.treerow=new MyTreeRowPatch(this,2,1,1,5,texture1,texture2,10);
        
		this.cube=new MyUnitCube(this);
		this.floor=new MyFloor(this);
        this.quad=new MyQuad(this);
        this.house = new MyHouse(this);
        this.pool = new MyPool(this);

        //Objects connected to MyInterface
        this.displayTextures = true;
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(0, 1, 0), vec3.fromValues(5, 1, 5));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
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
		
        // -------------------TEST DISPLAY || CHANGE AS YOU GO
        
        this.enableTextures(this.displayTextures);
        
        //environment
		this.pushMatrix();
		this.skybox.apply();
		this.translate(0,95,0);
		this.scale(200,200,200);
		this.cube.display();
        this.popMatrix();
        
        //ground
        this.floor.display();
        this.pushMatrix();
        this.translate(50,0,0);
        this.house.display();
        this.popMatrix();

        //pool
        this.pushMatrix();
        this.translate(-50,0,-10);
        this.pool.display();
        this.popMatrix();

        //trees near the poll
        this.pushMatrix();
        this.translate(-32,0,15);
        this.treerow.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-32,0,-18);
        this.treerow.display();
        this.popMatrix();

        

        
		
		

		
		// --------------------------


        // ---- END Primitive drawing section
    }
}