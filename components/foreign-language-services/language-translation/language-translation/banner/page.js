import Image from "next/image"
import Section from "../../sections/page"
export default function Banner() {
    return (

        <div className="flex flex-col  justify-center items-center w-full mt-[50px]">
            <div className="w-[1160px] h-[202px] flex bg-[#2FB1C0]">
                <div className="ml-[10px]">
                    <p className="font-acme text-[25px] font-normal text-white uppercase">LANGUAGE TRANSLATION</p>
                    <p className="font-roboto text-[18px] font-light text-white mt-[13px]">
                        Hire Language Translation Expert with:-
                    </p>
                    <div className="flex justify-between w-[555px]">
                        <div className="mt-[13px]">
                            {
                                [...Array(3)].map((e, i) => {
                                    return <div className="flex" key={i}>
                                        <i className="arrow h-[20px] w-[20px] bg-['url('/icons/arrowhead (1).png')'] mb-[13px]"></i>
                                        <p className="text-[15px] font-inter font-normal text-[#FFF]">Accuracy & transparency</p>
                                    </div>
                                })
                            }
                        </div>
                        <div className="flex justify-end items-end">
                            <button className="bg-transparent font-roboto text-[#FFF] font-semibold hover:bg-white py-2 px-4 border border-[#FFF] hover:border-white hover:text-[#2FB1C0]   rounded-[4px]">
                                FREE CONSULTATION
                            </button>
                        </div>
                    </div>
                </div>
                <div className="py-4 ml-[40px]">
                    <Image src='/Language-Translation.jpg.png' height={207} width={535} alt="lanuage translation" className="h-[167px] w-[535px]"></Image>
                </div>

            </div>
            <div className="w-[1160px] flex justify-between bgbluegrad h-[60px] mt-[10px] border-b-4 border-solid border-[#2FB1C0]">
                {
                    [...Array(8)].map((e, i) => {
                        return (
                            <div className="p-2 text-[]" key={i}>
                                <p>Dummy</p>
                            </div>
                        )
                    })

                }
            </div>
           {/* <Section></Section> */}
        </div>
    )
}