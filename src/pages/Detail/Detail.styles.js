import styled from 'styled-components';

export const Detail = styled.div`
  width: 100%;
`;

export const CarouselSection = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Container = styled.div`
  width: 730px;
`;

export const MoveTopButton = styled.img`
  position: fixed;
  z-index: 3;
  width: 18px;
  cursor: pointer;
  bottom: 25%;
  right: 20%;
`;

export const Header = styled.div`
  padding-top: 40px;
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 18px;
`;

export const Region = styled.div`
  color: #999;
  font-weight: 600;
`;

export const HeaderButtons = styled.div`
  display: flex;
  padding-bottom: 2px;
`;

export const HeaderButton = styled.button`
  display: flex;
  padding: 4px 6px;
  margin-left: 8px;
  color: #999;
  background-color: white;
  border: 1px solid #f3f3f3;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    border: 1px solid #f69d3e;
  }
`;
export const ButtonImage = styled.img`
  width: 22px;
  padding-right: 5px;
  opacity: 1;
`;

export const HeaderTitle = styled.h2`
  color: #49495a;
  font-size: 58px;
  font-weight: 700;
`;

export const HeaderDescription = styled.p`
  padding-top: 20px;
  color: #494949;
  font-size: 14px;
  font-weight: 350;
  letter-spacing: -1px;
`;

export const Contents = styled.div`
  padding-top: 80px;
`;

export const ContentsTitle = styled.h3`
  padding-bottom: 16px;
  font-size: 24px;
  font-weight: 600;
  color: #494949;
`;

export const MapSection = styled.div`
  margin-bottom: 10px;
`;
export const Map = styled.div`
  margin-bottom: 10px;
  height: 160px;
  background-color: #ddd;
`;

export const goToMapButton = styled.button`
  display: flex;
  justify-content: center;
  background-color: white;
  border: none;
  font-size: 14px;
  font-weight: 600;
  color: #666;
  cursor: pointer;
`;

export const StoreInfo = styled.div`
  padding-top: 20px;
`;

export const StoreInfoTitle = styled.h6`
  font-size: 14px;
  font-weight: 600;
  color: #494949;
`;

export const StoreInfoContents = styled.p`
  display: flex;
  align-items: center;
  padding-top: 8px;
  font-size: 14px;
  line-height: 1.5;
  color: #494949;
`;

export const DetailFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  background-color: #f8f8f8;
  padding: 10px;
`;

export const FooterContents = styled.div`
  display: flex;
  align-items: center;
  width: 1110px;
  justify-content: space-between;
`;

export const FooterLogo = styled.img`
  width: 80px;
`;

export const ListMoveButton = styled.button`
  height: 38px;
  padding: 0 16px;
  background-color: #fff;
  border: 1px solid #d4d4d4;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  color: #6c757d;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f69d3e;
    color: white;
    border: 1px solid #f69d3e;
  }
`;
