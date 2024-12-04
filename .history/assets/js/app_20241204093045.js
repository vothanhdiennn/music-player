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
      singer: "Danmy",
      path: "/assets/music/song1.mp3",
      image: "/assets/img/img1.png",
    },
    {
      name: "Qua từng khung hình",
      singer: "Ngắn ft Robber",
      path: "/assets/music/song2.mp3",
      image: "/assets/img/img2.png",
    },
    {
      name: "Sau lời từ khước",
      singer: "Phan Mạnh Quỳnh",
      path: "/assets/music/song3.mp3",
      image: "/assets/img/img3.jpg",
    },
    {
      name: "Khóa Ly Biệt",
      singer: "Anh Tú",
      path: "/assets/music/song4.mp3",
      image: "/assets/img/img4.png",
    },
    {
      name: "E là không thể",
      singer: "Anh Quân Idol",
      path: "/assets/music/song5.mp3",
      image: "/assets/img/img5.jpg",
    },
  ],

  render: function () {
    const htmls = this.songs.map((song) => {
      return `
      <div class="song">
          <div
            class="thumb"
            style="background-image: url('${song.image}')">
          </div>
          <div class="body">
            <h3 class="title">${song.name}</h3>
            <p class="author">${song.singer}</p>
          </div>
          <div class="option">
            <i class="fas fa-ellipsis-h"></i>
          </div>
        </div>
      `;
    });
    $(".playlist").innerHTML = htmls.join("");
  },

  start: function () {
    this.render();
  },
};
app.start();
