import {React,useState,useContext} from 'react'
import { setUserContext, UserContext } from '../App'



const Result = ({ data }) => {

    const userDetails=useContext(UserContext)
    const setUserDetails=useContext(setUserContext)
    let marks=0;
    return (
        <p>hello</p>
        // <>
        //     {
        //         data.map((value) => {
        //             const { id, name, img, selected, answer } = value

        //             console.log(selected)
        //             if (selected.value === answer){
        //                 marks+=4;

        //                 return (

        //                     <p>Correct {name}</p>   

        //                 )
        //         }
        //             else if(selected.value!==''&& selected.value!==answer){
                        

        //                 return (
        //                     <p>  {console.log(selected.value)}  Incorrect ++{name}</p>
                            
        //                 )
        //             }
        //             else if(selected.value===undefined){
        //                 return <p>not attempted</p>
                        
        //             }
        //         })
        //     }
        //     {marks}
        //         {/* {setUserDetails({...userDetails,marks})} */}

        //         {setUserDetails({...userDetails,marks})}
        //     {console.log(userDetails)}
        // </>
    )
}

export default Result 