import React from 'react';
import { SafeAreaView, View, StyleSheet, Image, Text, Linking } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

const CustomSidebarMenu = (props: any) => {
    const BASE_PATH = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
    const profleImage = 'react_logo.png';
    const star_filled = 'star_filled.png';

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FEF384' }}>
            <View style={styles.sideUserArea}>
                <Image
                    source={{ uri: BASE_PATH + profleImage }}
                    style={styles.sideProfileIcon}
                />
                <Text style={styles.sideUserName}>Breno Farias</Text>
                <Text style={styles.sideUserEmail}>brenodasfarias2001@gmail.com</Text>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem
                    label="Visite-nos"
                    activeTintColor='#730000'
                    inactiveTintColor='#730000'
                    onPress={() => Linking.openURL('https://github.com/BrenoFar')}
                />

                <View style={styles.customItem}>
                    <Text style={{ color: '#730000' }}
                        onPress={() => Linking.openURL('https://github.com/BrenoFar')}>
                        Avalie-nos
                    </Text>
                    <Image
                        source={{ uri: BASE_PATH + star_filled }}
                        style={styles.iconStyle}
                    />
                </View>
            </DrawerContentScrollView>

            <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 10, color: '#730000' }}>
                https://github.com/BrenoFar
            </Text>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sideUserArea: {
        marginTop: 15,
        marginLeft: 10,
        marginBottom: 10,
        alignItems: 'center',
        borderBottomColor: '#AD6200',
        borderBottomWidth: 1,
    },
    sideProfileIcon: {
        resizeMode: 'center',
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        alignSelf: 'center',
    },
    sideUserName: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#730000',
    },
    sideUserEmail: {
        fontSize: 14,
        marginBottom: 10,
        color: '#730000',
    },
    iconStyle: {
        width: 15,
        height: 15,
        marginHorizontal: 5,
    },
    customItem: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default CustomSidebarMenu;
