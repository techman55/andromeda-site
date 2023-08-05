import {useEffect, useState} from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import Download from "./components/Download.jsx";
import ContentArea from "./components/ContentArea.jsx";
import featuresPic from "./assets/features.png";
import overviewPic from "./assets/overview.png";

import Footer from "./components/footer.jsx";

export let TxtType = function(el, toRotate, period) {

    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 150 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

export function initTypewriter(id) {

    const element = document.getElementById(id);

    const toRotate = element.getAttribute('data-type');
    const period = element.getAttribute('data-period');
    if (toRotate) {
        new TxtType(element, JSON.parse(toRotate), period);

    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);

}

function App() {
    return <div className="">
        <Header/>
        <main className={"relative w-full overflow-hidden"}>

            <Download/>

            <ContentArea
                style={1}
                image={overviewPic}
                header={"Why use Andromeda?"}
                body={<span>Looking for a free and open source math sketching pad?<br/>Maybe you don't like the 17th century vibe that the alternatives give off... <br/>Well Andromeda is different. We designed Andromeda with the latest design ideas, and we're pretty sure you'll love it.</span>}
            />

            <ContentArea
                style={2}
                image={featuresPic}
                header={"Features"}
                body={<span>
                    <span className={"font-bold"}>What Andromeda can do...</span>
                    <ul>
                        <li>⊙ Plot lines, squares, triangles, points, etc.</li>
                        <li>⊙ Calculate areas, etc.</li>
                        <li>⊙ Get detailed descriptions for each type of shape in the sidebar</li>
                        <li>⊙ Display multiple units of measurements, like centimeters, inches, etc.</li>
                    </ul>
                </span>}
            />

            <div className={"pb-40"}></div>

            <footer className={"absolute bottom-0 bg-[#5243ac] p-10 w-full"}>
                <p className={"font-thin text-xs"}>Brought to you by <a href={"https://jackhubbard.com"}>Jack Hubbard</a> and <a href={"https://github.com/darrinhaase"}>Darrin Haase</a>. © 2023</p>
            </footer>

            <Footer />
        </main>
        
    </div>

}

export default App
