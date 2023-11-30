import { useState } from 'react'
import Cards from './data'
import './Articles.css'

const Articles = () => {
  const [readMore, setReadMore] = useState(false)
  return (
    <div className="flex flex-col justify-center items-center gap-6 w-full mx-auto mt-8 text-center">
      <div>
        <h1 className="pb-1 heading">Our Articles</h1>
        <span className="sub-heading">
          The latest industry news, interviews, technologies, and resources.
        </span>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4">
        {Cards.map((card) => {
          const { id, desc, img, person } = card
          return (
            <div key={id} className="flex flex-col text-start card">
              <div className="w-full">
                <img src={img} alt="image" className="image-container" />
              </div>
              <div className="p-[12px]">
                <div className="desc">
                  <h1 className="pt-4 pb-2 head">
                    The Impact of DevOps on Software Development and Deployment
                  </h1>
                  <p className="content">
                    {readMore ? desc : `${desc.substring(0, 65)}`}...
                    <button
                      onClick={() => setReadMore(!readMore)}
                      className="pl-1"
                    >
                      {readMore ? 'Show less' : 'Read more'}
                    </button>
                  </p>
                </div>

                <div className="flex gap-4 items-center">
                  <img src={person.img} alt="" className="p-img mr-[12px]" />
                  <span className="text p-name mr-[21px]">{person.name}</span>
                  <span className="textLight p-date">{person.date}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Articles
