### propz

`propz` is a fairly simple library that simply returns commonly used props given a `fieldName`, `state`, and `actions`.

Mostly meant for combined use with [@zecos/ui](https://npmjs.org/@zecos/ui).

#### Example Usage

```ts
import { propz } from 'propz'

const Form = () => {
  const [state, actions] = useFieldz({username: {init: ""}})
  const props = propz({fieldName: "username", state, actions})
  return (
    <form>
    <input {...props} />
    </form>
  )
}
```

This will use the `fieldName` property to generate commonly used props like

* `id` (kebab-case)
* `name` (kebab-case)
* `label` (Title Case)
* `aria-label` (Title Case)

It uses the `state` and `actions` properties to generate

* `value` 
* `onChange`
* `onBlur`