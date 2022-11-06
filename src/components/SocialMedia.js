import React from 'react'

function SocialMedia() {
    return (
        <div className="sharethis" style={{ visibility: "visible" }}>
            <ul>
                <li><a href="https://www.facebook.com/sea.moon.12576/" target="_blank" rel="noreferrer" title="Facebook"><span className="fa fa-facebook"><hr /></span></a></li>
                <li><a href="https://www.instagram.com/pandey_seamoon/" target="_blank" rel="noreferrer" title="Instagram"><span className="fa fa-instagram"><hr /></span></a></li>
                <li><a href="https://www.linkedin.com/in/seamoon-pandey-151b98254/" target="_blank" rel="noreferrer" title="LinkedIn"><span className="fa fa-linkedin-square"><hr /></span></a></li>
                <li><a href="https://github.com/seamoonpandey" target="_blank" rel="noreferrer" title="Follow me on Github"><span className="fa fa-github fa-2x"><hr /></span></a></li>
            </ul>
        </div>
    )
}

export default SocialMedia