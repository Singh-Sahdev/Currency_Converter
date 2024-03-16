/* eslint-disable react/prop-types */
// import React from "react";
const x=`Currency Type`;
function InputBox(
    {
        onConvertedAmt,
        label,
        amount,
        onAmtChange,
        onCurrChange, 
        currOptions=[],
        selectedCurr='usd',
        amtDisable = false
    } 
){
    return (
        <div className="bg-slate-200 w-full m-2 p-2 rounded-lg">
            <div className="flex justify-between w-full m-1">
                <p>{label}</p>
                <p>{x}</p>
            </div>
            <div className="flex justify-between w-full">
                <input type="Number" className="" value={amount} onChange={(e)=> {
                    let any = Number(e.target.value)
                    onAmtChange(any)
                    console.log(any)
                    onConvertedAmt && onConvertedAmt()
                    }} disabled={amtDisable}/>
                <select value={selectedCurr} onChange={(e)=>{
                    onCurrChange && onCurrChange(e.target.value)
                    }}>
                    {
                        currOptions.map((val)=> (<option key={val} value={val}>{val}</option>) )
                    }
                </select>
            </div>
        </div>
    )
}

export default InputBox;