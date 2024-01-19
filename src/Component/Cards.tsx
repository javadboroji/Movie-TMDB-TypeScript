import { customeInputState } from "./CustomInput";

export type CardsRemoveHandler = (data: customeInputState) => void;

export default function Cards(props: {
  itemId:string|number;
  title: string;
  description: string;
  removeHandler: CardsRemoveHandler;
}) {
  return (
    <div className='w-1/3 p-6 border-2 mx-1 my-1 hover:bg-gray-400'>
      <div className='flex flex-col col-span-1'>
        <p className='font-bold text-2xl text-green-800'>{props.title}</p>
        <p className='font-normal text-sm text-gray-700 text-justify'>{props.description}</p>
        <button className='bg-red-500 py-2 my-2' onClick={() => props.removeHandler({ title: props.title, description: props.description ,id:props.itemId})}> Remove</button>
      </div>
    </div>
  );
}
