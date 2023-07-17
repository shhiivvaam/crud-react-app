import React from 'react'

const Layer = ({text}) => {
    return (
        <div className='p-3'>
            <h1 className='text-center capitalize font-bold text-lg pb-3'>
                All Todos
            </h1>
            <p className='text-slate-200 font-light overflow-y-auto h-[20rem]'>
                {text}
            </p>
        </div>
    )
}

export default Layer