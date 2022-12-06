const ratings = [1, 2, 3, 4, 5];
let ratingFinal = 1;
const ratingsWrapper = document.querySelector(".rating-btns");
const cardContent = document.querySelectorAll(".card-content");
function getFeedback(rating) {
  ratingFinal = rating;
  const activeStr = "rating-active";
  const allRatingBtn = document.querySelectorAll(".rating-btn");
  allRatingBtn.forEach((elem) => elem.classList?.remove(activeStr));
  const feedback = ratingsWrapper.querySelector(`#rating-${rating}`);
  feedback?.classList?.add(activeStr);
}
function handleSubmit() {
  const thanksStr = `You selected ${ratingFinal} out of 5`;
  const thanksStrWrapper = document.querySelector(".rating-text");
  thanksStrWrapper.innerText = thanksStr;
  cardContent?.forEach((elem) => elem.classList?.toggle("hidden"));
}
ratings.forEach((elm) => {
  const ratingElement = document.createElement("button");
  ratingElement.classList.add("rating-btn");
  ratingElement.setAttribute("id", `rating-${elm}`);
  ratingElement.setAttribute("onclick", `getFeedback(${elm})`);
  ratingElement.innerText = elm;
  ratingsWrapper.append(ratingElement);
});
