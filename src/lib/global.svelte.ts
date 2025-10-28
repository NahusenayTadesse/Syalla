export const btn = `px-6 py-3`

export const glass = `isolate  ring-white/5 ring-1 bg-opacity-0 bg-white/0 shadow-sm shadow-white/50
          backdrop-blur-lg bg-cover bg-[url(/images/light4.webp)] bg-center`
export const tag = `flex items-center justify-center w-[300px] text-[12px]  flex-row gap-[12px] px-4 
        py-1 rounded-full ${glass}`;
export const selectItem = `hover:bg-gray-100 ${glass} hover:shadow-md hover:scale-101 duration-300 transition-all ease-in-out dark:hover:bg-gray-900`;

 export const toastmsg = `fixed right-4 bottom-20 lg:bottom-4 z-50
             flex items-center gap-3
             bg-primary text-white font-medium 
             px-5 py-3 rounded-xl shadow-lg
             animate-slide-in`
  export const errormsg = `${toastmsg} !bg-red-600`;