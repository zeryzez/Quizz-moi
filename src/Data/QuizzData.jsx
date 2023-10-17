import img1 from "./photo/IMG_2833.JPG";
import img2 from "./photo/IMG_2840.JPG";
import img3 from "./photo/IMG_2841_1_.gif";
import img4 from "./photo/IMG_2842.JPG";
import img5 from "./photo/IMG_2844.JPG";
import img6 from "./photo/IMG_2856.JPG";
import img7 from "./photo/IMG_2855.JPG";
import img8 from "./photo/IMG_2854.JPG";
import img9 from "./photo/IMG_2868.JPG";
import img10 from "./photo/UNKQ4798_1_.gif";

export const QuizzData = [
  {
    photo: img1,
    question: "Quel age ai-je ?",
    options: ["18 ans", "18 ans et demi", "19 ans", "19 ans et demi"],
    reponse: "19 ans et demi",
  },
  {
    photo: img2,
    question: "comment s'écrit mon prénom",
    options: ["Matis", "Mathys", "Grégoire", "Mathysse"],
    reponse: "Mathys",
  },
  {
    photo: img3,
    question: "si j'étais un bruit je serais...",
    options: [
      "le bruit de bouche quand on sourit",
      "un prout bien gras",
      "le bruit d'une horloge qui fait clic clac",
      "le bruit des claquettes",
    ],
    reponse: "le bruit de bouche quand on sourit",
  },
  {
    photo: img4,
    question: "si j'étais un film je serais...",
    options: [
      "Alvin et les Chimpunks 2",
      "La petite sirène",
      "Shrek",
      "Harry Potter et la coupe de feu",
    ],
    reponse: "La petite sirène",
  },
  {
    photo: img5,
    question: "Quel est mon passe-temps préféré",
    options: [
      "Lire",
      "Boire de l'alcool à ne plus se souvenir qui je suis et allez en boite jusqu'à se que le videur me demande de sortir car j'ai un peu trop bu et que la boite va fermer",
      "Manger",
      "Jouer au jeux video",
    ],
    reponse: "Lire",
  },
  {
    photo: img6,
    question: "Quelle est mon plus grand échec ",
    options: [
      "avoir perdu mes clefs ce matin",
      "rien je suis parfait",
      "ne pas me donner a fond dans mes projets personnels et professionnels",
    ],
    reponse: "avoir perdu mes clefs se matin",
  },
  {
    photo: img7,
    question: "Est ce que je suis beau ?",
    options: ["OUI", "NON", "ça depend"],
    reponse: "OUI",
  },
  {
    photo: img8,
    question: "Quel est l'adjectif qui me caracterise le mieux ?",
    options: ["Veneneu", "Indigène", "Salé", "Rèche"],
    reponse: "Salé",
  },
  {
    photo: img9,
    question: "Ma routine cheveux est a base de ...",
    options: ["oeuf", "caca", "noix de coco de mon village", "eau"],
    reponse: "eau",
  },
  {
    photo: img10,
    question: "Si j'étais un dinosaure je serais...",
    options: ["T-rex", "Cératopsiens", "Raptor", "Titanosaure"],
    reponse: "Cératopsiens",
  },
];

export const resultInitialState = {
  score: 0,
  correctAnswer: 0,
  wrongAnswer: 0,
};
