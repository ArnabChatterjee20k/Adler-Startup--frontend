import React from 'react'
import { Card } from '../Card/Card'
import { Slider } from '../Carosouel/Slider'
import { useService } from './useService'
const Service = () => {
    const style = { height: '200px', width: '200px' };
    const servies = useService();
    return (
        <section className='horizontal-container mt-8 py-4 px-16'>
            <div className='flex-col justify-center items-center space-y-10'>
                <div className="flex flex-col items-center justify-center space-y-1">
                    <h1 className='text-center text-4xl font-bold  md:text-6xl'>How Our Agency</h1>
                    <h1 className='text-center text-4xl font-bold  md:text-6xl'>Can Help</h1>
                </div>
                <div className='w-screen'>
                    <Slider>
                    {servies.map((service)=><Card static_card {...service} classes="min-h-[18rem]"/>)}

                    </Slider>
                </div>
            </div>
        </section>
    )
}
export default Service;