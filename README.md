# π Bob Morgan Client Project

## π Bob Morgan Front Family

-- F.E<br />
[λ°μμ°](https://github.com/dduddu92)
[μ μμ§]()
[μ΄λ²μ]()
[μ΄νκ²½](https://github.com/kyungbaa)

## π νμ μκ°

- νλ‘ νΈ μλ : λ°μμ°, μ΄λ²μ, μ΄νκ²½, μ μμ§
- λ°± μλ : μ΄νκΆ
  </br>

## π Bob Morgan νλ‘μ νΈ μκ°

- μ μ£Όλμ λ€μν λ§μ§λ€μ μκ°νκ³  μΌμ κ³Ό μλ§ κ·Έλ¦¬κ³  μΈμμμ λ°λΌ λ§μ§μ μ°Ύκ³  μμ½ν  μ μλ μ¬μ΄νΈμλλ€.
  </br>

## π κ°λ° μΈμ λ° κΈ°κ°

- κ°λ°κΈ°κ°<br />2022/07/04 ~ 2022/07/15
- κ°λ° μΈμ<br />νλ‘ νΈμλ 4λͺ, λ°±μλ 1λͺ

- 1μ°¨ νλ‘μ νΈ λ°ν μλ£<br />
  [PDF] https://url.kr/hntqs6

## π μ μ© κΈ°μ  λ° κ΅¬ν κΈ°λ₯

- <img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"> <img src="https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=Styled Components&logoColor=white"> - ant design, boot strap, axios, recoil, react-slick
  </br>

## π κ΅¬ν νμ΄μ§

### λ°λͺ¨ μμ

https://scrawny-opera-4c6.notion.site/ebad7fd9511642fa9de656e1226aaf07
<br />

### Main
![main2](https://user-images.githubusercontent.com/99022588/180638257-4f79ad17-9bdd-48fe-bac9-234598a1e10b.gif)

- Navigation
 : `const GnbMenuLink = styled(NavLink)` navLinkλ₯Ό νμ©ν΄μ urlμ μ£Όμλͺκ³Ό λΌμ°ν°μ μ΄λ¦μ΄ κ°μΌλ©΄ ν΄λΉ `li`μλ€ `.active`λ₯Ό λΆμ¬μ€μ μ΄λ λ©λ΄μ μλμ§ μλ €μ€μ μλ€.

- main slick-slider
 : https://react-slick.neostack.com μ¬μ©ν΄μ κΈ°μ  κ΅¬ν
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
          <S.SliderImg src={item.url} alt="λΉμ£ΌμΌ μ΄λ―Έμ§" />
        </S.SliderImgBox>
      );
    })}
  </S.StyledSlider>
 ```
 λ³μ μ μΈν settings μλ€κ° μ¬λΌμ΄λμ νμνλ΄μ©μ λ£κ³  μ¬λΌμ΄λλ₯Ό λλ €μ€ `div`μλ€κ° λ³μλ₯Ό λ³΅μ¬ν΄μ λ£μ΄μ€μ μ¬λΌμ΄λλ₯Ό μ€νμμΌμ€λ€.
 
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
 μ¬λΌμ΄λμμ μ¬κ³΅ν΄μ£Όλ λ²νΌμ μ¬μ©νκΈ° μν΄μ μ¬λΌμ΄λλ₯Ό κ°μΈλ μ»΄ν¬λνΈλ₯Ό λ§λ€μ΄μ€λ€μ scss nestingμ νμ©ν΄μ λ²νΌμ€νμΌμ λ³κ²½ν΄μ€λ€.
 
 - λͺ¨λ¬μ°½ λ§λ€κΈ° <br />
  ```javascript
 const [isOpen, setIsOpen] = useState(false);
 
 //λͺ¨λ¬μ°½ μ΄κΈ° λ²νΌ
  <S.SearchArea onClick={() => setIsOpen(true)}>
  
  //λ«κΈ°λ²νΌ
  <S.AreaClose onClick={() => setIsOpen(false)} />
  ```
  isopenμ΄λΌλ μ€νμ΄νΈλ₯Ό λ§λ€μ΄μ falseλ₯Ό λ΄μλκ³  ν΄λ¦­νμλ trueλ‘ λ³κ²½μν¨λ€. <br />
  κ·Έλ¦¬κ³  λ°°κ²½μ΄λ λͺ¨λ¬μ°½μμ μμ€λ²νΌμ λΆλ₯΄λ©΄ μ€νμ΄νΈμ λ΄μμ€ κ°μ λ€μ falseλ‘ λ³κ²½μμΌμ λ«μμ€λ€.
  
  - μΉ΄μΉ΄μ€λ§΅  <br />
   : https://apis.map.kakao.com/web/sample/coord2addr/ <br />
     https://apis.map.kakao.com/web/sample/basicMarkerImage/ <br />
     λκ°μ§ κΈ°λ₯μ ν©μ³μ μ§λλ₯Ό λ°μμλ€.
     μ£Όμν μ μ <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=λ°κΈλ°μ APP KEYλ₯Ό μ¬μ©νμΈμ&libraries=services"></script> <br />
     ν€κ°μμ `&libraries=services` μΆκ°λ‘ λΆλ λΆλΆμ΄ μμλλ° νμΈκΌ­ νλ²μ© ν΄μ£ΌκΈ°! <br />
     ``` javascript
     var mapContainer = document.getElementById('map'), // μ§λλ₯Ό νμν  div 
     ```
     μ΄λ°μμΌλ‘ λ¦¬μ‘νΈλ λμ μ§μ  μ κ·Όν μ μκΈ°λλ¬Έμ
     `const mapId = useRef();` λ³μλ₯Ό λ§λ€μ΄μ useRefλ₯Ό μ΄μ©ν΄μ λμ μ κ·Όνλ€.

- react-bootstrap Tab κΈ°λ₯ μ¬μ©νκΈ°
  ``` javascript
  import Tabs from 'react-bootstrap/Tabs';
  import Tab from 'react-bootstrap/Tab';
  
  const [key, setKey] = useState('home');
  
   <Tabs defaultActiveKey="home" onSelect={k => setKey(k)}>
    <Tab eventKey="home" title="μ μ£Ό">
    <Tab eventKey="mapZone" title="μ§λ">
  ```
 λ΄κ° μ¬μ©ν  νμ κΈ°λ₯μ λνλΆλΆλ§ bootstrapμμ λΆλ¬μ¨λ€ ν­κΈ°λ₯ μ¬μ©νκΈ° <br />
 μ€νμ΄νΈμμ μ²μλΆν° λ³΄μΌ ν­μ μ μ₯νλ€ `<Tabs defaultActiveKey="home" onSelect={k => setKey(k)}>` λ³΄μ¬μ€λ€.

</br>

### Search

</br>

### Login

</br>

### Detail

</br>
