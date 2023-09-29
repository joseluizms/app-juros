import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ApplicationProvider, Layout, Text, Input, Button } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

export default function App() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState(null);

  const calculateCompoundInterest = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);
    const n = 1;

    if (isNaN(P) || isNaN(r) || isNaN(t)) {
      setResult('Por favor, insira valores válidos.');
      return;
    }

    const A = P * Math.pow(1 + r / n, n * t);
    setResult(`O valor futuro é ${A.toFixed(2)}`);
  };

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout style={styles.container}>
        <Text category='h1' style={styles.title}>
          Calculadora de Juros Compostos
        </Text>
        <Input
          style={styles.input}
          placeholder="Principal"
          keyboardType="numeric"
          onChangeText={text => setPrincipal(text)}
        />
        <Input
          style={styles.input}
          placeholder="Taxa de juros (%)"
          keyboardType="numeric"
          onChangeText={text => setRate(text)}
        />
        <Input
          style={styles.input}
          placeholder="Tempo (anos)"
          keyboardType="numeric"
          onChangeText={text => setTime(text)}
        />
        <Button onPress={calculateCompoundInterest}>
          Calcular
        </Button>
        {result && <Text category='p1' style={styles.result}>{result}</Text>}
      </Layout>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 20,
  },
  result: {
    marginTop: 20,
  },
});
