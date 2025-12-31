import { useState } from 'react'
import { technology } from '/src/data.json'

const Technology = () => {
    const [active, setActive] = useState(0)
    const tech = technology[active]

    return (
        <>
            <section className="technology-sec back-needs">
                <div className='d-flex flex-column gap-2r s-pad text-center-mob'>
                    <h1 className='color-w font-w-400 font-s-2r font-f-Bar-Con lett-sp-4 word-sp-2'><b className='color-blue-300'>03</b> SPACE LAUNCH 101</h1>

                    <div className='d-flex gap-5r flex-column-r-tab'>
                        <div className='d-flex gap-2r align-i-center flex-column-tab text-center-tab-mob'>
                            <div>
                                <nav>
                                    <ul className='d-flex flex-column align-i-center gap-1-5r flex-row-tab'>
                                        {technology.map((item, index) => (
                                            <li key={item.name} onClick={() => setActive(index)} className={'color-w font-s-2r font-f-Belle bor-rad-50p bor-1-s-blue-300 cursor-p tr-a-03s-ea circle d-flex align-i-center just-c-center' + (index === active ? ' bg-w color-blue-900' : ' opacity-05 inactive-circle')}>{index + 1}</li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>

                            <div className='d-flex flex-column gap-1r'>
                                <h1 className='color-blue-300 font-w-400 font-f-Belle font-s-2r'>THE TERMINOLOGY...</h1>
                                <h1 className='color-w font-f-Belle font-s-3-5r font-w-400 text-tr-upp'>{tech.name}</h1>
                                <p className='color-blue-300 line-height-1-7 font-f-Bar font-s-1-1r'>{tech.description}</p>
                            </div>
                        </div>

                        <div>
                            <picture>
                                <source media='(max-width: 1024px)' srcSet={tech.images.landscape} />

                                <img src={tech.images.portrait} alt={tech.name} className='width-100-tab' />
                            </picture>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Technology