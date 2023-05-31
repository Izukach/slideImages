const btnOne = document.getElementById("btnOne");
const imgOne = document.getElementById("imgOne");
const leftContainer = document.querySelector(".leftContainer");
const mainImgContainer = document.querySelector(".mainImgContainer");

const malePic = ` <img src="./assest/image/image-john.jpg" alt="" id ="imgOne">`;

const femalePic = ` <img src="./assest/image/image-tanya.jpg" alt="" id = "imgTwo"
> 
`;

btnOne.addEventListener("click", function () {
  mainImgContainer.innerHTML = malePic;
});

btnTwo.addEventListener("click", function () {
  mainImgContainer.innerHTML = "";
  mainImgContainer.innerHTML = femalePic;
});
