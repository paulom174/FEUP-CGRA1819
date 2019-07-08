/**
 * MyCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-0.5,   -0.5,    0.5,	//1
           
			0.5,   -0.5,    0.5,	//2
            0.5,   -0.5,   -0.5,	//3
            -0.5,   -0.5,   -0.5,	//4
			
			-0.5,   -0.5,    0.5,	//1
            0.5,   -0.5,    0.5,	//2
            -0.5,    0.5,    0.5,	//5
            0.5,    0.5,    0.5,    //6
			
            0.5,   -0.5,    0.5,	//2
            0.5,   -0.5,   -0.5,	//3
            0.5,    0.5,    0.5,	//6
            0.5,    0.5,   -0.5,	//7
			
            0.5,   -0.5,   -0.5,	//3
            -0.5,   -0.5,   -0.5,	//4
            0.5,    0.5,   -0.5,	//7
            -0.5,    0.5,   -0.5,	//8
			
			-0.5,   -0.5,    0.5,	//1
            -0.5,   -0.5,   -0.5,	//4
            -0.5,    0.5,    0.5,	//5
            -0.5,    0.5,   -0.5,	//8
			
            -0.5,    0.5,    0.5,	//5
            0.5,    0.5,    0.5,	//6
            0.5,    0.5,   -0.5,	//7
            -0.5,    0.5,   -0.5	//8
		];

		this.indices = [
			//1234
			2, 0, 1, 
            2, 3, 0,
            //5678
			5, 4, 7, 
            4, 6, 7,
            //2367
			9, 8, 11,
            11, 8, 10,
			//3478
			12, 14, 15, 
            15, 13, 12,
			//1458
            16, 17, 19,
            19, 18, 16,
			//5678
            20, 23, 22, 
            21, 20, 22,   
		];
		
		this.normals = [
			0,1,0,
			0,1,0,
			0,1,0,
			0,1,0,
			0,0,-1,
			0,0,-1,
			0,0,-1,
			0,0,-1,
			-1,0,0,
			-1,0,0,
			-1,0,0,
			-1,0,0,
			0,0,1,
			0,0,1,
			0,0,1,
			0,0,1,
			1,0,0,
			1,0,0,
			1,0,0,
			1,0,0,
			0,-1,0,
			0,-1,0,
			0,-1,0,
			0,-1,0,
		];
		
		this.texCoords=[
		0.25,1,
		0.5,1,
		0.5,0.6666,
		0.25,0.6666,
		1,0.6666,
		0.75,0.6666,
		1,0.3333,
		0.75,0.3333,
		0.75,0.6666,
		0.5,0.6666,
		0.75,0.3333,
		0.5,0.3333,
		0.5,0.6666,
		0.25,0.6666,
		0.5,0.3333,
		0.25,0.3333,
		0,0.6666,
		0.25,0.6666,
		0,0.3333,
		0.25,0.3333,
		0.25,0,
		0.5,0,
		0.5,0.3333,
		0.25,0.3333,
		
		
		
		
		
		
		
		
		
		];


		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
	
}