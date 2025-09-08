import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { GraduationCap } from "lucide-react-native";

const statesData = [
  { key: "ka", value: "Karnataka" },
  { key: "mh", value: "Maharashtra" },
];

const districtsData : { [key: string]: { key: string; value: string }[] } = {
  ka: [
    { key: "bl", value: "Bangalore" },
    { key: "mg", value: "Mangalore" },
  ],
  mh: [
    { key: "mb", value: "Mumbai" },
    { key: "pu", value: "Pune" },
  ],
};

const talukasData: { [key: string]: { key: string; value: string }[] } = {
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

const EducationScreen = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedTaluka, setSelectedTaluka] = useState("");
  const [searchTriggered, setSearchTriggered] = useState(false);

  const handleSearch = () => {
    if (selectedTaluka) {
      setSearchTriggered(true);
    }
  };

  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 24, paddingVertical: 32 }}
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <Text className="text-2xl font-bold mb-10 text-purple-600 text-center">
          Education
        </Text>

        {/* Step 1 */}
        <Text className="mb-2 text-lg font-semibold text-gray-700">Step 1</Text>
        <SelectList
          setSelected={setSelectedState}
          data={statesData}
          placeholder="Select State"
          boxStyles={{
            backgroundColor: "#fff",
            borderRadius: 12,
            marginBottom: 16,
            borderColor: "#ddd",
            borderWidth: 1,
          }}
        />

        {/* Step 2 */}
        <Text className="mb-2 text-lg font-semibold text-gray-700">Step 2</Text>
        <SelectList
          setSelected={setSelectedDistrict}
          data={selectedState ? districtsData[selectedState] : []}
          placeholder="Select District"
          boxStyles={{
            backgroundColor: "#fff",
            borderRadius: 12,
            marginBottom: 16,
            borderColor: "#ddd",
            borderWidth: 1,
          }}
        />

        {/* Step 3 */}
        <Text className="mb-2 text-lg font-semibold text-gray-700">Step 3</Text>
        <SelectList
          setSelected={setSelectedTaluka}
          data={selectedDistrict ? talukasData[selectedDistrict] : []}
          placeholder="Select Taluka"
          boxStyles={{
            backgroundColor: "#fff",
            borderRadius: 12,
            marginBottom: 24,
            borderColor: "#ddd",
            borderWidth: 1,
          }}
        />

        {/* Search Button */}
        <TouchableOpacity
          className={`rounded-2xl py-4 mb-10 shadow-md ${
            selectedTaluka
              ? "bg-gradient-to-r from-purple-500 to-purple-600"
              : "bg-gray-300"
          }`}
          disabled={!selectedTaluka}
          onPress={handleSearch}
        >
          <Text
            className={`text-md font-semibold text-center ${
              selectedTaluka ? "text-white" : "text-gray-500"
            }`}
          >
            Search Schools
          </Text>
        </TouchableOpacity>

        {/* Schools List Preview (Sample) */}
        {searchTriggered ? (
          <View className="pb-10">
            <Text className="text-lg font-bold mb-4 text-purple-600">
              Available Schools
            </Text>
            {[1, 2, 3, 4, 5].map((_, i) => (
              <View
                key={i}
                className="flex-row items-center bg-white rounded-xl p-4 mb-3 shadow-sm border border-gray-100"
              >
                <GraduationCap color="#7c3aed" size={24} />
                <View className="ml-3">
                  <Text className="font-semibold text-gray-800">
                    School {i + 1}
                  </Text>
                  <Text className="text-sm text-gray-500">Address details here</Text>
                </View>
              </View>
            ))}
          </View>
        ) : (
          <Text className="mt-2 text-base text-gray-500 italic text-center">
            Please select State, District, and Taluka to search schools
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

export default EducationScreen;
