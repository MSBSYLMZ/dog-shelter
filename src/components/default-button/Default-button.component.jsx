import './Default-button.styles.css'
import { forwardRef } from 'react'

const DefaultButton = forwardRef(({ children, className, ...otherProps }, ref) => {
  return (
    <button {...otherProps} ref={ref} className={`default-button ${className}`}>{children}</button>
  )
});

export default DefaultButton