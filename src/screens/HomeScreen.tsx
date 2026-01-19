import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { useAppDispatch, useAppSelector } from '../hooks';
import { deleteProfile } from '../redux/profileSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const profiles = useAppSelector(state => state.profile.profiles);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Button title="+ Add Profile" onPress={() => navigation.navigate('StepOne')} />

      <FlatList
        data={profiles}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.fullName}</Text>
            <Text>{item.email}</Text>
            <Button title="Delete" onPress={() => dispatch(deleteProfile(item.id))} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,               // REQUIRED
    padding: 16,
    backgroundColor: '#000000',
  },
  card: {
    borderWidth: 1,
    padding: 12,
    marginVertical: 8,
    borderRadius: 6,
  },
  name: { fontWeight: 'bold' },
});
