import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function MyForms() {
      const [text, setText] = useState('');
      const [displayText, setDisplayText] = useState('');
      
      const handlePress = () => {
        setDisplayText(text);
        setText('');
      }

    return (
    <View style={styles.container}>
    <TextInput
        style={styles.input}
        placeholder="Type Something"
        value={text}
        onChangeText={setText}
    />

    <Button title="Click Me!" onPress={handlePress} />
    <Text style>Text to Show: {displayText}</Text>
    </View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 16,
        paddingLeft: 8,
    },
    resultText: {
        marginTop: 16,
        fontSize: 16,
        borderColor: 'gray',
        marginBottom: 16,
        paddingLeft: 8,
    }
});