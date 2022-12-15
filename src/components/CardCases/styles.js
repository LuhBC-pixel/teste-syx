import styled from 'styled-components';
import { COLORS, FONTS } from '../../styles/theme';

export const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 10px #00000029;
  border-radius: 5px;
  width: 18.375rem;
  height: 21.875rem;
  padding: 1.563rem;
`;

export const Information = styled.p`
  background: ${COLORS.Colord0fc02} 0% 0% no-repeat padding-box;
  border-radius: 100px;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-spacing: ${FONTS.LineSpacing50};
  font-family: ${FONTS.FontfamilyIbmPlexSans};
  color: ${COLORS.Color063c3b};
  text-align: center;
  width: 108px;
  height: 23px;
`;

export const ContainerMain = styled.div`
  color: ${COLORS.Color181817};
  text-align: left;
`;

export const Box = styled.div`
  width: 14.313rem;
  height: 2.438rem;
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  font-family: ${FONTS.FontfamilyWorkSans};
  text-align: left;
`;

export const Price = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  font-family: ${FONTS.FontfamilyWorkSans};
  color: ${COLORS.Color181817};
`;

export const Image = styled.img`
  width: 3.625rem;
  height: 2.5rem;
`;
