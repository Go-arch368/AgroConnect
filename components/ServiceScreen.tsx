import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { Settings } from "lucide-react-native";

const statesData = [
  { key: "ka", value: "Karnataka" },
  { key: "mh", value: "Maharashtra" },
];

const districtsData: {[key:string]:{key:string;  value:string}[] }= {
  ka: [
    { key: "bl", value: "Bangalore" },
    { key: "mg", value: "Mangalore" },
  ],
  mh: [
    { key: "mb", value: "Mumbai" },
    { key: "pu", value: "Pune" },
  ],
};

const talukasData :{[key:string ]:{key:string;value:string}[]}= {
  bl: [
    { key: "ec", value: "East City" },
    { key: "wc", value: "West City" },
  ],
  mg: [
    { key: "nm", value: "North Mangalore" },
    { key: "sm", value: "South Mangalore" },
  ],
  mb: [
    { key: "cs", value: "CST Area" },
    { key: "bs", value: "Bandra South" },
  ],
  pu: [
    { key: "cp", value: "Camp Area" },
    { key: "kp", value: "Koregaon Park" },
  ],
};

const ServiceScreen = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedTaluka, setSelectedTaluka] = useState("");
  const [searchTriggered, setSearchTriggered] = useState(false);

  const handleSearch = () => {
    if (selectedTaluka) setSearchTriggered(true);
  };

  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 24, paddingVertical: 32 }}
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps="handled"
      >
        <Text className="text-2xl font-bold mb-10 text-purple-600 text-center">Services</Text>

        <Text className="mb-2 text-lg font-semibold text-gray-700">Step 1</Text>
        <SelectList
          setSelected={setSelectedState}
          data={statesData}
          placeholder="Select State"
          boxStyles={{ backgroundColor: "#fff", borderRadius: 12, marginBottom: 16, borderColor: "#ddd", borderWidth: 1 }}
        />

        <Text className="mb-2 text-lg font-semibold text-gray-700">Step 2</Text>
        <SelectList
          setSelected={setSelectedDistrict}
          data={selectedState ? districtsData[selectedState] : []}
          placeholder="Select District"
          boxStyles={{ backgroundColor: "#fff", borderRadius: 12, marginBottom: 16, borderColor: "#ddd", borderWidth: 1 }}
        />

        <Text className="mb-2 text-lg font-semibold text-gray-700">Step 3</Text>
        <SelectList
          setSelected={setSelectedTaluka}
          data={selectedDistrict ? talukasData[selectedDistrict] : []}
          placeholder="Select Taluka"
          boxStyles={{ backgroundColor: "#fff", borderRadius: 12, marginBottom: 24, borderColor: "#ddd", borderWidth: 1 }}
        />

       <TouchableOpacity
      style={{
        borderRadius: 16,
        paddingVertical: 16,
        marginBottom: 40,
        backgroundColor: selectedTaluka ? "#7c3aed" : "#d1d5db", // fallback to solid color
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 1 },
      }}
      disabled={!selectedTaluka}
      onPress={handleSearch}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: "600",
          color: selectedTaluka ? "#fff" : "#6b7280",
          textAlign: "center",
        }}
      >
        Search Services
      </Text>
    </TouchableOpacity>

        {searchTriggered ? (
          <View className="pb-10">
            <Text className="text-lg font-bold mb-4 text-purple-600">Available Services</Text>
            {[1, 2, 3, 4, 5].map((_, i) => (
              <View key={i} className="flex-row items-center bg-white rounded-xl p-4 mb-3 shadow-sm border border-gray-100">
                <Settings color="#7c3aed" size={24} />
                <View className="ml-3">
                  <Text className="font-semibold text-gray-800">Service {i + 1}</Text>
                  <Text className="text-sm text-gray-500">Service details here</Text>
                </View>
              </View>
            ))}
          </View>
        ) : (
          <Text className="mt-2 text-base text-gray-500 italic text-center">Please select State, District, and Taluka to search for services</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default ServiceScreen;
