/**
 * MyCylinder
 * @constructor
 * @param scene - Reference to MyScene object
 */
 
 class MyCylinder extends CGFobject {
	 constructor(scene, slices) {
        super(scene);
        this.slices = slices;
		this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals=[];
		this.texCoords=[];


        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;
		
		var textcord = 0;
		var division=1/this.slices;


        for(var i = 0; i <= this.slices; i++){
            // All vertices have to be declared for a given face
            // even if they are shared with others, as the normals 
            // in each face will be different

            var sa=Math.sin(ang);
            var ca=Math.cos(ang);

            this.vertices.push(ca, 0, -sa);
            this.vertices.push(ca, 1, -sa);
			
			
			this.texCoords.push(textcord,1);
			this.texCoords.push(textcord,0);
			
			
			textcord=textcord+division;



            this.normals.push(Math.cos(ang), 0, -Math.sin(ang));
            this.normals.push(Math.cos(ang), 0, -Math.sin(ang));

    
            ang+=alphaAng;

        }

        for(i = 0; i < this.slices; i++){
            this.indices.push(2*i, (2*i+2) , (2*i+1) );
            this.indices.push((2*i+1), (2*i+2) , (2*i+3));
        }
        
        this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
    }
 }