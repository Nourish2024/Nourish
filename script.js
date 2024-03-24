let options = {
  startAngle: -1.55,
  size: 150,
  value: 0.85,
  fill: { gradient: ['#a445b2', '#fa4299'] }
};

// Make sure the DOM is ready before accessing elements
$(document).ready(function() {
  $(".circle .bar").circleProgress(options).on('circle-animation-progress', function(event, progress, stepValue) {
    // Update text with formatted percentage
    $(this).parent().find("span").text((stepValue * 100).toFixed(2) + "%");
  });

  // Adjust values for different progress bars
  $(".js .bar").circleProgress({
    value: 0.70
  });

  $(".react .bar").circleProgress({
    value: 0.60
  });
});