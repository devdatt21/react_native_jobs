import React from 'react'
import { TouchableOpacity, Image} from 'react-native'

import styles from './screenheader.style'
import { icons } from '../../../constants'

const ScreenHeaderBtn = ({iconUrl, dimension, handlePress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer }>
      <Image 
        //here iconUrl we are passing it through props
        source={iconUrl}
        resizeMode = "cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn