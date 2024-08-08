import '../styles/footer.css';
import image from '../Assets/github-light.svg';

const Footer = () => {
    return (
        <div className="text-light py-4" id="footer">
            
                <div className="container text-center">
                    <div className="row">
                        <div className="col-lg-12 mb-4">
                            <h5 className="footer-heading">Connect with me on:</h5><br/>
                            <a href="https://github.com/TechNestOwl" target="_blank" title="GitHub"><img src={image} style={{width: '50px'}}/></a>
                            {/* <a href="https://www.linkedin.com/in/gill-guimaraes-6aa9141b4/" target="_blank" title="LinkedIn"><img src="Assets/linkedin.svg" style="width: 50px;"/></a>
                            <a href="https://twitter.com/GuimaraesGill" target="_blank" title="Twitter"><img src="Assets/x-light.svg" style="width: 50px; height: 30px;"/></a>
                            <a href="https://www.facebook.com/guil.guimaraes.1/" target="_blank" title="Facebook"><img src="Assets/meta-horizontal-light.svg" style="width: 100px;"/></a>
                            <a href="https://www.youtube.com/channel/UCjn8L2mKg4gdPSMnA0XIWJg" target="_blank" title="YouTube"><img src="Assets/youtube-horizontal.svg" style="width: 100px;"/></a> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                        <p className="mb-0">© 2024 Gill Guimaraes</p>
                        </div>
                    </div>
                </div>
        </div>
    )
};

export default Footer;