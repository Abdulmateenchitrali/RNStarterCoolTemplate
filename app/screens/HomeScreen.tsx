import { Button, StyleSheet, Text, View } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { ScreenProps } from '../types/type'



const HomeScreen: FC<ScreenProps> = ({ navigation, route }) => {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Settings"
                onPress={() =>
                    navigation.navigate('Root', {
                        screen: 'Settings',
                        params: { user: 'jane' },
                    })
                }
            />
        </View>
    );
}

export default HomeScreen

const styles = StyleSheet.create({})