

const Tag = ({text}) => {
  return (
    <div className="">
        <div className="py-2 px-4 rounded-full content-center text-center   text-lg font-semibold bg-[#d6f8cf] flex gap-2 text-[#178D00]">
          <div className="size-2 rounded-full bg-[#178D00] place-self-center z-10 opacity-100 animate-ping relative" >
            
          </div>  
          {/* <div className="size-2 rounded-full bg-[#178D00] place-self-center z-10 opacity-100 absolute top-0 left-0 " />   */}
          <div className=" ">{text} </div>
        </div>
    </div>
  )
}

export default Tag