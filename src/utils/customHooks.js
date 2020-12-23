import React from 'react';

export const useForm =(initialVal) => {
    const [val,setVal] = React.useState(initialVal);
    return [val,eve => {
        const { name,value } = eve.target
        setVal({
            ...val,
            [name] : value
        })
    }]
}

export const useWindowSize = () => {

    const [ size,setSize ] = React.useState(window.innerWidth);
    
    const sizer = _ => setSize(window.innerWidth);

    React.useEffect(_ =>  {
        window.addEventListener('resize',sizer);

        return _ => window.removeEventListener('resize',sizer)
    },[size])

    return size
} 