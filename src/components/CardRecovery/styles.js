import styled from 'styled-components';
import { COLORS, FONTS } from '../../styles/theme';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 18.25rem;
  height: 16.063rem;
  background: ${COLORS.Color0f9594} 0% 0% no-repeat padding-box;
  border-radius: 10px;
  padding: 1.25rem;
`;

export const DivImg = styled.div`
  transform: translatey(-7rem);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  font-family: ${FONTS.FontfamilyIbmPlexSans};
  transform: translatey(-6rem);
  text-align: left;
  color: #fff;
  letter-spacing: 0px;
`;

export const Box = styled.div`
  transform: translatey(-6.5rem);
  width: 100%;
`;

export const LargePercent = styled.span`
  font-size: 32px;
  font-style: normal;
  font-weight: bold;
  font-family: ${FONTS.FontfamilyIbmPlexSans};
  color: ${COLORS.Colord0fc02};
  margin-right: 1rem;
`;

export const SmallPercent = styled.span`
  font-size: 20px;
  font-style: normal;
  font-weight: bold;
  font-family: ${FONTS.FontfamilyIbmPlexSans};
  color: ${COLORS.Colord0fc02};
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-spacing: ${FONTS.LineSpacing50};
  font-family: ${FONTS.FontfamilyIbmPlexSans};
  transform: translatey(-6rem);
  color: #fff;
  width: 100%;
`;
