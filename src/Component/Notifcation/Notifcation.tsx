import React, { useState } from "react";
type notifcationListProps ={
  userName:String,
  description:String,
  time:String
}

const list=[
  {
    userName:"Cris",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
    time:"14:20"
  },
  {
    userName:"Mory",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
    time:"14:20"
  },
  {
    userName:"Jon",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
    time:"14:20"
  },
  {
    userName:"Alex",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
    time:"14:20"
  }
]
const HeaderNotifcation = () => {

  const [notif, setNotif] = useState(list.length);
  return (
    <div className="flex justify-between items-center">
      <div className="">
        <span className="font-medium text-2xl "> Notifcations</span>
        <span className="w-3 h-3 bg-blue-700 px-1 mx-1 text-white text-lg">
          {" "}
          {notif}{" "}
        </span>
      </div>
      <div>
        <button className="border-0 text-base text-slate-950">
          {" "}
          Mark All as Read
        </button>
      </div>
    </div>
  );
};

const NotificationList = ({userName,description,time}:notifcationListProps) => {
  const checkNotifcation=(userName:String)=>{
    
  }
  return (
    <div className="flex items-center bg-gray-100 p-2 my-2">
      <div className="flex items-center  mx-2">
        <img className="rounded-full w-12 h-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2P21SKcXYr5iTuBeLe8-ZFv_gv42oZBA5WcStlqf1DOe6a53sYXP3pYVKH3groOqTCE&usqp=CAU" alt='profile'/>
        <p className="text-lg text-gray-900 m-3">
          {userName}
        </p>
      </div>
      <div className="flex   mx-2">
          <span className="text-sm text-gray-500"> {description}</span>{" "}
        <span className="text-sm text-green-500 mx-2">{time}</span>
      </div>
      <button className="border-0 text-base text-red-400 hover:text-green-400 ms-auto me-0" onClick={()=>checkNotifcation(userName)}> Mark</button>
    </div>
  );
};
function Notifcation() {
  return (
    <div className="flex flex-col w-100">
      <HeaderNotifcation />
      {list.map((item,i)=>{return(
        <NotificationList key={i} userName={item.userName} description={item.description} time={item.time}/>

      )})}
    </div>
  );
}

export default Notifcation;
