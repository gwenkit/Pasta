import React, {useState} from 'react';
import {Button, TextInput, Text, ScrollView, View} from 'react-native';

const styles = {
  container: {
    //flex: 1,
    //paddingTop: 22,
    //paddingBottom: 22,
    backgroundColor: 'honeydew',
  },
  sectionTitle: {
    padding: 1,
    fontSize: 14,
    color: 'snow',
    backgroundColor: 'purple',
  },
};

type CatProps = {
  name: string;
};

const getFullName = (
  firstName: string,
  secondName: string,
  thirdName: string,
) => {
  return firstName + ' ' + secondName + ' ' + thirdName;
};

const Pizza = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Pizza break</Text>
      <Text style={{padding: 10, fontSize: 42}}>
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        onChangeText={newText => setText(newText)}
        defaultValue="Hello, world!"
      />
    </View>
  );
};

const Cat = (props: CatProps) => {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Hello, {getFullName('Rum', 'Tum', 'Tugger')}!</Text>
      <Text>I am {props.name}!</Text>
      <Text>
        I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Give me some food, please!' : 'Thank you!'}
      />
    </View>
  );
};

const CatCafePage = () => {
  return (
    <ScrollView style={{flex:1}}>
      <Cat name="Maru" />
      <Cat name="Jellylorum" />
      <Pizza />
      <Cat name="Spot" />
      <Cat name="Munkustrap" />
      <Cat name="Spot" />
    </ScrollView>
  );
};

export default CatCafePage;

