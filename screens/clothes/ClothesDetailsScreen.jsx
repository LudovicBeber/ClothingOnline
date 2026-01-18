import { Pressable, StyleSheet, Text, View } from "react-native"

const ClothesDetailsScreen = ({route, navigation}) => {

    const cloth = route.params || {};
    const clothRating = cloth.rating || {};
    console.log(cloth);
    
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
                    // onPress={() => {navigation.navigate('AddMovie', movie)}}
                >
                    <Text style={styles.buttonText}>Modifier</Text>
                </Pressable>
                <Pressable 
                    style={styles.deleteButton} 
                    // onPress={() => {deleteMovieById(movie.id)}}
                >
                    <Text style={styles.buttonText}>Supprimer</Text>
                </Pressable>
            </View>
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