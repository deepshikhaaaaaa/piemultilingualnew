'use client'
import Image from 'next/image';
import styles from './banner.module.scss';
import Links from '@/components/layout/sidebar/Links';
import Link from 'next/link';

import { useState, useEffect, use } from 'react'
import { useRouter } from 'next/router';

import qs from 'qs';
// import Header from '../../components/header/page';
import axios from "axios"
// import { remark } from 'remark';
// import html from 'remark-html';

const data = {
    heading: 'LANGUAGE TRANSLATION',
    text: 'Hire Language Translation Expert with:-',
    items: [
        'Native Translator', 'Accuracy & transparency', 'Competitive Pricing'
    ],
    image: {
        data: {
            url: '/imgs/language-translation/Language-Translation.jpg'
        }
    }
}

const Banner = () => {



    const [dataa, setdata] = useState()
    const navigate = useRouter();


    //     const query = qs.stringify(
    //         {
    //             populate: [

    // 'image',
    // "list"




    //             ],
    //         },
    //         {
    //             encodeValuesOnly: true,
    //         }
    //     );


    //     const urltop = process.env.NEXT_PUBLIC_url + query;



    // useEffect(() => {
    //     const fetching = async () => {
    //         console.log(urltop)
    //         await axios.get(urltop)
    //             .then((response) => {
    //                 console.log(response.data);
    //                 // var text = response.data.data[0].attributes.secondsection.content;
    //                 // setText(text);
    //                 // setHead(response.data.data[0].attributes.secondsection.heading)
    //                 // setLink(response.data.data[0].attributes.secondsection.videolink)
    //                 (response.data.data[0] !== null && response.data.data[0] !== undefined) ? setdata(response.data.data[0].attributes) : ""

    //                 // setDatamenu(response.data.data[0].attributes.herosection.menu)
    //                 // setDatahero(response.data.data[0].attributes.herosection.herobox)
    //                 // console.log(response.data.data[0].attributes)
    //                 // setthird(response.data.data[0].attributes.services)
    //                 // dataa = data
    //             }).catch(()=>{
    // console.log(error)
    // })
    //     }
    //     fetching();
    //     console.log(dataa)
    // }, [urltop])








    console

    return (
        <div className={styles.container}>
            {
                <>
                    <div className={styles.textContainer}>
                        <h1 className={styles.heading}>{data.heading}</h1>


                        <p className={styles.text}>{data.text}</p>

                        <div className={styles.div}>
                            <ul className='flex flex-col gap-[10px]'>
                                {data.items.map((item, i) =>
                                    <div className={`flex h-[20px] justify-start items-center gap-[5px]`} key={i}>

                                        <svg xmlns='http://www.w3.org/2000/svg' className='h-[15px] w-[17px] rotate-[270deg]' shape-rendering='geometricPrecision' text-rendering='geometricPrecision' image-rendering='optimizeQuality' fillRule="evenodd" clipRule="evenodd" fill='#f60' viewBox='0 0 512 299.283'><path d='M75.334 12.591C10.57-24.337-20.852 28.186 15.131 64.566l200.866 209.613c33.472 33.471 46.534 33.471 80.006 0L496.869 64.566c35.983-36.38 4.561-88.903-60.203-51.975L256 109.944 75.334 12.591z' /></svg><li >{item}</li>
                                    </div>)}
                            </ul>
                            <Link className={styles.link} href='/'>Consult</Link>
                        </div>
                    </div>
                    <div className={styles.imgContainer}>
                        <Image src={data.image.data.url} width={0} height={0} sizes='100%' alt='' priority />
                    </div></>

            }
        </div>
    )
}

export default Banner