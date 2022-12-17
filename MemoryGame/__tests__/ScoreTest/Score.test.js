import React from 'react';
import { render } from '@testing-library/react-native';

import Score from '../../src/Component/Score/index';
import ScoreStyles from '../../src/Component/Score/Score-style';

test('renders correctly', () => {
    const post = 'test'
    const comp = render(<Score post={post} />);
    expect(comp).toMatchSnapshot();
});

test('should render default theme style', () => {
    const post = 'test'
    const comp = render(<Score post={post} />);
    const scoreStyle = comp.getByTestId('score-container').props.style;

    expect(scoreStyle).toMatchObject(ScoreStyles.container);
});

test('should render default theme style', () => {
    const post = 'test'
    const comp = render(<Score post={post} />);
    const scoreStyle = comp.getByTestId('score-textName').props.style;

    expect(scoreStyle).toMatchObject(ScoreStyles.textName);
});

test('should render default theme style', () => {
    const post = 'test'
    const comp = render(<Score post={post} />);
    const scoreStyle = comp.getByTestId('score-textDifficulty').props.style;

    expect(scoreStyle).toMatchObject(ScoreStyles.textDifficulty);
});

test('should render default theme style', () => {
    const post = 'test'
    const comp = render(<Score post={post} />);
    const scoreStyle = comp.getByTestId('score-textScore').props.style;

    expect(scoreStyle).toMatchObject(ScoreStyles.textScore);
});