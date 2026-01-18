import { useState } from "react";
import { Text, View, StyleSheet, TextInput, Pressable } from "react-native"

const ClothesFormScreen = ({route, navigation}) => {

    const clothParams = route.params;

    const [id, setId] = useState(clothParams ? clothParams.id  : "");
    const [title, setTitle] = useState(clothParams ? clothParams.title  : "");
    const [price, setPrice] = useState(clothParams ? clothParams.price  : "");
    const [category, setCategory] = useState(clothParams ? clothParams.category  : "");
    const [description, setDescription] = useState(clothParams ? clothParams.description  : "");

    return (
        <View style={styles.container}>
            <Text>Formulaire de vêtement :</Text>
            <TextInput style={styles.input} onChange={setTitle} value={title} placeholder="Titre" />
            <TextInput style={styles.input} onChange={setPrice} value={String(price)} placeholder="Prix" />
            <TextInput style={styles.input} onChange={setCategory} value={category} placeholder="Catégorie" />
            <TextInput style={styles.input} onChange={setDescription} value={description} placeholder="Description" />
            <View style={styles.buttonContainer}>
                <Pressable
                    style={styles.saveButton}
                    // onPress={save}
                >
                    <Text style={styles.buttonText}>Enregistrer</Text>
                </Pressable>
                <Pressable
                    style={styles.cancelButton}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.buttonText}>Annuler</Text>
                </Pressable>
            </View>
        </View>
    );

}

export default ClothesFormScreen;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        gap: 10
    },
    input: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'black',
        backgroundColor: 'E1E1E1'
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 20
    },
    saveButton: {
        borderRadius: 4,
        padding: 4,
        backgroundColor: 'lightblue'
    },
    cancelButton: {
        borderRadius: 4,
        padding: 4,
        backgroundColor: 'red'
    },
    buttonText: {
        fontSize: 20
    }
})