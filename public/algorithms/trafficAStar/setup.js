let blockRows;
let blockColumns;
const quadGrid = new Array(blockColumns);
var openSet = [];
var closedSet = [];
var start;
var end;
var w, h;
var path;
let startAlgorithm = false;
let firstStart = false;
let checkpoints = [];
let finalPath = [];
let initialized = false;
let currentEnd;
let currentStart;
let current;
let counter = 0;
let fr = 60;
let algoSpeed = "medium";
let currentMouseLocation;
