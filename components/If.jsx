export function If(props)
{
    //     return (
        //         <>
        //         </>
        //     )
        // } else return null
        if(props.test){
            return props.children 
        }else{ return null}

    // return (props.test)? props.children : null
}