export default function Last() {
    return (
        <div className="w-full mt-[100px] overflow-hidden">
            {/* <div className="w-screen  h-[414px] bggreengrad  flex flex-col justify-center items-center fira font-medium text-[40px] ">
                <p className="w-[942px] text-[#FFF] text-center">
                    Ready to talk to us about the challenges facing your
                    business in Language Translation?
                </p>
                <button className=" font-bold text-[16px] mt-[65px] rounded-[4px] p-2 uppercase border-solid border-[2px] border-[#FFF] text-[#FFF] hover:bg-[rgb(75,168,137)] hover:scale-105 ease-in-out transition-transform">Let&apos;s Get  started</button>
            </div> */}
            <div className="h-[414px] w-full bg-gray-300 bg-contain bggreengrad filter flex  items-center">
                <div className="w-[70%] h-full flex flex-col justify-center items-center ">
                    <p className="text-[40px] fira font-normal w-[881px] text-[#FFF]  text-center">
                    Ready to talk to us about the challenges facing your business in Customized Business  Research?
                    </p>
                    <button className=" font-bold text-[16px] mt-[20px] rounded-[4px] p-2 uppercase border-solid border-[2px] border-[#FFF] text-[#FFF] hover:bg-[rgb(75,168,137)] hover:scale-105 ease-in-out transition-transform">Let&apos;s Get  started</button>
                </div>
                <div className="flex flex-col justify-center items-center gap-[30px] h-full bgbluegrad w-[30%] bg-blue-300">
                    <div className="flex flex-col justify-center items-center">

                        <div className="flex flex-col h-[70px] justify-center items-center">
                            <div className="icon flex  gap-[10px] justify-center items-center">
                                <i className="flaticon-incoming-call-symbol text-[30px] text-[white]"></i>
                                <p className="text-[40px] font-roboto font-bold text-[#FFF]">
                                    500+
                                </p>
                            </div>

                            <p className="text-[18px] font-roboto font-semibold text-[#FFF]">
                                Lorem ipsum dolor sit amet 
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col  h-[70px] justify-center items-center">
                        <div className="icon flex gap-[10px] justify-center items-center">
                            <i className="flaticon-typing-1 text-[30px] text-[white]"></i>
                            <p className="text-[40px] font-roboto font-bold text-[#FFF]">
                                500+
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center">

                            <p className="text-[18px] font-roboto font-semibold text-[#FFF]">
                                Lorem ipsum dolor sit amet 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}