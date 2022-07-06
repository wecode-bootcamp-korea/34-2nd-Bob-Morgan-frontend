/* global kakao */
/* TODO: 아직 구현 전입니다! */
import React, { useEffect, useRef } from 'react';
import * as S from './Map.styles';
function Kakaomap() {
  const { kakao } = window;
  const container = useRef(null);
  const options = {
    center: new kakao.maps.LatLng(35.85133, 127.734086),
    level: 13,
  };

  useEffect(() => {
    new kakao.maps.Map(container.current, options);
    return () => {};
  }, [options]);
  return <S.MapStyle id="map" />;
}

export default Kakaomap;
