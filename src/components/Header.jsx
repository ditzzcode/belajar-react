function Header (props) {
  const { headerText } = props
  return (
    <div>
      <h1>{headerText}</h1>
    </div>
  )
}

export default Header;