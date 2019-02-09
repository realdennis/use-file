# use-file
*React hook for Filereader*

It exports {src,reader}, using reader to read file & get src by hooks FileReader `loadend` event.

## Install

```sh
$ npm install use-file
```

## How to use?

```javascript
import useFile from 'use-file';
const demo = () => {
  const { result, reader } = useFile();
  // const { result, reader } = useFile('defaultPath');
  const onChange = e => {
    const files = e.currentTarget.files;
    files.length > 0 && reader.readAsDataURL(files[0]);
  };
  return (
    <div>
      <input
        onChange={onChange}
        type="file"
        id="upload-file"
        placeholder="Upload a Picture"
      />
      {result && <img src={result}>}
    </div>
  );
};
```

## What I Do?

reader <-
BlackBox {

1. attach loadend
2. after loadend update result from reader's result
3. clean up if unmounted

}
-> result

## Why This has a dependency of `useEventTarget`

This is a hook infrastructure for easily package a event hooks.

See more [useEventTarget](https://github.com/realdennis/useEventTarget/).
