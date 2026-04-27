import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';

export default function Index() {
  const handlePress = () => {
    Alert.alert('Botão pressionado!', 'Você clicou no botão.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu primeiro app 🚀</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEEB', // Azul mais suave
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#4682B4', // Azul mais escuro
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
