// components/Card.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type CardProps = {
  title: string; // Título principal del card
  value?: string | number; // Valor de la card (opcional) 
  description?: string; // Descripción opcional
  onPress?: () => void; // Acción al presionar el card
  children?: React.ReactNode; // Contenido adicional (opcional)
};

const Card: React.FC<CardProps> = ({ title, value, description, onPress, children }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={onPress ? 0.7 : 1}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>{value}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
        {children && <View style={styles.childrenContainer}>{children}</View>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
  },
  childrenContainer: {
    marginTop: 8,
  },
});

export default Card;
