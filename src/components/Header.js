import React from 'react'

class Header extends React.Component {
    render() {
        const { title, subtitle } = this.props;
        return (
            <section id="header">
                <div className="inner">
                    {/* <span className="icon major fa-cloud"></span> */}
                    <h1>{title}</h1>

                    <p>{subtitle}</p>
                    {/* <ul className="actions">
                        <li><a href="#one" className="button scrolly">Discover</a></li>
                    </ul> */}
                </div>
            </section>
        )
    }
}

export default Header
