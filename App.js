import { StyleSheet, View, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [colorone, setColorOne] = useState('#000000');

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colorone,
        },
      ]}
    >
      <View style={styles.row1}>
        <View style={[styles.buttonFirst, styles.spaceAroundButton]}>
          <Button
            title="ColorUno"
            color="#ffffff"
            onPress={() => setColorOne('#008598')}
          />
        </View>
        <View style={[styles.buttonSecond, styles.spaceAroundButton]}>
          <Button
            title="ColorDos"
            color="#ffffff"
            onPress={() => setColorOne('#fed520')}
          />
        </View>
      </View>
      <View style={styles.row2}>
        <View style={styles.buttonThird}>
          <Button
            title="ColorTres"
            color="#ffffff"
            onPress={() => setColorOne('#841592')}
          />
        </View>
        <View style={[styles.buttonFourth, styles.spaceBetweenButton]}>
          <Button
            title="ColorQuatro"
            color="#ffffff"
            onPress={() => setColorOne('#ef7c13')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  row2: {
    top: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonFirst: {
    flex: 1,
    margin: 5,
    backgroundColor: '#008598',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonSecond: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fed520',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonThird: {
    flex: 1,
    margin: 0,
    backgroundColor: '#841592',
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonFourth: {
    flex: 1,
    margin: 0,
    backgroundColor: '#ef7c13',
    borderWidth: 1,
    borderColor: 'black',
  },
  spaceBetweenButton: {
    marginLeft: 10,
  },
  spaceAroundButton: {
    marginHorizontal: 10,
  },
});
