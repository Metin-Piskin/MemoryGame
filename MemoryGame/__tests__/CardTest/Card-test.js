import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import Card from '../../src/Component/Card/index';
import CardStyles from '../../src/Component/Card/Card-style';


test('renders correctly', () => {
  const comp = render(<Card />);
  expect(comp).toMatchSnapshot();
});

test('should render title correctly', () => {
  const testTitle = 'test';
  const isTurned = true;
  const comp = render(<Card children={testTitle} isTurnedOver={isTurned} />);

  const cardText = comp.getByTestId('card-title').children[0];
  expect(cardText).toBe(testTitle);
})

test('should trigerr onPress', () => {
  const mockFunction = jest.fn();
  const comp = render(<Card onPress={mockFunction} />);

  const CardPressable = comp.getByTestId('card-pressable');
  fireEvent(CardPressable, 'press');

  expect(mockFunction).toBeCalled();
})

test('should render default theme style', () => {
  const isTurned = true;
  const comp = render(<Card isTurnedOver={isTurned} />);
  const cardStyle = comp.getByTestId('card-pressable').props.style;

  expect(cardStyle).toMatchObject(CardStyles.cardUp);
});

test('should render default theme style', () => {
  const isTurned = false;
  const comp = render(<Card isTurnedOver={isTurned} />);
  const cardStyle = comp.getByTestId('card-pressable').props.style;

  expect(cardStyle).toMatchObject(CardStyles.cardUp);
});
