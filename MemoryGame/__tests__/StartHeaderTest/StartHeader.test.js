import React from 'react';
import { render } from '@testing-library/react-native';

import StartHeader from '../../src/Component/StartHeader';
import StartHeaderStyles from '../../src/Component/StartHeader/StartHeader-style';

jest.mock('react-native-linear-gradient', () => 'LinearGradient')
jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'MaterialCommunityIcons')

test('renders correctly', () => {
    const comp = render(<StartHeader />);
    expect(comp).toMatchSnapshot();
});


test('should render default theme style', () => {
    const comp = render(<StartHeader />);
    const StartHeaderContainerStyle = comp.getByTestId('start-header-container').props.style;

    expect(StartHeaderContainerStyle).toMatchObject(StartHeaderStyles.innercontainer);
});

test('should render default theme style', () => {
    const comp = render(<StartHeader />);
    const StartHeaderLinearGradientcontainerStyle = comp.getByTestId('start-header-LinearGradientcontainer').props.style;

    expect(StartHeaderLinearGradientcontainerStyle).toMatchObject(StartHeaderStyles.LinearGradientcontainer);
});

test('should render default theme style', () => {
    const comp = render(<StartHeader />);
    const StartHeaderTitleStyle = comp.getByTestId('start-header-title').props.style;

    expect(StartHeaderTitleStyle).toMatchObject(StartHeaderStyles.title);
});
