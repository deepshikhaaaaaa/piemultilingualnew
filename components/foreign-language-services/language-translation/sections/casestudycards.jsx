import Image from "next/image"
export default function Casestudycards() {
    return (
        <div className="w-[600px] h-[200px] flex shadow-md border mt-[30px]  ">
            <div>
                <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="w-[200px] h-[200px] object-cover bg-cover cutimg " alt="img" />
            </div>
            <div className=" flex  flex-col p-[22px] w-[400px] justify-between items-end ">
                <p className="text-[20px] w-full font-semibold uppercase font-fir text-[]">
                    Case study heading
                </p>
                <p className=" text-ellipsis w-[360px] text-[15px] leading-6 flex justify-center  ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, amet nihil. Perspiciatis dolorum nemo sequi iste ut atque officiis quo quisquam 
                </p>
                <button className="float-right relative">
                    READ MORE
                </button>
            </div>
        </div>
    )
}