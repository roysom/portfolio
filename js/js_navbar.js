 var prevScrollpos = window.pageYOffset;
      window.onscroll = function() {

      var currentScrollpos = window.pageYOffset;
      if(prevScrollpos > currentScrollpos) {
            document.getElementById("navbar").style.left = "0";
      } else {
            document.getElementById("navbar").style.left = "-300px";
      }

      prevScrollpos = currentScrollpos;

      }