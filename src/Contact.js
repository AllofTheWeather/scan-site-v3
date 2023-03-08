export const Contact = () => {

    const handleSubmit = () => {
        return null
    }
    return (
        <>
            <h1>Get in touch</h1>
            <div className="center" >
            <form id="contact-form" onSubmit={handleSubmit} method="POST">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="center form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="center form-control" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="center form-control" rows="5"></textarea>
                </div>
                <div className="center">
                <button type="submit" className="button">Submit</button>
                </div>
            
            </form>
            </div>
        </>
    )
}