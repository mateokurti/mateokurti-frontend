import './about.scss';

import { React, useEffect } from 'react';
import { init } from 'ityped'

export default function About() {
    
    // useEffect(() => {
    //     const myElement = document.querySelector('#hello')
    //     init(myElement, {
    //         showCursor: false,
    //         strings: ["Hello", "Përshëndetje", "Hallo", "Ciao", "Здравейте", "Bonjour", "こんにちは", "Olá", "Merhaba", "السلام عليكم", "Hola", "Здраво", "Γειά σου", "你好", "여보세요", "Здравствуйте", "Dia dhuit", "Buna"],
    //     });
    // }, [])
    return (
        <section id="about" className="container">
            <div className="content">
                <div className="block grid">
                    <div className="cell text">
                        <p className="title">Who am I?</p>
                        <p className="greeting"><span id="hello">Hi there, 👋</span>​</p>
                        <p className="description">I'm Mateo, a self-taught Software Developer, dedicated to improving skills through hands-on learning and development work. Proficient in mobile and desktop development environments. Adept at using Python, Javascript, PHP, and other programming languages and technologies to produce clean code. Well-organized and collaborative team player with strong communication and analytical abilities.</p>
                        {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam quis odio eius quibusdam, veritatis repellat asperiores velit culpa nihil. Aperiam, suscipit aliquid. Commodi laudantium asperiores saepe distinctio ad ipsam, explicabo iure molestiae vero fugit ex temporibus dolorum placeat! Sed, natus. Eos similique vitae illum culpa, inventore temporibus laboriosam accusamus perspiciatis rem molestiae laborum omnis iste animi adipisci. Reiciendis deleniti et molestias enim accusamus eos asperiores quisquam mollitia culpa in, nam optio molestiae nobis ipsum nemo rem, expedita aut, sed eligendi dolores vitae. Earum corporis omnis, harum voluptate velit eveniet perspiciatis unde sequi quae neque odio architecto! Obcaecati eligendi ut quam quasi temporibus similique inventore a dolore dolorem cum cupiditate commodi magni minus ducimus totam voluptatem maxime, placeat distinctio quis eveniet velit vitae! Reprehenderit, ipsa! Autem inventore fugit dignissimos aliquam, sint fugiat sit aperiam. Possimus quod voluptatem ratione nam perferendis perspiciatis amet odit molestiae pariatur ea magnam earum esse illo rerum in beatae natus, omnis nobis architecto iste veniam. Earum beatae fugit dolores possimus eveniet? Modi magnam quisquam sit voluptas ex voluptates! Libero repudiandae ut voluptatibus quia hic ipsam nobis, tempore mollitia voluptate, quam quae laboriosam reprehenderit! Ullam ipsum libero perspiciatis eligendi! Accusamus modi temporibus omnis odit veritatis, repudiandae nesciunt rem, sit quisquam expedita dicta pariatur, rerum voluptas amet adipisci aut nam saepe. Rem doloribus quas recusandae provident deleniti corrupti libero culpa, velit aut tempora dolorem similique accusantium! Magnam asperiores dignissimos nostrum deserunt eos iure qui provident inventore quo eligendi libero ipsa praesentium aperiam corrupti ex ipsam, cupiditate maxime voluptate necessitatibus impedit, eius ut incidunt soluta at! Laboriosam ut incidunt illo quidem libero earum error voluptate ad vero dolorem architecto commodi delectus porro autem, reiciendis et pariatur ipsa quod provident aperiam? Ullam ab exercitationem corrupti harum id eum explicabo, numquam vitae! Deleniti quis quae et laboriosam numquam temporibus id consequatur hic?</p> */}
                    </div>
                    <figure className="cell media">
                        <img src="assets/about.svg" alt="SVG Art of a person sat in front of a computer and waving" />
                    </figure>
                </div>
            </div>
        </section>
    )
}
