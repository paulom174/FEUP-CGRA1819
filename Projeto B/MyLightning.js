/**
 * MyLightning
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLightning extends CGFobject {
	constructor(scene) {
        super(scene);
        this.init();
        this.scaleFactor = 0.5;
        this.cloud = new MyUnitCubeQuad(this.scene);
    }

    init(){
		
		//---------------Aplied materials
		this.cloudtex = new CGFappearance(this.scene);
        this.cloudtex.setAmbient(0.3, 0.3, 0.3, 3);
        this.cloudtex.setDiffuse(0.2, 0.2, 0.2, 1);
        this.cloudtex.setSpecular(0.1, 0.1, 0.1, 1);
        this.cloudtex.setShininess(10.0);
        this.cloudtex.loadTexture('images/cloud.jpg');
        this.cloudtex.setTextureWrap('REPEAT', 'REPEAT');

        // cria o lexico da gramática
        this.initGrammar();
        this.generate();
    }

    // cria o lexico da gramática
    initGrammar(){
        this.grammar = {
            "F": new MyQuad(this.scene),
            "X": new MyQuad(this.scene)
        };
    }


    // gera o sistema L com os par�metros atuais da cena
    generate(){
        // copia o axioma da cena para iniciar a sequência de desenvolvimento
        this.axiom = "X";

        // cria as producoes
        this.productions= {
            "F" : [ " FF " ],
            "X": ["F[-X][X]F[-X]+FX", "F[-X]+FXF[-X][X]"]
        };

        // angulo de rotacao
        this.angle = 25 * Math.PI / 180;

        // numero de iteracoes
        this.iterations = 3;

        // escalamento dos elementos dependente do numero de iteracoes
        this.scale = Math.pow(this.scaleFactor, this.iterations-1);

        this.iterate();
     }

  
    // desenvolve o axioma ao longo de uma sequência de desenvolvimento com um determinado número de iterações
    iterate(){
        var i, j;
        for (i=0; i < this.iterations; ++i){
            var newString = "";

            // substitui cada um dos caracteres da cadeia de caracteres de acordo com as produções
            for (j=0; j<this.axiom.length; ++j){
                var axiomProductions=this.productions[this.axiom[j]];
                // aplicar producoes
                if (axiomProductions === undefined){
                    // caso nao se aplique nenhuma producao deixa estar o caracter original
                    newString += this.axiom[j];
                }else if (axiomProductions.length == 1) {
                    // caso apenas exista uma producao, aplica-a
                    newString += axiomProductions[0];
                } else {
                    // sistema estocastico - varias producoes sao aplicaveis - seleciona aleatoriamente
                    newString += axiomProductions[Math.floor(Math.random() * axiomProductions.length)];                    
                }
            }

            this.axiom = newString;
        }
        console.log("Final: "+this.axiom);
        console.log("(length: "+this.axiom.length+")");
    }
    startAnimation(t){
        this.axiom = "X";
        this.generate();
        this.start_t = t;
        this.step = this.depth = this.axiom.length/(1000/this.scene.updatePeriod);
        this.finish = false;
    }

    update(t){
        this.depth += this.step;
        if(t-this.start_t >= 1000){
            this.finish = true; 
        }
    }




    displayClouds(){
        this.scene.pushMatrix();
		this.cloudtex.apply();
        this.scene.scale(4,1,4);
        this.scene.translate(-0.5, 0, -0.5)
        this.cloud.display();
        this.scene.popMatrix();
    }
    display(){

        this.displayClouds();

        this.scene.pushMatrix();
        this.scene.scale(this.scale, this.scale, this.scale);

         var i;
         var depth = this.depth;

        // percorre a cadeia de caracteres
        for (i=0; i<this.axiom.length && !this.finish; ++i){

            // verifica se sao caracteres especiais
            switch(this.axiom[i]){
                case "+":
                    // roda a esquerda
                    this.scene.rotate(this.angle, 0, 0, 1);
                    break;

                case "-":
                    // roda a direita
                    this.scene.rotate(-this.angle, 0, 0, 1);
                    break;

                case "\\":
                    // rotação em sentido positivo sobre o eixo dos XX
                    this.scene.rotate(this.angle, 1, 0, 0);
                    break;

                case "/":
                    // rotação em sentido negativo sobre o eixo dos XX
                    this.scene.rotate(-this.angle, 1, 0, 0);
                    break;

                case "^":
                    // rotação em sentido positivo sobre o eixo dos YY
                    this.scene.rotate(this.angle, 0, 1, 0);
                    break;

                case "&":
                    // rotação em sentido negativo sobre o eixo dos YY
                    this.scene.rotate(this.angle, 0, 1, 0);
                    break;

                case "[":
                    // push
                    this.scene.pushMatrix();
                    break;

                case "]":
                    // pop
                    this.scene.popMatrix();
                    break;

                // processa primitiva definida na gramatica, se existir
                default:
                    var primitive=this.grammar[this.axiom[i]];

                    
                    if ( primitive && depth > 0)
                    {
                        this.scene.pushMatrix();
                        this.scene.scale(0.25, 2,1);
                        this.scene.translate(0.5,-0.5,0);
                        primitive.display();
                        this.scene.popMatrix();
                        this.scene.translate(0, -2, 0);
                        depth--;
                    }
                    break;
            }
        }
        this.scene.popMatrix();
    }
}