import React from 'react'

const home = () => {
    return (
        <div>
            <div className="container about-me">
            <div className="row mt-2 px-4 py-1">
                <div className="col-sx-1">
                    <h1>About me</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sx-1">
                    <img className="float-left float-xs-left mr-3 ml-3 mb-3 border"
                        src="https://via.placeholder.com/200x250" alt="author" />
                    <p className="mx-3 my-3">Hello and thanks for visiting my page! This is my first website so please don't
                        judge too hardshly In the future I'll be upadting this page with the newest skills that I've
                        learned in my class, but for now there's only Html and CSS/Bootstrap. I'm really enjoying the
                        class and I hope to become an outstanding web developer. Follow my progress here!
                        I am originally from Moscow, Russia, now residing in Houston, TX and loving it. I like to read,
                        travel, delicious food (and wine!), and all things fun in general. I also enjoy discovering new
                        passions and I love how challending web developing is, especially to a person who has never
                        written a line of code. It brings a whole new perspective on how things are done in the back-end
                        and I hope to one day be able to navingate the tech world with ease. I don't know where I want
                        to be, but I definitely feel like this is the right path for me and my future. 
                        
                        You can download <a href="./assets/Alisa Macedo Resume_Dev.doc" download>MY RESUME</a> HERE. Thanks for tuning
                        in! 
                    
                    </p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default home
