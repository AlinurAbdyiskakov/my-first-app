
function Random( { min, max } ){
    let Namber= Math.random() * (max - min) + min;
    return <h1>{Namber.toFixed()}</h1>
}

export default Random;