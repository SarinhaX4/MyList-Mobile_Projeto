import { StyleSheet, TextInput } from 'react-native';
import { theme } from '../theme';

export default function Input({
  value,
  onChangeText,
  placeholder = 'Adicione algo a sua lista',
}) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={theme.colors.placeholder}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 54,
    backgroundColor: theme.colors.shape,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 6,
    paddingHorizontal: 16,
    fontSize: 16,
    color: theme.colors.text,
  },
});
