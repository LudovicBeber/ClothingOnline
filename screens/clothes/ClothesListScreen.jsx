import { Text, View, StyleSheet, FlatList } from "react-native";
import { fetchAllClothes } from "../../services/clothesService";
import { useState, useEffect } from "react";
import { useAsyncStorageState } from "../../hooks/useAsyncStorageState";
import ClothesListRow from "../../components/ClothesListRow";
import ListSeparator from "../../components/ListSeparator";
import ListEmpty from "../../components/ListEmpty";
const ClothesListScreen = (navigation) => {

    const [clothes, setClothes] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const {
    value: localData,
    setValue: setLocalData,
    loading: localDataLoading,
    error: localDataError,
  } = useAsyncStorageState("local_data", clothes);

    useEffect(() => {
            
            async function loadClothes() {

                try {
                    setLoading(true);
                    console.log(localData);
                    
                    const data = await fetchAllClothes();
                    const properData = localData.length ? localData : data;

                    setLocalData({
                        clothes: properData
                    })
                    setClothes(properData);
                } catch (error) {
                    setError(error.message)
                } finally {
                    setLoading(false);
                }

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
                    data={clothes}
                    renderItem={({item}) => <ClothesListRow cloth={item} navigation={navigation} />}
                    ItemSeparatorComponent={ListSeparator}
                    keyExtractor={item => item.id}
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