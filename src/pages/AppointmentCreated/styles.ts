import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1
  justify-content: center;
  align-items:center;
  padding: 0 24px;

`;

export const Title = styled.Text`
  font-size: 30px;
  font-family: 'RobotoSlab-Regular';
  align-items: center;
  text-align: center;
  margin-top: 48px;
  color: #f4ede8;
`;
export const Description = styled.Text`
  font-size: 14px;
  margin-top: 16px;
  font-family: 'RobotoSlab-Regular';
  align-items: center;
  text-align: center;
  color: #999591;
`;

export const OkButton = styled(RectButton)`
  padding: 12px 24px;
  background: #ff9000;
  border-radius: 10px;
  margin-top: 24px;
  align-items: center;
  justify-content: center;
`;
export const OkButtonText = styled.Text`
  font-size: 14px;

  font-family: 'RobotoSlab-Medium';
  color: #312e38;
`;
