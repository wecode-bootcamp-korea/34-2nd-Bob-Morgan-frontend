import React from 'react';
import styled from 'styled-components';
const MyPage = () => {
  return (
    <>
      <MyPageHeaderContainer>
        <MyPageHeader>
          <MyPageHeaderH2>마이페이지</MyPageHeaderH2>
          <MyPageHeaderP>내 정보</MyPageHeaderP>
        </MyPageHeader>
      </MyPageHeaderContainer>
      <MyPageContainer>
        <MyPageWarp>
          <MyPageLeft>
            <UserInfoBox>
              <UserInfomation>
                <UserinfoImage
                  src="/images/default_img.png"
                  alt="사용자 기본 사진"
                />
                <UserInfoMainText>3초 가입/로그인 해주세요</UserInfoMainText>
                <UserInfoSubText>
                  쏠쏠한 회원 전용 쿠폰이 매달 지급됩니다 :D
                </UserInfoSubText>
              </UserInfomation>
              <UserInfoLoginBtnBox>
                <UserInfoLoginBtn>가입/로그인 하기</UserInfoLoginBtn>
              </UserInfoLoginBtnBox>
              <UserInfoFooter>
                <UserInfoFooterWrap>
                  <UserInfoFooterSpan>포인트</UserInfoFooterSpan>
                  <UserInfoFooterNumber>0 P</UserInfoFooterNumber>
                </UserInfoFooterWrap>
                <UserInfoFooterWrap>
                  <UserInfoFooterSpan>쿠폰</UserInfoFooterSpan>
                  <UserInfoFooterNumber>0장</UserInfoFooterNumber>
                </UserInfoFooterWrap>
                <UserInfoFooterWrap>
                  <UserInfoFooterSpan>나의 리뷰</UserInfoFooterSpan>
                  <UserInfoFooterNumber>0개</UserInfoFooterNumber>
                </UserInfoFooterWrap>
              </UserInfoFooter>
            </UserInfoBox>
          </MyPageLeft>
          <ReservationInfoBox>
            <ReservationInfoH3>예약 식당 정보</ReservationInfoH3>
            <ReservationInfoWrap>
              <ReservationInfoImg
                src="/images/bobMorgan-logo.png"
                alt="밥 모건 로고"
              />
              <ReservationInfoH4>
                진행중인 예약 내역이 없습니다:)
              </ReservationInfoH4>
              <ReservationInfoP>
                지금 원하는 식당 예약하고
                <br />
                신나게 떠나볼까요?
              </ReservationInfoP>
              <ReservationBtn>예약하러 가기</ReservationBtn>
            </ReservationInfoWrap>
          </ReservationInfoBox>
        </MyPageWarp>
      </MyPageContainer>
    </>
  );
};

export default MyPage;

const MyPageHeaderContainer = styled.div`
  background-color: #fff;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNyIgaGVpZ2h0PSIyNyIgdmlld0JveD0iMCAwIDI3IDI3Ij4KICA8ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii4wOTIiPgogICAgPHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iMSIgeD0iNCIgeT0iNCIvPgogICAgPHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iMSIgeD0iMTMiIHk9IjQiLz4KICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIHg9IjIyIiB5PSI0Ii8+CiAgICA8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4PSI0IiB5PSIxMyIvPgogICAgPHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iMSIgeD0iMTMiIHk9IjEzIi8+CiAgICA8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4PSIyMiIgeT0iMTMiLz4KICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIHg9IjQiIHk9IjIyIi8+CiAgICA8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4PSIxMyIgeT0iMjIiLz4KICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIHg9IjIyIiB5PSIyMiIvPgogIDwvZz4KPC9zdmc+Cg==);
  border-bottom: 1px solid #f3f3f3;
`;

const MyPageHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 64px 0;
`;

const MyPageHeaderH2 = styled.h2`
  margin-bottom: 8px;
  border-bottom: 2px solid #fbd7b1;
  box-shadow: inset 0 -0.5em 0 #fbd7b1;
  font-size: 24px;
`;

const MyPageHeaderP = styled.p`
  font-size: 14px;
`;

const MyPageContainer = styled.div`
  background-color: #fafafa;
`;

const MyPageWarp = styled.div`
  display: flex;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 32px 15px;
  background-color: #fafafa;
`;

const MyPageLeft = styled.div`
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
  padding: 0 15px;
`;

const UserInfoBox = styled.div`
  height: 320px;
  margin-bottom: 16px;
  padding-bottom: 16px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 7px 18px -6px rgba(65, 78, 118, 0.1);
`;

const UserInfomation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 16px 16px 16px;
`;

const UserinfoImage = styled.img`
  width: 50px;
  height: 60px;
  text-align: center;
`;

const UserInfoMainText = styled.p`
  margin-top: 25px;
  color: #494949;
  font-size: 18px;
  font-weight: bold;
`;

const UserInfoSubText = styled.p`
  margin-top: 4px;
  color: #999;
  line-height: 1.5;
  font-size: 15px;
`;

const UserInfoLoginBtnBox = styled.div`
  width: 100%;
  padding-bottom: 25px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const UserInfoLoginBtn = styled.button`
  width: calc(100% - 38px);
  margin: 0 19px;
  padding: 10px 12px;
  color: #fff;
  font-size: 16px;
  background-color: #ff9800;
  border: 1px solid #ff9800;
  border-radius: 25px;
  line-height: 1.5;
  cursor: pointer;
`;

const UserInfoFooter = styled.div`
  display: flex;
  padding: 4px 0px;
`;

const UserInfoFooterWrap = styled.div`
  flex: 33.3333%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserInfoFooterSpan = styled.span`
  color: #666;
  font-size: 14.5px;
  line-height: 1.5;
  word-spacing: 0.16px;
`;

const UserInfoFooterNumber = styled.div`
  color: #494949;
  font-size: 14.5px;
  font-weight: bold;
  line-height: 1.5;
  word-spacing: 0.16px;
`;

const ReservationInfoBox = styled.div`
  flex: 0 0 66.66666%;
  max-width: 66.66666%;
  padding: 0 15px;
`;

const ReservationInfoH3 = styled.h3`
  margin-top: 24px;
  color: #494949;
  font-size: 21px;
  font-weight: bold;
`;

const ReservationInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
`;

const ReservationInfoImg = styled.img`
  width: 100px;
  margin-bottom: 24px;
`;

const ReservationInfoH4 = styled.h4`
  margin-bottom: 8px;
  color: #212529;
  font-size: 20px;
  font-weight: bold;
`;

const ReservationInfoP = styled.p`
  margin-bottom: 16px;
  color: #666;
  font-size: 14.5px;
  line-height: 1.5;
  word-spacing: 0.16px;
  text-align: center;
`;

const ReservationBtn = styled.button`
  width: calc(100% - 26px);
  max-width: 312px;
  margin: 10px auto;
  padding: 10px 12px;
  color: #fff;
  font-size: 16px;
  background-color: #ff9800;
  border: 1px solid #ff9800;
  border-radius: 25px;
  line-height: 1.5;
  cursor: pointer;
`;
