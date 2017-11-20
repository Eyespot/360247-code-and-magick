'use strict';


window.renderStatistics = function (ctx, names, times) {
  var max = -1;
  var maxIndex = -1;
  var getMax = function () {

    for (var i = 0; i < times.length; i++) {
      var time = times[i];
      if (time > max) {
        max = time;
        maxIndex = i;
      }
    }
  };

  getMax();

  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.fillStyle = 'white';

  ctx.beginPath();
  ctx.moveTo(100, 10);
  ctx.bezierCurveTo(100, 10, 170, 0, 200, 25);
  ctx.bezierCurveTo(200, 25, 270, 0, 300, 30);
  ctx.bezierCurveTo(300, 25, 440, 6, 420, 130);
  ctx.bezierCurveTo(420, 130, 540, 150, 430, 270);
  ctx.bezierCurveTo(410, 299, 310, 300, 250, 280);
  ctx.bezierCurveTo(250, 280, 200, 290, 100, 240);
  ctx.bezierCurveTo(100, 240, -100, 100, 100, 10);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;

  ctx.fillStyle = 'green';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 100, 50);
  ctx.fillText('Список результатов:', 120, 70);


  var histogramHeight = 150; // px;
  var step = histogramHeight / (max - 0); // px;

  var barHeigth = 20; // px;
  var indent = 40; // px;
  var initialX = 140; // px;
  var initialY = 100; // px;
  var lineHeight = 15;// px;

  for (var i = 0; i < times.length; i++) {
    ctx.fillRect(initialX, initialY + indent * i, times[i] * step, barHeigth);
    // ctx.fillText(names[i], initialX + histogramHeight, initialY + lineHeight + indent * i);
    // ctx.fillText(times[i], initialX + histogramHeight, initialY + lineHeight + indent * i);
  }
};
