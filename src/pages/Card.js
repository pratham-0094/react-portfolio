import React, { useState } from 'react'
import "../style/card.css"

function Card(props) {
    const [Content, setContent] = useState(true);
    const { title, desc, image, tech, tag, host, link } = props.project

    return (
        <>
            <div className="flex flex-col text-center h-auto anime justify-between m-10 rounded-lg bg-black ring-1 ring-slate-900/5 shadow-lg space-y-3">
                <div className='w-60'>
                    <div className="flex justify-center">
                        {image && <img className='rounded-t-lg' src={image} alt="no_image" width="100%" />}
                    </div>
                    <div className="flex flex-col px-4 text-white mt-5">
                        <div className='m-auto'>
                            <h3 className="text-sm font-semibold">{title}</h3>
                            <p className="text-xs text-slate-300">{desc}</p>
                        </div>
                        <div className='h-24 flex justify-center items-center text-xs'>
                            {Content ?
                                <div>
                                    {tech.map(e => <h6 key={e} className="hover-delay anime inline-block cursor-pointer rounded-full px-2 font-semibold text-gray-700 m-1 hover:bg-sky-500">{e}</h6>)}
                                </div> :
                                <div>
                                    <a className='hover-delay anime inline-block bg-gray-200 cursor-pointer rounded-full px-2 font-semibold mr-2 mb-2 text-gray-700' href={link} target="_blank" rel="noreferrer">GITHUB LINK</a>
                                    <a className={`hover-delay anime inline-block bg-gray-200 cursor-pointer rounded-full px-2  font-semibold mr-2 mb-2 ${host !== "" ? "" : "hidden"} text-gray-700`} href={host} target="_blank" rel="noreferrer">WEBSITE</a>
                                    {tag.map(e => <h6 key={e} className="hover-delay anime inline-block bg-gray-200 cursor-pointer rounded-full px-2 font-semibold text-gray-700 m-1">{e}</h6>)}
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="flex justify-around">
                    <button className={`text-xs font-semibold p-2 rounded-bl-lg w-1/2 ${Content ? "text-white bg-black" : "text-black bg-white"}`} onClick={() => { setContent(true) }}>PROJECT</button>
                    <button className={`text-xs font-semibold p-2 rounded-br-lg w-1/2 ${Content ? "text-black bg-white" : "text-white bg-black"}`} onClick={() => { setContent(false) }}>LINK</button>
                </div>
            </div>
        </>
    )
}

export default Card