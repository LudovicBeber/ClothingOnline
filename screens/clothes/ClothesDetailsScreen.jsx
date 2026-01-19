import { Pressable, StyleSheet, Text, View, Alert } from "react-native"
import { deleteCloth } from "../../services/clothesService";
import { useState } from "react";

const ClothesDetailsScreen = ({route, navigation}) => {

    const [error, setError] = useState("");

    const cloth = route.params || {};
    const clothRating = cloth.rating || {};

    function handleDeleteCloth() {
        
        try {
            deleteCloth(cloth.id);
            showAlert();
        } catch (error) {
            setError(error)
        }

        navigation.navigate('ClothesList');

    }

    const showAlert = () => Alert.alert('Vêtement supprimé !');

    return (
        <View style={styles.container}>
            <Text>Détails de l'article :</Text>
            <Text>{cloth.title}</Text>
            <Text>{cloth.price}€</Text>
            <Text>{cloth.category}</Text>
            <Text>{clothRating.rate}/5 selon {clothRating.count} avis</Text>
            <Text>{cloth.description}</Text>
            <View style={styles.buttonContainer}>
                <Pressable 
                    style={styles.editButton} 
                    onPress={() => {navigation.navigate('ClothesForm', cloth)}}
                >
                    <Text style={styles.buttonText}>Modifier</Text>
                </Pressable>
                <Pressable 
                    style={styles.deleteButton} 
                    onPress={handleDeleteCloth}
                >
                    <Text style={styles.buttonText}>Supprimer</Text>
                </Pressable>
            </View>
            {error &&
                <Text style={{ color: "red" }}>{error.message}</Text>
            }
        </View>
    );

}

export default ClothesDetailsScreen;

const styles = StyleSheet.create({

    container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 20
    },
    editButton: {
        borderRadius: 4,
        padding: 4,
        backgroundColor: 'lightblue'
    },
    deleteButton: {
        borderRadius: 4,
        padding: 4,
        backgroundColor: 'red'
    },
    buttonText: {
        fontSize: 20
    }

});