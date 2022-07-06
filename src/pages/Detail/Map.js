/*global kakao*/
import React, { useEffect } from 'react';
import * as S from './Map.styles';
const Location = ({ detailInfo }) => {
  const { place_latitude, place_longitude } = detailInfo;

  useEffect(() => {
    let container = document.getElementById('map');
    let options = {
      center: new kakao.maps.LatLng(
        Number(place_latitude),
        Number(place_longitude)
      ),
      level: 3,
    };

    let map = new kakao.maps.Map(container, options);
    let markerPosition = new kakao.maps.LatLng(
      Number(place_latitude),
      Number(place_longitude)
    );
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, [place_latitude, place_longitude]);

  return (
    <div>
      <S.Map id="map" />
    </div>
  );
};

export default Location;
