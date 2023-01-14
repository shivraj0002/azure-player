import React from 'react'


const Home = () => {
    let scriptTag = document.createElement('script');
    let linkTag = document.createElement('link');
    linkTag.rel = 'stylesheet';
    scriptTag.id = 'amp-azure';
    scriptTag.src = "//amp.azure.net/libs/amp/latest/azuremediaplayer.min.js";
    linkTag.href = "//amp.azure.net/libs/amp/latest/skins/amp-default/azuremediaplayer.min.css";
    document.body.appendChild(scriptTag);
    document.head.insertBefore(linkTag, document.head.firstChild);
    return (
        <>
            <video id="vid1" className="azuremediaplayer amp-default-skin" autoplay controls width="640" height="400" poster="poster.jpg" data-setup='{"nativeControlsForTouch": false}'>
                <source src="https://xyzUrl/manifest" type="application/vnd.ms-sstr+xml" />
                <p className="amp-no-js">
                    To view this video please enable JavaScript, and consider upgrading to a web browser that supports HTML5 video
                </p>
            </video>

        </>
    )
}

export default Home