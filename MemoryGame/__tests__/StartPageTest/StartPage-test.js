import React from 'react';
import { render } from '@testing-library/react-native';

import StartPage from '../../src/Page/StartPage';
import StartPageStyles from '../../src/Page/StartPage/StartPage-style';;

jest.mock('react-native-linear-gradient', () => 'LinearGradient')
jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'MaterialCommunityIcons')
jest.mock('react-native-vector-icons/FontAwesome5', () => 'FontAwesome5')

test('renders correctly', () => {
    const comp = render(<StartPage />);
    expect(comp).toMatchSnapshot();
});

test('should render default theme style', () => {
    const comp = render(<StartPage />);
    const StartPageContainerStyle = comp.getByTestId('start-page-container').props.style;

    expect(StartPageContainerStyle).toMatchObject(StartPageStyles.container);
});

test('should render default theme style', () => {
    const comp = render(<StartPage />);
    const StartPageContainerStyle = comp.getByTestId('start-page-button-container').props.style;

    expect(StartPageContainerStyle).toMatchObject(StartPageStyles.buttoncontainer);
});
