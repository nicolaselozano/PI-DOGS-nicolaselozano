/* eslint-disable react/prop-types */

const LandingPage = ({login}) => {

    const handleClick = () =>{
        login("Datos de ingreso");
    }

    return(
        <div>
            <h1>The Dogs Santuary</h1>
            <button onClick={handleClick}>Ingresar</button>
        </div>
    )
}

export default LandingPage;