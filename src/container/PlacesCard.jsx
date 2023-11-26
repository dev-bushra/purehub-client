/* eslint-disable react/prop-types */


const PlacesCard = ({ image, title, name, desc, price }) => {
  return (
    <>
    <div className="p-3 pb-5 w-[410.67px] flex flex-col justify-start gap-2 dealsShadow rounded-b">
       <div className="w-full h-[197px]">
         <img src={image} alt="images" className="w-full h-full object-cover rounded-t"/>
       </div>
        <div className="w-full h-full flex flex-col items-end justify-center gap-1 px-4">
          <div className="flex items-center justify-between w-full">
<p className="font-medium text-[#54cdb7]">{price} SAR</p>
        <h1 className="text-xl py-5 font-bold capitalize text-[#54cdb7]">{name}</h1>
          </div>
          <p className="text-[#7C8DB0] text-right text-sm font-normal">{desc}</p>
          <br />
          <p className="font-thin text-[#ddd]">متاحة</p>
       </div>
    </div>
    </>
  )
}

export default PlacesCard