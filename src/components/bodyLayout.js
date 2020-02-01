import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  TouchableHighlight,
  Alert
} from "react-native";

const styles = StyleSheet.create({
  body: {
    flex: 0.75,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },

  gridcat: {
    backgroundColor: "rgba(247, 255, 247,.8)",
    color: "#1A535C",
    width: 300,
    height: 300,
    borderColor: "#E89D9D",
    borderWidth: 2
  },

  box: {
    borderWidth: 2,
    width: 100,
    height: 100,
    borderColor: "#E89D9D"
  },
  image: {
    marginLeft: 12,
    marginTop: 12
  },
  viewTurn: {
    flexDirection: "row",
    alignContent: "center",
    marginLeft: 30,
    marginBottom: 10
  },
  turn: {
    fontSize: 25,
    color: "#343399",
    fontWeight: "bold",
    marginTop: 20
  },
  kitty: {
    width: 40,
    height: 40
  },
  reset: {
    width: 300,
    height: 40,
    backgroundColor: "#FF4864",
    marginTop: 20,
    borderRadius: 20,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center"
  },
  resettext: {
    letterSpacing: 3,
    fontSize: 25,
    borderStyle: "dotted",
    color: "rgba(247, 255, 247,.95)",
    fontWeight: "bold"
  }
});
function Body() {
  const [currentUser, setCurrentUser] = useState(1);
  const [grid, setGrid] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]);
  const showKitty = currentUser => {
    if (currentUser === 1) {
      return (
        <View style={styles.image}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../../assets/kittypink.png")}
          />
        </View>
      );
    } else if (currentUser === -1) {
      return (
        <View style={styles.image}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../../assets/kittyred.png")}
          />
        </View>
      );
    } else {
      return <View />;
    }
  };
  // muestra al jugador en una posicion determinada, segun su turno
  const showPosition = (row, col) => {
    let position = grid[row][col];
    switch (position) {
      case 1:
        return (
          <View style={styles.image}>
            <Image
              style={{ width: 60, height: 60 }}
              source={require("../../assets/kittypink.png")}
            />
          </View>
        );
      case -1:
        return (
          <View style={styles.image}>
            <Image
              style={{ width: 60, height: 60 }}
              source={require("../../assets/kittyred.png")}
            />
          </View>
        );
      default:
        return <View />;
    }
  };

  const reset = () => {
    setGrid([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]);
    setCurrentUser(1);
  };

  /*  const [cat1, setCat1]=useState(0);
 const [cat2, setCat2]=useState(0);
 */
  const pressSquare = (row, col) => {
    if (grid[row][col] !== 0) {
      return;
    }
    const newGrid = grid.slice();
    newGrid[row][col] = currentUser;
    setGrid(newGrid);
    setCurrentUser(currentUser * -1);
    //chequeando ganador
    const catwinner = validedlines();
    if (catwinner == 1) {
      Alert.alert("Gana Kitty Pink");
    } else if (catwinner == -1) {
      Alert.alert("Gana Kitty Red");
    }
    

  };
  const validedlines = () => {
    const lenghtarr = 3;
    const positionGrid = grid;
    let sumArr;

    //chequear filas
    for (let i = 0; i < lenghtarr; i++) {
      sumArr = positionGrid[i][0] + positionGrid[i][1] + positionGrid[i][2];
      if (sumArr == 3) {
        return 1;
      } else if (sumArr == -3) {
        return -1;
      }
    }
    //chequear colunas
    for (let i = 0; i < lenghtarr; i++) {
      sumArr = positionGrid[0][i] + positionGrid[1][i] + positionGrid[2][i];
      if (sumArr == 3) {
        return 1;
      } else if (sumArr == -3) {
        return -1;
      }
    }

    //chequear diagonales
    sumArr = positionGrid[0][0] + positionGrid[1][1] + positionGrid[2][2];
    if (sumArr == 3) {
      return 1;
    } else if (sumArr == -3) {
      return -1;
    }

    sumArr = positionGrid[2][0] + positionGrid[1][1] + positionGrid[0][2];
    if (sumArr == 3) {
      return 1;
    } else if (sumArr == -3) {
      return -1;
    }
    return 0;
  };
  return (
    <View style={styles.body}>
      <View style={styles.viewTurn}>
        <Text style={styles.turn}>Turno: </Text>
        {showKitty(currentUser)}
      </View>
      <View style={styles.gridcat}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => {
              pressSquare(0, 0);
            }}
            style={styles.box}
          >
            {showPosition(0, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              pressSquare(0, 1);
            }}
            style={styles.box}
          >
            {showPosition(0, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              pressSquare(0, 2);
            }}
            style={styles.box}
          >
            {showPosition(0, 2)}
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => {
              pressSquare(1, 0);
            }}
            style={styles.box}
          >
            {showPosition(1, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              pressSquare(1, 1);
            }}
            style={styles.box}
          >
            {showPosition(1, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              pressSquare(1, 2);
            }}
            style={styles.box}
          >
            {showPosition(1, 2)}
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => {
              pressSquare(2, 0);
            }}
            style={styles.box}
          >
            {showPosition(2, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              pressSquare(2, 1);
            }}
            style={styles.box}
          >
            {showPosition(2, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              pressSquare(2, 2);
            }}
            style={styles.box}
          >
            {showPosition(2, 2)}
          </TouchableOpacity>
        </View>
      </View>
      <TouchableHighlight
        onPress={() => {
          reset();
        }}
        underlayColor="rgba(247, 255, 247,.65)"
        style={styles.reset}
      >
        <Text style={styles.resettext}>Reiniciar</Text>
      </TouchableHighlight>
    </View>
  );
}

export default Body;
