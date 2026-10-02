import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../theme';

export default function Header() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="format-list-checks"
        size={32}
        color={theme.colors.cyan}
      />

      <Text style={styles.title}>
        <Text style={styles.titleCyan}>My</Text>
        <Text style={styles.titleBlue}>List</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
  },
  titleCyan: {
    color: theme.colors.cyan,
  },
  titleBlue: {
    color: theme.colors.blue,
  },
});
