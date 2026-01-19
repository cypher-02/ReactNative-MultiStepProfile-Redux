import { View, TextInput, Button, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { useAppDispatch } from '../hooks';
import { updateDraft } from '../redux/profileSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'StepTwo'>;

export default function StepTwo({ navigation }: Props) {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="City"
        style={styles.input}
        onChangeText={t => dispatch(updateDraft({ city: t }))}
      />
      <TextInput
        placeholder="State"
        style={styles.input}
        onChangeText={t => dispatch(updateDraft({ state: t }))}
      />
      <TextInput
        placeholder="Country"
        style={styles.input}
        onChangeText={t => dispatch(updateDraft({ country: t }))}
      />
      <Button title="Back" onPress={() => navigation.goBack()} />
      <Button title="Next" onPress={() => navigation.navigate('Summary')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: {
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
    borderRadius: 6,
  },
});
