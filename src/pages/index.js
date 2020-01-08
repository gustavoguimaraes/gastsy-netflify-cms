import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby"


import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class Homepage extends React.Component {
    render() {

        const { data } = this.props;
        const { allMarkdownRemark: { edges } } = data;
        const content = edges[0];
        const { node: { frontmatter }} = content;
        const { title, subtitle } = frontmatter


        return (
            <>
                <Helmet title={title} />
                <section id="header">
                    <div className="inner">
                        {/* <span className="icon major fa-cloud"></span> */}
                        <h1>Hi, I'm <strong>Nils</strong>, I have a <br />
                        body work practice in Berlin, Germany
                        .</h1>
                        <p>Welcome to my homepage.</p>
                        {/* <ul className="actions">
                            <li><a href="#one" className="button scrolly">Discover</a></li>
                        </ul> */}
                    </div>
                </section>

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>{subtitle}</h2>
                            </header>
                            <p>Adipiscing a commodo ante nunc accumsan et interdum mi ante adipiscing. A nunc lobortis non nisl amet vis sed volutpat aclacus nascetur ac non. Lorem curae et ante amet sapien sed tempus adipiscing id accumsan.</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic01} alt="" /></span>
                        </div>
                    </div>
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            {/* <ul className="major-icons">
                                <li><span className="icon style1 major fa-code"></span></li>
                                <li><span className="icon style2 major fa-bolt"></span></li>
                                <li><span className="icon style3 major fa-camera-retro"></span></li>
                                <li><span className="icon style4 major fa-cog"></span></li>
                                <li><span className="icon style5 major fa-desktop"></span></li>
                                <li><span className="icon style6 major fa-calendar"></span></li>
                            </ul> */}
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>Lorem ipsum dolor adipiscing<br />
                                amet dolor consequat</h2>
                            </header>
                            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
                            <p>Blandit faucibus proin. Ac aliquam integer adipiscing enim non praesent vis commodo nunc phasellus cubilia ac risus accumsan. Accumsan blandit. Lobortis phasellus non lobortis dit varius mi varius accumsan lobortis. Blandit ante aliquam lacinia lorem lobortis semper morbi col faucibus vitae integer placerat accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing curae consequat feugiat etiam dolore.</p>
                            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Adipiscing amet consequat</h2>
                            </header>
                            <p>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={pic02} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            {/* <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul> */}
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            {/* <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul> */}
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic04} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            {/* <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul> */}
                        </div>

                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Ipsum feugiat consequat?</h2>
                        </header>
                        <p>Sed lacus nascetur ac ante amet sapien.</p>
                        {/* <ul className="actions uniform">
                            <li><a href="#" className="button special">Sign Up</a></li>
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul> */}
                    </div>
                </section>

                <section id="footer">
                    {/* <ul className="icons">
                        <li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                        <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a href="#" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                        <li><a href="#" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
                    </ul> */}
                    <ul className="copyright">
                <li>&copy; Nils { new Date().getFullYear() }</li>
                        {/* <li>Design: <a href="http://html5up.net">HTML5 UP</a></li> */}
                    </ul>
                </section>
            </>
        );
    }
}

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark(limit: 3) {
        edges {
          node {
            frontmatter {
              title
              subtitle
            }
          }
        }
      }
  }
`

export default Homepage;