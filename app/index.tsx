import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Recipe Organizer</Text>
      <Text style={{ marginTop: 10 }}>Welcome!</Text>
    </View>
  );
}
