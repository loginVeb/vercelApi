

const Button = (props) => {
const { children, styles  } = props;
  return (
    <button className={`${styles.button}`}>
     {children}
    </button>
  )
}

export default Button