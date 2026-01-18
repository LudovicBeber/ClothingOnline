import { Text, View, StyleSheet, FlatList } from "react-native"
import { fetchAllClothes } from "../../services/clothesService";
import { useState, useEffect } from "react";
import { useAsyncStorageState } from "../../hooks/useAsyncStorageState";
import ClothesListRow from "../../components/ClothesListRow";
import ListSeparator from "../../components/ListSeparator";
import ListEmpty from "../../components/ListEmpty"

const ClothesListScreen = (navigation) => {

    const [data, setData] = useState({});
    const [loading, setLoading] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
            
            async function loadClothes() {
                const clothes = await fetchAllClothes();

                setData(clothes);
            }

            loadClothes();
        
    }, [])

    return (
        <View style={styles.container}>
            <Text>Liste de vêtements disponibles :</Text>
            {loading ? (
                <Text>Chargement en cours...</Text>
            ) : !!error ? (
                <Text style={{ color: "red" }}>{error}</Text>
            ) : (
                <FlatList 
                    data={data}
                    renderItem={({item}) => <ClothesListRow cloth={item} navigation={navigation} />}
                    ItemSeparatorComponent={ListSeparator}
                    keyExtractor={item => item._id}
                    ListEmptyComponent={ListEmpty}
                />
            )}
        </View>
    );

}

export default ClothesListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
});