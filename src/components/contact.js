import React from 'react'

const contact = () => {
    return (
        <>
            <div className="container">
                <form>

                    <section className="mb-4">

                        <h2 className="h1-responsive font-weight-bold text-center my-4">Contact me</h2>

                        <div className="row">

                            <div className="col-md-9 mb-md-0 mb-5">
                                <div id="contact-form" name="contact-form" action="mail.php" method="POST">

                                    <div className="row">

                                        <div className="col-md-6">
                                            <div className="md-form mb-0">
                                                <input type="text" id="name" name="name" className="form-control" />
                                                <label htmlFor="name" className="">name</label>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="md-form mb-0">
                                                <input type="text" id="email" name="email" className="form-control" />
                                                <label htmlFor="email" className="">email</label>
                                            </div>
                                        </div>

                                    </div>


                                    <div className="row">

                                        <div className="col-md-12">

                                            <div className="md-form">
                                                <textarea type="text" id="message" name="message" rows="2"
                                                    className="form-control md-textarea"></textarea>
                                                <label htmlFor="message">your message</label>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                                <div className="text-center text-md-left">
                                    <a className="btn btn-light" href="google.com"
                                        onClick={()=> {document.getElementById('contact-form').submit();} }>Send</a>
                                </div>
                                <div className="status"></div>
                            </div>
                            <div className="col-md-3 text-center">
                                <ul className="list-unstyled mb-0">
                                    <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                        <p className="contact-side">Houston, TX</p>
                                    </li>

                                    <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                        <p className="contact-side">(713) 408-0875</p>
                                    </li>

                                    <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                        <p className="contact-side">alisaamacedo@gmail.com</p>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </section>
                </form>
            </div>

        </>
    )
}

export default contact
