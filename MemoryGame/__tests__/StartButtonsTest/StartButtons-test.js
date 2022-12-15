import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import StartButtons from '../../src/Component/StartButtons';
import StartButtonsStyles from '../../src/Component/StartButtons/StartButtons-style';

jest.mock('react-native-linear-gradient', () => 'LinearGradient')

test('renders correctly', () => {
    const comp = render(<StartButtons />);
    expect(comp).toMatchSnapshot();
});

test('should render title correctly', () => {
    const test = 'test';
    const comp = render(<StartButtons title={test} />);

    const StartButtonsText = comp.getByTestId('start-buttons-title').children[0];
    expect(StartButtonsText).toBe(test);
})

test('should render press correctly', () => {
    const mockFunction = jest.fn();
    const comp = render(<StartButtons onPress={mockFunction} />);

    const StartButtonsPress = comp.getByTestId('start-buttons-TouchableOpacity');
    fireEvent(StartButtonsPress, 'press');

    expect(mockFunction).toBeCalled();
})

test('should render default theme style', () => {
    const comp = render(<StartButtons />);
    const StartButtonsLinearGradientcontainerStyle = comp.getByTestId('start-buttons-LinearGradient').props.style;

    expect(StartButtonsLinearGradientcontainerStyle).toMatchObject(StartButtonsStyles.modalbutton);
});

test('should render default theme style', () => {
    const test = 'test';
    const comp = render(<StartButtons title={test} />);
    const StartButtonsTitleStyle = comp.getByTestId('start-buttons-title').props.style;

    expect(StartButtonsTitleStyle).toMatchObject(StartButtonsStyles.text);
});