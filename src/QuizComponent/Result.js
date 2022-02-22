import React from 'react'

const Result = ({ data }) => {
    return (
        <>
            {
                data.map((value) => {
                    const { id, name, img, selected, answer } = value

                    console.log(selected, answer)
                    if (selected.value === answer)
                        return (

                            <p>Correct {name}</p>

                        )
                    else if(selected.value==='')
                    return <p>not attempted</p>
                    else
                        return (
                            <p>  {console.log(selected.value)}  Incorrect ++{name}</p>
                            
                        )
                })
            }
        </>
    )
}

export default Result