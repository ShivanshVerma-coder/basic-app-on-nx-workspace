import { useEffect, useState } from 'react';
import { string } from './constants';
export function useCheck(number) {
  const { ODD, EVEN } = string;
  if (number % 2 == 0) {
    return [true, EVEN];
  } else {
    return [true, ODD];
  }
}
export default useCheck;
