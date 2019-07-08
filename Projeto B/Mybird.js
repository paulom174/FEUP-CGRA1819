/**
 * MyBird
 * @constructor
 * @param scene - Reference to MyScene object
 */
 
 class MyBird extends CGFobject {
	 constructor(scene) {
        super(scene);
		this.animation=0;
		this.direction=0;
		this.speed=0.0000000001;
		this.x=-3;
		this.z=-3;
		this.y=3;
		this.grab=false;
        this.body = new MyUnitCubeQuad(this.scene);
        this.head = new MyUnitCubeQuad(this.scene);
        this.eye = new MyUnitCubeQuad(this.scene);
        this.leg = new MyCylinder(this.scene, 10);
        this.pawn = new MyUnitCubeQuad(this.scene);
        this.nose = new MyCone(this.scene, 10);
        this.tail =  new MyPyramid(this.scene, 4);
        this.tail_quad = new MyQuad(this.scene);
        this.wing_part1 = new MyQuad(this.scene);
        this.wing_part2_1 = new MyTriangle1(this.scene);
        this.wing_part2_2 = new MyTriangle2(this.scene);
        
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
        //white texture
        this.white = new CGFappearance(this.scene);
        this.white.setAmbient(0.1, 0.1, 0.1, 1);
        this.white.setDiffuse(0.9, 0.9, 0.9, 1);
        this.white.setSpecular(0.1, 0.1, 0.1, 1);
        this.white.setShininess(10.0);
        this.white.loadTexture('images/white.jpg');
        this.white.setTextureWrap('REPEAT', 'REPEAT');

        //gray texture
        this.gray = new CGFappearance(this.scene);
        this.gray.setAmbient(0.1, 0.1, 0.1, 1);
        this.gray.setDiffuse(0.9, 0.9, 0.9, 1);
        this.gray.setSpecular(0.1, 0.1, 0.1, 1);
        this.gray.setShininess(10.0);
        this.gray.loadTexture('images/gray.jpg');
        this.gray.setTextureWrap('REPEAT', 'REPEAT');

        //black texture
        this.black = new CGFappearance(this.scene);
        this.black.setAmbient(0.1, 0.1, 0.1, 1);
        this.black.setDiffuse(0.9, 0.9, 0.9, 1);
        this.black.setSpecular(0.1, 0.1, 0.1, 1);
        this.black.setShininess(10.0);
        this.black.loadTexture('images/black.jpg');
        this.black.setTextureWrap('REPEAT', 'REPEAT');

        //orange texture
        this.orange = new CGFappearance(this.scene);
        this.orange.setAmbient(0.1, 0.1, 0.1, 1);
        this.orange.setDiffuse(0.9, 0.9, 0.9, 1);
        this.orange.setSpecular(0.1, 0.1, 0.1, 1);
        this.orange.setShininess(10.0);
        this.orange.loadTexture('images/orange.jpg');
        this.orange.setTextureWrap('REPEAT', 'REPEAT');

        //orange texture
        this.yellow = new CGFappearance(this.scene);
        this.yellow.setAmbient(0.1, 0.1, 0.1, 1);
        this.yellow.setDiffuse(0.9, 0.9, 0.9, 1);
        this.yellow.setSpecular(0.1, 0.1, 0.1, 1);
        this.yellow.setShininess(10.0);
        this.yellow.loadTexture('images/yellow.jpg');
        this.yellow.setTextureWrap('REPEAT', 'REPEAT');
	 }
		
		update(t){
		this.animation=(Math.cos(t*this.speed / 100	 % 1000))/6;
		this.x=this.x+Math.cos(this.direction)*this.speed/4;
		this.z=this.z+Math.sin(-this.direction)*this.speed/4;
		
		if(this.grab==true)this.y=this.y-0.1;
		if(this.y==0||this.y<0)this.grab=false;
		if(this.grab==false&&this.y<3)this.y=this.y+0.1;
		}		
		
		changemovement(a){
		switch(a){
			case 1:
				
				this.speed=this.speed+0.1;
				if(this.speed>3 || this.speed ==3)
					this.speed=3;
				break;
			
			case 2:
				this.direction=this.direction+ Math.PI/20;			
			break;
			
			case 3:
				this.direction = this.direction - Math.PI/20;
				break;
				
			case 4:
			
				this.speed=this.speed-0.1;
				if(this.speed<1 || this.speed ==1)
					this.speed=1;
				break;
			
			case 5:
				this.x=0;
				this.z=0;
				this.direction=0;
				this.y=3;
				this.speed=0.0000000000001;
				break;
				
			case 6:
				this.grab=true;
				
				break;
				
			default:
				break;
		}
		}
		
		
 


     display(){
		this.scene.translate(this.x,this.y,this.z);
		this.scene.rotate(this.direction,0,1,0);
		
		this.scene.translate(-0.5,0,-0.5);
		
		
		
        //body
		this.scene.pushMatrix();
		this.scene.translate(0,this.animation,0);
        this.scene.pushMatrix();
        this.white.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.body.display();
        this.scene.popMatrix();

        //head
        this.scene.pushMatrix();
        this.gray.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.scale(1.02,1.02,1.02);
        this.scene.translate(0.7, 0.7, -0.01);
        this.head.display();
        this.scene.popMatrix();

        //eyes
        this.scene.pushMatrix();
        this.scene.translate(1.3, 1.3, 1);
        this.scene.scale(0.25, 0.25, 0.12);
        this.black.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.eye.display();
        this.scene.popMatrix();

        //eyes
        this.scene.pushMatrix();
        this.scene.translate(1.3, 1.3, -0.1);
        this.scene.scale(0.25, 0.25, 0.12);
        this.black.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.eye.display();
        this.scene.popMatrix();

        //legs
        this.scene.pushMatrix();
        this.scene.translate(0.5,-0.45,0.25);
        this.scene.scale(0.1,0.45,0.1);
        this.orange.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.leg.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.5,-0.45,0.75);
        this.scene.scale(0.1,0.45,0.1);
        this.orange.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.leg.display();
        this.scene.popMatrix();

        //pawn
        this.scene.pushMatrix();
        this.scene.translate(0.4,-0.55,0.15);
        this.scene.scale(0.4,0.1,0.2);
        this.orange.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.pawn.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.4,-0.55,0.65);
        this.scene.scale(0.4,0.1,0.2);
        this.orange.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.pawn.display();
        this.scene.popMatrix();

        //nose
        this.scene.pushMatrix();
        this.scene.translate(1.7,1.4,0.5);
        this.scene.scale(0.25,0.1,0.1);
        this.scene.rotate(-Math.PI/2, 0,0,1);
        this.yellow.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.nose.display();
        this.scene.popMatrix();

        //tail
        this.scene.pushMatrix();
        this.scene.translate(-0.3,0.5,0.5);
        this.scene.scale(0.3,0.3,0.3);
        this.scene.rotate(-Math.PI/2, 0,0,1);
        this.scene.rotate(Math.PI/4, 0, 1, 0);
        this.black.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.tail.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/2, 0,1,0);
        this.scene.scale(0.4,0.4,0.4);
        this.scene.translate(1.25,1.25,0.7);
        this.black.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.tail_quad.display();
        this.scene.popMatrix();
		this.scene.popMatrix();

        //wing 1
		this.scene.pushMatrix()
		this.scene.rotate(this.animation,1,0,0);
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/12, 1,0,0);
        this.scene.scale(0.8,0.8,0.8);
        this.scene.translate(0.5,0.5,1.7);
        this.scene.rotate(-Math.PI/2, 1,0,0);
        this.gray.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.wing_part1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0.85,1.59);
        this.scene.scale(0.8,0.8,0.8);
        this.scene.rotate(Math.PI/12, 1,0,0);
        this.gray.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.wing_part2_1.display();
        this.scene.popMatrix();
		this.scene.popMatrix();

        //wing 2
		this.scene.pushMatrix();
		this.scene.rotate(-this.animation,1,0,0);
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/12, 1,0,0);
        this.scene.scale(0.8,0.8,0.8);
        this.scene.translate(0.5,0.8,-0.6);
        this.scene.rotate(-Math.PI/2, 1,0,0);
        this.gray.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.wing_part1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI, 1,0,0);
        this.scene.scale(0.8,0.8,0.8);
        this.scene.translate(0,-1.05,0.84);
        this.scene.rotate(-Math.PI/12, 1,0,0);
        this.gray.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.wing_part2_2.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
        
         if (this.scene.caught) {
             this.scene.pushMatrix();
             this.scene.translate(0, -0.7, 0);
             this.scene.stick.display();
             this.scene.popMatrix();
         }
		
		
    }
}