const square = (
    color = [ 0, 0, 0 ],
    translation = [ 0, 0, 0 ],
    size = 4.5,
    alpha = 1.0,
    translation_m
) => {
    let squareVertexPositionBuffer;
    let squareVertexColorBuffer;

    squareVertexPositionBuffer = gl.createBuffer();
    
    gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexPositionBuffer);
    
    let vertices = [
        1.0, 1.0, 0.0,
        -1.0, 1.0, 0.0,
        1.0,-1.0, 0.0,
        -1.0,-1.0, 0.0
    ];

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    
    squareVertexPositionBuffer.itemSize = 3;
    squareVertexPositionBuffer.numItems = 4;

    squareVertexColorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexColorBuffer);

    var cores = [ ];

    for ( let i = 0; i < 4; i ++ ) cores = cores.concat ([ color[0], color[1], color[2], alpha ])

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cores), gl.STATIC_DRAW);
    
    squareVertexColorBuffer.itemSize = 4;
    squareVertexColorBuffer.numItems = 4;

    vec3.set (translation_m, translation[0], translation[1], translation[2]); 
    mat4.translate(mMatrix, mMatrix, translation_m);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexPositionBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, squareVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexColorBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexColorAttribute, squareVertexColorBuffer.itemSize, gl.FLOAT, false, 0, 0);
    
    setMatrixUniforms();
    
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, squareVertexPositionBuffer.numItems);
}