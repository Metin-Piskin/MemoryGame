import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import StartScoreButton from '../../src/Component/StartScoreButton';
import StartScoreButtonStyles from '../../src/Component/StartScoreButton/StartScoreButton-style';

jest.mock('react-native-linear-gradient', () => 'LinearGradient')
jest.mock('react-native-vector-icons/FontAwesome5', () => 'FontAwesome5')

test('renders correctly', () => {
    const comp = render(<StartScoreButton />);
    expect(comp).toMatchSnapshot();
});

test('should trigerr onPress', () => {
    const mockFunction = jest.fn();
    const comp = render(<StartScoreButton onPress={mockFunction} />);

    const StartScoreButtonPress = comp.getByTestId('start-score-button-touchableopacity');
    fireEvent(StartScoreButtonPress, 'press');

    expect(mockFunction).toBeCalled();
})

test('should render default theme style', () => {
    const comp = render(<StartScoreButton />);
    const StartScoreButtonStyle = comp.getByTestId('start-score-button-touchableopacity').props.style;

    expect(StartScoreButtonStyle).toMatchObject(StartScoreButtonStyles.tablebutton);
});

test('should render default theme style', () => {
    const comp = render(<StartScoreButton />);
    const StartScoreButtonStyle = comp.getByTestId('start-score-button-lineargradient').props.style;

    expect(StartScoreButtonStyle).toMatchObject(StartScoreButtonStyles.table);
});  
