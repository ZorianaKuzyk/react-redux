import React from "react";
import store from "../../redux/store";
import Post from "./post";

const pData = [
  {
    id: 1,
    name: "Anakin Skywalker",
    avatar:
      "https://www.sideshow.com/storage/product-images/9067121/anakin-skywalker_star-wars_square.jpg",
    nickname: "@anakin-batya",
    date: "14 mar.",
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: "https://ychef.files.bbci.co.uk/976x549/p07xpqgl.jpg",
    message: 482,
    messageIsPressed: false,
    reTweet: 146,
    reTweetIsPressed: false,
    like: 529,
    likeIsPressed: false,
  },
  {
    id: 2,
    name: "Emperor Palpatine",
    avatar:
      "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/05/palpatine-darth-sidious-hot-toys.jpg",
    nickname: "@sheva-imperator",
    date: "17 apr.",
    content: "That woman could turn any Ewok into a Wookie.",
    image:
      "https://static01.nyt.com/images/2019/09/15/arts/15new-starwars-1/15new-starwars-1-videoSixteenByNineJumbo1600-v2.jpg",
    message: 321,
    messageIsPressed: false,
    reTweet: 97,
    reTweetIsPressed: false,
    like: 784,
    likeIsPressed: false,
  },
  {
    id: 3,
    name: "Princess/General Leia Organa",
    avatar:
      "https://i.pinimg.com/736x/f5/54/17/f554177851a8235dbe105ed735ab230a.jpg",
    nickname: "@princess-Leia",
    date: "25 sep.",
    content: "What if you took Han Solo and gave him no depth?",
    image:
      "https://assets.vogue.com/photos/589134b57edfa70512d62da0/16:9/w_1280,c_limit/how-to-watch-star-wars.jpg",
    message: 296,
    messageIsPressed: false,
    reTweet: 138,
    reTweetIsPressed: false,
    like: 754,
    likeIsPressed: false,
  },
];

let copyStore = store.getState();
pData.map((p) => copyStore.push(p));
