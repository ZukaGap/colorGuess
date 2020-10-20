import React from 'react';
import { View, Text, Switch } from 'react-native';

import styles from './style'

export default function AppSwitch({value,onChange,label}){
    return (
        <View style={styles.switchContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.textStyle}>{label}</Text>
            </View>
            <View>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor="#f4f3f4"                    
                    ios_backgroundColor="#3e3e3e"
                    value={value}
                    onValueChange={onChange}
                    style={styles.switchStyle}
                />
            </View>
        </View>
    );
};