import React from 'react'
import Last from './Last'
import Headinng from './Headinng'
import Emm from './Emm'
import Final from './Final'

const App = () => {
  return (
    <div>
      <div className='bg-fuchsia-900 gap-5 flex justify-center text-blue-600' >
        <button>Home</button>
        <button>Jobs</button>
        <button>Service</button>
        <button>Appliction</button>
        <button className='text-black  bg-white py-2 px-1 rounded'>Login</button> 
      </div>
    
      <Headinng/>
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <Last />
        </div>
        <div className="flex-1">
          <Emm />
        </div>
      </div>
        <Final/>
    </div>
      
  )
}

export default App
