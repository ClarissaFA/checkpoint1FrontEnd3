/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.scss'


const Header = () => {
    return (
        <>
        <header id='home' className="p-3 mb-3 border-bottom sticky-top">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start ">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ">
          <li><a href="#home" className="nav-link px-2 link-secondary">Inspiratofolio</a></li>
          <li><a href="#Weddy" className="nav-link px-2 link-dark">UX Design</a></li>
          <li><a href="#Sleepiest" className="nav-link px-2 link-dark">Mobile</a></li>
          <li><a href="#VietMyth" className="nav-link px-2 link-dark">Web Page</a></li>
        </ul>
      </div>
    </div>
  </header>
    </>
    )

};




export default Header;