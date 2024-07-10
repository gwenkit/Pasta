import React, {useState} from 'react';
import {Button, TextInput, Text, ScrollView, View} from 'react-native';
import HelloWorld from './HelloWorld';

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
    <>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        onChangeText={newText => setText(newText)}
        defaultValue="Hello, world!"
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
    </>
  );
};

const Cat = (props: CatProps) => {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View>
      <Text>Hello, {getFullName('Rum', 'Tum', 'Tugger')}!</Text>
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
      <Pizza />
    </View>
  );
};

const Cafe = () => {
  return (
    <ScrollView style={{flex:1}}>
      <Text>Welcome!</Text>
      <Cat name="Maru" />
      <Cat name="Jellylorum" />
      <Cat name="Spot" />
      <Cat name="Munkustrap" />
      <Cat name="Spot" />
      <HelloWorld />
    </ScrollView>
  );
};

export default Cafe;

