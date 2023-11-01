import Casestudycards from "./casestudycards";

export default function Lastsection() {
    return (
        <div className="w-[1250px] mt-[60px] flex flex-col justify-center items-center">

            <p className="text-[24px] font-normal w-full font-acme text-[#F60] mt-[30px] uppercase leading-3 ">
                Learn how we helped global businesses
            </p>
            <div className="flex w-[1260px] gap-[30px] mr-[17px] justify-center">
                <Casestudycards></Casestudycards>
                <Casestudycards></Casestudycards>

            </div>
            <div className="mt-[100px] bg-gray-400 h-[150px] flex flex-col justify-between p-4">
                <p className="text-[24px] font-normal font-acme text-[#F60]  uppercase leading-3 relative top-[10px]">
                    Know your price
                </p>
                <div className=" flex justify-between">
                    <p className=" text-ellipsis w-[750px] ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quae architecto, aperiam dicta consequuntur hic neque voluptas iure provident incidunt mollitia aliquam suscipit optio temporibus minus deleniti accusantium molestiae ducimus.
                    </p>
                    <button className="uppercase font-fir font-semibold w-[200px]  h-[50px] p-2 text-[14px] text-black bg-red-300">More pricing details</button>
                </div>
            </div>
            
        </div>
    )
}