import React, { useState, useRef, useEffect } from 'react';
// import IpInfo from './IpInfo';
import axios from 'axios';
import Image from 'next/image';
export default function RightSection(props, { req }) {

    const [code, setcode] = useState('+91')
    const [show, setshow] = useState(false)

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [fileNames, setFileNames] = useState([]);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        // const selectedFiles = Array.from(e.target.files);

        if (selectedFiles.length <= 4 && files.length <= 4) {
            // Handle the selected files here
            console.log(files);


            // Update the list of selected files
            setSelectedFiles([...selectedFiles, ...files]);

            // Update the list of file names
            setFileNames([...fileNames, ...files.map((file) => file.name)]);

            // Reset the input field value to clear it
            fileInputRef.current.value = null;
        } else {
            // Alert the user or handle the case where too many files are selected
            alert("You can select at most 4 files.");
            // Clear the input by resetting its value
            fileInputRef.current.value = null;
        }
    };

    const handleFileDelete = (fileName) => {
        // Filter out the file to be deleted
        setSelectedFiles(selectedFiles.filter((file) => file.name !== fileName));
        setFileNames(fileNames.filter((name) => name !== fileName));
    };

    const handleUpload = () => {
        const Files = Array.from(e.target.files);

        if (selectedFiles.length <= 4) {
            // Handle the selected files here
            console.log(selectedFiles);
        } else {
            // Alert the user or handle the case where too many files are selected
            alert("You can select at most 4 files.");
            // Clear the input by resetting its value
            fileInputRef.current.value = null;
        }

    };


    useEffect(() => {
        if (selectedFiles.length <= 4) {
            // Handle the selected files here
            console.log(selectedFiles);
        } else {
            // Alert the user or handle the case where too many files are selected
            alert("You can select at most 4 files.");
            // Clear the input by resetting its value
            fileInputRef.current.value = null;
        }
    }, [selectedFiles])
    const [uplaodbutton, setuploadbutton] = useState(false)
    console.log(props.data)

    useEffect(() => {
        if (props.data !== null && props.data !== undefined) {
            setuploadbutton(true)
            setgap(15)
        }
        else
            setgap(5)
    }, [props])




    const [ipInfo, setIpInfo] = useState(null);



    useEffect(() => {
        try {
            fetch('https://ip.nf/me.json')
                .then(res => res.json())
                .then(response => {
                    setIpInfo(response.ip.country_code)
                    console.log("Country is : ", response.ip.country_code);
                })
                .catch((data, status) => {
                    console.log('Request failed:', data);
                });
        }
        catch (e) {
            console.log("errror", e)
        }
    }, [])
    // useEffect(() => {



    //     const fetching = async () => {
    //         console.log("inside")
    //         const request = await fetch(
    //             'https://ipinfo.io/json?token=948b4507e0fab1'
    //         );
    //         const jsonResponse = await request.json();

    //         console.log(jsonResponse.ip, jsonResponse.country);
    //         setIpInfo(jsonResponse.country)
    //         //    const jsonResponse = request.json();

    //         //    console.log(jsonResponse.ip, jsonResponse.country);
    //     }
    //     fetching();
    // }, [])


    function warning() {
        alert("You can select at most 4 files.");
    }

    const [gap, setgap] = useState()
    const [gapp, setgapp] = useState()
    useEffect(() => {
        uplaodbutton ? setgap(10) : setgap(18)
        uplaodbutton ? setgapp(10) : setgap(10)

    }, [gap, gapp, uplaodbutton])
    // var gap=(uplaodbutton)?15:8;
    // var gapp=(uplaodbutton)?15:18;



    return (
        <div className={`w-[100%] gap-[${gap}px] z-0  justify-between   shadow-lg bg-[#eeeded] rounded-[15px] flex flex-col  items-center   shadow-[#514e4e]   `}>
            <div className={`w-[100%] h-[42px] bg-[#F60] rounded-t-[15px] border-b-[1px] shadow-none  relative border-[#F60] flex flex-col justify-center items-center`}>
                <p className="text-[24px] robotomono  tracking-[-1px]  text-[#FFFF]">
                    Request a <span className="font-acme tracking-[1px] font-medium text-[27px]">
                        FREE QUOTE
                    </span>
                </p>

            </div>
            <p className="text-[15px] relative  font-roboto  leading-[20px]  text-[#211f1f]">
                Partner with Multilingual experts <br />
                Save your cost within 12 hours
            </p>
            {/* <div className="h-[88px] w-full  bg-[#f60] flex flex-col bg- justify-center rounded-t-[15px] items-center">

               
            </div> */}
            <div className="px-[25px]   w-[100%]   shadow-none flex flex-col gap-y-[8px] ">
                <input type="text" className="rounded-[3px] text-[black] bg-[#eeeded] text-[15px] p-[5px] w-full h-[30px]  border-[1px] border-solid border-[#F60]" placeholder='Name' />
                <input type="text" className="rounded-[3px] text-[black] bg-[#eeeded] text-[15px]  p-[5px] w-full h-[30px] border-[1px] border-solid border-[#F60]" placeholder='Email' />
                <div>
                    <div>
                        <div className="flex">
                            <button className=" w-[35px] border-[1px] text-[14px] border-solid border-[#F60] bg-[#807d7aac] font-medium font-roboto text-white">

                                {(ipInfo != null && ipInfo != undefined) ? ipInfo : ""}
                            </button>
                            <input type="text" className="rounded-[3px] text-[15px] text-[black] p-[5px] w-full h-[30px] border-[1px] border-l-0 rounded-bl-none rounded-tl-none border-solid border-[#F60]" placeholder='Phone number' />
                        </div>

                    </div>



                </div>
                {
                    (show) ? <textarea name="" id="" className=" rounded-[3px] w-full h-[142px] border-[1px] border-solid border-[#F60] mt-[-110.5px]" style={{ resize: 'none' }}></textarea> : <textarea name="" id="" className=" p-2  text-[15px]  rounded-[3px] w-full h-[142px] border-[1px] border-solid border-[#F60]" style={{ resize: 'none' }} placeholder='Write requirements'></textarea>
                }
                <div className=" overflow-hidden flex justify-start  flex-col text-[16px]  font-roboto text-[gray]">
                    <input
                        type="file"
                        multiple
                        onChange={(selectedFiles.length <= 3) ? handleFileChange : warning}
                        ref={fileInputRef}
                        id="fileInput"
                        style={{ display: 'none' }}

                    />
                    {
                        (uplaodbutton) ? <div className='flex gap-[28px] justify-between'>
                            <label htmlFor="fileInput" className=" flex justify-center items-center h-[30px] w-[119px] border-dashed border-2 border-[#0c5460] items-centercustom-file-input-label text-[#0c5460] font-normal text-[15px]  ">
                                <svg fill="#1e5f71" className='mr-[8px]' height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" space="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M470.7,277.2c3-11.2,4.7-22.9,4.7-35c0-75.8-61.4-137.1-137.1-137.1c-19.5,0-38,4.1-54.7,11.4 c-16.8-39-55.6-66.3-100.7-66.3c-60.6,0-109.7,49.1-109.7,109.7c0,4.1,0.8,7.9,1.2,11.9C30.5,192.1,0,236.3,0,287.9 c0,70.7,57.3,128,128,128h310.9c40.4,0,73.1-32.7,73.1-73.1C512,313.8,495.1,289.1,470.7,277.2z M292.6,251.3v91.4h-73.1v-91.4 h-54.9l91.4-91.4l91.4,91.4H292.6z"></path> </g></svg>
                                <p className='font-acme'> Upload files</p>
                            </label>
                            <p className='text-[11px] text-[#000] font-roboto mr-[12px]'> Upload Max 4 files <br /> (10MB each)</p>
                        </div> : ""
                    }
                    <ul>
                        {fileNames.map((fileName, index) => (
                            <li key={index} className='w-[250px] flex overflow-hidden justify-between pr-2'>
                                <p className='h-[20px] mt-[4px] w-[170px] '>{fileName}</p>
                                <button onClick={() => handleFileDelete(fileName)} className='hover:text-red-600'>
                                    <svg className='hover:fill-red-500 h-[10px] w-[10px]  font-extrabold' fill="#000000" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" space="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "></polygon> </g></svg>
                                </button>
                            </li>
                        ))}
                    </ul>
                    {/* <button onClick={handleUpload}>Upload</button> */}
                </div>
                <button className={`rounded-[4px] hover:bg-[#F60] hover:text-[#FFF] border-[1px] h-[40px] text-[21px] border-solid border-[#F60] font-medium font-roboto text-[#F60] `} >➤ SEND</button>

            </div>
            <div className={`h-[42px] relative mt-[5px] bg-[#F60] w-[100%] rounded-b-[15px] flex justify-center items-center`}>
                <p className="font-normal font-inter text-[15.3px]  text-[black] ">We respect your privacy. <span className="text-[#FFF] "><a href="">Read our Policy</a></span></p>
            </div>
        </div>
    )
}