import "./question-card.css";
import questionCard from "./question-card.html";
import questionCardOpen from "./question-card-open.html";

export default {
  title: "Components/QuestionCard",
};

export const questionCardClosed = () => questionCard;
export const questionCardOpened = () => questionCardOpen;
