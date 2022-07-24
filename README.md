# 🍊 Bob Morgan Client Project

## 🍊 Bob Morgan Front Family

-- F.E<br />
[박수연](https://github.com/dduddu92)
[정예지]()
[이범석]()
[이후경](https://github.com/kyungbaa)

## 🍊 팀원 소개

- 프론트 엔드 : 박수연, 이범석, 이후경, 정예지
- 백 엔드 : 이태권
  </br>

## 🍊 Bob Morgan 프로젝트 소개

- 제주도의 다양한 맛집들을 소개하고 일정과 입맛 그리고 인원수에 따라 맛집을 찾고 예약할 수 있는 사이트입니다.
  </br>

## 🍊 개발 인원 및 기간

- 개발기간<br />2022/07/04 ~ 2022/07/15
- 개발 인원<br />프론트엔드 4명, 백엔드 1명

- 1차 프로젝트 발표 자료<br />
  [PDF] https://url.kr/hntqs6

## 🍊 적용 기술 및 구현 기능

- <img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"> <img src="https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=Styled Components&logoColor=white"> - ant design, boot strap, axios, recoil, react-slick
  </br>

## 🍊 구현 페이지

### 데모 영상

https://scrawny-opera-4c6.notion.site/ebad7fd9511642fa9de656e1226aaf07
<br />

### Main
![main2](https://user-images.githubusercontent.com/99022588/180638257-4f79ad17-9bdd-48fe-bac9-234598a1e10b.gif)

- Navigation
 : `const GnbMenuLink = styled(NavLink)` navLink를 활용해서 url의 주소명과 라우터의 이름이 같으면 해당 `li`에다 `.active`를 붙여줘서 어느 메뉴에 있는지 알려줄수 있다.

- main slick-slider
 : https://react-slick.neostack.com 사용해서 기술 구현
 ``` javascript
 const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  };
  
 <S.StyledSlider {...settings}>
    {SLIDER_ITEMS.map(item => {
      return (
        <S.SliderImgBox key={item.id}>
          <S.SliderImg src={item.url} alt="비주얼 이미지" />
        </S.SliderImgBox>
      );
    })}
  </S.StyledSlider>
 ```
 변수 선언한 settings 에다가 슬라이드에 필요한내용을 넣고 슬라이드를 돌려줄 `div`에다가 변수를 복사해서 넣어줘서 슬라이드를 실행시켜준다.
 
 ``` javascript
 export const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }

  .slick-dots {
    bottom: 150px;
    right: 0;
    text-align: right;
    padding: 0 50px;

    li {
      height: 5px;

      button {
        height: 5px;
        background: rgba(255, 255, 255, 0.8);
        padding: 0;

        &::before {
          display: none;
        }
      }

      &.slick-active {
        button {
          background: #ffad1d;
        }
      }
    }
  }
`;
 ```
 슬라이드에서 재공해주는 버튼을 사용하기 위해서 슬라이드를 감싸는 컴포넌트를 만들어준뒤에 scss nesting을 활용해서 버튼스타일을 변경해준다.
 
 - 모달창 만들기 <br />
  ```javascript
 const [isOpen, setIsOpen] = useState(false);
 
 //모달창 열기 버튼
  <S.SearchArea onClick={() => setIsOpen(true)}>
  
  //닫기버튼
  <S.AreaClose onClick={() => setIsOpen(false)} />
  ```
  isopen이라는 스테이트를 만들어서 false를 담아두고 클릭했을때 true로 변경시킨다. <br />
  그리고 배경이나 모달창안에 엑스버튼을 부르면 스테이트에 담아준 값을 다시 false로 변경시켜서 닫아준다.
  
  - 카카오맵 

</br>

### Search

</br>

### Login

</br>

### Detail

</br>
