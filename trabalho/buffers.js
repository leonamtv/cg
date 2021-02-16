function squareBuffer () {
    squareVertexPositionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexPositionBuffer);
    vertices = [
      1.0, 1.0, 0.0,
      -1.0, 1.0, 0.0,
      1.0,-1.0, 0.0,
      -1.0,-1.0, 0.0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    squareVertexPositionBuffer.itemSize = 3;
    squareVertexPositionBuffer.numItems = 4;
}

function hRectangleBuffer () {
  hRectangleVertexPositionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, hRectangleVertexPositionBuffer);
  vertices = [
    2.0, 1.0, 0.0,
    -2.0, 1.0, 0.0,
    2.0,-1.0, 0.0,
    -2.0,-1.0, 0.0
  ];
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  hRectangleVertexPositionBuffer.itemSize = 3;
  hRectangleVertexPositionBuffer.numItems = 4;
}

function longHRectangleBuffer () {
  longHRectangleVertexPositionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, longHRectangleVertexPositionBuffer);
  vertices = [
    5.0, 0.5, 0.0,
    -5.0, 0.5, 0.0,
    5.0,-0.5, 0.0,
    -5.0,-0.5, 0.0
  ];
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  longHRectangleVertexPositionBuffer.itemSize = 3;
  longHRectangleVertexPositionBuffer.numItems = 4;
}

function vRectangleBuffer () {
  vRectangleVertexPositionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vRectangleVertexPositionBuffer);
  vertices = [
    1.0, 2.0, 0.0,
    -1.0, 2.0, 0.0,
    1.0,-2.0, 0.0,
    -1.0,-2.0, 0.0
  ];
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  vRectangleVertexPositionBuffer.itemSize = 3;
  vRectangleVertexPositionBuffer.numItems = 4;
}