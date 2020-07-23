// import * as image from "/Users/justinjaeger/Workspace/hackathon/waldo.png";
 // import * as url from "./waldo.png";

console.log(`it's working`)
let infobox = document.querySelector('.infobox').getBoundingClientRect();
// let infoboxPosition = infobox.getBoundingClientRect();
let infoboxTop = infobox.top;
let infoboxLeft = infobox.left - 15;


let waldoBtn = document.createElement('button'); // create button
document.body.appendChild(waldoBtn); // attach to body
waldoBtn.innerHTML = '<img id="waldo" style="left:' +  infoboxLeft + 'px; top:' + infoboxTop + 'px;"/>'; // img
document.getElementById('waldo').src = "https://lh3.googleusercontent.com/bSGU3PMcRfEqzomA7228fGOAqy6cVgIoBpXmkFvNxb3yXD98W4njuBg7-dSaNCwnscgKFUgkrUoaxOiQMTR9UESlg4fdeZm1Fx4LdrNo4bhOIXv8vJC8l-ng6yGLjp_ggH3C1MTqUnbhgHOQSdud2jCbHKXy8Oyd9z6faVxIEvGHQH_uYSPWb8huqdvvF1C7AQSc8prpMGVMqiyKhEYeuDZ_YiWI5qc26CPavgUrhpefwvIq8TmF_tj643OsA1S0Y-5M4j70pepBoeBbU_Yx0adWIsmzLI30Pz_HgASDL6K2ObGnqdfwjNSFNKIu1oiVR5-wnf9qeL6TQzvHloK9YLMENmjv_8A8a_FY_mycR_yYvI8fNotE0A88mdWSr2eZusv725mCATSYpourpnag-xj5WF8SosUGMtgDFDofXv1fotJft-AHyYu2JLuZPqNQgTBJ7nIRg3SlHPSAgH7o2NSQMH9vAwervR1E1j2GaF41eVKHc7nziXJ2U0__JdBtaAorJui0j9znFxoV3clB7EVeJx1KdLfqdIaj0X3-EGA4zcufKRGxfcWe81W_nZQWLPNW_7Zv59AOP8BqdIlf0UKjA76NsVHcs8pBf7ChFkayqI4wm1n4ZWGApRxvkiBhKE7Ai0Rx2Brn7q5eC9Thwz3NKrJXkiWPcNEm0CKdfPTIUFMjYK5gJ1qUYF02=w349-h524-no?authuser=0"; // assign image
//https://imgur.com/IgHDkiT

// waldoBtn.onclick = "clickWaldo()";
waldoBtn.addEventListener('click', clickWaldo)
function clickWaldo() {
    console.log('you clicked me');
    alert('hello');
}



// let testCase = document.createElement('img');
// document.body.appendChild(testCase);
// testCase.style = 'position: absolute; left:' +  infoboxLeft + 'px; top:' + infoboxTop + 'px;'
// testCase.src = "https://pbs.twimg.com/profile_images/561277979855056896/4yRcS2Zo_400x400.png"; 
//


// `position-top: ${infoboxTop}; position-left: ${infoboxTop-50}`


// document.getElementById("myImg").src = "hackanm.gif";

console.log(infoboxTop, infoboxLeft)


