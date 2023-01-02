import React from 'react'

const UtilityLogo = ({mark}) => {

    const LogoStyle = {
        backgroundColor: 'lightgray',
        color:'black',
        borderRadius:"80%",
        width:"20px",
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        padding:"10px",
        marginRight:"10px"
    }

  return (
    <>
    <div style={LogoStyle}><span>{mark}</span></div>
    </>
    )
}

export default UtilityLogo