let rCubo;
const cubo = (
    translation = [ 0, 0, 0 ],
    scale = 1.0,
    translation_m
) => {
    predioTextura = gl.createTexture();
    predioTextura.image = new Image();
    predioTextura.image.crossOrigin = "anonymous"; 

    predioTextura.image.onload = function () {
        gl.bindTexture(gl.TEXTURE_2D, predioTextura);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, predioTextura.image);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.bindTexture(gl.TEXTURE_2D, null);
    }
    predioTextura.image.src = "../assets/fig4.jpg";
    shaderProgram.samplerUniform = gl.getUniformLocation(shaderProgram, "uSampler");

    let xRot = 0;
    let yRot = 0;
    let zRot = 0;
    let cubeVertexPositionBuffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBuffer)

    let vertices = [
        // Frente
        -1.0, -1.0, 1.0,
        1.0, -1.0, 1.0,
        1.0, 1.0, 1.0,
        -1.0, 1.0, 1.0,

        // Trás
        -1.0, -1.0, -1.0,
        -1.0, 1.0, -1.0,
        1.0, 1.0, -1.0,
        1.0, -1.0, -1.0,

        // Topo
        -1.0, 1.0, -1.0,
        -1.0, 1.0, 1.0,
        1.0, 1.0, 1.0,
        1.0, 1.0, -1.0,

        // Base
        -1.0, -1.0, -1.0,
        1.0, -1.0, -1.0,
        1.0, -1.0, 1.0,
        -1.0, -1.0, 1.0,

        // Direita
        1.0, -1.0, -1.0,
        1.0, 1.0, -1.0,
        1.0, 1.0, 1.0,
        1.0, -1.0, 1.0,

        // Esquerda
        -1.0, -1.0, -1.0,
        -1.0, -1.0, 1.0,
        -1.0, 1.0, 1.0,
        -1.0, 1.0, -1.0
    ];

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    cubeVertexPositionBuffer.itemSize = 3;
    cubeVertexPositionBuffer.numItems = 24;

    let cuboVertexIndexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cuboVertexIndexBuffer);
    let indices = [
        0, 1, 2, 0, 2, 3,    // Frente
        4, 5, 6, 4, 6, 7,    // Trás
        8, 9, 10, 8, 10, 11,  // Topo
        12, 13, 14, 12, 14, 15, // Base
        16, 17, 18, 16, 18, 19, // Direita
        20, 21, 22, 20, 22, 23  // Esquerda
    ]
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
    cuboVertexIndexBuffer.itemSize = 1;
    cuboVertexIndexBuffer.numItems = 36;

    cuboVertexTextureCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cuboVertexTextureCoordBuffer);
    let coordTextura = [
        // Frente
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,

        // Trás
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
        0.0, 0.0,

        // Topo
        0.0, 1.0,
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,

        // Base
        1.0, 1.0,
        0.0, 1.0,
        0.0, 0.0,
        1.0, 0.0,

        // Direita
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
        0.0, 0.0,

        // Esquerda
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(coordTextura), gl.STATIC_DRAW);
    cuboVertexTextureCoordBuffer.itemSize = 2;
    cuboVertexTextureCoordBuffer.numItems = 24;

    mPushMatrix();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cuboVertexIndexBuffer);
    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, cubeVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, cuboVertexTextureCoordBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexTextureCoordAttribute, cuboVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);
    mat4.rotate(mMatrix, mMatrix, degToRad(rCubo), [xRot, yRot, zRot]);
    setMatrixUniforms();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, predioTextura);
    gl.uniform1i(shaderProgram.samplerUniform,0);
    gl.drawElements(gl.TRIANGLES, cuboVertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
    mPopMatrix();

    
}


var ultimo = 0;
function animar() {
  var agora = new Date().getTime();
  if (ultimo != 0) {
    var diferenca = agora - ultimo;
    rCubo += ((75 * diferenca) / 1000.0) % 360.0;
  }
  ultimo = agora;
}