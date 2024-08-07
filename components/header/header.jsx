import Home from '@/components/api';

const Header = (props) => {
  return (
    <header className={props.styles.header}>
      <Home/>
    </header>
  )
}

export default Header
