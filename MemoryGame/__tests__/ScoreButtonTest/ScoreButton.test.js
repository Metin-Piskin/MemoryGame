import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import ScoreButton from '../../src/Component/ScoreButton';
import ScoreButtonStyles from '../../src/Component/ScoreButton/ScoreButton-style';

jest.mock('react-native-linear-gradient', () => 'LinearGradient')
jest.mock('react-native-vector-icons/FontAwesome', () => 'FontAwesome')

test('renders correctly', () => {
    const comp = render(<ScoreButton />);
    expect(comp).toMatchSnapshot();
});

test('should trigerr onPress', () => {
    const mockFunction = jest.fn();
    const comp = render(<ScoreButton onPress={mockFunction} />);

    const ScoreButtonPress = comp.getByTestId('score-button-touchableopacity');
    fireEvent(ScoreButtonPress, 'press');

    expect(mockFunction).toBeCalled();
})

test('should render default theme style', () => {
    const comp = render(<ScoreButton />);
    const ScoreButtonStyle = comp.getByTestId('score-button-touchableopacity').props.style;

    expect(ScoreButtonStyle).toMatchObject(ScoreButtonStyles.buttoncontainer);
});

test('should render default theme style', () => {
    const comp = render(<ScoreButton />);
    const ScoreButtonStyle = comp.getByTestId('score-button-lineargradient').props.style;

    expect(ScoreButtonStyle).toMatchObject(ScoreButtonStyles.button);
});  
