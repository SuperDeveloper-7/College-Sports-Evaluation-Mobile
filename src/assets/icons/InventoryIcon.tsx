import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { ITextProps } from 'native-base';

type Props = ITextProps & {
  color?: string;
};
export const InventoryIcon = ({ color }: Props) => (
  <Svg width="28" height="33" viewBox="0 0 28 33" fill="#ffffff">
    <Path
      fill={color}
      d="M7.217 8.095H7V4.857c0-1.288.553-2.523 1.538-3.434C9.522.512 10.858 0 12.25 0h3.5c1.392 0 2.728.512 3.712 1.423.985.91 1.538 2.146 1.538 3.434v3.238h-.217c2.188 1.12 4.01 2.763 5.28 4.756A12.22 12.22 0 0 1 28 19.429v8.095c0 1.288-.553 2.523-1.538 3.434-.984.911-2.32 1.423-3.712 1.423H5.25c-1.392 0-2.728-.512-3.712-1.423C.553 30.048 0 28.812 0 27.524v-8.095c0-4.877 2.912-9.125 7.217-11.334ZM10.5 4.857v2.027a15.124 15.124 0 0 1 7 0V4.857c0-.43-.184-.841-.513-1.145a1.824 1.824 0 0 0-1.237-.474h-3.5c-.464 0-.91.17-1.237.474a1.56 1.56 0 0 0-.513 1.145Zm0 9.714c0 .43.184.842.513 1.145.328.304.773.475 1.237.475h3.5c.464 0 .91-.171 1.237-.475a1.56 1.56 0 0 0 .513-1.145c0-.429-.184-.84-.513-1.144a1.825 1.825 0 0 0-1.237-.475h-3.5c-.464 0-.91.171-1.237.475a1.56 1.56 0 0 0-.513 1.144Zm-1.75 8.096c-.464 0-.91.17-1.237.474A1.56 1.56 0 0 0 7 24.286c0 .43.184.84.513 1.145.328.303.773.474 1.237.474h10.5c.464 0 .91-.17 1.237-.474A1.56 1.56 0 0 0 21 24.286c0-.43-.184-.841-.513-1.145a1.824 1.824 0 0 0-1.237-.474H8.75Z"
    />
  </Svg>
);
export default InventoryIcon;
