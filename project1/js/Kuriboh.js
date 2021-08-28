const header = document.querySelector("header");
const footer = document.querySelector("footer");

const headerData = ` 
<div class="header-menu">
<a href="../html/index.html">기본정보</a>
<a href="../html/Education.html">학력</a>
<a href="../html/point.html">상벌</a>
<a href="../html/training.html">학력</a>
</div>
`;

const footerData = `
<div class="github">
          <a herf="https://github.com/toswm128"> 깃허브 </a>
        </div>
        <div class="royalty">
          이건 제가 만들었고 제 허락없이 캡쳐할 수 는 있습니다
        </div>

`;

const init = () => {
  header.innerHTML = headerData;
  footer.innerHTML = footerData;
};

init();
