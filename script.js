const toggleIcon = document.getElementById('toggle-icon');
const dots = document.querySelectorAll('.clickable-dot');

dots.forEach(dot => {
    dot.addEventListener('click', function () {

        dots.forEach(dot => {
            dot.classList.remove('custom-dot');
            dot.classList.add('dot');
        });

        this.classList.remove('dot');
        this.classList.add('custom-dot');
    });
});

document.querySelector('.toggle').addEventListener('click', function () {
    if (toggleIcon.textContent === 'toggle_on') {
        toggleIcon.textContent = 'toggle_off';
    } else {
        toggleIcon.textContent = 'toggle_on';
    }
});

const thirdDotContainer = document.querySelector('.custom-dot-container');
const customDotLeft = document.querySelector('.custom-dot-left');
const customDotRight = document.querySelector('.custom-dot-right');

const percentageE1a897 = 18;
const percentageRed = 100 - percentageE1a897;

const leftWidth = (percentageE1a897 / 100) * thirdDotContainer.offsetWidth;
const rightWidth = (percentageRed / 100) * thirdDotContainer.offsetWidth;

customDotLeft.style.width = `${leftWidth}px`;
customDotRight.style.width = `${rightWidth}px`;

$(".progress").each(function() {
    var $bar = $(this).find(".bar");
    var $val = $(this).find("span");
    var perc = parseInt($val.text(), 10);
  
    $({ p: 0 }).animate({ p: perc }, {
      duration: 3000,
      easing: "swing",
      step: function(p) {
        $bar.css({
          transform: "rotate(" + (45 + (p * 1.8)) + "deg)", 
        });
        $val.text(p | 0);
      }
    });
  });
  const overlayDiv = document.querySelector('.y-axis-overlay');
  const yLabelWidth = myChart.scales.y.width;
  overlayDiv.style.width = yLabelWidth + 'px';



