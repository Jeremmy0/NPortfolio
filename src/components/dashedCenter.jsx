const DashedCenter = () => {
  return (
        //    {/* this creates the dashed divider in the center  */}
        <div className="absolute inset-0 z-50 pointer-events-auto">
          <div className="w-[33.3333333%] h-full bxd border-dashed   absolute top-0 left-1/2 -translate-x-1/2 -z-10"></div>
        </div>  
  );
}
export default DashedCenter;