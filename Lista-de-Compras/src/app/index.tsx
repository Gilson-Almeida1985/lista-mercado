import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Index() {
  return (
    <View style={styles.container} >
      <Text style={styles.title}>Compras da Semana</Text>

      <TextInput
        style={styles.input}
        placeholder="Adicione um novo item"
        placeholderTextColor='#9CA3AF'
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Adicionar Item</Text>
      </TouchableOpacity>

      <View style={styles.cardContainer}>

        <View style={styles.card}>
          <View style={styles.infoCard}>
            <MaterialIcons name="check-box-outline-blank" size={20} color="#D1D5DB" />
            <Text style={styles.itemText}>Adicionar Item</Text>
          </View>
          <AntDesign name="delete" size={24} color="#D1D5DB" />
        </View>

        <View style={styles.card}>
          <View style={styles.infoCard}>
            <MaterialIcons name="check-box-outline-blank" size={20} color="#D1D5DB" />
            <Text style={styles.itemText}>Adicionar Item</Text>
          </View>
          <AntDesign name="delete" size={24} color="#D1D5DB" />
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 60,
    alignItems: 'center',
    backgroundColor: '#F4F5FB',
  },
  title: {
    color: "#111827",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 50,
  },
  input: {
    width: '100%',
    height: 44,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 12,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    width: "100%",
    height: 44,
    borderRadius: 12,
    backgroundColor: "#CA3884",
    alignItems: 'center',
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: "#fff",
  },
  itemText: {
    color: "#374151",
    fontSize: 16,
  },
  card: {
    width: "100%",
    height: 57,
    backgroundColor: '#ffffff',
    elevation: 15,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  cardContainer: {
    gap: 20,
  }
})