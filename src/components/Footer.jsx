import '../styles/footer.css';
import github from '../Assets/github-light.svg';
import linkedIn from '../Assets/linkedin.svg';
import meta from '../Assets/meta-horizontal-light.svg';
// import twitter from '../Assets/twitter_light.svg';
// import youtube from '../Assets/youtube-horizontal.svg';
// I need to troubleshoot why these two SVG images are noting working with react


const Footer = () => {

    const today = new Date();
    return (
        <div className="text-light py-4" id="footer">
            
                <div className="container text-center">
                    <div className="row">
                        <div className="col-lg-12 mb-4">

                            <div className="devLink">
                            <a href="/dev">dev</a>
                            </div>

                            <h5 className="footer-heading">Connect with me on:</h5><br/>
                            <a href="https://github.com/TechNestOwl" target="_blank" title="GitHub"><img src={github} style={{width: '50px'}}/></a>
                            <a href="https://www.linkedin.com/in/gill-guimaraes-6aa9141b4/" target="_blank" title="LinkedIn"><img src={linkedIn} style={{width: '50px'}}/></a>
                            {/* <a href="https://twitter.com/GuimaraesGill" target="_blank" title="Twitter"><img src={twitter} style={{width: "50px", height: "30px"}}/></a> */}
                            {/* <a href="https://www.facebook.com/guil.guimaraes.1/" target="_blank" title="Facebook"><img src={meta} style={{width: '100px'}}/></a> */}
                            {/* <a href="https://www.youtube.com/channel/UCjn8L2mKg4gdPSMnA0XIWJg" target="_blank" title="YouTube"><img src={youtube} style={{width: "100px"}}/></a> */}
                            {/*
                            link to tinker with SVG's:
                             https://create-react-app.dev/docs/adding-images-fonts-and-files/ 
                             */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                        <p className="mb-0">
                            © {today.getFullYear()} Gill Guimaraes</p>
                        </div>
                    </div>
                </div>
        </div>
    )
};

export default Footer;