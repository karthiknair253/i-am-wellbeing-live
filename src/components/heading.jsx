export const Heading = ({ Text }) => {
  return (
    <div className=" bg-[#545656] lg:w-[50%] w-[70%] tab:pl-25 p-6 rounded-br-full bg-no-repeat bg-bottom flex items-center my-5 ">
      <h1 className="text-xl tab:text-2xl lg:text-4xl font-bold  text-white drop-shadow-lg font-alegreya ">
        {Text}
      </h1>
    </div>
  )
}