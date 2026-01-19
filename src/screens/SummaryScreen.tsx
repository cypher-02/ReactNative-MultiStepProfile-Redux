import { View, Text, Button, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { useAppDispatch, useAppSelector } from '../hooks';
import { saveProfile } from '../redux/profileSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'Summary'>;

export default function SummaryScreen({ navigation }: Props) {
  const dispatch = useAppDispatch();
  const draft = useAppSelector(state => state.profile.draft);

  return (
    <View style={styles.container}>
      {Object.entries(draft).map(([key, value]) => (
        <Text key={key} style={styles.text}>
          {key}: {String(value)}
        </Text>
      ))}

      <Button title="Edit" onPress={() => navigation.goBack()} />
      <Button
        title="Submit"
        onPress={() => {
          dispatch(saveProfile());
          navigation.navigate('Home');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  text: { marginBottom: 8 },
});
