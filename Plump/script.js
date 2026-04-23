document.addEventListener("DOMContentLoaded", function () {
  const s2Container = document.getElementById("s2-container");
  let s2Data = [
    {
      image1: "./images/section2Bg1.png",
      image2: "./images/section2Logo1.png",
      text: "Games",
      top: "section2Top1",
      image3: "./images/section2Img1.webp",
    },
    {
      image1: "./images/section2Bg2.png",
      image2: "./images/section2Logo2.png",
      text: "Sports",
      top: "section2Top2",
      image3: "./images/section2Img2.webp",
    },
    {
      image1: "./images/section2Bg3.png",
      image2: "./images/section2Logo3.png",
      text: "VIP Club",
      top: "section2Top3",
      image3: "./images/section2Img3.webp",
    },
    {
      image1: "./images/section2Bg4.png",
      image2: "./images/section2Logo4.png",
      text: "Originals",
      top: "section2Top4",
      image3: "./images/section2Img4.webp",
    },
  ];
  s2Container.innerHTML = s2Data
    .map(
      (data) => `
<div class="section2Child">
          <img src="${data.image1}" alt="" class="section2Bg"/>
          <div class="section2Category">
            <img src="${data.image2}" alt="" />
            <span class="section2CategoryText">${data.text}</span>
          </div>
          <img src="${data.image3}" alt="" class="${data.top}" />
        </div>
        `,
    )
    .join("");
  const s3Games = document.getElementById("s3-Games");
  let s3Data = [
    {
      image: "./images/section3Img1.png",
      badge: "./images/blueBadge.png",
      status: "MoonPop",
      price: "$23.95",
    },
    {
      image: "./images/section3Img2.png",
      badge: "./images/yellowBadge.png",
      status: "Rugged",
      price: "$3.95",
    },
    {
      image: "./images/section3Img3.png",
      badge: "./images/pinkBadge.png",
      status: "MoonPop",
      price: "$5.95,",
    },
    {
      image: "./images/section3Img4.png",
      badge: "./images/pinkBadge.png",
      status: "MoonPop",
      price: "$2.95,",
    },
    {
      image: "./images/section3Img5.png",
      badge: "./images/orangeBadge.png",
      status: "MoonPop",
      price: "$10.95",
    },
    {
      image: "./images/section3Img6.png",
      badge: "./images/orangeBadge.png",
      status: "MoonPop",
      price: "$23.95",
    },
    {
      image: "./images/section3Img7.png",
      badge: "./images/brownBadge.png",
      status: "MoonPop",
      price: "$23.95",
    },
    {
      image: "./images/section3Img8.png",
      badge: "./images/orangeBadge.png",
      status: "MoonPop",
      price: "$23.95",
    },
    {
      image: "./images/section3Img9.png",
      badge: "./images/blueBadge.png",
      status: "MoonPop",
      price: "$23.95",
    },
    {
      image: "./images/section3Img10.png",
      badge: "./images/yellowBadge.png",
      status: "MoonPop",
      price: "$23.95",
    },
    {
      image: "./images/section3Img11.png",
      badge: "./images/whiteBadge.png",
      status: "MoonPop",
      price: "$23.95",
    },
    {
      image: "./images/section3Img4.png",
      badge: "./images/pinkBadge.png",
      status: "MoonPop",
      price: "$2.95,",
    },
    {
      image: "./images/section3Img5.png",
      badge: "./images/orangeBadge.png",
      status: "MoonPop",
      price: "$10.95",
    },
    {
      image: "./images/section3Img6.png",
      badge: "./images/orangeBadge.png",
      status: "MoonPop",
      price: "$23.95",
    },
    {
      image: "./images/section3Img7.png",
      badge: "./images/brownBadge.png",
      status: "MoonPop",
      price: "$23.95",
    },
  ];
  s3Games.innerHTML = s3Data
    .map(
      (data) => `
  <div class="games swiper-slide">
            <img
              src="${data.image}"
              alt="IMG"
              class="section3-image"
            />
            <div class="section3-imageText">
              <div class="gameRank">
                <img src="${data.badge}" alt="" class="badge" />
                <p class="status">${data.status}</p>
              </div>
              <p class="dollars">${data.price}</p>
            </div></div>
`,
    )
    .join("");
  new Swiper(".s3Swiper", {
    slidesPerView: 11,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    freeMode: true,
    autoplay: {
      pauseOnMouseEnter: true,
      delay: 0,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      300: {
        slidesPerView: 3,
      },
      500: {
        slidesPerView: 5,
      },

      700: {
        slidesPerView: 6,
      },
      900: {
        slidesPerView: 8,
      },
      1000: {
        slidesPerView: 11,
      },
    },
  });
  const s4Container = document.getElementById("s4-container");
  let s4Data = [
    { img: "./images/section4Img1.png" },
    { img: "./images/section4Img2.png" },
    { img: "./images/section4Img3.png" },
    { img: "./images/section4Img4.png" },
    { img: "./images/section4Img5.png" },
    { img: "./images/section4Img6.png" },
    { img: "./images/section4Img7.png" },
    { img: "./images/section4Img4.png" },
    { img: "./images/section4Img5.png" },
    { img: "./images/section4Img6.png" },
    { img: "./images/section4Img7.png" },
  ];
  s4Container.innerHTML = s4Data
    .map(
      (data) => `
    <div class="swiper-slide">
  <img src="${data.img}" alt="IMG" class="section4Images"/>
  </div>
  `,
    )
    .join("");
  new Swiper(".s4Swiper", {
    loop: true,
    spaceBetween: 10,
    freeMode: true,
    mousewheel: {
      enable: true,
      releaseOnEdges: true,
      forceToAxis: "x",
    },
    navigation: {
      nextEl: ".swiper-next-button",
      prevEl: ".swiper-prev-button",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      300: {
        slidesPerView: 2,
      },
      500: {
        slidesPerView: 3,
      },

      700: {
        slidesPerView: 4,
      },
      900: {
        slidesPerView: 5,
      },
      1000: {
        slidesPerView: 6,
      },
      1100: {
        slidesPerView: 7,
      },
      // 1500:{
      //   slidesPerView:15,
      // }
    },
  });
  const s5Container = document.getElementById("s5-container");
  let sportData = [
    {
      bgImg: "./images/sport6bg.png",
      topImg: "./images/sport1Img.png",
      sportText: ["Basketball"],
    },
    {
      bgImg: "./images/sport2bg.png",
      topImg: "./images/sport2Img.png",
      sportText: ["Football"],
    },
    {
      bgImg: "./images/sport3bg.png",
      topImg: "./images/sport3Img.png",
      sportText: ["Baseball"],
    },
    {
      bgImg: "./images/sport4bg.png",
      topImg: "./images/sport4Img.png",
      sportText: ["Tennis"],
    },
    {
      bgImg: "./images/sport5bg.png",
      topImg: "./images/sport5Img.png",
      sportText: ["Badminton"],
    },
    {
      bgImg: "./images/sport1bg.png",
      topImg: "./images/sport6Img.png",
      sportText: ["American", "football"],
    },{
      bgImg: "./images/sport3bg.png",
      topImg: "./images/sport3Img.png",
      sportText: ["Baseball"],
    },
  ];
  s5Container.innerHTML = sportData
    .map(
      (sport) =>
        `<div class="sportCard">
        <img src="${sport.bgImg}" alt="BG" class="sportBaseImg"/>
        <img src="${sport.topImg}" alt="Basketball" class="sportTopImg"/>
        <div class="sportText">${sport.sportText.join("<br>")}</div>
        </div>`,
    )
    .join("");
  const s7Container = document.getElementById("s7-container");
  let s7Data = [
    { img: "./images/section6Img1.png" },
    { img: "./images/section6Img2.png" },
    { img: "./images/section6Img3.png" },
    { img: "./images/section6Img4.png" },
    { img: "./images/section6Img5.png" },
    { img: "./images/section6Img6.png" },
    { img: "./images/section6Img7.png" },
    { img: "./images/section6Img1.png" },
    { img: "./images/section6Img2.png" },
    { img: "./images/section6Img3.png" },
    { img: "./images/section6Img4.png" },
    { img: "./images/section6Img5.png" },
    { img: "./images/section6Img6.png" },
    { img: "./images/section6Img7.png" },
  ];
  s7Container.innerHTML = s7Data
    .map(
      (data) => `
  <div class="swiper-slide">
    <img src="${data.img}" alt="IMG" class="section4Images"/>
  </div>
`,
    )
    .join("");
  new Swiper(".s7Swiper", {
    loop: true,
    spaceBetween: 20,
    freeMode: true,
    mousewheel: {
      enable: true,
      releaseOnEdges: true,
      forceToAxis: "x",
    },
    navigation: {
      nextEl: ".s7-swiper-next-button",
      prevEl: ".s7-swiper-prev-button",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      300: {
        slidesPerView: 2,
      },
      500: {
        slidesPerView: 3,
      },

      700: {
        slidesPerView: 4,
      },
      900: {
        slidesPerView: 5,
      },
      1000: {
        slidesPerView: 6,
      },
      1100: {
        slidesPerView: 7,
      },
      1300:{
        slidesPerView:7,
      },
      
      1600:{
        slidesPerView:8,
      }
    },
  });
  const s8Container = document.getElementById("s8-container");
  let matchCard = [
    {
      sport: "Basketball",
      sportsLogo: "./images/sportsLogo1.png",
      status: "Live",
      liveLogo: "./images/Dot.png",
      teams: {
        team1Avatar: "./images/avatar1.png",
        team2Avatar: "./images/avatar2.png",
        score: "1:2",
        round: "1st half",
      },
      bets: [
        { no: 1, score: 2.44 },
        { no: 1, score: 2.44 },
        { no: 1, score: 2.44 },
        { no: 1, score: 2.44, highlight: true },
      ],
    },
    {
      sport: "Baseball",
      sportLogo: "./images/sportsLogo2.png",
      status: "Live",
      liveLogo: "./images/Dot.png",
      teams: {
        team1Avatar: "./images/avatar3.png",
        team2Avatar: "./images/avatar4.png",
        score: "1:2",
        round: "1st half",
      },
      bets: [
        { no: 1, score: 2.44 },
        { no: 1, score: 2.44 },
        { no: 1, score: 2.44 },
        { no: 1, score: 2.44, highlight: true },
      ],
    },
    {
      sport: "Tennis",
      sportLogo: "./images/sportsLogo3.png",
      status: "Live",
      liveLogo: "./images/Dot.png",
      teams: {
        team1Avatar: "./images/avatar5.png",
        team2Avatar: "./images/avatar6.png",
        score: "1:2",
        round: "1st half",
      },
      bets: [
        { no: 1, score: 2.44 },
        { no: 1, score: 2.44 },
        { no: 1, score: 2.44 },
        { no: 1, score: 2.44, highlight: true },
      ],
    },
    {
      sport: "Baseball",
      sportLogo: "./images/sportsLogo2.png",
      status: "Live",
      liveLogo: "./images/Dot.png",
      teams: {
        team1Avatar: "./images/avatar3.png",
        team2Avatar: "./images/avatar4.png",
        score: "1:2",
        round: "1st half",
      },
      bets: [
        { no: 1, score: 2.44 },
        { no: 1, score: 2.44 },
        { no: 1, score: 2.44 },
        { no: 1, score: 2.44, highlight: true },
      ],
    },
    {
      sport: "Tennis",
      sportLogo: "./images/sportsLogo3.png",
      status: "Live",
      liveLogo: "./images/Dot.png",
      teams: {
        team1Avatar: "./images/avatar5.png",
        team2Avatar: "./images/avatar6.png",
        score: "1:2",
        round: "1st half",
      },
      bets: [
        { no: 1, score: 2.44 },
        { no: 1, score: 2.44 },
        { no: 1, score: 2.44 },
        { no: 1, score: 2.44, highlight: true },
      ],
    },
  ];
  s8Container.innerHTML = matchCard
    .map(
      (data) => `
  <div class="match-card swiper-slide">
              <div class="matchCard-container">
                <div class="sports-category">
                  <div class="sportsLogo">
                    <img src="${data.sportsLogo}" alt="" />
                  </div>
                  <span class="sportsName">${data.sport}</span>
                  <div class="matchStatus">
                    <img src="${data.liveLogo}" alt="" class="dot" />
                    <span>${data.status}</span>
                  </div>
                </div>
                <div class="score-chart">
                  <div class="playingTeams">
                    <div class="team1">
                      <img src="${data.teams.team1Avatar}" alt="" />
                    </div>
                    <div class="score">
                      <div class="score-marks">${data.teams.score}</div>
                      <div class="match-rounds">${data.teams.round}</div>
                    </div>
                    <div class="team2">
                      <img src="${data.teams.team2Avatar}" alt="" />
                    </div>
                  </div>
                  <div class="divider"></div>
                  <div class="match-bets">
                  ${data.bets
                    .map(
                      (bets) => `
                    <button class="${bets.highlight ? "bets-button4" : "bets-button"}">
                      <div class="betNo">${bets.no}</div>
                      <div class="betScore">${bets.score}</div>
                    </button>
                    `,
                    )
                    .join("")}
                  </div>
                </div>
              </div>
            </div>
`,
    )
    .join("");
  new Swiper(".s8-swiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    mousewheel: {
      enable: true,
      releaseOnEdges: true,
      forceToAxis: "x",
    },
    navigation: {
      nextEl: ".s8-swiper-next-button",
      prevEl: ".s8-swiper-prev-button",
    },
  });
  const s9Container = document.getElementById("s9-container");
  let providers = [
    {
      img: "./images/section8img1.png",
    },

    {
      img: "./images/section8img3.png",
    },
    {
      img: "./images/section8img4.png",
    },
    {
      img: "./images/section8img5.png",
    },
    {
      img: "./images/section8img2.png",
    },
    {
      img: "./images/section8img1.png",
    },

    {
      img: "./images/section8img2.png",
    },
    {
      img: "./images/section8img3.png",
    },
    {
      img: "./images/section8img4.png",
    },
    {
      img: "./images/section8img5.png",
    },
  ];
  s9Container.innerHTML = providers
    .map(
      (data) => `
    <div class="swiper-slide">
          <button class="section9Button">
              <img src="${data.img}" alt="Providers" />
            </button>
    </div>
`,
    )
    .join("");
  new Swiper(".s9-swiper", {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 30,
    mousewheel: {
      enable: true,
      releaseOnEdges: true,
      forceToAxis: "x",
    },
    navigation: {
      nextEl: ".s9-swiper-next-button",
      prevEl: ".s9-swiper-prev-button",
    },
  });

  const navContainer1 = document.getElementById("navContainer1");
  const navContainer2 = document.getElementById("navContainer2");
  const navButton1 = document.getElementById("navBtn1");
  const navButton2 = document.getElementById("navBtn2");
  const sideBar = document.getElementById("sideBar");
  const sliderNav = document.getElementById("slideNav");

  let isOpen = false;

  sliderNav.addEventListener("click", function () {
    if (isOpen) {
      document.getElementById("main").style.maxWidth = "1440px";
      sideBar.style.transition = " width 0.5s ease";
      navContainer1.style.display = "none";
      navContainer2.style.display = "flex";
      navButton1.style.display = "none";
      navButton2.style.display = "none";
      sideBar.style.width = "64px";
      sliderNav.style.rotate = "180deg";
    } else {
      document.getElementById("main").style.maxWidth = "1250px";
      sideBar.style.transition = " width 0.8s ease";
      navContainer1.style.display = "flex";
      navContainer2.style.display = "none";
      navButton1.style.display = "flex";
      navButton2.style.display = "flex";
      sideBar.style.width = "240px";
      sliderNav.style.rotate = "0deg";
    }
    isOpen = !isOpen;
  });
});

const loginModal = document.getElementById("loginModalPage");
function loginDisplay() {
  document
    .getElementById("modalRegisterButton")
    .addEventListener("click", registerDisplay);
  document.getElementById("loginLeft1").style.display = "flex";
  document.getElementById("loginLeft2").style.display = "none";
  document.body.style.overflow = "hidden";
  loginModal.style.display = "block";
  document.loginModal.style.backdropFilter = "blur(7px)";
}
function registerDisplay() {
  document
    .getElementById("modalLoginButton")
    .addEventListener("click", loginDisplay);
  document.getElementById("loginLeft2").style.display = "flex";
  document.getElementById("loginLeft1").style.display = "none";
  document.body.style.overflow = "hidden";
  loginModal.style.display = "block";
  document.loginModal.style.backdropFilter = "blur(7px)";
}
function closeModal() {
  loginModal.style.display = "none";
  document.body.style.overflow = "scroll";
}
const referralLogo = document.getElementById("referralCode");
referralLogo.addEventListener("click", function () {
  let element = document.getElementById("inputReferralCode");

  if (element.style.display === "none") {
    element.style.display = "block";
    referralLogo.style.transform = "rotate(180deg)";
  } else {
    element.style.display = "none";
    referralLogo.style.transform = "rotate(0deg)";
  }
});
const input = document.querySelector(".passwordInput");
const popup = document.querySelector(".popup");

input.addEventListener("focus", () => (popup.style.display = "block"));
input.addEventListener("blur", () => (popup.style.display = "none"));

const navItems1 = document.querySelectorAll(".navUls li");
navItems1.forEach((item) => {
  item.addEventListener("click", () => {
    navItems1.forEach((li) => li.classList.remove("navActive"));
    item.classList.add("navActive");
  });
});
const navItems2 = document.querySelectorAll("#navContainer2 li");
navItems2.forEach((item) => {
  item.addEventListener("click", () => {
    navItems2.forEach((li) => li.classList.remove("navActive"));
    item.classList.add("navActive");
  });
});
// const questionArrow = document.getElementById("questionArrow");
// let faq = document.getElementById("section11-faq");
// faq.forEach((item) => {
//   questionArrow.addEventListener("click", () => {
//     if (questionArrow.style.rotate === "180deg") {
//       questionArrow.style.rotate = "0deg";
//     } else {
//       questionArrow.style.rotate = "180deg";
//     }
//   });
// });
const section10Child = document.querySelectorAll("#section10Child div");
section10Child.forEach((item) => {
  item.addEventListener("click", () => {
    section10Child.forEach((i) => {
      i.classList.remove("activeButton");
    });
    item.classList.remove(".section10-child1 button:hover");
    item.classList.add("activeButton");
  });
});
