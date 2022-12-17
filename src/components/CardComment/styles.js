import styled from 'styled-components';
import { COLORS, FONTS } from '../../styles/theme';

export const Container = styled.div`
  border: 4px solid ${COLORS.Color063c3b};
  border-radius: 8px;
  width: 24.813rem;
  max-height: 21.063rem;
  min-height: 11.813rem;
  padding: 1.25rem;
`;

export const Text = styled.p`
  font-style: normal;
  font-size: 16px;
  font-family: ${FONTS.FontfamilyWorkSans};
  font-weight: medium;
  text-align: left;
  color: ${COLORS.Color063c3b};
`;

export const Content = styled.div`
  display: flex;
`;

export const Image = styled.div`
  background: ${COLORS.Color063c3b} 0% 0% no-repeat padding-box;
  border-radius: 5px 5px 15px 5px;
  width: 4.813rem;
  height: 4.813rem;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Name = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-spacing: ${FONTS.LineSpacing50};
  font-family: ${FONTS.FontfamilyIbmPlexSans};
  color: ${COLORS.Color063c3b};
`;

export const Subtitle = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-spacing: ${FONTS.LineSpacing50};
  font-family: ${FONTS.FontfamilyIbmPlexSans};
  color: ${COLORS.Color0f9594};
`;
