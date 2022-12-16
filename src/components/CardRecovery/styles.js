import styled from 'styled-components';
import { COLORS, FONTS } from '../../styles/theme';

export const Container = styled.div`
  width: 18.25rem;
  height: 16.063rem;
  background: ${COLORS.Color0f9594} 0% 0% no-repeat padding-box;
  border-radius: 10px;
`;

export const DivImg = styled.div`
  width: 15.625rem;
  height: 11.25rem;
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
`;
