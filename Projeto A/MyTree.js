/**
* MyTree
* @constructor
*/
class MyTree extends CGFobject {
    constructor (scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture,
treeTopTexture) {
        super(scene);
		
		this.trunkHeight=trunkHeight;
		this.trunkRadius=trunkRadius;
		this.treeTopHeight=treeTopHeight;
		this.treeTopRadius=treeTopRadius;
		this.trunkTexture=trunkTexture;
		this.treeTopTexture=treeTopTexture;
		
		this.init();
	}
	
	init(){
    
    this.top = new MyCone(this.scene,10);
    this.bot= new MyCylinder(this.scene,10);
	
	
	
	//----------Materials to apply
	
	this.textop = new CGFappearance(this.scene);
    this.textop.setAmbient(0.1, 0.1, 0.1, 1);
    this.textop.setDiffuse(0.9, 0.9, 0.9, 1);
    this.textop.setSpecular(0.1, 0.1, 0.1, 1);
    this.textop.setShininess(10.0);
    this.textop.loadTexture(this.treeTopTexture);
    this.textop.setTextureWrap('REPEAT', 'REPEAT');
	
	
	this.textbot = new CGFappearance(this.scene);
    this.textbot.setAmbient(0.1, 0.1, 0.1, 1);
    this.textbot.setDiffuse(0.9, 0.9, 0.9, 1);
    this.textbot.setSpecular(0.1, 0.1, 0.1, 1);
    this.textbot.setShininess(10.0);
    this.textbot.loadTexture(this.trunkTexture);
    this.textbot.setTextureWrap('REPEAT', 'REPEAT');
	
	}
	
	display(){
		this.scene.pushMatrix();
		this.textop.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
		this.scene.translate(0,this.trunkHeight,0);
		this.scene.scale(this.treeTopRadius/2,this.treeTopHeight,this.treeTopRadius/2);
		this.top.display();
		this.scene.popMatrix();
		this.scene.pushMatrix();
		this.textbot.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
		this.scene.scale(this.trunkRadius/2,this.trunkHeight,this.trunkRadius/2);
		this.bot.display();
		this.scene.popMatrix();
	}
	
	enableNormalViz(){
        this.top.enableNormalViz();
        this.bot.enableNormalViz();
    }
}