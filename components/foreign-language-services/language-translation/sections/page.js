// import Form from "../../../form"
import Cards from "./cards"
import Last from "./last"
import Cardsec from "./cardsec";
import Tiltcard from "./titlcard";
import Business_benefits from "./business_benefits";
import Lastsection from "./lastsection";
// import Footer from "../../../Footer/page";

export default function Section() {
    return (
        <div className=" flex flex-col justify-center items-center">
            <div className="flex   w-min-screen mt-[0px] min-[380px]:h-[850px] h-[800px] items-start z-[0]       ">
                <div className="flex-1 p-8   ">
                    <div className="  w-[921px] ">
                        <p className='text-[24px] font-normal mt-[50px] font-acme text-[#30B1C0]'>
                            DUMMY HEADING
                        </p>
                        <p className='text-[13px] leading-[25px] font-roboto font-normal text-[#333] w-[791px]'>
                            Today, the entire world is coming together to a uniform platform to have a progressive future.To have a global connect, and bring everyone on same page, language plays a key role. To diminish the language barriers, there are Professional Document Translation Services, which bridges the language gap and provide you with a diversified and multilingual assistance.
                            <br />
                            PIE MULTILINGUAL is one of the fastest growing multilingual service providers, whose main motto is to provide excellent quality language translation services which are pretty easy on the pocket. Today we have expertise to translate the documents and data from one language to any other language of the world.
                        </p>
                        <p className='text-[13px] leading-[25px] font-roboto font-normal text-[#333] w-[791px]'>
                            We help you with other translations services, Including:
                        </p>
                        <div className="w-[801px] grid grid-cols-3 gap-y-[20px] gap-x-[15px] mt-[50px]">
                            {
                                [...Array(6)].map((e, i) => {
                                    return (
                                        <div key={i} className="w-[258px] h-[50px] flex   shadow-md shadow-gray-300 rounded-[4px]">
                                            <div className="w-[40px] h-full bg-[#F54950]">

                                            </div>
                                            <div>
                                                <p>
                                                    Document Translation Services
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <p className='text-[24px] font-normal font-acme text-[#30B1C0] mt-[30px]'>
                            BEST TRANSLATION QUALITY ASSURANCE
                        </p>
                        <p className='text-[13px] leading-[25px] font-roboto font-normal text-[#333] w-[791px] mt-[10px]'>
                            The best way to gain customer’s trust is by providing best quality service; and this is what we strive for. It is nearly impossible for a
                            person to translate his ideas and material to the target audience who speaks an altogether different language. That where our
                            services come into picture. To ensure an accurate translation, we have set quality check parameters at every stage in the entire
                            process, and to achieve this native speakers are hired for the same. The highest standards are delivered to our clients. We are
                            driven towards quality and excellence which helps our clients soar the highest levels of achievement.
                        </p>
                        <p className='text-[24px] font-normal font-acme text-[#30B1C0] mt-[30px]'>
                            LANGUAGE TRANSLATION SERVICE EXPERT
                        </p>
                        <p className='text-[13px] leading-[25px] font-roboto font-normal text-[#333] w-[791px] mt-[10px]'>
                            The best way to gain customer’s trust is by providing best quality service; and this is what we strive for. It is nearly impossible for a
                            person to translate his ideas and material to the target audience who speaks an altogether different language. That where our
                            services come into picture. To ensure an accurate translation, we have set quality check parameters at every stage in the entire
                            process, and to achieve this native speakers are hired for the same. The highest standards are delivered to our clients. We are
                            driven towards quality and excellence which helps our clients soar the highest levels of achievement.
                        </p>

                        {/* <div className="mt-[30px]">
                            <Cards></Cards>
                        </div>

                        <div>
                            <p className='text-[24px] font-normal font-acme text-[#30B1C0] mt-[30px]'>
                                LANGUAGE TRANSLATION SERVICE EXPERT
                            </p>
                            <p className='text-[13px] leading-[25px] font-roboto font-normal text-[#333] w-[791px] mt-[10px]'>
                                It is our policy to maintain high confidentiality as it is a mark of respect towards the client and also it helps build mutual trust. Also,
                                we understand the sensitive nature of the documents which are provided to us for translation, and in order to maintain it, we make
                                sure that all the papers and documents are shredded before disposing.
                            </p>
                        </div>
                        <div>
                            <p className='text-[24px] font-normal font-acme text-[#30B1C0] mt-[30px]'>
                                Multilingual Translation Expert company Advantage
                            </p>
                            <div className="flex w-full justify-between pr-[30px] mt-[10px]">
                                <p className='text-[14px] leading-[25px] font-roboto font-normal text-[#333] w-[373px] '>
                                    We provide superior solution on Language translation
                                    services. Our experienced and certified language translators
                                    bring maximum accuracy in their deliverable. Our modus
                                    operandi enable us to provide quick support on their
                                    requirements. Our translation support has been appreciated
                                    by International firms, government bodies and embassies.
                                    Our Advantages are:
                                </p>
                                <div className="pl-[5px] border-l-4 border-solid border-[#3F3F3F]">
                                    <div className="h-[50px] bg-[#FF6600] w-[373px] px-[9px] flex items-center ">
                                        <p className="text-[18px] font-roboto font-normal text-[#FFF]">99.9% Accuracy</p>
                                    </div>
                                    <div className="h-[50px] bg-[#D65600] w-[373px] px-[9px] flex items-center ">
                                        <p className="text-[18px] font-roboto font-normal text-[#FFF]">
                                            99.9% On-time Delivery
                                        </p>
                                    </div>
                                    <div className="h-[50px] bg-[#AD4601] w-[373px] px-[9px] flex items-center ">
                                        <p className="text-[18px] font-roboto font-normal text-[#FFF]">
                                            100% Human Translation
                                        </p>
                                    </div>
                                    <div className="h-[50px] bg-[#562300] w-[373px] px-[9px] flex items-center ">
                                        <p className="text-[18px] font-roboto font-normal text-[#FFF]">
                                            Round the clock support
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='text-[24px] font-normal font-acme text-[#30B1C0] mt-[30px]'>
                                QUALITY AND ACCURATENESS – PARTNER WITH LANGUAGE TRANSLATION EXPERTS
                            </p>
                            <p className='text-[14px] leading-[25px] font-roboto font-normal text-[#333] w-[781px] mt-[10px]'>
                                Every big and small organization have a team of in house translation professionals who help them to establish their position in the
                                international market. The hectic work schedule inside the company makes little a tedious for them. To make work more efficient,
                                outsourcing your multilingual translation needs will reduce extra overheads assisting in diminishing boundaries against territories.
                                <br />
                                We here at Pie Multilingual are fully functional and managed to cater all your language translation needs. We have a dedicated team
                                using latest technologies to process the data and the information delivering high quality byproduct. You will also enjoy the benefits of
                                commercial and operational efficiencies that will come as a result of our multiple language translation services. The competitive
                                pricing, fast turnaround time and above all incomparable accuracy and localization with security and confidentiality maintained, leads
                                you to mark presence in the global market.
                            </p>
                        </div> */}







                    </div>


                </div>
                {/* <div className="sticky top-0 bg-white mt-[20px]">
                    <Form></Form>
                    {
                        [...Array(3)].map((e,i)=>{
                            return <Cardsec key={i}></Cardsec>
                        })
                    }
                </div> */}

            </div>
            <div className=" w-[1160px]  grid grid-cols-3 gap-y-[20px] gap-x-[60px] mt-[50px]">
                {
                    [...Array(6)].map((e, i) => {
                        return (
                            <Tiltcard key={i}></Tiltcard>

                        )
                    })
                }
            </div>
            <Business_benefits></Business_benefits>
            <Lastsection></Lastsection>
            <Last></Last>
            
        </div>
    )
}