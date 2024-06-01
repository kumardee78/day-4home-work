import color from "../data/color"

export default function Color(){
    console.log(color[0])
    return(
        <>
            {
                color.map((item,index) =>{
                    console.log(item)
                    return (
                       
                            <div className="w-[18%] h-[20rem] shadow-md mb-4">
                                <div className="color-div w-[100%] h-[70%] " key={index} style={{backgroundColor:`${item.hex}`}}></div>
                                <div className="p-4 border-none h-[30%] shadow-xl uppercase">
                                    <p key={index} className=" font-bold text-xl">{item.hex}</p>
                                    <p key={index} style={{color:`${item.hex}`}}>{item.name}</p>
                                </div>
                            </div>
                        
                    )
                })
            }
        </>
    )
}