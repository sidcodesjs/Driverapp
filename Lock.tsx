import {Path} from "react-native-svg"
import { Rect } from "react-native-svg"
import * as React from "react"
import Svg from "react-native-svg"

const Lock = () => {
return(
  <Svg style={{marginTop:30}}
  // xmlns='http://www.w3.org/2000/svg'
  width={'140'}
  height={'140'}
  
  viewBox='0 0 24 24'
  // fill='#F9F6EE'
  stroke='#D8BFD8'
  strokeWidth='2'
  stroke-Linecap="round"
  stroke-Linejoin="round"
  // class='feather feather-lock'
  >
    <Rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
    <Path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </Svg>
)
}

export default Lock
