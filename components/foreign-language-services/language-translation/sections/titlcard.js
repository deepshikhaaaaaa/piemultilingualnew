
export default function Tiltcard() {
    return (
        <div className="flex justify-center w-[310px] items-center">
            <div className="h-[100px] icon mt-[2px] relative w-[120px] bg-white shadow-lg border-[1px] skew-x-[-9deg] z-20 left-[40px]">
                <div className="  flex justify-center items-center h-[110px] skew-x-[9deg]">
                    <i className="fa fi-sr-book text-[50px]"  ></i>

                </div>
            </div>
            <div className="rounded-[10px] relative w-[280px] bg-gray-200 flex flex-col justify-center  ">
                <div className="">
                    <div className="bg-[#30B1C0] flex justify-center items-center rounded-t-[10px] h-[40px]">
                        <p className="text-[18px] text-[#FFF] font-acme uppercase ">
                            Content Development
                        </p>
                    </div>
                    <div className="p-2">
                        <p className="w-[250px] ml-[35px] mt-[12px] font-roboto text-[15px]">
                            we provide profesional text editing services to make you documnet effective precise and accurate
                        </p>
                        <button className="border-[#30B1C0] border-solid border-[2px] border-l-0 border-r-0  uppercase mt-[12px] text-[#F60] font-roboto mr-[20px] pl-2 pr-2 float-right mb-[12px] hover:bg-[#30B1C0] hover:border-[#30B1C0] hover:rounded-sm hover:border-x-[2px] transition-transform delay-200  ease-in-out hover:text-[#FFF]">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}