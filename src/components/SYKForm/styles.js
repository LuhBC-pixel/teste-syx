import styled from 'styled-components';
import { COLORS, FONTS } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 6.25rem;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 28.125rem;
  margin-right: 4.375rem;
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 56px;
  line-height: 70px;
  font-family: ${FONTS.FontfamilyIbmPlexSans};
  color: ${COLORS.Color181817};
  width: 19.5rem;
  margin-bottom: 1.875rem;
`;

export const Subtitle = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  font-family: ${FONTS.FontfamilyWorkSans};
  width: 28.125rem;
`;
