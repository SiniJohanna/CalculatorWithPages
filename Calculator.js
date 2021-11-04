import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function Calculator({navigation}) {
  
    const [operand1, setOperand1] = useState('');
    const [operand2, setOperand2] = useState('');
    const [result, setResult] = useState('');
    const [data, setData] = useState([]);
  
    const calculate = operator => {
      console.log(operand1, operand2, operator);
      const [number1, number2] = [Number(operand1), Number(operand2)]
  
      if (isNaN(number1) || isNaN(number2)) {
        setResult(0);
      } else {
        let result = 0;
        switch (operator){
          case '+':
            result = number1 + number2;
            break;
          case '-':
            result = number1-number2;
            break;
        }
        setResult(result);
  
        const text = `${number1} ${operator} ${number2} = ${result}`
        setData([...data, { text: text, key: data.length+1}]);
      }
    }
    return (
      <View style={styles.container}>
        <View style={{flex: 5, justifyContent:'flex-end', alignItems:'center'}}>
          <Text>Result: {result}</Text>
          <TextInput 
          style={{width:200, borderColor:'gray', borderWidth:1}}
          onChangeText={text=> setOperand1(text)}
          value={operand1}
          keyboardType="numeric"
          />
          <TextInput 
          style={{width:200, borderColor:'gray', borderWidth:1}}
          onChangeText={text=> setOperand2(text)}
          value={operand2}
          keyboardType="numeric"
          />
        </View>
        <View style={styles.btn}>
          <Button onPress={() => calculate('+')}title="+"/>
          <Button onPress={() => calculate('-')}title="-"/>
          <Button
          title="History"
        onPress={() => navigation.navigate('History', {list: data})}
      />
        </View>
        <View style={{flex: 5}}>
          
        </View>
        
        
  
        <StatusBar style="auto" />
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
    btn: {
      flex:1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
  