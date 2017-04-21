function allCaps() {
  setTimeout(function() {
    document.querySelector("#first").style["color"] = "pink";
    setTimeout(function() {
      document.querySelector("#second").style["color"] = "pink";
      setTimeout(function() {
        document.querySelector("#third").style["color"] = "pink";
        setTimeout(function() {
          document.querySelector("#fourth").style["color"] = "pink";
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}


