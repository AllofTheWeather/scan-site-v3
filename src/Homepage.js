export const Homepage = () => {
    return (
        <>
            <h2>
            Hello!
            </h2>
            <h3>I’m a driven self-taught developer with a knack for consistently grasping new concepts, and a thirst for knowledge.</h3>

            <h3>
                As a problem solver. I particularly enjoy the iterative breakdown of a seemingly impossible task into its more manageable constituent parts. The essence of programmatic thinking, I find also applicable to other areas of my life.
            </h3>

            <a className="center" href="/skills">
                <button className="button">Find out what I can do</button>
            </a>



            <a href="/experience">
                <h2>Experience</h2>
                <h3>
                    I have developed excellent communication skills that allow me to become an asset in any team. I can be welcoming, friendly, increase moral and, resolve conflict in a polite and professional manner.
                </h3>
                <div className="center">
                    <button className="button">See my CV</button>
                </div>
            </a>

            <br />
            
            <a href="/portfolio">
                <h2>Projects</h2>
                <h3>
                    I’ve worked on several exciting projects that have challenged me to further my understanding, including flask deployment of a machine learning program, single page and multi-page static sites.
                </h3>
                <div className="center">
                  <button className="button">See my portfolio</button>  
                </div>
                
            </a>

            <a href="/contact">
                <h2>Contact me</h2>
                <h3>If you're interested in getting in touch, send me an email</h3>
                <div className="center">
                    <button className="button">Send me a message</button>
                </div>
            </a>

            <br />
        </>
    )
}