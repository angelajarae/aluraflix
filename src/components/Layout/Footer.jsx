import Logo from "../../assets/images/logo.png";

export const Footer = () => {
    return (
      <footer className="bg-customGray flex justify-center py-4 top-blue-shadow">
        <img src={Logo}/>
      </footer>
    )
}

export default Footer;