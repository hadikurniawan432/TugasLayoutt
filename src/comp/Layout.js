import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BelajarLayout extends React.Component {
  render() {
    return (
    <View style={styles.containerMain}>

      <View style={styles.box1}>
          <Text style={{ textAlign: 'center', padding: 40 }} >Pendidikan Teknik Informatika </Text>
      </View>
      <View style={styles.box2}>
          <Text style={{ textAlign: 'center', padding: 50, fontSize: 20 }}>Slider </Text>
      </View>
      <View style={styles.box3}>
        <View style={styles.button}><Text> 1 </Text></View>
        <View style={styles.button}><Text> 2 </Text></View>
        <View style={styles.button}><Text> 3 </Text></View>
        <View style={styles.button}><Text> 4 </Text></View>
      </View>
      <View style={styles.box4}>
        <View style={styles.button}><Text> 5 </Text></View>
        <View style={styles.button}><Text> 6 </Text></View>
        <View style={styles.button}><Text> 7 </Text></View>
        <View style={styles.button}><Text> 8 </Text></View>
      </View>
      <View style={styles.box5}>
          <Text style={{ textAlign: 'center', padding: 30, fontSize: 20 }}> #JaenKuliahdiPTI </Text>
      </View>

</View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: 'silver',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 0.7,
    backgroundColor: 'red',
  },
  box2: {
    flex: 1,
    backgroundColor: 'aqua',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  box3: {
    flex: 1,
    backgroundColor: 'green',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box4: {
    flex: 1,
    backgroundColor: 'green',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box5: {
    flex: 0.7,
    backgroundColor: 'tomato',
    margin: 10,
  },
  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gold'
  }
});
