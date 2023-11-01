import Link from "next/link"

export default function Footer() {

    const bottomLinks = [
        {
            icon: "flaticon-house",
            url: "/"
        },
        {
            text: "FOREIGN LANGUAGE SUPPORT",
            url: "/foreign-language-services"
        },
        {
            text: "MARKET RESEARCH & ANALYSIS",
            url: "/outsource-market-research-services"
        },
        {
            text: "TRANSCRIPTION SERVICES",
            url: "/transcription-services"
        },
        {
            text: "MULTILINGUAL CALL CENTER",
            url: "/multilingual-call-center-outsourcing"
        },
        {
            text: "DATA ENTRY SERVICES",
            url: "/data-entry"
        },
        {
            text: "CREATIVE SERVICES",
            url: "/outsource-creative-services"
        }, {
            text: "PHOTO EDITING SERVICES",
            url: "/outsource-photo-editing-services"
        },
        {
            text: "VIRTUAL ASSISTANT SERVICES",
            url: "/virtual-assistant-services"
        },
        {
            text: "FINANCE & ACCOUNTING",
            url: "/"
        },
        {
            text: "WEB DESIGN & DEVELOPMENT",
            url: "/"
        }
    ]

    return (
        <div>
            <div className=" w-full h-[450px] bg-[#434146] flex ">
                <div className="w-[90px] h-[520px] mt-[200px] z-30 relative top-[70px] bg-[#30B1C0] flex self-end rounded-tr-[150px]">
                    <p className="vertical text-[#FFF] text-[23px] font-bold text-center pl-[20px] mt-[10px]">request a quote</p>
                </div>
                <div className="ml-[100px]">
                    <div className="boxarrow h-[45px] w-[250px] ml-[]">
                        <p className="text-[20px] font-roboto font-medium text-[#FFF]">About us</p>
                        <p className="w-[250px] text-[15px] mt-[30px] ml-[-20px] font-roboto" >
                            We, Multilingual Business Service  Company, provide valuable insights about what you expect from us. Our Multilingual cum multidisciplinary business service help you to cut your operation cost. We understand your needs and build long-lasting happy relations with you. We develop loyal customers by delivering the highest customer satisfaction for long-term success. We are Flexible, Custom Configured and Customer delighted company. We are here to talk anytime.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="boxarrow justify-start h-[45px] w-[270px]">
                        <p className="text-[20px] font-roboto font-medium text-[#FFF]">
                            Quick Links
                        </p>
                        <div className="mt-[22px] w-full flex flex-col justify-start ml-[-15px]">



                            {
                                bottomLinks.map((e, i) => {
                                    return <div className="mt-[8px] w-[260px] flex" key={i}>
                                        {
                                            (e.text) ? <div className="flex w-[260px] justify-start items-center gap-[10px]">
                                                <svg xmlns='http://www.w3.org/2000/svg' className='h-[10px] w-[12px] rotate-[270deg]' shape-rendering='geometricPrecision' text-rendering='geometricPrecision' image-rendering='optimizeQuality' fillRule="evenodd" clipRule="evenodd" fill='#fff' viewBox='0 0 512 299.283'><path d='M75.334 12.591C10.57-24.337-20.852 28.186 15.131 64.566l200.866 209.613c33.472 33.471 46.534 33.471 80.006 0L496.869 64.566c35.983-36.38 4.561-88.903-60.203-51.975L256 109.944 75.334 12.591z' /></svg>
                                                <Link href={`/${e.url}`} className="uppercase">{e.text}</Link>
                                            </div> : ""
                                        }
                                    </div>
                                })
                            }
                            {/* <div className="ml-[-20px] mt-[30px]">
                                <a href="" className="uppercase">Foreign language services</a>
                            </div>
                            <div className="ml-[-20px] mt-[8px]">
                                <a href="" className="uppercase">MARKET RESEARCH & ANALYSIS</a>

                            </div>
                            <div className="ml-[-20px] mt-[8px]">
                                <a href="" className="uppercase">TRANSCRIPTION SERVICES</a>

                            </div>
                            <div className="ml-[-20px] mt-[8px]">
                                <a href="" className="uppercase">MULTILINGUAL
                                    CALL CENTER</a>

                            </div>
                            <div className="ml-[-20px] mt-[8px]">
                                <a href="" className="uppercase">DATA ENTRY
                                    SERVICES</a>

                            </div>
                            <div className="ml-[-20px] mt-[8px]">
                                <a href="" className="uppercase">CREATIVE
                                    SERVICES</a>

                            </div> 
                            <div className="ml-[-20px] mt-[8px]">
                                <a href="" className="uppercase">PHOTO EDITING
                                    SERVICES</a>

                            </div>
                            <div className="ml-[-20px] mt-[8px]">
                                <a href="" className="uppercase">VIRTUAL ASSISTANT
                                    SERVICES</a>

                            </div>
                            <div className="ml-[-20px] mt-[8px]">
                                <a href="" className="uppercase">FINANCE &
                                    ACCOUNTING</a>

                            </div>
                            <div className="ml-[-20px] mt-[8px]">
                                <a href="" className="uppercase">WEB DESIGN &
                                    DEVELOPMENT</a>

                            </div> */}

                        </div>
                    </div>

                </div>
                <div>
                    <div className="boxarrow h-[45px] w-[250px]">
                        <p className="text-[20px] font-roboto font-medium text-[#FFF]">
                            News letter
                        </p>
                        <div>
                            <div className="ml-[-20px] mt-[30px]">
                                <p className="text-[15px] font-roboto font-normal">
                                    Name
                                </p>
                                <input type="text" className="w-[250px] p-2 bg-white rounded-[4px]" />
                            </div>
                            <div className="ml-[-20px] mt-[8px]">
                                <p className="text-[15px] font-roboto font-normal">
                                    Email
                                </p>
                                <input type="text" className="w-[250px] p-2 bg-white rounded-[4px]" />
                            </div>
                            <div className="flex">
                                <input type="checkbox" name="" id="" className="ml-[-20px] mr-[10px]" />
                                <p className="text-[12px] mt-[15px]">
                                    Subscribing I accept the privacy rules of this site
                                </p>
                            </div>
                            <button className=" ml-[-20px] p-2 rounded-[2px] mt-[20px] font-roboto font-medium text-[16px] border border-[#6c6868] bg-[#4f4f54]  ease-in-out transition-transform  hover:bg-[#30B1C0]">Subscribe</button>
                        </div>
                    </div>

                </div>
                <div>
                    <div className="boxarrow h-[45px] w-[250px]">
                        <p className="text-[20px] font-roboto font-medium text-[#FFF]">
                            Social links
                        </p>
                        <div className="flex  gap-[30px] ml-[-19px] mt-[40px] justify-start">
                            <div className=" ease-in-out transition-transform  w-[32px] h-[35px] text-[35px] flex justify-center items-center hover:text-[#30B1C0] text-white flaticon-pinterest-sign rounded-[4px]"  ></div>
                            <div className="w-[32px]  ease-in-out transition-transform  h-[35px] text-[35px] flex justify-center items-center text-white flaticon-youtube-logo hover:text-[#30B1C0] rounded-[4px]"  ></div>
                            <div className="w-[32px] h-[35px] text-[35px] hover:text-[#30B1C0] flex justify-center items-center text-white   flaticon-facebook-logo  ease-in-out transition-transform  rounded-[4px]"  ></div>
                            <div className="w-[32px] hover:text-[#30B1C0] ease-in-out transition-transform h-[35px] text-[35px] flex justify-center items-center text-white   flaticon-linkedin-logo rounded-[4px]"  ></div>

                        </div>
                    </div>


                </div>

            </div>
            <div className="flex bg-black w-full h-[70px]  items-center ">
                <div>
                    <p className="font-roboto text-[14px] text-white ml-[215px] w-[500px]">
                        © 2023, PIE Multilingual Services All Rights Reserved.
                    </p>
                </div>
                <div className="flex w-full h-[70px] justify-end items-center ">
                    <div className="flex  sm:w-[400px] sm:h-[35px]  items-center justify-between bg-[#F60] shadow-sm shadow-[#191919;] rounded-bl-[50px] mr-[200px]">

                        <div>
                            <p className="text-[#FCFCFF] text-[14px] border-r-[1px] border-r-[#FCFCFF] pl-[16px] pr-[6px] font-roboto font-bold ">
                                Privacy policy
                            </p>
                        </div>
                        <div>
                            <p className="text-[#FCFCFF] text-[14px] border-r-[1px] border-r-[#FCFCFF] pl-[6px] pr-[6px] font-roboto font-bold ">
                                Career
                            </p>
                        </div>
                        <div>
                            <p className="text-[#FCFCFF] text-[14px] border-r-[1px] border-r-[#FCFCFF] pl-[6px] pr-[6px] font-roboto font-bold ">
                                Blog
                            </p>
                        </div>
                        <div>
                            <p className="text-[#FCFCFF] text-[14px] border-r-[1px] border-r-[#FCFCFF] pl-[6px] pr-[6px] font-roboto font-bold ">
                                Sitemap
                            </p>
                        </div>
                        <div>
                            <p className="text-[#FCFCFF] text-[14px] border-r-[1px] border-r-[#FCFCFF] pl-[6px] pr-[6px] font-roboto font-bold ">
                                FAQs
                            </p>
                        </div>
                        <div>
                            <p className="text-[#FCFCFF] mr-[10px] text-[14px]  pl-[6px] pr-[6px] font-roboto font-bold ">
                                Video
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}