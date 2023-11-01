export default function Cards() {
    return (

        <div className="grid grid-cols-2 w-full gap-[30px]">
            {
                [...Array(4)].map((e, i) => {
                    return (
                        <div className="w-[382px] p-[15px] curvedparent flex h-[151px] border border-gray-200 shadow-sm" key={i}>
                            <div className="h-[41px] w-[56px] curved flex justify-center items-center border-solid border-b-2 border-[#30B1C0]">
                                <i className="flaticon-recruitment text-[50px]"  ></i>
                            </div>
                            <div className="w-[302px] h-[131px] px-[15px] py-[7px]">
                                <p className="w-full text-[#F60] border-b-2 border-t-2 border-solid border-[#F60] fira text-[15px] font-semibold uppercase">
                                    ENSURED SECURITY
                                </p>
                                <p className="text-[14px] mt-[12px] fira font-normal text-[#333] leading-[25px]">We ensure complete security to your data
                                    and ensure that the content is only
                                    accessible by the client.</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}