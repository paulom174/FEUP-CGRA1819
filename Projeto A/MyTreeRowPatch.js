/**
 * MyTreeGroupPatch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTreeRowPatch extends CGFobject {
	constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture,
treeTopTexture,sidesize) {
        super(scene);
		this.trunkHeight=trunkHeight;
		this.trunkRadius=trunkRadius;
		this.treeTopHeight=treeTopHeight;
		this.treeTopRadius=treeTopRadius;
		this.trunkTexture=trunkTexture;
		this.treeTopTexture=treeTopTexture;
		if(treeTopRadius>sidesize/2)
			this.sidesize=treeTopRadius;
		else
			this.sidesize=sidesize;
        this.init();
		this.random1=(Math.random() * this.treeTopRadius).toFixed(4);
		this.random2=(Math.random() * this.treeTopRadius).toFixed(4);
		this.random3=(Math.random() * this.treeTopRadius).toFixed(4);
		this.random4=(Math.random() * this.treeTopRadius).toFixed(4);
		this.random5=(Math.random() * this.treeTopRadius).toFixed(4);
		this.random6=(Math.random() * this.treeTopRadius).toFixed(4);
        
    }

    init(){
        this.tree1 = new MyTree(this.scene,this.trunkHeight,this.trunkRadius,this.treeTopHeight,this.treeTopRadius,this.trunkTexture,this.treeTopTexture);
        this.tree2= new MyTree(this.scene,this.trunkHeight,this.trunkRadius,this.treeTopHeight,this.treeTopRadius,this.trunkTexture,this.treeTopTexture);
	    this.tree3=new MyTree(this.scene,this.trunkHeight,this.trunkRadius,this.treeTopHeight,this.treeTopRadius,this.trunkTexture,this.treeTopTexture);
	    this.tree4=new MyTree(this.scene,this.trunkHeight,this.trunkRadius,this.treeTopHeight,this.treeTopRadius,this.trunkTexture,this.treeTopTexture);
		this.tree5=new MyTree(this.scene,this.trunkHeight,this.trunkRadius,this.treeTopHeight,this.treeTopRadius,this.trunkTexture,this.treeTopTexture);
        this.tree6=new MyTree(this.scene,this.trunkHeight,this.trunkRadius,this.treeTopHeight,this.treeTopRadius,this.trunkTexture,this.treeTopTexture);
		  
    }

    

    
    display() {
        this.scene.pushMatrix();
        this.scene.translate(0, 0, this.random1/2);
        this.tree1.display();
        this.scene.popMatrix();
		this.scene.pushMatrix();
        this.scene.translate(this.sidesize/2, 0,this.random2/2);
        this.tree2.display();
        this.scene.popMatrix();
		this.scene.pushMatrix();
        this.scene.translate(this.sidesize, 0, this.random3/2);
        this.tree3.display();
        this.scene.popMatrix();
		this.scene.pushMatrix();
        this.scene.translate((this.sidesize*3)/2, 0,this.random4/2);
        this.tree4.display();
        this.scene.popMatrix();
		this.scene.pushMatrix();
        this.scene.translate(this.sidesize*2, 0,this.random5/2);
        this.tree5.display();
        this.scene.popMatrix();
		this.scene.pushMatrix();
        this.scene.translate((this.sidesize*5)/2, 0,this.random6/2);
        this.tree6.display();
        this.scene.popMatrix();
		
		
		
    } 
    
}