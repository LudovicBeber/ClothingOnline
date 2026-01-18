import { Pressable, StyleSheet, Text, View } from "react-native"

const ClothesListRow = ({cloth, navigation}) => {

    function handleRowPressed() {
        navigation.navigate('ClothesDetails', cloth)
    }

    return (
        <Pressable
            onPress={handleRowPressed}
        >
            <Text>{cloth.title}</Text>
            <View style={styles.container_price_rating}>
                <Text>{cloth.price}</Text>
                <Text>{cloth.rating.rate}/5</Text>
            </View>
        </Pressable>
    );

}

export default ClothesListRow;

const styles = StyleSheet.create({

    container_price_rating: {
        flexDirection: "row",
        justifyContent: "space-between"
    }

})