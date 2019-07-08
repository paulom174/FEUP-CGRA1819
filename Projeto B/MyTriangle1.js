/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangle1 extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
    }
	initBuffers() {
		this.vertices = [
            0,0,0,
            0,0,1,
            1,0,0,
            0,0,0,
            0,0,1,
            1,0,0
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            0, 1, 2,
            1,0,2
		];

		//Facing Z positive
		this.normals = [
			0, 1, 0,
			0, 1, 0,
            0, 1, 0,
            0, -1, 0,
			0, -1, 0,
            0, -1, 0
		];
		
		/*
		Texture coords (s,t)
		+----------> s
        |
        |
		|
		v
        t
        */

		this.texCoords = [
			0, 1,
			1, 1,
            0, 0
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

}
