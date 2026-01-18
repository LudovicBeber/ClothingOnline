import { StyleSheet, Text, View } from "react-native"

const ClothesListRow = ({cloth, navigation}) => {

    return (
        <View>
            <Text>{cloth.title}</Text>
            <View style={styles.container_price_rating}>
                <Text>{cloth.price}</Text>
                <Text>{cloth.rating.rate}/5</Text>
            </View>
        </View>
    );

}

export default ClothesListRow;

const styles = StyleSheet.create({

    container_price_rating: {
        flexDirection: "row",
        justifyContent: "space-between"
    }

})