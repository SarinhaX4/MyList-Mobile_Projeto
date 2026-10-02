import { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Header from './src/components/Header';
import Input from './src/components/Input';
import Button from './src/components/Button';
import Counter from './src/components/Counter';
import { theme } from './src/theme';

export default function App() {
  const [task, setTask] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Header />
      </View>

      <View style={styles.content}>
        <View style={styles.form}>
          <Input value={task} onChangeText={setTask} />
          <Button onPress={() => {}} />
        </View>

        <View style={styles.counters}>
          <Counter title="Criadas" count={5} color={theme.colors.cyan} />
          <Counter title="Concluídas" count={2} color={theme.colors.blue} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    height: 173,
    backgroundColor: theme.colors.headerBackground,
    justifyContent: 'flex-end',
    paddingBottom: 24,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 16,
  },
  counters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 38,
  },
});
