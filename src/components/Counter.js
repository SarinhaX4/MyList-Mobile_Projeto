import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../theme';

export default function Counter({ title, count, color }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color }]}>{title}</Text>

      <View style={styles.badge}>
        <Text style={styles.badgeText}>{count}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  badge: {
    minWidth: 24,
    height: 19,
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: theme.colors.badge,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
});
