var alanBtnInstance = alanBtn({
  key: "33c25a6cb5c12dbaaf1df5a6e710802b2e956eca572e1d8b807a3e2338fdd0dc/stage",
  onCommand: function (commandData) {
    if (commandData.command === "go:back") {
      //call client code that will react on the received command
    }
  },
  rootEl: document.getElementById("alan-btn"),
});
