import styled from 'styled-components';
import { FONTS } from '../../styles/theme';

export const Container = styled.div`
  width: 100%;
  height: 24rem;
  background-color: #191919;
  padding: 4rem 12.5rem;
  margin-top: 7.5rem;
`;

export const ContainerFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BoxMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.313rem;
`;

export const BoxTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  font-family: ${FONTS.FontfamilyIbmPlexSans};
  color: #fff;
  text-align: left;
`;

export const BoxSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 5.313rem;
  margin-left: 1.688rem;
`;

export const SubTitle = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  font-family: ${FONTS.FontfamilyIbmPlexSans};
  color: #fff;
  line-spacing: ${FONTS.LineSpacing50};
`;

export const Address = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-spacing: ${FONTS.LineSpacing50}
  font-family: ${FONTS.FontfamilyIbmPlexSans};
  color: #fff;
  width: 100%;
`;

export const Separator = styled.div`
  margin-top: 2rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.625rem;
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? `${marginBottom}rem` : '4rem'};
`;

export const MainTitle = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-spacing: ${FONTS.LineSpacing50}
  font-family: ${FONTS.FontfamilyIbmPlexSans};
  color: #fff;
`;

export const Link = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-spacing: ${FONTS.LineSpacing50}
  font-family: ${FONTS.FontfamilyIbmPlexSans};
  color: #fff;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.563rem;
`;
