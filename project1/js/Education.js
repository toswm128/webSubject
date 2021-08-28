const list = document.querySelector(".list");

const EducationList = [
  {
    homePageUrl: "https://school.iamservice.net/organization/13786",
    name: "천내초등학교",
    photoUrl:
      "https://w.namu.la/s/b147c3fff0332fd9d2066a47ddfb23005ae5112707e9c9167fe25dee831ef256757f62a2c742599ca8c22e6ab53f73e47cc9fcd5a61e6e69e46f3250c28d904776061760ecdb0acdecafee5cb4a48e646fdde8a2569e76476db2835d13c2d63897b86d75680816b6d62cf76c809a4870",
    Uniqueness: "첫번째 초등학교(입학 ~1학년 1학기)",
  },
  {
    homePageUrl: "http://school.gyo6.net/dasanes",
    name: "다산초등학교",
    photoUrl:
      "https://storage.doopedia.co.kr/upload/_upload/comm/travelkorea/200807/13/400_121588071950480.jpg",
    Uniqueness: "가장 오래 다녔던 학교(1학년 1학기 ~ 6학년 1학기)",
  },
  {
    homePageUrl: "https://school.iamservice.net/organization/2892",
    name: "다사초등학교",
    photoUrl:
      "https://storage.doopedia.co.kr/upload/_upload/comm/travelkorea/201009/09/400_128403553020163.jpg",
    Uniqueness: "마지막 초등학교(6학년 1학기 ~ 6학년 2학기)",
  },
  {
    homePageUrl: "https://school.iamservice.net/organization/13616",
    name: "다사중학교",
    photoUrl: "https://obj-sg.thewiki.kr/data/313437363832352e6a7067.jpg",
    Uniqueness: "3년을 바친 중학교(입학 ~ 3학년 2학기)",
  },
  {
    homePageUrl:
      "https://school.iamservice.net/organization/13482/group/2041772",
    name: "대구 소프트웨어마이스터 고등학교",
    photoUrl:
      "https://lh3.googleusercontent.com/-LyelMG4i_vg/W6STy9KjBAI/AAAAAAAEiSs/6PKuTqy_CI0RuScQ17cfKA1YgYXJugfPgCHMYCw/s0/392cd96d1e3e243f5c6ecd21410d5150240d92e3.jpg",
    Uniqueness: "인생을 바칠 고등학교(입학 ~ 2학년 2학기ing)",
  },
];

const paint = () => {
  EducationList.map(current => {
    const school = document.createElement("div");

    school.classList.add("school");
    school.href = current.homePageUrl;
    school.innerHTML = `
    <a class="school-background" href="${current.homePageUrl}" alt="">
    <img
      class="school-photo"
      src="${current.photoUrl}"
      alt=""
    />
    <div class="school-explanation" >
    <div class="school-name">${current.name}</div>
    <div class="school-Uniqueness">${current.Uniqueness}</div>
    </div>
    </a>`;
    list.append(school);
    console.log(school);
  });
};

paint();
