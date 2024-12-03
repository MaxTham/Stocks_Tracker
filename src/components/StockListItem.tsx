import { Text, View } from "./Themed";
import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import { MonoText } from "./StyledText";
type Stock = {
  name: string;
  symbol: string;
  close: string;
  percent_change: string;
};
type StockListItem = {
  stock: Stock;
};
export default function StockListItem({ stock }: StockListItem) {
  const change = Number.parseFloat(stock.percent_change);
  const close = Number.parseFloat(stock.close).toFixed(2);

  return (
    <View style={styles.container}>
      {/* Left Container */}
      <View style={{ flex: 1, gap: 5 }}>
        <Text style={styles.symbol}>
          {stock.symbol} <AntDesign name="staro" size={18} color="grey" />
        </Text>
        <Text style={{ color: "grey" }}>{stock.name}</Text>
      </View>
      {/* Right Container */}
      <View style={{ alignItems: "flex-end" }}>
        <MonoText>${close}</MonoText>
        <MonoText style={{ color: change > 0 ? "green" : "red" }}>
          {change > 0 ? "+" : ""}
          {change.toFixed(2)}%
        </MonoText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  symbol: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.light.tint,
  },
  container: {
    flexDirection: "row",
  },
});
