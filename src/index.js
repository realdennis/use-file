import { useState } from 'react';
import createEventTargetHook from 'create-event-target-hook';
const useReader = createEventTargetHook(new FileReader());
export default (defaultPath = '') => {
  const [result, resultSetter] = useState(defaultPath);
  const [reader] = useReader('loadend', () => resultSetter(reader.result));
  return { result, reader };
};
