- [`useFetch()` Usage](#usefetch-usage)
- [`useScreen()` Usage](#usescreen-usage)
- [`useTimeout()` Usage](#usetimeout-usage)
- [`useOnClickOutside()` Usage](#useonclickoutside-usage)

## `useFetch()` Usage

> Here is a React Hook which aims to retrieve data on a Rest API using the Axios library.I used a reducer to separate state logic and simplify testing via functional style.
> - The received data is saved (cached) in the application via useRef, but you can use `LocalStorage` (see `useLocalStorage()`) or a caching solution to persist the data.
> - The fetch is executed when the component is mounted and if the url changes. If ever the `url` is `undefined`, or if the component is `unmounted` before the data is recovered, the fetch will not be called.
> - This hook also takes the Axios option object as a second parameter in order to be able to pass the authorization token in the header of the request for example. Be careful though, the latter does not trigger a re-rendering in case of modification, go through the `url` params to dynamically change the request.


```javascript
import React from 'react'

import useFetch from './useFetch'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export default function Component() {
  const url = `http://jsonplaceholder.typicode.com/posts`
  const { status, data, error } = useFetch<Post[]>(url)
  console.log({ status, data, error })

  // your component JSX
  return <div>{status}</div>
}
```

## `useScreen()` Usage
> Easily retrieve window.screen object with this Hook React which also works onRezise.

```javascript
import React from 'react'

import useScreen from './useScreen'

export default function Component() {
  const screen = useScreen()

  return (
    <div>
      The current window dimensions are:{' '}
      <code>
        {JSON.stringify({ width: screen?.width, height: screen?.height })}
      </code>
    </div>
  )
}
```

## `useTimeout()` Usage

> Very similar to the `useInterval` hook, this React hook implements the native `setTimeout` function keeping the same interface.
>You can enable the timeout by setting `delay` as a `number` or disabling it using `null`.
When the time finish, the callback function called.

```javasript
import React, { useState } from 'react'

import useTimeout from './useTimeout'

export default function Component() {
  const [visible, setVisible] = useState(true)

  const hide = () => setVisible(false)

  useTimeout(hide, 5000)

  return (
    <div>
      <p>
        {visible
          ? "I'm visible for 5000ms"
          : 'You can no longer see this content'}
      </p>
    </div>
  )
}
```

## `useOnClickOutside()` Usage

> React hook for listening for clicks outside of a specified element (see `useRef`).This can be useful for closing a modal, a dropdown menu etc.

```javascript
import React, { useRef } from 'react'

import useOnClickOutside from './useOnClickOutside'

export default function Component() {
  const ref = useRef(null)

  const handleClickOutside = () => {
    // Your custom logic here
    console.log('clicked outside')
  }

  const handleClickInside = () => {
    // Your custom logic here
    console.log('clicked inside')
  }

  useOnClickOutside(ref, handleClickOutside)

  return (
    <div
      ref={ref}
      onClick={handleClickInside}
      style={{ width: 200, height: 200, background: 'cyan' }}
    />
  )
}
```