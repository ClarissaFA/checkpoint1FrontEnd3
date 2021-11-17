/* eslint-disable jsx-a11y/anchor-is-valid */


import './style.scss'

const Footer = () => {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
      </a>
      <span className="text-muted">© 2021 BananaCompany, Inc</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a className="text-muted" href="https://github.com/ClarissaFA"><img src="https://cdn-icons-png.flaticon.com/512/733/733609.png" alt="GitHub" width="24" height="24"/></a></li>
      <li className="ms-3"><a className="text-muted" href="https://www.linkedin.com/in/clarissafarruda/"><img src="https://cdn-icons.flaticon.com/png/512/3669/premium/3669739.png?token=exp=1637095088~hmac=700dc078fd84be0d8f8a2d2e6fa43f0f" alt="Linkedin" width="24" height="24"/></a></li>
      <li className="ms-3"><a className="text-muted" href="mailto:cla.farencena@gmail.com"><img src="https://cdn-icons-png.flaticon.com/128/60/60543.png" alt="Email" width="24" height="24"/></a></li>
    </ul>
  </footer>
    )

};




export default Footer;