import { Button, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { ScreenProps } from '../types/type'

const DetailScreen: FC<ScreenProps> = ({ navigation, route }) => {
    const {params} =route;
    console.log("Params: ",params?.itemId);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ marginBottom: 15 }}>DetailScreen</Text>
            <Button
                title="Update Params"
                onPress={() => navigation.setParams({
                    itemId:Math.floor(Math.random()*100)
                })}
            />
            
        </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({})