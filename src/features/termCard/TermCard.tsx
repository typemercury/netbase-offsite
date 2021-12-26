import React from 'react'
import TermContent from './TermContent'
import TermFooter from './TermFooter'
import TermHeader1 from './TermHeader1'
import TermHeader2 from './TermHeader2'

const TermCard = () => {
    return (
        <div className='w-[400px] h-[300px] border-solid border-[1px]'>
            <TermHeader1/>
            <TermHeader2/>
            <div>
                <TermContent/>
            </div>
            <TermFooter/>
        </div>
    )
}

export default TermCard
