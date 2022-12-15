import styled from 'styled-components';
import { COLORS, FONTS } from '../../styles/theme';
import klabin from '../../assets/Klabin.png';

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
  width: 6.75rem;
  height: 1.438rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.125rem;
`;

export const ContainerMain = styled.div`
  color: ${COLORS.Color181817};
  text-align: left;
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  font-family: ${FONTS.FontfamilyWorkSans};
  text-align: left;
  color: ${COLORS.Color181817};
`;

export const Subtitle = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  font-family: ${FONTS.FontfamilyIbmPlexSans};
  color: ${COLORS.Color181817};
  text-align: left;
  line-height: 0.5;
`;

export const Box = styled.div`
  width: 14.313rem;
  height: 2.438rem;
  margin-top: 1.5rem;
  display: block;
`;

export const Text = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  font-family: ${FONTS.FontfamilyWorkSans};
  text-align: left;
`;

export const Price = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  font-family: ${FONTS.FontfamilyWorkSans};
  color: ${COLORS.Color181817};
`;

export const Image = styled.div`
  /* width: 3.625rem;
  height: 2.5rem; */
  background-image: url(${klabin});
`;
