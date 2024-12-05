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

const cd = $(".cd");

const player = $(".player");

const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");

const playBtn = $(".btn-toggle-play");
const progress = $("#progress");

const nextBtn = $(".btn-next");
const prevBtn = $(".btn-prev");
const randomBtn = $(".btn-random");

const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,

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
    const _this = this;
    const cdWidth = cd.offsetWidth;

    // rotate cd
    const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
      duration: 10000,
      iterations: Infinity,
    });
    cdThumbAnimate.pause();

    // xử lý phóng to / thu nhỏ cd
    document.onscroll = function () {
      const scrollTop = document.documentElement.scrollTop || window.scrollY;
      const newCdWidth = cdWidth - scrollTop;

      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      cd.style.opacity = newCdWidth / cdWidth;
    };

    // xử lý khi click play
    playBtn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };

    // khi bài hát play
    audio.onplay = function () {
      _this.isPlaying = true;
      player.classList.add("playing");
      cdThumbAnimate.play();
    };

    // khi bài hát pause
    audio.onpause = function () {
      _this.isPlaying = false;
      player.classList.remove("playing");
      cdThumbAnimate.pause();
    };

    // khi tiến độ bài hát thay đổi
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = progressPercent;
      }
    };
    // xử lý khi tua
    progress.onchange = function (e) {
      const seekTime = (e.target.value * audio.duration) / 100;
      audio.currentTime = seekTime;
    };

    // next bài hát
    nextBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.nextSong();
      }
      audio.play();
    };

    // prev bài hát
    prevBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.prevSong();
      }
      audio.play();
    };

    // bật / tắt random bài hát
    randomBtn.onclick = function (e) {
      _this.isRandom = !_this.isRandom;
      randomBtn.classList.toggle("active", _this.isRandom);
    };

    // xử lý next song khi kết thúc bài hát
    audio.onended = function () {
      console.log(123);
    };
  },

  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = this.currentSong.path;
  },

  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      app.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      app.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },
  playRandomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);

    this.currentIndex = newIndex;
    this.loadCurrentSong();
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
