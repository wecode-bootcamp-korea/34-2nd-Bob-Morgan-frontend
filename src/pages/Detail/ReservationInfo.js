import React, { useState } from 'react';
import { TimePicker, InputNumber } from 'antd';
import moment from 'moment';
import * as S from './ReservationInfo.styles';
import 'antd/dist/antd.css';

const ResevationInfo = () => {
  const [value, setValue] = useState(null);
  const format = 'HH:mm';
  const onChangeTime = time => {
    setValue(time);
  };

  const onChange = value => {
    console.log('changed', value);
  };

  return (
    <S.ReservationWrapper>
      <S.Reservation>
        <S.ReservationTitle>제주 맛집</S.ReservationTitle>
        <S.ResevationContents>
          <S.ResevationInfo>
            <S.Title>지역</S.Title>
            <S.Info>제주</S.Info>
          </S.ResevationInfo>
          <S.ResevationInfo>
            <S.Title>상호명</S.Title>
            <S.Info>ddddd</S.Info>
          </S.ResevationInfo>
          <S.ResevationInfo>
            <S.Title>시간</S.Title>
            <S.Info>
              <TimePicker
                value={value}
                onChange={onChangeTime}
                minuteStep={30}
                defaultValue={moment('12:08', format)}
                format={format}
              />
            </S.Info>
          </S.ResevationInfo>
          <S.ResevationInfo>
            <S.Title>인원 수</S.Title>
            <S.Info>
              <InputNumber
                min={1}
                max={10}
                defaultValue={3}
                onChange={onChange}
              />
            </S.Info>
          </S.ResevationInfo>
        </S.ResevationContents>
      </S.Reservation>

      <S.ReservationButton>
        <S.DoneIcon src="/images/icon/done.png" />
        예약
      </S.ReservationButton>
    </S.ReservationWrapper>
  );
};

export default ResevationInfo;
