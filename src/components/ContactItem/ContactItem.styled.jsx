import styled from '@emotion/styled';

export const ContactLi = styled.li`
  display: flex;
  justify-content: space-between
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.03em;

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

export const Text = styled.span`
  margin-right: 10px;
`;

export const Button = styled.button`
  padding: 2px 4px;
  border: 1px solid #615e5e;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.03em;

  &:hover {
    background-color: #eb1212;
  }
`;