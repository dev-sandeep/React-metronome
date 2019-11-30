import React, { useState, useEffect } from 'react'

function Home() {
    /* get the context instance */
    const [data, setData] = useState(0);
    const [timerVar, setTimerVar] = useState(0);

    useEffect(() => (
        setData(0)
    ), []);

    const playSound = () => {
        let audio = new Audio('https://www.soundjay.com/button/beep-07.mp3');
        audio.play();
    }

    const handleChange = (e) => {
        // console.log(e.target.value);
        setData(e.target.value);
        reapeatRate(e.target.value);
    }

    const reapeatRate = (time) => {

        let timeInterval = 60 * 1000 / time;
        if(timerVar){
            clearInterval(timerVar);
        }
        let interval = setInterval(() => {
            /* play the sound */
            playSound();
        }, timeInterval);

        setTimerVar(interval);
    }
    /* all of the maon content goes here  */
    return (
        <section className="home-page m-top-3">
            <div className="row1 ov-y-hide">
                <div className="container">
                    <div className="col-lg-12">
                        <div className="main-container">
                            {/* Hello {getData("search")} */}

                            {/* check the input with slider */}
                            <input className="range-width" type="range" min="1" max="100" onChange={handleChange} />
                            <div className="text-val">{data}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;