import styled from 'styled-components';
import { FONTS } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-left: 6.5rem;

  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100vw;
    gap: 2rem;
  }

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    margin-left: 10rem;
  }
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-spacing: ${FONTS.LineSpacing50};
  font-family: ${FONTS.FontfamilyIbmPlexSans};
  margin-left: 10rem;
  margin-bottom: 8.75rem;

  @media (max-width: 900px) {
    width: 500px;
    flex-wrap: wrap;
    text-align: left;
  }

  @media (max-width: 600px) {
    width: 100%;
    text-align: center;
  }
`;
