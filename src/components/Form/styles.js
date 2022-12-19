import styled from 'styled-components';
import { COLORS, FONTS } from '../../styles/theme';

export const Input = styled.input`
  background: transparent 0% 0% no-repeat padding-box;
  border: 2px solid #5b5b5b;
  border-radius: 5px 5px 15px 5px;
  width: 31.25rem;
  height: 2.875rem;
  padding: 0.688rem 1.25rem;

  &::placeholder {
    font-style: normal;
    font-size: 20px;
    font-weight: normal;
    line-spacing: ${FONTS.LineSpacing50};
    font-family: ${FONTS.FontfamilyWorkSans};
  }
`;

export const Checkbox = styled.input`
  background: transparent 0% 0% no-repeat padding-box;
  border-radius: 5px;
  border: 1px solid #5b5b5b;
  width: 1.563rem;
  height: 1.563rem;
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;

  &:checked {
    background-color: ${COLORS.Color0f9594};
  }

  &:checked::after {
    content: url('/check.svg');
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 0.2rem;
    color: #fff;
  }
`;

export const Label = styled.label`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-spacing: ${FONTS.LineSpacing50};
  font-family: ${FONTS.FontfamilyIbmPlexSans};
  color: ${COLORS.Color666666};
`;

export const Button = styled.button`
  background: ${COLORS.Color0f9594} 0% 0% no-repeat padding-box;
  border-radius: 5px 5px 15px 5px;
  width: 31.25rem;
  height: 3.75rem;
  margin-top: 2.6rem;
  color: #fff;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-spacing: ${FONTS.LineSpacing50};
  font-family: ${FONTS.FontfamilyIbmPlexSans};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
`;

export const ContainerCheckbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.625rem;
  width: 100%;
`;
