import fig from '../assets/illustration-article.svg'
import pp from '../assets/image-avatar.webp'

export default function Card() {
  return (
    <>
        <div className="absolute -z-[1] h-screen w-screen fbg-yellow"></div>
        <div className="flex h-screen justify-center items-center">
            <div className="card fbg-white m-auto p-5 border border-black shadow-card">
                <figure>
                    <img src={fig} alt="figure.svg" className='rounded-xl'/>
                </figure>
                <div className="card-body p-[5px] mt-2 max-w-[336px] figtree-500">
                    <p className='mt-2 figtree-800 text-black font-bold p-[0.2rem] fbg-yellow w-[81px] rounded-lg text-center'>Learning</p>
                    <p className='mt-2 text-[12px] text-black'>Published 25th Jul 2024</p>
                    <h2 className="card-title mt-2 figtree-800 text-black font-bold hover:hover-text">HTML & CSS foundations</h2>
                    <p className='mt-2 ftext-grey-500 rounded-xl'>These languages are the backbone of every website, defining structure, content and presentation</p>
                    <div className='flex items-center space-x-3 mt-2'>
                        <img src={pp} alt="profilepicture.webp" className='h-[35px]'/>
                        <p className='text-black font-bold'>Greg Hooper</p>
                    </div>
                </div>
            </div>

        </div>
        
    </>
  )
}
