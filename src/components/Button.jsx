export default function Button(props) {
    return (
        <>
            {/* <button className={`${props.name} text-[16px] btn-1 font-semibold text-[#FDFDFF] p-[14px_24px] ff-outfit duration-[0.5s] hover:text-black rounded-[4px] gradient-1`} animation='animate-left-right'>{props.btn}</button> */}
            <button className={` ${props.name} text-[16px] font-semibold text-[#FDFDFF] p-[14px_24px] font-Outfit  rounded-[4px] gradient-1 relative overflow-hidden w-[148px] h-[52px] shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-[4px] before:bg-black before:duration-300 before:ease-out  hover:before:h-[52px] hover:before:w-[148px]`}>
                <span className="relative z-10">{props.btn}</span>
            </button>
        </>
    )
}
