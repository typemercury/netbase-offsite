import React, { useState } from 'react'
import TermContent from './TermContent'
import TermFooter from './TermFooter'
import TermHeader1 from './TermHeader1'
import TermHeader2 from './TermHeader2'

const TermCard = () => {
    const [isShowHeader2, setIsShowHeader2] = useState(true);
    return (
        <div className='w-[400px] h-[300px] border-solid border-[1px]'>
            <TermHeader1/>
            {
                isShowHeader2 && 
                <TermHeader2 onHide={() => setIsShowHeader2(isShow => !isShow)}/>
            }
            <div>
                <TermContent/>
            </div>
            <TermFooter/>
        </div>
    )
}

export default TermCard
