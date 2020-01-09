import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby"

import Layout from '../components/layout'

class Homepage extends React.Component {
    render() {

        const { data } = this.props;
        const { allMarkdownRemark: { edges } } = data;
        const content = edges[0];
        const { node: { frontmatter }} = content;
        const {
            title,
            subtitle,
            sectionTwoTitle,
            sectionTwoDescription,
            sectionTwoImage,
            sectionThreeTitle,
            sectionThreeDescription,
            sectionThreeImage,
            sectionThreeImageTwo,
            sectionFourTitle,
            sectionFourSubtitle,
            sectionFourImageOne,
            sectionFourImageOneTitle,
            sectionFourImageOneSubtitle,
            sectionFourImageTwo,
            sectionFourImageTwoTitle,
            sectionFourImageTwoSubtitle,
            sectionFourImageThree,
            sectionFourImageThreeTitle,
            sectionFourImageThreeSubtitle,
            sectionFiveTitle,
            sectionFiveSubtitle,
        } = frontmatter


        return (
            <Layout title={title} subtitle={subtitle}>
                <Helmet title={title} />
                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>{sectionTwoTitle}</h2>
                            </header>
                            <p>{sectionTwoDescription}</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={sectionTwoImage} alt="" /></span>
                        </div>
                    </div>
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <div className="col-6">
                                <span className="image fit"><img src={sectionThreeImage} alt="" /></span>
                            </div>
                            <div className="col-6">
                                <span className="image fit"><img src={sectionThreeImageTwo} alt="" /></span>
                            </div>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>{sectionThreeTitle}</h2>
                            </header>
                            <p>{sectionThreeDescription}</p>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                            <h2>{sectionFourTitle}</h2>
                            </header>
                            <p>{sectionFourSubtitle}</p>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={sectionFourImageOne} alt="" /></span>
                            <h3>{sectionFourImageOneTitle}</h3>
                            <p>{sectionFourImageOneSubtitle}</p>
                            {/* <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul> */}
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={sectionFourImageTwo} alt="" /></span>
                            <h3>{sectionFourImageTwoTitle}</h3>
                        <p>{sectionFourImageTwoSubtitle}</p>
                            {/* <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul> */}
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={sectionFourImageThree} alt="" /></span>
                            <h3>{sectionFourImageThreeTitle}</h3>
                            <p>{sectionFourImageThreeSubtitle}</p>
                            {/* <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul> */}
                        </div>
                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>{sectionFiveTitle}</h2>
                        </header>
                            <p>{sectionFiveSubtitle}</p>
                        {/* <ul className="actions uniform">
                            <li><a href="#" className="button special">Sign Up</a></li>
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul> */}
                    </div>
                </section>
            </Layout>
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
              sectionTwoTitle
              sectionTwoDescription
              sectionTwoImage
              sectionThreeTitle
              sectionThreeDescription
              sectionThreeImage
              sectionThreeImageTwo
              sectionFourTitle
              sectionFourSubtitle
              sectionFourImageOne
              sectionFourImageOneTitle
              sectionFourImageOneSubtitle
              sectionFourImageTwo
              sectionFourImageTwoTitle
              sectionFourImageTwoSubtitle
              sectionFourImageThree
              sectionFourImageThreeTitle
              sectionFourImageThreeSubtitle
              sectionFiveTitle
              sectionFiveSubtitle
            }
          }
        }
      }
  }
`

export default Homepage;