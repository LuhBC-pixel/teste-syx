import styled from 'styled-components';
import { FONTS } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-left: 6.5rem;
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-spacing: ${FONTS.LineSpacing50};
  font-family: ${FONTS.FontfamilyIbmPlexSans};
  margin-left: 10rem;
  margin-bottom: 8.75rem;
`;
