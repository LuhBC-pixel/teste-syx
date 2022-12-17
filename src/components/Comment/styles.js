import styled from 'styled-components';
import { FONTS } from '../../styles/theme';

export const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-spacing: ${FONTS.LineSpacing50};
  font-family: ${FONTS.FontfamilyIbmPlexSans};
  margin-bottom: 2.063rem;
  margin-left: 10rem;
  margin-top: 9.75rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-left: 6rem;
`;

export const Separator = styled.div`
  margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}rem` : '1.25rem')};
`;
