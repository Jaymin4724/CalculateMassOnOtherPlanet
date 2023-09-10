function calculateWeight() {
  const selectedPlanet = document.getElementById("planetSelect").value;
  const earthWeight = parseFloat(document.getElementById("earthWeight").value);
  const contentText = document.querySelector(".contenttext");
  const imagePlanet = document.querySelector(".contentimg");
  const surfaceGravity = {
    mercury: { mass: 0.38, imgsrc: "mercury.png" },
    mars: { mass: 3.72, imgsrc: "mars.png" },
    venus: { mass: 0.91, imgsrc: "venus.png" },
    jupiter: { mass: 2.36, imgsrc: "jupiter.png" },
    saturn: { mass: 0.92, imgsrc: " saturn.png" },
    uranus: { mass: 0.89, imgsrc: "uranus.png" },
    neptune: { mass: 1.12, imgsrc: "neptune.png" },
    pluto: { mass: 0.06, imgsrc: "pluto.png" },
    moon: { mass: 0.17, imgsrc: "moon.png" },
  };

  if (!earthWeight || isNaN(earthWeight)) {
    // Display error message when mass is not entered or not valid
    contentText.innerHTML =
      '<h2 style="background-color:gray;margin:10px;padding:20px;border-radius:12px">Please enter a valid mass.</h2>';
    imagePlanet.style.display = "none";
  } else if (!selectedPlanet) {
    // Display error message when planet is not selected
    contentText.innerHTML =
      '<h2 style="background-color:gray;margin:10px;padding:20px;border-radius:12px">You did not choose a planet yet</h2>';
    imagePlanet.style.display = "none";
  } 
  
  else if (surfaceGravity.hasOwnProperty(selectedPlanet)) {
    imagePlanet.style.display = "flex";
    // Calculate weight on the selected planet
    const weightOnSelectedPlanet =
      earthWeight * surfaceGravity[selectedPlanet].mass;
    contentText.innerHTML = `<div style="color:white;padding:40px 130px;background-color:rgba(128, 128, 128, 0.7);flex:1">Your Weight on <b> ${
      selectedPlanet.charAt(0).toUpperCase() + selectedPlanet.slice(1)
    }</b> is :<br><div style="border-radius:100%;background-color:rgba(128, 128, 128, 0.9);
    padding: 35px;margin:10px;text-align:center"><b>${weightOnSelectedPlanet.toFixed(
      2
    )} kg</b></div></div>`;
    imagePlanet.innerHTML = `<img src="${surfaceGravity[selectedPlanet].imgsrc}">`;
  }
}
