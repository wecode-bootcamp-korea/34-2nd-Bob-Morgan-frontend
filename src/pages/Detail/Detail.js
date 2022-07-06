import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from './DetailCarousel';
// import Map from './Map';
import * as S from './Detail.styles';

const Detail = () => {
  const [scroll, setScroll] = useState(false);
  const detailRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('scroll', scrollButtonView);
    return () => {
      window.removeEventListener('scroll', scrollButtonView); //clean up
    };
  }, []);

  const goTopScroll = () => {
    detailRef.current.scrollIntoView();
  };

  const goToMain = () => {
    navigate('/');
  };
  const scrollButtonView = () => {
    if (window.scrollY >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  return (
    <S.Detail ref={detailRef}>
      <S.CarouselSection />
      <Carousel />
      <S.CarouselSection />
      <S.Wrapper>
        <S.Container>
          {scroll && (
            <S.MoveTopButton
              src="/images/buttonImage/imgTopBtn.svg"
              alt="화면상단이동버튼"
              onClick={() => {
                goTopScroll();
              }}
            />
          )}

          <S.Header>
            <S.HeaderTop>
              <S.Region>애월 한림 | 일식 </S.Region>
              <S.HeaderButtons>
                <S.HeaderButton
                  onClick={() => {
                    console.log('플레이스');
                  }}
                >
                  <S.ButtonImage
                    src="/images/icon/kakao_map.png"
                    alt="카카오맵"
                  />
                  카카오 맵
                </S.HeaderButton>
                <S.HeaderButton
                  onClick={() => {
                    console.log('플레이스');
                  }}
                >
                  예약하기
                </S.HeaderButton>
                <S.HeaderButton
                  onClick={() => {
                    console.log('플레이스');
                  }}
                >
                  공유하기
                </S.HeaderButton>
              </S.HeaderButtons>
            </S.HeaderTop>
            <S.HeaderTitle>피어 22</S.HeaderTitle>
            <S.HeaderDescription>
              제주의 해산물을 통째로 모두 맛볼 수 있는 해물 바스켓 맛집
            </S.HeaderDescription>
          </S.Header>
          <S.Contents>
            <S.ContentsTitle>가게 정보</S.ContentsTitle>
            <S.MapSection>
              <S.Map> 이곳에 위치할 것은 지도이시다</S.Map>
              <S.goToMapButton>
                <S.ButtonImage
                  src="/images/icon/location.png"
                  alt="지도 아이콘"
                />
                지도보기
              </S.goToMapButton>
            </S.MapSection>
            <S.StoreInfo>
              <S.StoreInfoTitle>주소</S.StoreInfoTitle>
              <S.StoreInfoContents>
                제주특별자치도 서귀포시 안덕명dfddd
              </S.StoreInfoContents>
            </S.StoreInfo>
            {/* TODO: scroll확인 후 삭제 예정 */}
            <S.StoreInfo>
              <S.StoreInfoTitle>주소</S.StoreInfoTitle>
              <S.StoreInfoContents>
                제주특별자치도 서귀포시 안덕명
              </S.StoreInfoContents>
            </S.StoreInfo>
            <S.StoreInfo>
              <S.StoreInfoTitle>주소</S.StoreInfoTitle>
              <S.StoreInfoContents>
                제주특별자치도 서귀포시 안덕명
              </S.StoreInfoContents>
            </S.StoreInfo>
            <S.StoreInfo>
              <S.StoreInfoTitle>주소</S.StoreInfoTitle>
              <S.StoreInfoContents>
                제주특별자치도 서귀포시 안덕명
              </S.StoreInfoContents>
            </S.StoreInfo>
            <S.StoreInfo>
              <S.StoreInfoTitle>주소</S.StoreInfoTitle>
              <S.StoreInfoContents>
                제주특별자치도 서귀포시 안덕명
              </S.StoreInfoContents>
            </S.StoreInfo>
            <S.StoreInfo>
              <S.StoreInfoTitle>주소</S.StoreInfoTitle>
              <S.StoreInfoContents>
                제주특별자치도 서귀포시 안덕명
              </S.StoreInfoContents>
            </S.StoreInfo>
            <S.StoreInfo>
              <S.StoreInfoTitle>주소</S.StoreInfoTitle>
              <S.StoreInfoContents>
                제주특별자치도 서귀포시 안덕명
              </S.StoreInfoContents>
            </S.StoreInfo>
            {/* TODO: scroll확인 후 삭제 예정 */}
          </S.Contents>
        </S.Container>
      </S.Wrapper>
      <S.DetailFooter>
        <S.FooterContents>
          <S.FooterLogo
            src="/images/logo/bobMorgan-logo.png"
            alt="BobMorgan Logo"
            onClick={() => {
              goToMain();
            }}
          />
          <S.ListMoveButton>애월 한림 맛집 더 보기</S.ListMoveButton>
        </S.FooterContents>
      </S.DetailFooter>
    </S.Detail>
  );
};

export default Detail;
