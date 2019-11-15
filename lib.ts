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
  const onChange = e => setValue(fieldName, e.target.value)
  const onBlur = _ => setTouched(fieldName)
  const inputProps = {
    title,
    snake,
    id,
    name,
    value,
    onChange,
    onBlur,
    "aria-label": title,
  }

  const labelProps = {
    htmlFor: id
  }
  return {
    inputProps,
    labelProps,
  }
}