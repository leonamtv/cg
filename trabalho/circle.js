const circle = (
    color = [ 0, 0, 0 ],
    translation = [ 0, 0, 0 ],
    scale = 1.0,
    alpha = 1.0,
    translation_m
) => {
    let vertexPositionBuffer;
    let vertexColorBuffer;

    vertexPositionBuffer = gl.createBuffer();
    
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffer);
    
    let vertices = [
        -0.9899497487437185, -0.13567839195979903, 0.0,
        -0.9899497487437185, 0.13567839195979903, 0.0,
        -0.9798994974874372, -0.1959798994974874, 0.0,
        -0.9798994974874372, 0.1959798994974875, 0.0,
        -0.9296482412060302, -0.3668341708542714, 0.0,
        -0.9296482412060302, 0.3668341708542713, 0.0,
        -0.8492462311557789, -0.5276381909547738, 0.0,
        -0.8492462311557789, 0.5276381909547738, 0.0,
        -0.8291457286432161, -0.5577889447236181, 0.0,
        -0.8291457286432161, 0.5577889447236182, 0.0,
        -0.7688442211055276, -0.6381909547738693, 0.0,
        -0.7688442211055276, 0.6381909547738693, 0.0,
        -0.6381909547738693, -0.7688442211055276, 0.0,
        -0.6381909547738693, 0.7688442211055277, 0.0,
        -0.5577889447236181, -0.8291457286432161, 0.0,
        -0.5577889447236181, 0.829145728643216, 0.0,
        -0.5276381909547738, -0.8492462311557789, 0.0,
        -0.5276381909547738, 0.8492462311557789, 0.0,
        -0.3668341708542714, -0.9296482412060302, 0.0,
        -0.3668341708542714, 0.9296482412060301, 0.0,
        -0.1959798994974874, -0.9798994974874372, 0.0,
        -0.1959798994974874, 0.9798994974874373, 0.0,
        -0.13567839195979903, -0.9899497487437185, 0.0,
        -0.13567839195979903, 0.9899497487437185, 0.0,
        0.13567839195979903, -0.9899497487437185, 0.0,
        0.13567839195979903, 0.9899497487437185, 0.0,
        0.1959798994974875, -0.9798994974874372, 0.0,
        0.1959798994974875, 0.9798994974874373, 0.0,
        0.3668341708542713, -0.9296482412060302, 0.0,
        0.3668341708542713, 0.9296482412060301, 0.0,
        0.5276381909547738, -0.8492462311557789, 0.0,
        0.5276381909547738, 0.8492462311557789, 0.0,
        0.5577889447236182, -0.8291457286432161, 0.0,
        0.5577889447236182, 0.829145728643216, 0.0,
        0.6381909547738693, -0.7688442211055276, 0.0,
        0.6381909547738693, 0.7688442211055277, 0.0,
        0.7688442211055277, -0.6381909547738693, 0.0,
        0.7688442211055277, 0.6381909547738693, 0.0,
        0.829145728643216, -0.5577889447236181, 0.0,
        0.829145728643216, 0.5577889447236182, 0.0,
        0.8492462311557789, -0.5276381909547738, 0.0,
        0.8492462311557789, 0.5276381909547738, 0.0,
        0.9296482412060301, -0.3668341708542714, 0.0,
        0.9296482412060301, 0.3668341708542713, 0.0,
        0.9798994974874373, -0.1959798994974874, 0.0,
        0.9798994974874373, 0.1959798994974875, 0.0,
        0.9899497487437185, -0.13567839195979903, 0.0,
        0.9899497487437185, 0.13567839195979903, 0.0
    ];

    for ( let i = 0; i < vertices.length; i ++ ) vertices[i] *= scale

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    
    vertexPositionBuffer.itemSize = 3;
    vertexPositionBuffer.numItems = 48;

    vertexColorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexColorBuffer);

    var cores = [ ];

    for ( let i = 0; i < 48; i ++ ) cores = cores.concat ([ color[0], color[1], color[2], alpha ])

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cores), gl.STATIC_DRAW);
    
    vertexColorBuffer.itemSize = 4;
    vertexColorBuffer.numItems = 48;

    vec3.set (translation_m, translation[0], translation[1], translation[2]); 
    mat4.translate(mMatrix, mMatrix, translation_m);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, vertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexColorBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexColorAttribute, vertexColorBuffer.itemSize, gl.FLOAT, false, 0, 0);
    
    setMatrixUniforms();
    
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexPositionBuffer.numItems);
}