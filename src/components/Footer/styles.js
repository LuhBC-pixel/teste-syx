import styled from 'styled-components';
import { FONTS } from '../../styles/theme';

export const Container = styled.div`
  width: 100%;
  height: 24.75rem;
  background-color: #191919;
  padding: 4.375rem;
`;

export const ContainerFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BoxMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BoxTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  font-family: ${FONTS.FontfamilyIbmPlexSans};
  color: #fff;
`;

export const SubTitle = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  font-family: ${FONTS.FontfamilyIbmPlexSans};
  color: #fff;
`;

export const Address = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-spacing: ${FONTS.LineSpacing50}
  font-family: ${FONTS.FontfamilyIbmPlexSans};
  color: #fff;
`;

export const Separator = styled.div`
  margin-top: 2.438rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
`;
