import { NavLink } from "react-router-dom"

export const Skills = () => {
    return (
        <article>
            <section>
                <div class="inline-container">
                    <h3 class="heading">
                        Languages
                    </h3>
                </div>

                <div class="inline-container">
                    <p class="body">
                        <ul>
                            <li>Python</li>
                            <li>JavaScript</li>
                        </ul>
                    </p>
                </div>
            </section>

            <section>
                <div class="inline-container">
                    <h3 class="heading">
                        Frameworks
                    </h3>
                </div>

                <div class="inline-container">
                    <p class="body">
                        <ul>
                            <li>ReactJS</li>
                            <li>Flask</li>
                            <li>ASP.NET Core</li>
                        </ul>
                    </p>
                </div>
            </section>

            <section>
                <div class="inline-container">
                    <h3 class="heading">
                        Content Management Systems
                    </h3>
                </div>

                <div class="inline-container">
                    <p class="body">
                        <ul>
                            <li>Wordpress</li>
                        </ul>
                    </p>
                </div>
            </section>

            <section>
                <h3 class="heading">
                    Tools
                </h3>
                <p class="body">
                    <ul>
                        <li>Virtual Studio Code</li>
                        <li>Git</li>
                        <li>.NET</li>
                    </ul>
                </p>
            </section>

        <a className="center" href="/contact">
            <button className="button">Get in touch</button>
        </a>
        </article>
    )
}