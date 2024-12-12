import { useEffect, useState } from "react";

export const Game = () => {

    const [selectedVal, setSelectedVal]= useState(0)
    const [diceImg, setDiceImg]= useState()
    const [diceVal, setDiceVal]= useState(0)
    const [totalNum, setTotalNum]= useState(0)
    const [loading, setLoading]= useState(false)
    const [ruleShow, setRuleShow]= useState(false)
    const [selectedValWarning, setSelectedValWarning]= useState("")

    const handleSelected =(value)=> {
        setSelectedVal(value)
        setSelectedValWarning("")
    }

    const handleDice =()=> {
        if (selectedVal !== 0) {
            setLoading(true)
            const number = Math.floor(Math.random() * 150);  
            
            if (number <= 25) {
                setDiceImg("one side.png")
                setDiceVal(1)
            } else if (number > 25 && number <= 50 ) {
                setDiceImg("second side.webp")
                setDiceVal(2)
            }else if (number > 50 && number <= 75 ) {
                setDiceImg("third side.webp")
                setDiceVal(3)
            }else if (number > 75 && number <= 100 ) {
                setDiceImg("fourth side.png")
                setDiceVal(4)
            }else if (number > 100 && number <= 125 ) {
                setDiceImg("fifth side.webp")
                setDiceVal(5)
            }else if (number > 125 && number <= 150 ) {
                setDiceImg("sixth side.webp")
                setDiceVal(6)
            }
        } else{
           setSelectedValWarning("You have not selected any number")
            
        }
    }


    useEffect(()=>{

        if (selectedVal !== 0) {
            
            selectedVal === diceVal? setTotalNum(prev => prev + diceVal) : setTotalNum(prev => prev <= 1? prev : prev- 2);
            
            setSelectedVal(0)
            setDiceVal(0)
            setLoading(false)
        
            
        }

    },[diceVal])
    
    console.log(totalNum);
    

    const handleResetBtn =()=> {
        setTotalNum(0)
    }

    const handleRuleShow =()=> {
        setRuleShow(!ruleShow)
    }


    return (
      <>
      <div className=" w-lvh lg:p-10 md:p-10 md:justify-evenly lg:justify-between flex flex-wrap justify-center gap-4 items-center">
        <div className="flex flex-col justify-start items-center">
          <div className="text-6xl font-bold">{totalNum || 0}</div>
          <p className="text-2xl">Total Number</p>
        </div>
        <div className="flex flex-col justify-between items-end">
            <p className="text-red-700 m-2 font-medium">{selectedValWarning}</p>
          <div className="flex flex-wrap gap-2">
            <div onClick={()=>handleSelected(1)}  className={`h-10 w-10 font-bold border-2  ${selectedVal === 1 ? 'bg-black text-white' : 'bg-white text-black'} border-black flex justify-center items-center cursor-pointer`}>1</div>
            <div  onClick={()=>handleSelected(2)} className={`h-10 w-10 font-bold border-2 ${selectedVal === 2 ? 'bg-black text-white' : 'bg-white text-black'} border-black flex justify-center items-center cursor-pointer`}>2</div>
            <div  onClick={()=>handleSelected(3)} className={`h-10 w-10 font-bold border-2 ${selectedVal === 3 ? 'bg-black text-white' : 'bg-white text-black'} border-black flex justify-center items-center cursor-pointer`}>3</div>
            <div  onClick={()=>handleSelected(4)} className={`h-10 w-10 font-bold border-2 ${selectedVal === 4 ? 'bg-black text-white' : 'bg-white text-black'} border-black flex justify-center items-center cursor-pointer`}>4</div>
            <div  onClick={()=>handleSelected(5)} className={`h-10 w-10 font-bold border-2 ${selectedVal === 5 ? 'bg-black text-white' : 'bg-white text-black'} border-black flex justify-center items-center cursor-pointer`}>5</div>
            <div  onClick={()=>handleSelected(6)} className={`h-10 w-10 font-bold border-2 ${selectedVal === 6 ? 'bg-black text-white' : 'bg-white text-black'} border-black flex justify-center items-center cursor-pointer`}>6</div>
          </div>
          <p className="text-2xl">Select number</p>
        </div>
      </div>
  
      <div className="m-20 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-5 ">
          <img onClick={handleDice} className="w-24" src={`/src/assets/${diceImg || "one side.png"}`} alt="Dice image could not be showing due to network error" />
          <p>{loading? "Loading...":"Click on Dice roll"}</p>
          <button onClick={handleResetBtn}  className="bg-white h-8 w-36 text-black border-2 border-black">Reset score</button>
          <button onClick={handleRuleShow} className="bg-black h-8 w-36 text-white">Show Rules</button>
        </div>
        {
            ruleShow && <div className="bg-red-50 p-10 w-96 text-lg flex flex-col -mx-10">

            <h1 className="font-medium">How to play dice game?</h1>
            <p className="px-2"> Select any number <br />
                Click on dice image <br />
                after click on  dice  if selected number is equal to dice number you will get same point as dice 
                if you get wrong guess then  2 point will be deducted 
           </p>
        </div>
        }
      </div>
      </>
    );
  };