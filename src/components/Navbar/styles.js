import styled from 'styled-components';
import { COLORS, FONTS } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 10rem 1.5rem;
  gap: 33.69rem;
  width: 100%;

  @media (max-width: 900px) {
    gap: 10rem;
    width: 100vw;
    padding: 1.5rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Logo = styled.h1`
  color: ${COLORS.Color1a1a1a};
  font-size: 40px;
  font-family: ${FONTS.FontfamilyIbmPlexSans};
  font-style: normal;
`;

export const MenuList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  gap: 1.875rem;
`;

export const Item = styled.li`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-spacing: ${FONTS.LineSpacing50};
  font-family: ${FONTS.FontfamilyIbmPlexSans};
  white-space: nowrap;
`;

export const ButtonSales = styled.button`
  width: 11.75rem;
  height: 2.188rem;
  border-radius: 5px;
  border: none;
  background-color: ${COLORS.Color0f9594};
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  line-spacing: ${FONTS.LineSpacing50};
  font-family: ${FONTS.FontfamilyIbmPlexSans};
  text-align: center;
  text-transform: uppercase;
`;

export const ButtonLogin = styled.button`
  border: 2px solid ${COLORS.Color0f9594};
  border-radius: 5px;
  background-color: #fff;
  width: 5.25rem;
  height: 2.188rem;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-spacing: ${FONTS.LineSpacing50};
  font-family: ${FONTS.FontfamilyIbmPlexSans};
  color: ${COLORS.Color0f9594};
`;
