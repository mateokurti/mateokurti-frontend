import './career.scss';

import { React, useEffect, useRef, useState } from 'react';
import { careerHistory } from '../../data/career';

export default function Career() {
    const myRef = useRef();
    const my2Ref = useRef();
    const [myElementIsVisible, setMyElementIsVisible] = useState();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.intersectionRatio && !myElementIsVisible) {
                setMyElementIsVisible(true);
                console.log("true")
            }
        }, { threshold: 1 });
        observer.observe(myRef.current);

        const o2bserver = new IntersectionObserver((entries) => {
            const entry = entries[0];
            console.log(entry);
            // if (!entry.intersectionRatio && myElementIsVisible) {
            //     setMyElementIsVisible(false);
            //     console.log("false")
            // }
        });
        o2bserver.observe(my2Ref.current);
        
          
          document.addEventListener('scroll', update);
    }, []);

    function update() {
        // const container = document.getElementById("controls");
        const elem = document.getElementById("career");
        const rect = elem.getBoundingClientRect();
        console.log("gfd")
      
        // container.innerHTML = '';
        // for (const key in rect) {
        //   if (typeof rect[key] !== 'function') {
        //     console.log(key, rect[key])
        //     // let para = document.createElement('p');
        //     // para.textContent = `${key} : ${rect[key]}`;
        //     // container.appendChild(para);
        //   }
        // }
      }




    return (
        <section ref={my2Ref} id="career" className="container">
            <div className="content">
                <div className="block grid">
                    <figure className={"cell media grid " + (myElementIsVisible && "fixed")}>
                        <img ref={myRef} src="assets/career.svg" alt="SVG Art of a person in front of a mirror seeing himself in a suit that represents career success." />
                    </figure>
                    <div className="cell content">
                        {/* <p className="title">Experience</p> */}
                        <ul className="experience">
                            {careerHistory.map((experience, index) => {
                                let description;
                                switch (experience.description.type) {
                                    case "text":
                                        description = (<p>{experience.description.content}</p>);
                                        break;
                                    case "list":
                                        description = (
                                            <ul>
                                                {experience.description.content.map((subcontent, index) => {
                                                    return (<li>• {subcontent}</li>)
                                                })}
                                            </ul>
                                        )
                                }

                                return (
                                    <li className="grid">
                                        <figure className="cell">
                                            <img src={experience.image} alt="" />
                                            <div className="vl"></div>
                                        </figure>
                                        <div className="cell">
                                            <div className="header">
                                                <p className="title">{experience.title}</p>
                                                <p>{experience.company} • {experience.employment_type}</p>
                                            </div>
                                            <div className="details">
                                                <p><span></span>{experience.time}</p>
                                                <p><span></span>{experience.location} ({experience.working_cateogry})</p>
                                                <div className="description">{description}</div>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
