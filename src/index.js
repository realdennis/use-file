import { useState } from 'react';
import useEventTarget from 'use-event-target';
const useReader = useEventTarget(new FileReader());
export default (defaultPath = '') => {
  const [result, resultSetter] = useState(defaultPath);
  const [reader] = useReader('loadend', () => resultSetter(reader.result));
  return { result, reader };
};
