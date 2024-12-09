// add a home page component
import React from 'react';
import type {PropsWithChildren} from 'react';
import {Pressable, Text, View} from 'react-native';

type SectionProps = PropsWithChildren<{
  text: string;
  onClick: () => void;
}>;

export default function MyButton({
  text,
  onClick,
}: SectionProps): React.JSX.Element {
  return (
    <Pressable
      onPress={onClick}
      style={{padding: 16, backgroundColor: 'grey', margin: 8}}>
      <View>
        <Text style={{textAlign: 'center', color: 'white'}}>{text}</Text>
      </View>
    </Pressable>
  );
}
