import Cards from './data'
import './Articles.css'

const Articles = () => {
  const SliceText = (text) => {
    const length = text.length;
    if (length > 65) {
      const slicedText = text.slice(0, 65)
      const newText = slicedText + "..."
      return newText
    } else {
      return text+"..."
    }
  }
  return (
    <div className="flex flex-col items-center w-full pb-12 text-center text-black h-fit">
      <div className='lg:px-[7.5rem] md:px-12 px-4 max-w-[87.5rem] flex flex-col justify-center items-center'>

        <div className='flex flex-col pt-6 pb-9'>
          <span className="pb-2 text-4xl font-semibold ">Our Articles</span>
          <span className="text-lg font-normal ">
            The latest industry news, interviews, technologies, and resources.
          </span>
        </div>

        <div className="flex flex-row flex-wrap items-start w-full gap-8 pb-12 text-black">
          {Cards.map((card) => {
            const { id, title, desc, img, person } = card
            return (
              <div key={id} className="flex flex-col border border-[#D4CECB] lg:max-w-[22rem] m-auto  max-w-[18rem] bg-white rounded-lg text-start">
                <div>
                  <img className='w-full rounded-t-lg' src={img} alt="image" />
                </div>
                <div className="px-3 pt-5 pb-3">
                  <span className="text-xl font-semibold text-black ">
                    {title}
                  </span>
                  <p className="w-full pt-2 textLight">
                    {SliceText(desc)} <a className="underline text-text-dev-orange" href="#">Read more</a>
                  </p>

                  <div className="flex items-center w-full gap-4 pt-7">
                    <img src={person.img} alt="" />
                    <span className="text">{person.name}</span>
                    <span className="textLight">{person.date}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <button className='h-12 px-5 py-3 bg-black rounded-lg w-fit text-[#FFF6F3]'>
          Read Blog
        </button>
      </div>
    </div>
  )
}

export default Articles
