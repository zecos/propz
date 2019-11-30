const camelToTitle = camelCase => camelCase
  .replace(/([A-Z])/g, match => ` ${match}`)
  .replace(/^./g, match => match.toUpperCase())
  .trim()

const titleToSnake = title => title
  .replace(/ ([A-Z])/g, match => `-${match.trim()}`)
  .toLowerCase()


export const propz  = ({fieldName, state, actions }) => {
  const { setValue, setTouched } = actions
  const title = camelToTitle(fieldName)
  const snake = titleToSnake(fieldName)
  const id = snake
  const name = snake
  const value = state[fieldName].value
  const label = title
  const onChange = e => setValue(e.target.value)
  const onBlur = _ => setTouched()

  return {
    id,
    name,
    value,
    onChange,
    onBlur,
    label,
    "aria-label": title,
  }
}