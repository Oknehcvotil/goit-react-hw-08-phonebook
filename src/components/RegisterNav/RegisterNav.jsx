import NavLink from "components/NavLink";

const RegisterNav = () => {
    return (
      <>
        <NavLink path={'/login'}>{'Login'}</NavLink>
        <NavLink path={'/register'}>{'Register'}</NavLink>
      </>
    );
};

export default RegisterNav;
