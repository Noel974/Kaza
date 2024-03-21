import logo_footer from '../../assets/logo/footer.png';

export function Footer() {
    return (
        <footer className="footer">
            <div className="logofooter">
                <img  src={logo_footer} alt="Logo Kasa pied de page" />
            </div>
            <p className="copyright">
  <span className="copyright-year">© 2023 Kasa.All </span>
  <span className="copyright-rights">rights reserved</span>
</p>
        </footer>
    );
}