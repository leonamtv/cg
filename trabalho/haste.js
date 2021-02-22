const haste = (
    color = [ 0, 0, 0 ],
    translation = [ 0, 0, 0 ],
    scale = 1.0,
    alpha = 1.0,
    radius = 0.5,
    offset = 0.0,
    translation_m
) => {
    let vertexPositionBuffer;
    let vertexColorBuffer;

    vertexPositionBuffer = gl.createBuffer();
    
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffer);
    
    let vertices = [
         4.0,  0.5, 0.0,
        -4.0,  0.5, 0.0,
         4.0, -0.5, 0.0,
        -4.0, -0.5, 0.0
    ];

    for ( let i = 0; i < vertices.length; i ++ ) vertices[i] *= scale

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    
    vertexPositionBuffer.itemSize = 3;
    vertexPositionBuffer.numItems = 4;

    vertexColorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexColorBuffer);

    var cores = [ ];

    for ( let i = 0; i < 4; i ++ ) cores = cores.concat ([ color[0], color[1], color[2], alpha ])

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cores), gl.STATIC_DRAW);
    
    vertexColorBuffer.itemSize = 4;
    vertexColorBuffer.numItems = 4;
    
    mPushMatrix();
    vec3.set (translation_m, translation[0], translation[1], translation[2]); 
    mat4.translate(mMatrix, mMatrix, translation_m);

    var agora = new Date().getTime();

    let i = ( agora + offset ) / 240;

    vec3.set ( translation_m, radius * Math.cos ( i ), radius * Math.sin ( i ), 0 );

    mat4.translate ( mMatrix, mMatrix, translation_m );
    
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, vertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexColorBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexColorAttribute, vertexColorBuffer.itemSize, gl.FLOAT, false, 0, 0);
    
    setMatrixUniforms();
    
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexPositionBuffer.numItems);
    mPopMatrix();
}
