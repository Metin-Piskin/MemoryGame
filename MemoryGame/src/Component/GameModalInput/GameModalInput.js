import React from 'react';
import { TextInput } from 'react-native';

import styles from './GameModalInput-style';

const GameModalInput = ({
    placeholder,
    onChangeText,
    onBlur,
    textContentType,
    value,
    placeholderTextColor
}) => {
    return (
        <TextInput
            style={styles.modalinput}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            onChangeText={onChangeText}
            onBlur={onBlur}
            textContentType={textContentType}
            value={value}
        />
    )
}

export default GameModalInput;