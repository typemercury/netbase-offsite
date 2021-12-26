import React from 'react'

export interface TermHeader2Props {
    onHide?: () => void 
}

const TermHeader2 = ({onHide}: TermHeader2Props) => {
    return (
        <header className='bg-gray-500 grid grid-cols-8 text-white text-base font-bold uppercase'>
            <div className='col-span-7 flex gap-2 items-center justify-center'>
                <div className='bg-white text-gray-500 p-1 cursor-pointer'>All</div>
                <div className='cursor-pointer'><a href="" target="_blank">tw</a></div>
                <div className='cursor-pointer'><a href="" target="_blank">fb</a></div>
                <div className='cursor-pointer'><a href="" target="_blank">ig</a></div>
                <div className='cursor-pointer'><a href="" target="_blank">yt</a></div>
            </div>
            <div 
                className='col-span-1 border-solid border-l-[1px] flex justify-center items-center cursor-pointer'
                onClick={onHide}
            >
                <span>
                    Hide
                </span>
            </div>
        </header>
    )
}

export default TermHeader2
