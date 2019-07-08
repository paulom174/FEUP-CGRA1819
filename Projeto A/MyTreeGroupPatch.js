/**
 * MyTreeGroupPatch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTreeGroupPatch extends CGFobject {
	constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture,
treeTopTexture,sidesize) {
        super(scene);
		this.trunkHeight=trunkHeight;
		this.trunkRadius=trunkRadius;
		this.treeTopHeight=treeTopHeight;
		this.treeTopRadius=treeTopRadius;
		this.trunkTexture=trunkTexture;
		this.treeTopTexture=treeTopTexture;
		if(treeTopRadius>((sidesize*2)/7))
			this.sidesize=((treeTopRadius*7)/2);
		else
			this.sidesize=sidesize;
        this.init();
		this.random1=(Math.random() * this.treeTopRadius).toFixed(4);
		this.random2=(Math.random() * this.treeTopRadius).toFixed(4);
		this.random3=(Math.random() * this.treeTopRadius).toFixed(4);
		this.random4=(Math.random() * this.treeTopRadius).toFixed(4);
		this.random5=(Math.random() * ((this.treeTopRadius*0.5)-0.5)+0.5).toFixed(4);
		this.random6=(Math.random() * ((this.treeTopRadius*0.5)-0.5)+0.5).toFixed(4);
		this.random7=(Math.random() * ((this.treeTopRadius*0.5)-0.5)+0.5).toFixed(4);
		this.random8=(Math.random() * ((this.treeTopRadius*0.5)-0.5)+0.5).toFixed(4);
        
    }

    init(){
		
		
        this.tree1 = new MyTree(this.scene,this.trunkHeight,this.trunkRadius,this.treeTopHeight,this.treeTopRadius,this.trunkTexture,this.treeTopTexture);
        this.tree2= new MyTree(this.scene,this.trunkHeight,this.trunkRadius,this.treeTopHeight,this.treeTopRadius,this.trunkTexture,this.treeTopTexture);
	    this.tree3=new MyTree(this.scene,this.trunkHeight,this.trunkRadius,this.treeTopHeight,this.treeTopRadius,this.trunkTexture,this.treeTopTexture);
	    this.tree4=new MyTree(this.scene,this.trunkHeight,this.trunkRadius,this.treeTopHeight,this.treeTopRadius,this.trunkTexture,this.treeTopTexture);
		this.tree5=new MyTree(this.scene,this.trunkHeight,this.trunkRadius,this.treeTopHeight,this.treeTopRadius,this.trunkTexture,this.treeTopTexture);
        this.tree6=new MyTree(this.scene,this.trunkHeight,this.trunkRadius,this.treeTopHeight,this.treeTopRadius,this.trunkTexture,this.treeTopTexture);
        this.tree7=new MyTree(this.scene,this.trunkHeight,this.trunkRadius,this.treeTopHeight,this.treeTopRadius,this.trunkTexture,this.treeTopTexture);
		this.tree8=new MyTree(this.scene,this.trunkHeight,this.trunkRadius,this.treeTopHeight,this.treeTopRadius,this.trunkTexture,this.treeTopTexture);
		this.tree9=new MyTree(this.scene,this.trunkHeight,this.trunkRadius,this.treeTopHeight,this.treeTopRadius,this.trunkTexture,this.treeTopTexture);
		
    }

    

    
    display() {
		
        this.scene.pushMatrix();
		// translate with random not working and somehow not reseting after each translation
        this.scene.translate((this.random1-0.5), 0, (this.random1-0.5));
        this.tree1.display();
        this.scene.popMatrix();
		this.scene.pushMatrix();
		this.scene.translate(this.random2, 0,0);
        this.scene.translate((this.sidesize/2), 0, this.random2);
        this.tree2.display();
        this.scene.popMatrix();
		this.scene.pushMatrix();
		this.scene.translate(this.sidesize, 0, 0);
		this.scene.scale(this.random5,this.random5,this.random5);
        this.tree3.display();
        this.scene.popMatrix();
		this.scene.pushMatrix();
        this.scene.translate(0, 0,this.sidesize/2);
		this.scene.scale(this.random6,this.random6,this.random6);
        this.tree4.display();
        this.scene.popMatrix();
		this.scene.pushMatrix();
		this.scene.translate(0, 0,this.sidesize);
        this.tree5.display();
        this.scene.popMatrix();
		this.scene.pushMatrix();
		this.scene.translate(-this.random3, 0,-this.random3);
		this.scene.translate(this.random2, 0,this.random2);
        this.scene.translate(this.sidesize/2, 0,this.sidesize/2);
		this.scene.scale(this.random7,this.random7,this.random7);
		this.tree6.display();
        this.scene.popMatrix();
		this.scene.pushMatrix();
        this.scene.translate(this.sidesize,0, this.sidesize/2);
		this.scene.translate(this.random4, 0,this.random4);
        this.tree7.display();
        this.scene.popMatrix();
		this.scene.pushMatrix();
        this.scene.translate(this.sidesize/2,0 , this.sidesize);
        this.tree8.display();
        this.scene.popMatrix();
		this.scene.pushMatrix();
        this.scene.translate(this.sidesize,0 , this.sidesize);
		this.scene.scale(this.random8,this.random8,this.random8);
        this.tree9.display();
        this.scene.popMatrix();
		
		
    } 
    
}