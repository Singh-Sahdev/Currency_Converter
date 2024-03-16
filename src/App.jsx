import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './components/InputBox'

function App() { 
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('inr');
  const [to, setTo] = useState('usd');
  const [convertAmt, setConvertAmt] = useState(0)
  const data = useCurrencyInfo(from);
  const options = Object.keys(useCurrencyInfo(from));

  const convert = ()=>{
    setConvertAmt(Math.round(amount*data[to]*10000)/10000);
    console.log(convertAmt)
  }

  const swap = ()=>{
    let any = from
    setFrom(to)
    setTo(any)
    any = convertAmt
    setConvertAmt(amount)
    setAmount(any)
  }

  return (
    <div className='h-full w-full bg-slate-500'>
      <img src="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" className='h-full object-cover absolute w-full'/>
      <div 
        className='bg-white absolute rounded-lg p-4 w-4/12 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 '>
        
          <InputBox 
            label='From' 
            currOptions={options} 
            amount={amount} 
            selectedCurr={from} 
            onAmtChange={setAmount} 
            onCurrChange={setFrom}
            onConvertedAmt={convert}
          />

          <div
            className='flex justify-center'>
              <button className='rounded-lg p-2 bg-blue-700 text-white' onClick={swap}>Swap
              </button>
          </div>

          <InputBox
            label="To"
            currOptions={options}
            amtDisable
            amount={convertAmt}
            selectedCurr={to}
            onCurrChange={setTo}
            />
            
          <button 
            className='rounded-lg bg-blue-700 text-white px-20 py-3 w-full' onClick={convert}>Convert {from.toUpperCase()} to {to.toUpperCase()} 
          </button>

      </div>
    </div>
  )
}

export default App
