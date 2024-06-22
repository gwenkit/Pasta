import React, {useState} from 'react';
import {Image, Button, Text, ScrollView, View} from 'react-native';

const sampleImage = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

const styles = {
  container: {
    flex: 1,
    //paddingTop: 22,
    //paddingBottom: 22,
    backgroundColor: 'honeydew',
  },
  gutterTest: {
    //paddingTop: 33,
    backgroundColor: 'olive',
  },
  bottomTest: {
    //paddingBottom: 33,
    backgroundColor: 'olive',
  },
  scrollTest: {
    //flex: 1,
    //backgroundColor: 'white',
  },
  stringTest: {
    paddingTop: 22,
    paddingBottom: 22,
    backgroundColor: 'white',
  },
  buttonTest: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
};

type ButtonProps = {
  label: string;
  num: number;
  numHide: boolean;
};

const SampleButtonGroup = () => {
  const [msg, setMsg] = useState('ready!');
  const resetCount = () => {
    setMsg('Reset function is not ready yet. 개발 중...');
  };

  return (
    <>
      <Text style={{
        padding: 1,
        fontSize: 14,
        color: 'snow',
        backgroundColor: 'purple',
      }}>test(Button)</Text>
      <View style={styles.buttonTest}>
        <SampleButton label="Button" num="1" />
      </View>
      <View style={styles.buttonTest}>
        <SampleButton label="Button" num="2" />
        <SampleButton label="Button" num="3" />
      </View>
      <View style={styles.buttonTest}>
        <SampleButton label="Button" num="4" />
        <SampleButton label="Button" num="5" />
        <SampleButton label="Button" num="6" />
      </View>
      <View style={styles.buttonTest}>
        <SampleButton label="Button" num="7" />
        <SampleButton label="Button" num="8" />
        <SampleButton label="Button" num="9" />
        <SampleButton label="Button" num="0" />
      </View>
      <View style={styles.buttonTest}>
        <SampleButton label="A" num="A" numHide />
        <SampleButton label="B" num="B" numHide />
        <SampleButton label="C" num="C" numHide />
        <SampleButton label="D" num="D" numHide />
        <SampleButton label="E" num="E" numHide />
        <SampleButton label="F" num="F" numHide />
        <SampleButton label="G" num="G" numHide />
        <SampleButton label="H" num="H" numHide />
      </View>
      <View style={styles.buttonTest}>
        <View style={{
          flex: 1,
          flexDirection: 'column',
        }}>
          <Button
            onPress={resetCount}
            title="Reset"
          />
          <Text style={{
            padding: 2,
            color: 'white',
            backgroundColor: 'maroon',
          }}>{msg}</Text>
        </View>
      </View>
    </>
  );
};

const SampleButton = (props: ButtonProps) => {
  const [pressCount, setPressCount] = useState(0);

  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
    }}>
      <Button
        onPress={() => {
          setPressCount(pressCount+1);
        }}
        title={(props.num && !props.numHide) ? (
          props.label + " #" + props.num
        ) : (
          props.label
        )}
      />
      <View style={{
        flex: 1,
        flexDirection: 'row',
      }}>
        <Text style={{
          flex: 1,
          fontSize: 12,
          color: 'maroon',
          textAlign: 'right',
          padding: 2,
          backgroundColor: 'lavender',
        }}>#{props.num}:</Text>
        <Text style={{
          flex: 1,
          fontSize: 14,
          fontWeight: 'bold',
          textAlign: 'left',
          padding: 2,
          backgroundColor: 'lavender',
        }}>{pressCount}</Text>
      </View>
    </View>
  );
};

const Pasta = () => {
  return (
    <View style={styles.container}>
      <View style={styles.gutterTest}>
        <Image source={sampleImage} />
      </View>
      <ScrollView styles={styles.scrollTest}>
        <SampleButtonGroup />
      </ScrollView>
      <View style={styles.stringTest}>
        <Text style={{
          color: 'darkolivegreen',
        }}>Hello, world!</Text>
      </View>
      <View style={styles.bottomTest}>
        <Image source={sampleImage} />
      </View>
    </View>
  );
};

export default Pasta;

