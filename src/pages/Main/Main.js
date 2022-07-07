import React from 'react';
import * as S from './Main.styled';

const Main = () => {
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

  return (
    <>
      <S.MainSlider>
        <S.StyledSlider {...settings}>
          {SLIDER_ITEMS.map(item => {
            return (
              <S.SliderImgBox key={item.id}>
                <S.SliderImg src={item.url} alt="비주얼 이미지" />
              </S.SliderImgBox>
            );
          })}
        </S.StyledSlider>
      </S.MainSlider>
      <S.MainSearch>
        <S.SearchInner>
          <S.SearchBox>
            <S.SearchNav>
              <S.SearchTitle>제주맛집</S.SearchTitle>
            </S.SearchNav>
            <S.SearchItems>
              <S.SearchItem>
                <S.SearchTit>지역</S.SearchTit>
                <S.SearchArea>제주시</S.SearchArea>
              </S.SearchItem>
              <S.SearchItem>
                <S.SearchTit>날짜 및 시간</S.SearchTit>
                <S.SearchData>
                  <S.DataTxt>
                    <S.DataTt>날짜</S.DataTt>
                    <S.DataTxt>7.7(목)</S.DataTxt>
                  </S.DataTxt>
                  <S.DataHour>
                    <S.DataHourTt>시간</S.DataHourTt>
                    <S.HourTxt>10:00</S.HourTxt>
                  </S.DataHour>
                  <S.DataTxt>
                    <S.DataTt>인원</S.DataTt>
                    <S.DataTxt>2명</S.DataTxt>
                  </S.DataTxt>
                </S.SearchData>
              </S.SearchItem>
            </S.SearchItems>
          </S.SearchBox>
          <S.SearchBtn href="">
            <S.SearchIcon src="/images/icon_search.svg" alt="" />
            <S.SearchBtTXt>맛집 검색</S.SearchBtTXt>
          </S.SearchBtn>
        </S.SearchInner>
      </S.MainSearch>
    </>
  );
};

const SLIDER_ITEMS = [
  { id: 1, url: '/images/main_vs1.jpg' },
  { id: 2, url: '/images/main_vs2.jpg' },
  { id: 3, url: '/images/main_vs3.jpg' },
  { id: 4, url: '/images/main_vs4.jpg' },
];

export default Main;
