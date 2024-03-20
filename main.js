//Heron's Formula Calculator

//Event Listener
document.getElementById("btn").addEventListener("click", calculate);

//Create Function
function calculate() {
  //Fetch Inputs - sideL=Side Length
  let sideL1 = +document.getElementById("SL1").value;
  let sideL2 = +document.getElementById("SL2").value;
  let sideL3 = +document.getElementById("SL3").value;

  //Process And Calculate
  let semiperimeter = (sideL1 + sideL2 + sideL3) / 2;
  let area = Math.sqrt(
    semiperimeter *
      (semiperimeter - sideL1) *
      (semiperimeter - sideL2) *
      (semiperimeter - sideL3)
  );

  //Output
  document.getElementById("output").innerHTML = area;
}
