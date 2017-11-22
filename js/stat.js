'use strict';


window.renderStatistics = function (ctx, names, times) {

  var getMaxTime = function () {

    var maxTime = -1;
    for (var i = 0; i < times.length; i++) {
      var time = times[i];
      if (time > maxTime) {
        maxTime = time;
      }
    }
    return maxTime;
  };

  var sortTimes = function () {

    for (var i = 0; i <= times.length - 2; i++) {
      var minValue = times[i];

      for (var j = i + 1; j <= times.length - 1; j++) {
        if (times[j] < minValue) {
          minValue = times[j];
          var minValueName = names[j];
          var swap = times[i];
          var swapName = names[i];
          times[i] = minValue;
          times[j] = swap;
          names[i] = minValueName;
          names[j] = swapName;
        }
      }
    }
  };

  var drawStatsGraph = function () {

    var histogramHeight = 150;
    var proportionalStep = histogramHeight / (getMaxTime() - 0);
    var barWidth = 40;
    var indent = 90;
    var startX = 120;
    var startY = 245;
    var lineHeight = 15;

    sortTimes();

    for (var i = 0; i < times.length; i++) {
      var randomBlue = 'rgba(0, 0, 255, ' + Math.random() + ')';
      ctx.fillStyle = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : randomBlue;
      ctx.fillRect(startX + indent * i, startY, barWidth, -(times[i] * proportionalStep));
      ctx.fillText(names[i], startX + indent * i, startY + lineHeight);
      ctx.fillText(times[i].toFixed(), startX + indent * i, startY - lineHeight - (times[i] * proportionalStep));
    }
  };

  var drawStatsCloud = function () {

    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 10;
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(100, 10);
    ctx.bezierCurveTo(100, 10, 170, 0, 200, 15);
    ctx.bezierCurveTo(200, 15, 270, 0, 300, 30);
    ctx.bezierCurveTo(300, 25, 440, 6, 460, 130);
    ctx.bezierCurveTo(460, 130, 550, 240, 430, 270);
    ctx.bezierCurveTo(430, 270, 310, 300, 250, 280);
    ctx.bezierCurveTo(250, 280, 100, 310, 70, 210);
    ctx.bezierCurveTo(70, 210, -100, 100, 100, 10);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
  };

  var drawStatsMessage = function () {

    ctx.font = '16px PT Mono';
    ctx.fillStyle = 'green';
    ctx.fillText('Ура вы победили!', 125, 40);
    ctx.fillText('Список результатов:', 125, 60);
  };

  drawStatsCloud();
  drawStatsMessage();
  drawStatsGraph();
};
