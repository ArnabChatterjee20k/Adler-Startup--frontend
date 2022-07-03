import React from 'react'
import { Card } from '../Card/Card'
import { Slider } from '../Carosouel/Slider'
import { useService } from './useService'
const Service = ({id}) => {
    const style = { height: '200px', width: '200px' };
    const servies = useService();
    return (
        <section className='horizontal-container mt-8 py-4 px-16' id={id}>
            <div className='flex-col justify-center items-center space-y-10'>
                <div className="flex flex-col items-center justify-center space-y-1">
                    <h1 className='text-center text-4xl font-bold  md:text-6xl'>How Our Agency</h1>
                    <h1 className='text-center text-4xl font-bold  md:text-6xl'>Can Help</h1>
                </div>
                {/* <div className='w-screen grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-10'> */}
                <div className='max-w-[90vw] overflow-hidden flex justify-center items-center'>
                    <Slider>
                    {servies.map((service,index)=><Card key={index} static_card {...service} classes="min-h-[20rem]"/>)}
                </Slider>
                {/* {servies.map((service)=><Card static_card {...service} classes="min-h-[18rem]"/>)} */}
                </div>
            </div>
        </section>
    )
}
export default Service;