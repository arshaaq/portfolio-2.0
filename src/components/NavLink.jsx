const NavLink = ({text, link}) => {
    return(
    <div>
      <a href={link}>
        {text}
      </a>
      

    </div>
    );
  };
  
  export default NavLink;