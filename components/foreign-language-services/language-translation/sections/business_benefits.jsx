import Cards from "./cards";
import Cardsec from "./cardsec";

export default function Business_benefits() {
    return (
        <div className="w-[1260px] ml-[20px] mt-[30px]">
            <h2 className="text-[24px] font-normal font-acme text-[#30B1C0] mt-[30px] uppercase leading-3  ">
                business benefits of <span className="text-[#F60]">
                    outsourcing translation services
                </span>
            </h2>
            <div className="flex mt-[30px] gap-[20px] justify-between ">
                <div className="circleparent w-[400px]">
                    <div className="h-[405px] w-[400px] bg-circle rounded-[13px]  flex flex-col relative  border border-solid">
                        {/* <Cardsec></Cardsec> */}

                        <p className=" lowercase text-[#30B1c0] text-[30px] p-[20px]">
                            Winners don&apos;t do different things. They do things differently.
                            Winners don&apos;t do different things. They do things differently.

                        </p>
                        <button className="text-[20px] w-[160px] hover:bg-[#30B1c0] hover:text-[white] border-[#30B1c0] text-[#30B1c0] px-3 py-2 border-solid ml-[20px] rounded-[25px] z-30 mt-[20px]">Read more +</button>

                    </div>
                    <div className="triangle mt-[-200px]">
                    </div>
                    <div className="triangle2 mt-[-180px]">
                    </div>
                </div>
                <div className="">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores mollitia exercitationem minus itaque. Exercitationem soluta quae laboriosam natus expedita officiis, praesentium nihil, ea voluptate earum illum dicta veniam? Culpa, aliquam!</p>
                    <div>
                        <Cards></Cards>
                    </div>
                </div>
            </div>
        </div>
    )
}