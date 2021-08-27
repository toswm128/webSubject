const header = document.querySelector("header");

const headerData = ` 
<div class="header-menu">
<a href="/project1/index.html">기본정보</a>
<a href="/project1/Education.html">학력</a>
<a href="/project1/point.html">상벌점</a>
<a href="/project1/training.html">학력</a>
</div>
`;

const init = () => {
  header.innerHTML = headerData;
};

init();
