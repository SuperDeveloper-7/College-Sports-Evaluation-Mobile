import * as React from 'react';
import Svg, {
  SvgProps,
  Circle,
  Defs,
  Pattern,
  Use,
  Image,
} from 'react-native-svg';

export const AvatarThree = (props: SvgProps) => (
  <Svg {...props} width="40" height="40" viewBox="0 0 40 40" fill="none">
    <Circle
      cx={20}
      cy={20}
      r={19}
      fill="url(#a)"
      stroke="#384255"
      strokeWidth={2}
    />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox">
        <Use xlinkHref="#b" transform="scale(.00025)" />
      </Pattern>
      <Image
        id="b"
        width={4000}
        height={4000}
      />
    </Defs>
  </Svg>
);
export default AvatarThree;