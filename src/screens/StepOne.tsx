import { View, TextInput, Button, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { useAppDispatch } from '../hooks';
import { updateDraft } from '../redux/profileSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'StepOne'>;

export default function StepOne({ navigation }: Props) {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Full Name"
        style={styles.input}
        onChangeText={t => dispatch(updateDraft({ fullName: t }))}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={t => dispatch(updateDraft({ email: t }))}
      />
      <TextInput
        placeholder="Age"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={t => dispatch(updateDraft({ age: Number(t) }))}
      />
      <Button title="Next" onPress={() => navigation.navigate('StepTwo')} />
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
