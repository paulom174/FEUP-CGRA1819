#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
varying vec2 vHeightCoord;

uniform sampler2D uSampler;
uniform sampler2D uSampler3;


void main()
{
	vec4 color = texture2D(uSampler, vTextureCoord);
	vec4 color_grad = texture2D(uSampler3, -vHeightCoord);
	gl_FragColor = color * 0.7 + color_grad * 0.3;
}
