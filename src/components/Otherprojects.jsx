import { useState } from 'react'
import { projectData } from '../constants/navlinks'

const Otherprojects = () => {


  const [length, setlength] = useState("h-[380px]")
const [value, setvalue] = useState("More")
const changeLength= ()=>{
  if(length==="h-[380px]"){
    setlength("h-auto");
    setvalue("Less")
  }
  else{
    setlength("h-[380px]");
    setvalue("More")

  }
}



  return (
    <div className='container mx-auto w-full flex flex-col h-auto mt-[150px] items-center justify-center  max-sm:mt-[100px]'>
      <div className='flex flex-col text-white text-[90px] max-sm:text-[40px] mb-10 items-center' >
        <div>
          <h1 className='hover:text-[#DEBCEE] cursor-pointer'>Other Projects</h1>
        </div>
        <div className=''>
          <hr className=' w-[550px] max-sm:w-[250px] ml-1 h-px my-[8px] bg-gradient-to-r from-[#94ABFB] to-[#393053] border-0 rounded' />
        </div>
      </div>

      <div className={`grid grid-cols-3 max-sm:grid max-sm:grid-cols-1 max-sm:w-auto gap-y-6 p-2 w-[1100px] ${length} overflow-hidden mb-8`}>
        {projectData.map(({ title, description, icons, tech }) => {
          return (
            <div className='bg-[#595C77] w-[350px] h-[350px] p-4 rounded-xl max-sm:h-[360px]'>
              <div className='flex justify-between items-center mb-4'>
                <div>
                  {icons[0].iconName1}
                </div>
                <div className='flex '>
                  {icons[0].iconName2}
                  {icons[0].iconName3}
                </div>

              </div>
              <div className='font-Roboto text-white '>
                <h1 className='text-[30px] hover:text-[#DEBCEE]'>{title}</h1>
                <p className='w-full h-[112px] text-[18px] '>{description}</p>
              </div>
              <br /><br />
              <div className='flex w-auto text-[18px] text-[#FFFFFF]  mt-6'>
                {tech.map(({ title }) => {
                  return (

                    <h4 className='mr-2 hover:text-[#DEBCEE]'>{title}</h4>

                  )

                })}</div>
            </div>
          )
        })}
      </div>




      <div>
        <button className='w-[200px] text-[#DEBCEE] h-[40px] border border-[#58385E] font-Roboto text-[20px] rounded hover:text-white hover:shadow hover:shadow-sky-400 ' onClick={changeLength}> Show {`${value}`}</button>
      </div>
    </div>
  )
}

export default Otherprojects
