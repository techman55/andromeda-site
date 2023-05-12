import {useEffect, useState} from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import Download from "./components/Download.jsx";
import ContentArea from "./components/ContentArea.jsx";
import featuresPic from "./assets/features.png";
import overviewPic from "./assets/overview.png";
import downloadPage from "./assets/downloadpage.png";

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


    useEffect(() => {



    }, [])



    return <div className="">
        <Header/>
        <main className={" w-full"}>

            <ContentArea
                style={1}
                image={downloadPage}
                header={"How to install on your computer..."}
                body={

                    <ol className={"list-decimal"}>
                        <li>Go to the Andromeda homepage (andromeda.jesuitnotes.com)</li>
                        <li>Your Operating System (macOS, Windows, etc) should be detected automatically. If you don't see your operating system, click the "Show All OSes" button below.</li>
                        <li>Open the installer file downloaded to your computer, and follow the on-screen instructions.</li>
                    </ol>
            }
            />

            <ContentArea
                style={1}
                image={overviewPic}
                header={"How to draw shapes..."}
                body={

                    <ol className={"list-decimal"}>
                        <li>Open Andromeda</li>
                        <li>In the menu bar at the top, click Tools, and then chose your desired shape tool.</li>
                    </ol>

                }
            />

            <ContentArea
                style={1}
                image={featuresPic}
                header={"How to save a file..."}
                body={

                    <ol className={"list-decimal"}>
                        <li>Go to the Andromeda homepage (andromeda.jesuitnotes.com)</li>
                        <li>Click the Open in Browser button. If you don't see this, click the "Show All OSes" button below.</li>
                        <li>And, Voila! You now have Andromeda running in your browser.</li>
                    </ol>

                }
            />

            <div className={`flex flex-row justify-start border-2 border-[#5243ac] rounded-xl from-[#333333] to-[#341569] p-6 m-5 mt-20 flex-wrap drop-shadow-xl bg-gradient-to-r md:bg-gradient-to-r`}>
                <div className={"flex w-full md:w-2/5 flex-col justify-start"}>

                    <div className={"m-4"}>
                        <div className={`w-max mb-4  border-b-2 pb-2`}>
                            <p className={"font-bold body-text text-2xl"}>Merritt Info...</p>
                        </div>

                        <div className={"m-4"}>
                            <p>Made possible by...</p>
                            <p className={"ml-8"}>Jack Hubbard (slot 6)</p>
                            <p className={"ml-8"}>Darrin Haase (slot 7)</p>
                            <p>... in Ms Merritt's Geometry Honors class</p>

                        </div>
                    </div>

                </div>



            </div>


        </main>
    </div>

}

export default App
