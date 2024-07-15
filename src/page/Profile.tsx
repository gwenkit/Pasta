import React from 'react';
import {Text, View} from 'react-native';

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

type ProfileProps = {
  name: string;
};

const ProfilePage = (props: ProfileProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>This is {props.name}'s profile</Text>
    </View>
  );
};

export default ProfilePage;

