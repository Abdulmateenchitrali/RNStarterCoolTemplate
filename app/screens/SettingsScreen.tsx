import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native'

export function SettingsScreen({ route, navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Settings Screen</Text>
            <Text>userParam: {route?.params?.user}</Text>
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
            />
        </View>
    );
}
