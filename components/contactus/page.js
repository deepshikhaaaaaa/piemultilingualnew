
import Banner from "@/components/foreign-language-services/language-translation/banner/Banner";
import Contactus from "@/components/contactus/page"
import RightSection from "@/components/foreign-language-services/language-translation/content/RightSection";
const Contact = () => {
    return (
        <>
            <Banner></Banner>
            <div className="flex justify-center items-center">
                <div className="w-[1250px] flex justify-between">
                    <div className="w-[40%]">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium aspernatur modi alias. Delectus laborum ex, error id, beatae numquam nostrum eligendi necessitatibus porro veniam officia dignissimos fuga et temporibus veritatis?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero itaque eveniet corporis perferendis nesciunt ad quisquam maxime! Atque voluptatibus veritatis repellendus ducimus itaque quaerat suscipit, non sapiente illum quo est?
                        </p>
                    </div>
                    <div className="w-[55%]">
                        <RightSection></RightSection>
                    </div>

                </div>
            </div>
            <div>
                <p>
                    Clients we have served
                </p>
                {/* <div>
                    <div>

                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Contact;