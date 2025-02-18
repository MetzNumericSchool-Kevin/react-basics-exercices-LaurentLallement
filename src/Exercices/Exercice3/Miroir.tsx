import {useState} from "react";

export const Miroir = () => {
    const [hasReflet, setReflet] = useState(false)

    const styleMiroir = {opacity : 0}

    if (hasReflet) {
        styleMiroir.opacity = 1
    }

    function mouseEnter() {
        setReflet(true);
    }

    function mouseLeave() {
        setReflet(false);
    }

    return (
        <>
            <div className="card bg-dark border border-warning-subtle miroir">
                <img src="aventurier.jpg" className="card-img-top img-fluid"
                     onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}
                     style = {styleMiroir}
                />
                <div className="card-body">
                    <h5 className="card-title">Miroir mon beau miroir</h5>
                    <p className="card-text">Quel est mon reflet ?</p>
                </div>
            </div>
        </>
    );
};