function animate(e,t,l){clearInterval(e.timer),e.timer=setInterval(function(){var r=!0;for(var n in t){if("opacity"===n){var a=100*getStyle(e,n),i=100*t[n],o=(i-a)/10;o=o>0?Math.ceil(o):Math.floor(o),a+=o,e.style[n]=a/100}else if("zIndex"===n)e.style.zIndex=t[n];else{var a=parseInt(getStyle(e,n))||0,i=t[n],o=(i-a)/10;o=o>0?Math.ceil(o):Math.floor(o),a+=o,e.style[n]=a+"px"}a!=i&&(r=!1)}r&&(clearInterval(e.timer),l&&l())},15)}function getStyle(e,t){return window.getComputedStyle?window.getComputedStyle(e,null)[t]:e.currentStyle[t]}