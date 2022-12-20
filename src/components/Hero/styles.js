import styled from 'styled-components';
import { COLORS, FONTS } from '../../styles/theme';

export const Container = styled.div`
  background-color: ${COLORS.Color1a1a1a};
  border: 1px solid #707070;
  height: 34.813rem;
  padding: 6rem 10rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4.625rem;

  @media (max-width: 900px) {
    width: 900px;
  }
`;

export const ContainerTitle = styled.div`
  width: 34.375rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 72px;
  font-family: ${FONTS.FontfamilyIbmPlexSans};
  color: #fff;
  wrap: wrap;
  text-align: left;
`;

export const Titlep = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 56px;
  font-family: ${FONTS.FontfamilyIbmPlexSans};
  color: #fff;
  wrap: wrap;
  text-align: left;
`;

export const ContainerContent = styled.div`
  width: 31.25rem;
  margin-top: 1.25rem;
`;

export const Content = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  font-family: ${FONTS.FontfamilyWorkSans};
  text-align: left;
  color: #fff;
`;

export const ContainerImage = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Image = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 3px solid #707070;
  border-radius: 10px;
  width: 37.75rem;
  height: 25.5rem;

  @media (max-width: 900px) {
    display: none;
  }
`;
