import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Search } from "lucide-react-native";

const SearchUsers = () => {
  const [searchValue, setSearchValue] = useState("");
  const [memberId, setMemberId] = useState("");

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Search size={34} color="#7c3aed" />
        <Text style={styles.headerText}>Search Member</Text>
      </View>

      {/* Search Card */}
      <View style={styles.card}>
        <Text style={styles.cardLabel}>Enter Mobile Number / Member ID</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. 9876543210 or MEM1234"
          placeholderTextColor="#9ca3af"
          value={searchValue}
          onChangeText={setSearchValue}
        />
        <TouchableOpacity style={styles.searchButton} onPress={() => setMemberId(searchValue)}>
          <Search color="#fff" size={20} />
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {/* Result Card */}
      <View style={styles.resultCard}>
        <Text style={styles.resultLabel}>Member ID</Text>
        <TextInput
          style={styles.resultInput}
          placeholder="Member ID"
          placeholderTextColor="#9ca3af"
          value={memberId}
          editable={false}
        />

        {/* Placeholder result fields */}
        <View style={styles.placeholderList}>
          <View style={styles.placeholderLine} />
          <View style={styles.placeholderLine} />
          <View style={styles.placeholderLine} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc", // tailwind bg-gray-50
    paddingHorizontal: 20,
    paddingVertical: 32,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
  },
  headerText: {
    marginLeft: 12,
    fontSize: 24,
    fontWeight: "bold",
    color: "#7c3aed",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    padding: 24,
    marginBottom: 32,
    elevation: 2
  },
  cardLabel: {
    fontWeight: "600",
    fontSize: 16,
    color: "#374151",
    marginBottom: 12,
  },
  input: {
    backgroundColor: "#f3f4f6",
    borderRadius: 12,
    height: 48,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb"
  },
  searchButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7c3aed",
    borderRadius: 16,
    paddingVertical: 16,
    marginBottom: 32,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  searchButtonText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
  },
  resultCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    padding: 24,
    alignItems: "center",
    elevation: 2
  },
  resultLabel: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#374151",
    marginBottom: 12,
  },
  resultInput: {
    backgroundColor: "#f3f4f6",
    borderRadius: 12,
    height: 48,
    width: "100%",
    paddingHorizontal: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    marginBottom: 12,
  },
  placeholderList: {
    width: "100%",
    marginTop: 8,
  },
  placeholderLine: {
    backgroundColor: "#f3f4f6",
    height: 16,
    borderRadius: 6,
    marginBottom: 8,
  },
});

export default SearchUsers;
