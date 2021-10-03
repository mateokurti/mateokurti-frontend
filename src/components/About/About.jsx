import './about.scss';

import { React } from 'react';

export default function About() {
    return (
        <section id="about" className="container">
            <div className="content">
                <div className="block grid">
                    <div className="cell text">
                        <p className="title">Who am I?</p>
                        <p className="greeting"><span id="hello">Hi there, 👋</span>​</p>
                        <p className="description">I'm Mateo, a self-taught Software Developer, dedicated to improving skills through hands-on learning and development work. Proficient in mobile and desktop development environments. Adept at using Python, Javascript, PHP, and other programming languages and technologies to produce clean code. Well-organized and collaborative team player with strong communication and analytical abilities.</p>
                    </div>
                    <figure className="cell media">
                        <img src="assets/about.svg" alt="SVG Art of a person sat in front of a computer and waving" />
                    </figure>
                </div>
            </div>
        </section>
    )
}
