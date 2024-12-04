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
  currentIndex: 0,

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
      image: "/assets/img/img4.jpg",
    },
    {
      name: "E là không thể",
      singer: "Anh Quân Idol",
      path: "/assets/music/song5.mp3",
      image: "/assets/img/img5.jpg",
    },
    {
      name: "Ngày mai người ta lấy chồng",
      singer: "Dickson",
      path: "/assets/music/song6.mp3",
      image: "/assets/img/img6.jpg",
    },
    {
      name: "Thuận theo ý trời",
      singer: "Bùi Anh Tuấn",
      path: "/assets/music/song7.mp3",
      image: "/assets/img/img7.jpg",
    },
    {
      name: "Chắc vì mình chưa tốt",
      singer: " Thanh Hưng",
      path: "/assets/music/song8.mp3",
      image: "/assets/img/img8.jpg",
    },
    {
      name: "Có tất cả nhưng thiếu anh",
      singer: "Erik",
      path: "/assets/music/song9.mp3",
      image: "/assets/img/img9.jpg",
    },
    {
      name: "Khó vẽ nụ cười",
      singer: "ĐạtG ft Du Uyên",
      path: "/assets/music/song10.mp3",
      image: "/assets/img/img10.jpg",
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

  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      },
    });
  },

  handleEvents: function () {
    const cd = $(".cd");
    const cdWidth = cd.offsetWidth;

    document.onscroll = function () {
      const scrollTop = document.documentElement.scrollTop || window.scrollY;
      const newCdWidth = cdWidth - scrollTop;

      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      cd.style.opacity = newCdWidth / cdWidth;
    };
  },

  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = this.currentSong.path;
  },

  start: function () {
    // định nghĩa các thuộc tính cho Object
    this.defineProperties();

    // lắng nghe và xử lý các sự kiện (DOM events)
    this.handleEvents();

    // tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
    this.loadCurrentSong();

    // render playlist
    this.render();
  },
};
app.start();