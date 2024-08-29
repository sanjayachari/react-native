import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Item = ({ item }) => {
  // console.log("Rendering item:", item); // Debug log
  return (
    <View style={styles.listItemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemDetail}>{item.email}</Text>
      <Text style={styles.itemDetail}>{item.phone}</Text>
    </View>
  );
};

const Bg1 = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API = "https://jsonplaceholder.typicode.com/users";

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(API);
      console.log("Data fetched:", res.data); // Debug log
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>List of Users</Text>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContentContainer}
        />
      )}
    </SafeAreaView>
  );
};

export default Bg1;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c7ecee",
    paddingTop: StatusBar.currentHeight,
    marginBottom:120,
    // borderWidth: 2,
    // borderColor: "#000",
    // borderRadius: 8,

  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#333",
    // borderWidth: 2,
    // borderColor: "#000",
    // borderRadius: 8,
  
  },
  listContentContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  listItemContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
    
  },
  itemDetail: {
    fontSize: 16,
    color: "#666",
    lineHeight: 22,
  },
});
