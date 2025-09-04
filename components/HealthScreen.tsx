import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'; 

const statesData = [
  { key: 'ka', value: 'Karnataka' },
  { key: 'mh', value: 'Maharashtra' },
];

const districtsData: { [key: string]: { key: string; value: string }[] } = {
  ka: [
    { key: 'bl', value: 'Bangalore' },
    { key: 'mg', value: 'Mangalore' },
  ],
  mh: [
    { key: 'mb', value: 'Mumbai' },
    { key: 'pu', value: 'Pune' },
  ],
};

const talukasData: { [key: string]: { key: string; value: string }[] } = {
  bl: [
    { key: 'ec', value: 'East City' },
    { key: 'wc', value: 'West City' },
  ],
  mg: [
    { key: 'nm', value: 'North Mangalore' },
    { key: 'sm', value: 'South Mangalore' },
  ],
  mb: [
    { key: 'cs', value: 'CST Area' },
    { key: 'bs', value: 'Bandra South' },
  ],
  pu: [
    { key: 'cp', value: 'Camp Area' },
    { key: 'kp', value: 'Koregaon Park' },
  ],
};

const HealthScreen = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedTaluka, setSelectedTaluka] = useState('');

  return (
    <View className="flex-1 bg-white px-6 py-8">
      <Text className="text-3xl font-bold mb-8 text-center">Health</Text>

      {/* Step 1 */}
      <Text className="mb-2 text-lg font-semibold">Step 1</Text>
      <SelectList
        setSelected={setSelectedState}
        data={statesData}
        placeholder="State"
        boxStyles={{
          backgroundColor: '#F0F0F0',
          borderRadius: 8,
          marginBottom: 16,
        }}
      />

      {/* Step 2 */}
      <Text className="mb-2 text-lg font-semibold">Step 2</Text>
      <SelectList
        setSelected={setSelectedDistrict}
        data={selectedState ? districtsData[selectedState] : []}
        placeholder="District"
        boxStyles={{
          backgroundColor: '#F0F0F0',
          borderRadius: 8,
          marginBottom: 16,
        }}
      />

      {/* Step 3 */}
      <Text className="mb-2 text-lg font-semibold">Step 3</Text>
      <SelectList
        setSelected={setSelectedTaluka}
        data={selectedDistrict ? talukasData[selectedDistrict] : []}
        placeholder="Taluka"
        boxStyles={{
          backgroundColor: '#F0F0F0',
          borderRadius: 8,
          marginBottom: 20,
        }}
      />
      {/* Search Button */}
      <TouchableOpacity
        className="bg-gray-100 rounded-lg py-4 mb-6"
        disabled={!selectedTaluka}
      >
        <Text className="text-md font-semibold text-center text-gray-700">
          Search Button
        </Text>
      </TouchableOpacity>

      {/* Hospital list preview */}
      <Text className="mt-2 text-base text-gray-700">
        List of : Hospital list preview
      </Text>
    </View>
  );
};

export default HealthScreen;
