
const lTriangle = (
    color = [ 0, 0, 0 ],
    translation = [ 0, 0, 0 ],
    scale = 1.0,
    alpha = 1.0,
    translation_m
) => {
    let triangleVertexPositionBuffer;
    let triangleVertexColorBuffer;

    triangleVertexPositionBuffer = gl.createBuffer();
    
    gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer);
    
    let vertices = [
       0.0,  1.0, 0.0,
      -2.0, -1.0, 0.0,
       0.0, -1.0, 0.0
    ];

    for ( let i = 0; i < vertices.length; i ++ ) vertices[i] *= scale

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    
    triangleVertexPositionBuffer.itemSize = 3;
    triangleVertexPositionBuffer.numItems = 3;

    triangleVertexColorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexColorBuffer);

    var cores = [ ];

    for ( let i = 0; i < 3; i ++ ) cores = cores.concat ([ color[0], color[1], color[2], alpha ])

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cores), gl.STATIC_DRAW);
    
    triangleVertexColorBuffer.itemSize = 4;
    triangleVertexColorBuffer.numItems = 3;

    vec3.set (translation_m, translation[0], translation[1], translation[2]); 
    mat4.translate(mMatrix, mMatrix, translation_m);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, triangleVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexColorBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexColorAttribute, triangleVertexColorBuffer.itemSize, gl.FLOAT, false, 0, 0);
    
    setMatrixUniforms();
    
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, triangleVertexPositionBuffer.numItems);
}