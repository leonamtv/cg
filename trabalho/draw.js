const square = ( 
    x_translation = 0, 
    y_translation = 0, 
    z_translation = 0 ,
    size = 4.5,
    translation_vector
) => {
    let translation = translation_vector;
    vec3.set (translation, x_translation, y_translation, z_translation); 
    mat4.translate(mMatrix, mMatrix, translation);
    gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexPositionBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, squareVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
    setMatrixUniforms();
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, squareVertexPositionBuffer.numItems);
}

const vRectangle = ( 
    x_translation = 0, 
    y_translation = 0, 
    z_translation = 0 ,
    size = 4.5,
    translation_vector
) => {
    let translation = translation_vector;
    vec3.set (translation, x_translation, y_translation, z_translation); 
    mat4.translate(mMatrix, mMatrix, translation);
    gl.bindBuffer(gl.ARRAY_BUFFER, vRectangleVertexPositionBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, vRectangleVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
    setMatrixUniforms();
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, vRectangleVertexPositionBuffer.numItems);
}

const hRectangle = ( 
    x_translation = 0, 
    y_translation = 0, 
    z_translation = 0 ,
    size = 4.5,
    translation_vector
) => {
    let translation = translation_vector;
    vec3.set (translation, x_translation, y_translation, z_translation); 
    mat4.translate(mMatrix, mMatrix, translation);
    gl.bindBuffer(gl.ARRAY_BUFFER, hRectangleVertexPositionBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, hRectangleVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
    setMatrixUniforms();
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, hRectangleVertexPositionBuffer.numItems);
}

const longHRectangle = ( 
    x_translation = 0, 
    y_translation = 0, 
    z_translation = 0 ,
    size = 4.5,
    translation_vector
) => {
    let translation = translation_vector;
    vec3.set (translation, x_translation, y_translation, z_translation); 
    mat4.translate(mMatrix, mMatrix, translation);
    gl.bindBuffer(gl.ARRAY_BUFFER, longHRectangleVertexPositionBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, longHRectangleVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
    setMatrixUniforms();
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, longHRectangleVertexPositionBuffer.numItems);
}