import React from 'react';
import { render } from '@testing-library/react-native';

import ScoreTable from '../../src/Component/ScoreTable';
import ScoreTableStyles from '../../src/Component/ScoreTable/ScoreTable-style';


test('renders correctly', () => {
    const comp = render(<ScoreTable />);
    expect(comp).toMatchSnapshot();
});

test('should render default theme style', () => {
    const comp = render(<ScoreTable />);
    const ScoreTableStyle = comp.getByTestId('score-table-innercontainer').props.style;

    expect(ScoreTableStyle).toMatchObject(ScoreTableStyles.innercontainer);
});

test('should render default theme style', () => {
    const comp = render(<ScoreTable />);
    const ScoreTableStyle = comp.getByTestId('score-table-textName').props.style;

    expect(ScoreTableStyle).toMatchObject(ScoreTableStyles.textName);
});

test('should render default theme style', () => {
    const comp = render(<ScoreTable />);
    const ScoreTableStyle = comp.getByTestId('score-table-textDifficulty').props.style;

    expect(ScoreTableStyle).toMatchObject(ScoreTableStyles.textDifficulty);
});

test('should render default theme style', () => {
    const comp = render(<ScoreTable />);
    const ScoreTableStyle = comp.getByTestId('score-table-textScore').props.style;

    expect(ScoreTableStyle).toMatchObject(ScoreTableStyles.textScore);
});
