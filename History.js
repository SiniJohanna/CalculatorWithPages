import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function History({route}) {
    const {list} = route.params;
    return(
        <View style={{flex: 5}}>
          <FlatList 
            ListHeaderComponent={<Text>History:</Text>}
            data={list}
            renderItem={({ item }) =>
              <Text>{item.text}</Text>
            }
          />
        </View>
    )
}