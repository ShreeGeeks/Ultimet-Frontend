import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import { Button, Icon } from 'react-native-paper';

const data = [
  {
    id: '1',
    name: 'Shubham',
    jobRole: 'Worker level 1',
    inTime: '7:00 AM',
    outTime: '3:00 PM',
    totalHours: '8 Hr',
  },
  {
    id: '2',
    name: 'Kanishk',
    jobRole: 'Worker level 1',
    inTime: '9:00 AM',
    outTime: '5:00 PM',
    totalHours: '8 Hr',
  },
  {
    id: '3',
    name: 'Chhavvi',
    jobRole: 'Worker level 1',
    inTime: '10:00 AM',
    outTime: '6:00 PM',
    totalHours: '8 Hr',
  },
  {
    id: '4',
    name: 'Sujeet',
    jobRole: 'Worker level 1',
    inTime: '7:00 AM',
    outTime: '3:00 PM',
    totalHours: '8 Hr',
  },
];

export default function AttendanceList({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.iconPlaceholder} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.details}>Job Role: {item.jobRole}</Text>
        <Text style={styles.details}>In Time: {item.inTime}</Text>
        <Text style={styles.details}>Out Time: {item.outTime}</Text>
        <Text style={styles.totalHours}>Total: {item.totalHours}</Text>
      </View>
    </View>
  );

  const onBackPressed = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }
  return (
    <>
      {/* Header with Back Button */}
      <View style={styles.headerContainer}>
      <Button onPress={onBackPressed}  icon={require('../assets/arrow_back.png')}/>
        <Header title="Attendance List" />
      </View>

      <View style={styles.container}>
      <Text style={styles.header}>Attendance List</Text>
        <Text style={styles.date}>2 Aug 2024</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginTop:20,
    marginBottom:10,
    backgroundColor: '#fff',
   
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  date: {
    fontSize: 16,
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EDEEEE',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  iconPlaceholder: {
    width: 50,
    height: 50,
    backgroundColor: '#cccccc',
    borderRadius: 25,
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  totalHours: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
