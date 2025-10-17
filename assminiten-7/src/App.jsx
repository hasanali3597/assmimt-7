import { Suspense, useState } from 'react'
import { toast, ToastContainer} from 'react-toastify';
import './App.css'
import Navbar from './navbar/Navbar'
import Banner from './navbar/banner/Banner'
import TikitCards from './tikitcards/TikitCards'
import TaskStatus from './assets/taskStatus/taskStatus/TaskStatus'

import Completetax from './assets/taskStatus/taskStatus/Completetax'




const tikitPromis = async () => {
  const res = await fetch('/js.json');
  return res.json()
}
const tikis = tikitPromis()


function App() {
  const [progress, setProgress] = useState([])
  const [resolved, setResolved] = useState([])

  const hendelresoved = (reso) => {
    // console.log(reso)
    const Felterprogres = progress.filter((tik) => tik.id !== reso.id)

    setResolved([...resolved, reso])
    setProgress(Felterprogres)
    toast('Tikit Is Copmletd')
  }
  const hendelclick = (data) => {
    // console.log(data)
    const progres = [...progress, data];
    setProgress(progres)
    toast('Tikit Card Select')

  }
  return (
    <>

      <Navbar></Navbar>
      <Banner progress={progress} resolved={resolved}></Banner>

      <div className="container mx-auto mt-3 flex flex-col md:flex-row gap-4">

        <section className=" w-full md:w-[80%]">
          <Suspense fallback={<h1>Loading...</h1>}>
            <TikitCards hendelclick={hendelclick} tikis={tikis} />
          </Suspense>
        </section>
        <section className=" w-full md:w-[20%] h-[100px]">
          <TaskStatus hendelresoved={hendelresoved} progress={progress}></TaskStatus>
          <Completetax resolved={resolved} ></Completetax>
        </section>
      </div>


       <ToastContainer />
    </>
  )
}

export default App
