import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

export default function FirstAnimate() {
  // states
  const [baseLoading, setBaseLoading] = useState([1, 1, 1])
  const [currentBasePlayer, setCurrentBasePlayer] = useState(1)

  // shared value
  // player1 animate Style
  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)

  // player2 animate Style
  const translateX2 = useSharedValue(0)
  const translateY2 = useSharedValue(0)

  // player3 animate Style
  const translateX3 = useSharedValue(0)
  const translateY3 = useSharedValue(0)

  // player4 animate Style
  const translateX4 = useSharedValue(0)
  const translateY4 = useSharedValue(0)

  const animatePlayer1 = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    }
  }, [])

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
    let baseTotal = baseLoading.reduce((acc, val) => acc + val)
    switch (baseTotal) {
      case 0: // [0,0,0]
        // Player1
        ;(translateX.value = withSpring(0)),
          (translateY.value = withSpring(170)),
          setBaseLoading([1, 0, 0])
        break
      case 1: // [0,0,0]
        if (baseLoading[0] && !baseLoading[1] && !baseLoading[2]) {
          // Player 1
          ;(translateX.value = withSpring(175)),
            (translateY.value = withSpring(180)),
            // Player 2
            (translateX2.value = withSpring(0)),
            (translateY2.value = withSpring(170)),
            setBaseLoading([1, 1, 0])
        } else if (baseLoading[0] && baseLoading[1] && baseLoading[2]) {
          // Player 1
          ;(translateX.value = withSpring(175)),
            (translateY.value = withSpring(180)),
            // Player 2
            (translateX2.value = withSpring(0)),
            (translateY2.value = withSpring(170)),
            // Player 3
            (translateX3.value = withSpring(0)),
            (translateY3.value = withSpring(0)),
            // Player 4
            (translateX4.value = withSpring(180)),
            (translateY4.value = withSpring(0)),
            setBaseLoading([1, 1, 1])
        }
        break
      case 2:
        if (baseLoading[0] && baseLoading[1] && !baseLoading[2]) {
          // Player 1
          ;(translateX.value = withSpring(180)),
            (translateY.value = withSpring(0)),
            // Player 2
            (translateX2.value = withSpring(175)),
            (translateY2.value = withSpring(180)),
            // Player 3
            (translateX3.value = withSpring(0)),
            (translateY3.value = withSpring(170)),
            setBaseLoading([1, 1, 1])
        } else if (baseLoading[0] && baseLoading[1] && baseLoading[2]) {
          // Player 1
          ;(translateX.value = withSpring(180)),
            (translateY.value = withSpring(0)),
            // Player 2
            (translateX2.value = withSpring(175)),
            (translateY2.value = withSpring(180)),
            // Player 3
            (translateX3.value = withSpring(0)),
            (translateY3.value = withSpring(170)),
            // Player 4
            (translateX4.value = withSpring(0)),
            (translateY4.value = withSpring(0)),
            setBaseLoading([1, 1, 1])
        }
        break
      case 3:
        // Player 1
        ;(translateX.value = withSpring(0)),
          (translateY.value = withSpring(0)),
          // Player 2
          (translateX2.value = withSpring(180)),
          (translateY2.value = withSpring(0)),
          // Player 3
          (translateX3.value = withSpring(175)),
          (translateY3.value = withSpring(180)),
          // Player 4
          (translateX4.value = withSpring(0)),
          (translateY4.value = withSpring(170)),
          setBaseLoading([1, 1, 1])
        break
    }
  }

  // ################# 2B ##################
  // ################# 2B ##################
  function animate2B() {
    let baseTotal = baseLoading.reduce((acc, val) => acc + val)
    switch (baseTotal) {
      case 0:
        if (!baseLoading[0] && !baseLoading[1] && !baseLoading[2]) {
          ;(translateX.value = withSequence(withTiming(0), withTiming(175))),
            (translateY.value = withSequence(withTiming(170), withTiming(180))),
            setBaseLoading([0, 1, 0])
        } else if (!baseLoading[0] && baseLoading[1] && !baseLoading[2]) {
          // Player 1
          ;(translateX.value = withSequence(withTiming(0), withTiming(175))),
            (translateY.value = withSequence(withTiming(170), withTiming(180))),
            // Player 2
            (translateX3.value = withSequence()),
            (translateY3.value = withSequence(withTiming(0), withTiming(0))),
            setBaseLoading([0, 1, 0])
        }
        break
      case 1:
        if (!baseLoading[0] && baseLoading[1] && !baseLoading[2]) {
          // Player 1
          ;(translateX.value = withSequence(withTiming(175), withTiming(0))),
            (translateY.value = withSequence(withTiming(0), withTiming(0))),
            // Player 2
            (translateX3.value = withSequence(withTiming(0), withTiming(175))),
            (translateY3.value = withSequence(withTiming(170), withTiming(180)))
        }
        break
    }
  }

  // ################# 3B ##################
  // ################# 3B ##################
  function animate3B() {
    switch (baseTotal) {
      case 0:
        if (!baseLoading[0] && !baseLoading[1] && !baseLoading[2]) {
          // Player 1
          ;(translateX.value = withSequence(
            withTiming(0),
            withTiming(175),
            withTiming(175),
          )),
            (translateY.value = withSequence(
              withTiming(170),
              withTiming(180),
              withTiming(0),
            )),
            setBaseLoading([0, 0, 1])
        } else if (!baseLoading[0] && !baseLoading[1] && baseLoading[2]) {
          // Player 1
          ;(translateX.value = withSequence(
            withTiming(0),
            withTiming(175),
            withTiming(175),
          )),
            (translateY.value = withSequence(
              withTiming(170),
              withTiming(180),
              withTiming(0),
            )),
            // Player 4
            (translateX4.value = withTiming(0)),
            (translateY4.value = withTiming(0)),
            setBaseLoading([0, 0, 1])
        }
        break
      case 1:
        if (!baseLoading[0] && !baseLoading[1] && baseLoading[2]) {
          // Player 1
          ;(translateX.value = withTiming(0)),
            (translateY.value = withTiming(0)),
            // Player 4
            (translateX4.value = withSequence(
              withTiming(0),
              withTiming(175),
              withSpring(175),
            )),
            (translateY4.value = withSequence(
              withTiming(170),
              withTiming(180),
              withSpring(0),
            ))
          setBaseLoading([0, 0, 1])
        }
        break
    }
  }

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

  useEffect(() => {
    ;(async function placeholder() {
      console.log(baseLoading)
    })()
  }, [baseLoading])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>baseLoading: {baseLoading}</Text>

      <View style={styles.square}>
        <Animated.View
          style={[
            styles.imgContainer,
            { position: 'absolute' },
            animatePlayer1,
          ]}>
          <Text>1</Text>
          <Animated.Image
            source={require('../../assets/asset2.png')}
            style={styles.imgStyle}
          />
        </Animated.View>

        {baseLoading[0] ? (
          <Image
            source={require('../../assets/asset2.png')}
            style={[styles.imgStyle, { top: hp('20%'), right: wp('40%') }]}
          />
        ) : null}

        {baseLoading[1] ? (
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/asset2.png')}
              style={[styles.imgStyle, { top: hp('22%'), right: wp('-10%') }]}
            />
          </View>
        ) : null}

        {baseLoading[2] ? (
          <Image
            source={require('../../assets/asset2.png')}
            style={[styles.imgStyle, { top: -15, left: wp('45%') }]}
          />
        ) : null}
      </View>

      <View style={styles.btnGroup}>
        <TouchableOpacity style={styles.btnStyle} onPress={() => animate1B()}>
          <Text style={styles.btnText}>1B</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => setBaseLoading([0, 1, 0])}>
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
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    width: 55,
  },
  imgStyle: {
    transform: [{ rotate: '130deg' }],
    position: 'absolute',
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
