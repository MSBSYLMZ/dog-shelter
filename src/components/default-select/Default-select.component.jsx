import './Default-select.styles.css'

const DefaultSelect = ({children, className, notRequiredPlaceholder, ...otherProps}) => {
  return (
    <select className={`default-select ${className}`} {...otherProps}>
        {notRequiredPlaceholder ? <option value=''>{notRequiredPlaceholder}</option> : null}
        {children}
    </select>
  )
}

export default DefaultSelect