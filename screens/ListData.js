import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function ListData() {
    // loader
    const [isLoading, setLoading] = useState(true);
    // data
    const [data, setData] = useState([]);
    console.log(data);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []); 

    return (
        <View style={{ flex: 1, padding: 24 }}>
            {isLoading ? <Text>Loading Content...</Text> :
                (<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 18, color: 'green', textAlign: 'center' }}>{data.title}</Text>
                    <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10 }}>Articles:</Text>
                    <FlatList
                        data={data.articles}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <View>
                                <Text style={styles.cardList} >{item.id + '. ' + item.title}</Text>
                            </View>

                        )}
                    />
                </View>
                )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // login button
    btnContainer: {
        elevation: 5,
        backgroundColor: "#4F8EF7",
        // borderRadius: 30,
        paddingVertical: 10,
        width: '90%',
        paddingHorizontal: 12,
        marginTop: 20,
    },
    //login Button text
    btnText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
    },
    //flex
    flexLogoutProfile: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    // logout
    logout: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',


    },
    profile: {
        flex: 1,

    },
    // card
    cardList: {
        backgroundColor: '#2E9AFE',
        height: 70,
        borderRadius: 30,
        paddingTop: 20,
        paddingLeft: 20,
        fontSize: 20,
        marginTop: 12,
        padding: 10,
        color: '#ffffff',
    }

});
