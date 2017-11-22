'use strict';

// нахождение максимального рез-та времени
var findMax = function (times) {
  var max = -1;
  times.forEach(function (i) {
    max = Math.max(i, max);
  });
  return max;
};

// рандомное значение прозрачности цвета колонки
var getRandomValue = function (minValue, maxValue) {
  return Math.random() * (maxValue - minValue) + minValue;
};

window.renderStatistics = function (ctx, names, times) {

  // облако
  showCloud(ctx);

  // параметры колонок в гистограмме
  var HISTOGRAM_HEIGHT = 88;
  var step = HISTOGRAM_HEIGHT / (findMax(times) - 0);
  var BAR_WIDTH = 40;
  var BAR_INDENT = 50;
  var INITIAL_X = 118;
  var INITIAL_Y = 88;
  var LINE_HEIGHT = 20;

  for (var i = 0; i < times.length; i++) {
    // рисуем гистограмму
    ctx.fillStyle = (names[i] === 'Вы') ? 'rgba(0, 0, 0, 1.0)' : 'rgba(0, 0, 255, ' + getRandomValue(0.1, 1) + ')';
    ctx.fillRect(INITIAL_X + (BAR_WIDTH + BAR_INDENT) * i, HISTOGRAM_HEIGHT + INITIAL_Y - times[i] * step, BAR_WIDTH, times[i] * step);
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(Math.round(times[i]), INITIAL_X + (BAR_WIDTH + BAR_INDENT) * i, HISTOGRAM_HEIGHT + INITIAL_Y - times[i] * step - LINE_HEIGHT / 2);
    ctx.fillText(names[i], INITIAL_X + (BAR_WIDTH + BAR_INDENT) * i, INITIAL_Y + HISTOGRAM_HEIGHT + LINE_HEIGHT);
  }
};

var showCloud = function (ctx) {
  var FIRST_TEXT = 'Ура, вы победили!';
  var SECOND_TEXT = 'Список результатов:';

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.lineWidth = '10';
  ctx.strokeStyle = 'rgba(220,220,220,0.8)';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;

  ctx.beginPath();
  ctx.moveTo(100, 10);
  ctx.bezierCurveTo(60, 40, 80, 60, 80, 60);
  ctx.bezierCurveTo(30, 120, 75, 170, 100, 180);
  ctx.bezierCurveTo(120, 240, 160, 220, 200, 200);
  ctx.quadraticCurveTo(260, 260, 350, 200);
  ctx.bezierCurveTo(380, 240, 410, 220, 440, 200);
  ctx.bezierCurveTo(480, 180, 540, 140, 480, 80);
  ctx.bezierCurveTo(460, 20, 420, 30, 400, 40);
  ctx.bezierCurveTo(380, 10, 340, 20, 320, 30);
  ctx.bezierCurveTo(300, 1, 260, 5, 240, 10);
  ctx.quadraticCurveTo(90, 0, 100, 10);
  ctx.fill();
  ctx.shadowColor = 'rgba(0, 0, 0, 0.0)';
  ctx.stroke();

  ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
  ctx.font = '16px PT Mono';

  ctx.fillText(FIRST_TEXT, 125, 40);
  ctx.fillText(SECOND_TEXT, 125, 60);
};

