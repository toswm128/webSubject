const rewardPoint = document.querySelector(".reward");
const meritBar = document.querySelector(".meritBar");
const demeritBar = document.querySelector(".demeritBar");

const reward = () => {
  const meritPoint = rewardPoint.children[0].outerText.split("점")[0];
  const demeritPoint = rewardPoint.children[1].outerText.split("점")[0];
  console.log(meritPoint, demeritPoint);
  meritBar.style.width = meritPoint * 30 + "px";
  demeritBar.style.width = demeritPoint * 30 + "px";
};

reward();
