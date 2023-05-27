import React from 'react'
import { Navegacion } from '../components/Navegacion'
import { Link } from 'react-router-dom'
import { CardHoverText } from '../components/CardHoverText'

export const Home = () => {
  return (
    <>
        <Navegacion/>

        <main className='w-4/5 mx-auto mt-10'>
            <div>
                <h1 className='text-pink-900'>Quintana Roo</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus quisquam voluptatum veniam quas. Id explicabo vero nemo commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam cupiditate consequatur et dolorum quos aliquam nihil molestiae dignissimos autem repudiandae suscipit voluptatum tenetur facilis provident corrupti harum, qui nemo? Earum corrupti tempora excepturi. Quod ab ipsum sit minus adipisci blanditiis voluptatem?</p>
            </div>


            <div className='flex gap-5 justify-center flex-wrap'>
                <CardHoverText  src="https://www.cancunbay.com/up/media/cb-web-listadochichen.jpg" to="/" discount="40" name="Quintana Roo" />
                <CardHoverText src="https://www.cancunbay.com/up/media/cb-web-listadochichen.jpg" to="/" discount="40" name="Quintana Roo" />
                <CardHoverText src="https://www.cancunbay.com/up/media/cb-web-listadochichen.jpg" to="/" discount="40" name="Quintana Roo" />
            </div>
            



        </main>
    </>
  )
}
