import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Projects = () => {
    return (
        <section className="body-with-padding">
            <Outlet />
        </section>
    )
}

const projectComponentList = [
    {
        title: 'CCP Search Ontology Web App',
        date: 'oct 22 - present',
        excerpt: 'I developed a full stack web app using the python flask framework. The client had developed a ml application which could be run on jupyter notebook. •	Firstly, I refactored the notebook cells into a python library to make the codebase more manageable. Secondly, I created a user interface with flask. Finally, I built a flask api to handle user requests, run the refactored backend code, and display it to the user.',
        slug: 'CCP'
    },
    {   title: 'My Online CV',
        date: 'jan 23',
        excerpt: 'I built this site using React.Js because I wanted to demonstrate my ability in one the leading front-end web frameworks. It uses a single page design with all routing managed by React. This has the benefit of allowing smoother transitions between pages and improved load times between component renderings making it the ideal for building non-static sites that focus on user interaction.',
        slug:'CVProject'
    },
    {
        title: 'Ontonomic',
        date: 'oct 22 - nov 22',
        excerpt: 'A front end project for Ontonomic. The static design was simple to construct. I used Wordpress for rapid development and deployment.',
        slug: 'Ontonomic'
    },
    {
        title: 'SiteScan',
        date: 'dec 22 - present',
        excerpt: 'A static front end multi page site for a small business based in Staffordshire. Developed using Flask.',
        slug: 'Scan'
    },
    {
        title: 'Auric Design',
        date: 'nov 22',
        excerpt: 'Wordpress Consultant for design firm. The work waas not technically demanding but I learnt a lot of interpersonal proffesional skills.',
        slug: 'Auric'
    }
]

const charPositions = (str, char) => {

    const indexes = [];

    for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
        indexes.push(i);
    }};

    return indexes
}

const textBodyShortener = (text, noOfWords) => {
    
    const spacePositions = charPositions(text, ' ');

    return text.slice(0, spacePositions[noOfWords]);
}

export const ProjectList = () => {
    return (
        <div>
            <ul className="grid">
                {
                projectComponentList.map((project, index) => {
                    return (
                        <div className="border-bottom" key={index}>
                            <div className="block-container">
                                <NavLink className="heading clickable" to=":{slug}"><h1>{project.title}</h1></NavLink>
                                <br />
                                <h2 className="sub-heading">{project.date}</h2>
                            </div>
                            <br />
                            <p className="body excerpt">{textBodyShortener(project.excerpt, 25)}...</p>
                            <br />
                            <NavLink className="button" to=":{slug}">Read More »</NavLink>
                            <br />
                        </div>
                    )
                })
                }

            </ul>
        </div>
    )
}

export const ProjectPost = () => {
    return (
        <div>
            Project Post
        </div>
    )
}