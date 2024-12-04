/**
 * render songs
 * scroll top
 * play / pause / seek
 * cd rotate
 * next / prev
 * random
 * next / repeat when ended
 * active songs
 * scroll active song into view
 * play song when click
 */

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = {
  songs: [
    {
      name: "Khó chịu vô cùng",
      singger: "Danmy",
      path: "../music/song1.mp3",
      image: "../img/img1.png",
    },
    {
      name: "Qua từng khung hình",
      singger: "Ngắn ft Robber",
      path: "../music/song2.mp3",
      image: "../img/img2.png",
    },
    {
      name: "Sau lời từ khước",
      singger: "Phan Mạnh Quỳnh",
      path: "../music/song3.mp3",
      image: "../img/img3.jpg",
    },
    {
      name: "Khóa Ly Biệt",
      singger: "Anh Tú",
      path: "../music/song4.mp3",
      image: "../img/img4.jpg",
    },
    {
      name: "E là không thể",
      singger: "Anh Quân Idol",
      path: "../music/song5.mp3",
      image: "../img/img5.jpg",
    },
  ],

  render: function () {},

  start: function () {
    this.render();
  },
};
app.start();
