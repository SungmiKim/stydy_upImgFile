var colors = [
  {
    code: "#FABA0B",
    colorTitle: "노랑",
    colorClass: "yellow",
    message:
      "노랑은 명랑함과 즐거움을 의미합니다. 노랑은 항상 밝고, 명랑하고, 유쾌하고, 다채로우며 부드러운 자극을 줍니다.노란색을 칠하면서 외향성과 원동력, 활동력을 얻어 보세요.",
  },
  {
    code: "#0EA808",
    colorClass: "green",
    colorTitle: "녹색",
    message:
      "녹색은 심리적으로 조화롭고, 균형 잡힌 효과를 줍니다.녹색을 칠하면서 마음을 진정시키고 평화로운 느낌을 불러일으키세요.",
  },
  {
    code: "#E67809",
    colorClass: "orange",
    colorTitle: "주황",
    message:
      "주황은 노랑의 빛을 발하는 힘과 빨강의 생명에너지와 따뜻함의 특성을 결합한 색입니다. 행동을 활발하게 하면서 조정하는 효과도 있습니다.주황색을 칠하면서 편안함을 얻고, 갈등을 이완시켜 보세요.",
  },
  {
    code: "#F75DD9",
    colorClass: "pink",
    colorTitle: "분홍",
    message:
      "분홍은 부드럽고 섬세한 감각적 영향을 줍니다.분홍색을 칠하면서 진정의 효과를 느껴보세요.",
  },
  {
    code: "#4DADFF",
    colorClass: "blue",
    colorTitle: "파랑",
    message:
      "파랑은 내향성을 나타내며, 감정을 조정하고 순응시키는 작용을 합니다.파랑색을 칠하면서 일상의 문제를 잊고 심신을 편안하게 안정시켜 보세요.",
  },
];

$(document).ready(function () {
  var random = Math.random();
  var colorNum = Math.floor(random * colors.length);

  $(".color-name").text(colors[colorNum].colorTitle);
  $(".color-desc").text(colors[colorNum].message);

  var drawCanvas = document.getElementById("drawCanvas");
  //   var drawBackup = new Array();
  if (typeof drawCanvas.getContext == "function") {
    var ctx = drawCanvas.getContext("2d");
    // var isDraw = false;
    var width = 30;
    var color = colors[colorNum].code;
    var pDraw = $("#drawCanvas").offset();
    var currP = null;

    $("#drawCanvas").bind("touchstart", function (e) {
      e.preventDefault();
      ctx.beginPath();
    });

    $("#drawCanvas").bind("touchmove", function (e) {
      var event = e.originalEvent;
      e.preventDefault();
      currP = {
        X: event.touches[0].pageX - pDraw.left,
        Y: event.touches[0].pageY - pDraw.top,
      };
      draw_line(currP);
    });

    $("#drawCanvas").bind("touchend", function (e) {
      e.preventDefault();
    });

    function draw_line(p) {
      ctx.lineWidth = width;
      ctx.lineCap = "round";
      ctx.lineTo(p.X, p.Y);
      ctx.moveTo(p.X, p.Y);
      ctx.strokeStyle = color;
      ctx.stroke();
    }
  }
});
