import React, { useEffect, useState } from 'react'
interface ListItem {
  title: string;
}
export type customeInputState = {
  id:string|number;
  title: String | number | any;
  description: String | any
}

type customeInputeventProps={
  btnHandler:(data:customeInputState)=> void
}


const CustomInput = ({btnHandler}:customeInputeventProps) => {

  const [formDetail, setFormDetail] = useState<customeInputState>({ title: '', description: '' ,id:''});



  const inputHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormDetail((prevFormDetail) => ({
      ...prevFormDetail,
      [name]: value,
    }));

    console.log(formDetail);

  }





  useEffect(() => {

  }, [formDetail])

  return (
    <div className='flex flex-col'>
      <input placeholder='title' name='title' value={formDetail?.title} onChange={(e) => inputHandler(e)} className='px-4 py-2 my-4 rounded-lg border-2 border-gray-600 ' />
      <textarea name='description' value={formDetail?.description} onChange={(e) => inputHandler(e)} placeholder={'description'} className='px-4 py-2 my-4 rounded-lg border-2 border-gray-600 ' />
      <button className='px-6 py-3 rounded-md border-0  bg-slate-200' onClick={() => btnHandler({...formDetail,id:`l-${Math.random}`})}> Add</button>
    </div>
  )
}

export default CustomInput