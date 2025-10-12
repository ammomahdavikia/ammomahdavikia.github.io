var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');

var CELL_SIZE = 10;
var COLS = 80;
var ROWS = 40;
var ALIVE_COLOR = '#36454F';
var DEAD_COLOR = '#FFFFFF';

var grid = [];

function initGrid() {
    for (var i = 0; i < ROWS; i++) {
        grid[i] = [];
        for (var j = 0; j < COLS; j++) {
            grid[i][j] = 0;
        }
    }
    
    var centerRow = 20;
    var centerCol = 40;
    
    grid[centerRow - 10][centerCol - 20] = 1;
    grid[centerRow - 9][centerCol - 19] = 1;
    grid[centerRow - 8][centerCol - 21] = 1;
    grid[centerRow - 8][centerCol - 20] = 1;
    grid[centerRow - 8][centerCol - 19] = 1;
    
    grid[centerRow][centerCol - 10] = 1;
    grid[centerRow][centerCol - 9] = 1;
    grid[centerRow][centerCol - 8] = 1;
    
    grid[centerRow - 5][centerCol + 5] = 1;
    grid[centerRow - 5][centerCol + 6] = 1;
    grid[centerRow - 5][centerCol + 7] = 1;
    grid[centerRow - 4][centerCol + 4] = 1;
    grid[centerRow - 4][centerCol + 5] = 1;
    grid[centerRow - 4][centerCol + 6] = 1;
    
    grid[centerRow + 5][centerCol + 15] = 1;
    grid[centerRow + 5][centerCol + 16] = 1;
    grid[centerRow + 6][centerCol + 15] = 1;
    grid[centerRow + 7][centerCol + 18] = 1;
    grid[centerRow + 8][centerCol + 17] = 1;
    grid[centerRow + 8][centerCol + 18] = 1;
}

function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (var i = 0; i < ROWS; i++) {
        for (var j = 0; j < COLS; j++) {
            ctx.fillStyle = grid[i][j] ? ALIVE_COLOR : DEAD_COLOR;
            ctx.fillRect(j * CELL_SIZE, i * CELL_SIZE, CELL_SIZE, CELL_SIZE);
            
            ctx.strokeStyle = '#f0f0f0';
            ctx.strokeRect(j * CELL_SIZE, i * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        }
    }
}

function countNeighbors(row, col) {
    var count = 0;
    for (var i = -1; i <= 1; i++) {
        for (var j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) continue;
            var newRow = (row + i + ROWS) % ROWS;
            var newCol = (col + j + COLS) % COLS;
            count += grid[newRow][newCol];
        }
    }
    return count;
}

function updateGrid() {
    var newGrid = [];
    for (var i = 0; i < ROWS; i++) {
        newGrid[i] = [];
        for (var j = 0; j < COLS; j++) {
            var neighbors = countNeighbors(i, j);
            if (grid[i][j] === 1) {
                newGrid[i][j] = (neighbors === 2 || neighbors === 3) ? 1 : 0;
            } else {
                newGrid[i][j] = (neighbors === 3) ? 1 : 0;
            }
        }
    }
    grid = newGrid;
}

function gameLoop() {
    updateGrid();
    drawGrid();
    setTimeout(gameLoop, 150);
}

initGrid();
drawGrid();
setTimeout(gameLoop, 150);