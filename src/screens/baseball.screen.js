import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
  runOnUI,
  runOnJS,
} from 'react-native-reanimated'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

export default function FirstAnimate() {
  // states
  const [baseLoading, setBaseLoading] = useState([0, 3, 0])
  const [currentBasePlayer, setCurrentBasePlayer] = useState(1)

  // shared value
  // player1 animate Style
  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)

  // player2 animate Style
  const translateX2 = useSharedValue(0)
  const translateY2 = useSharedValue(170)

  // player3 animate Style
  const translateX3 = useSharedValue(180)
  const translateY3 = useSharedValue(170)

  // player4 animate Style
  const translateX4 = useSharedValue(175)
  const translateY4 = useSharedValue(0)

  const animatePlayer1 = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    }
  })

  const animatePlayer2 = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX2.value },
        { translateY: translateY2.value },
      ],
    }
  })

  const animatePlayer3 = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX3.value },
        { translateY: translateY3.value },
      ],
    }
  })

  const animatePlayer4 = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX4.value },
        { translateY: translateY4.value },
      ],
    }
  })

  // ################# 1B ##################
  // ################# 1B ##################
  function animate1B() {
    // player on plate
    // needs to be done

    //first base
    if (baseLoading[0]) {
      switch (baseLoading[0]) {
        case 1:
          translateX.value = withTiming(180)
          translateY.value = withTiming(170)
          break
        case 2:
          translateX2.value = withTiming(180)
          translateY2.value = withTiming(170)
          break
        case 3:
          translateX3.value = withTiming(180)
          translateY3.value = withTiming(170)
          break
        case 4:
          translateX4.value = withTiming(180)
          translateY4.value = withTiming(170)
          break
        default:
          break
      }
    }

    //second base
    if (baseLoading[1]) {
      switch (baseLoading[1]) {
        case 1:
          translateX.value = withTiming(170)
          translateY.value = withTiming(0)
          break
        case 2:
          translateX2.value = withTiming(170)
          translateY2.value = withTiming(0)
          break
        case 3:
          translateX3.value = withTiming(180)
          translateY3.value = withTiming(0)
          setBaseLoading([0, 0, 3])
          break
        case 4:
          translateX4.value = withTiming(180)
          translateY4.value = withTiming(0)
          break
        default:
          break
      }
    }

    //third base
    if (baseLoading[2]) {
      switch (baseLoading[2]) {
        case 1:
          translateX.value = withTiming(0)
          translateY.value = withTiming(0)
          break
        case 2:
          translateX2.value = withTiming(0)
          translateY2.value = withTiming(0)
          break
        case 3:
          translateX3.value = withTiming(0)
          translateY3.value = withTiming(0)
          break
        case 4:
          translateX4.value = withTiming(0)
          translateY4.value = withTiming(0)
          break
        default:
          break
      }
    }
  }

  // ################# 2B ##################
  // ################# 2B ##################
  function animate2B() {
    if (baseLoading[2]) {
      translateX3.value = withTiming(0, {}, finished => {
        if (finished) {
          console.log('ANIMATION ENDED 2B')
        }
      })
      translateY3.value = withTiming(0)
    }
  }

  // ################# 3B ##################
  // ################# 3B ##################
  function animate3B() {}

  // ################# Homerun ##################
  // ################# Homerun ##################
  function animateHR() {
    setBaseLoading([0, 0, 0])
    ;(translateX.value = withSequence(
      withTiming(0),
      withTiming(175),
      withTiming(175),
      withTiming(0),
    )),
      (translateY.value = withSequence(
        withTiming(170),
        withTiming(180),
        withTiming(0),
        withTiming(0),
      ))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>baseLoading: {baseLoading}</Text>

      <View style={styles.square}>
        <Animated.View style={[styles.imgContainer, animatePlayer1]}>
          <Image
            source={require('../../assets/asset2.png')}
            style={styles.imgStyle}
          />
        </Animated.View>

        {baseLoading[0] ? (
          <Animated.View style={[styles.imgContainer, animatePlayer2]}>
            <Image
              source={require('../../assets/asset2.png')}
              style={styles.imgStyle}
            />
          </Animated.View>
        ) : null}

        {baseLoading[1] ? (
          <Animated.View style={[styles.imgContainer, animatePlayer3]}>
            <Image
              source={require('../../assets/asset2.png')}
              style={styles.imgStyle}
            />
          </Animated.View>
        ) : null}

        {baseLoading[2] === 1 ? (
          <Animated.View style={[styles.imgContainer, animatePlayer1]}>
            <Image
              source={require('../../assets/asset2.png')}
              style={styles.imgStyle}
            />
          </Animated.View>
        ) : null}

        {baseLoading[2] === 2 ? (
          <Animated.View style={[styles.imgContainer, animatePlayer2]}>
            <Image
              source={require('../../assets/asset2.png')}
              style={styles.imgStyle}
            />
          </Animated.View>
        ) : null}

        {baseLoading[2] === 3 ? (
          <Animated.View style={[styles.imgContainer, animatePlayer3]}>
            <Image
              source={require('../../assets/asset2.png')}
              style={styles.imgStyle}
            />
          </Animated.View>
        ) : null}

        {baseLoading[2] === 4 ? (
          <Animated.View style={[styles.imgContainer, animatePlayer4]}>
            <Image
              source={require('../../assets/asset2.png')}
              style={styles.imgStyle}
            />
          </Animated.View>
        ) : null}
      </View>

      <View style={styles.btnGroup}>
        <TouchableOpacity style={styles.btnStyle} onPress={() => animate1B()}>
          <Text style={styles.btnText}>1B</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnStyle} onPress={() => animate2B()}>
          <Text style={styles.btnText}>2B</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => setBaseLoading([0, 0, 1])}>
          <Text style={styles.btnText}>3B</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnStyle} onPress={() => animateHR()}>
          <Text style={styles.btnText}>HR</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnGroup: {
    marginTop: 50,
    flexDirection: 'row',
  },
  btnStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,255,0.7)',
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  imgContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    width: 55,
  },
  imgStyle: {
    transform: [{ rotate: '130deg' }],
    height: 50,
    width: 50,
  },
  square: {
    height: 200,
    width: 200,
    borderWidth: 2,
    borderColor: 'salmon',
    transform: [{ rotate: `225deg` }],
  },
  text: {
    marginBottom: 150,
  },
})
