import React, { useState } from 'react';

const asyncComponent = ( importComponent ) => {
    const [component, setComponent] = useState(null);

    useEffect(()=>{
        importComponent()
        .then(cmp => {
            setComponent(cmp.default)
    }) },[]);
const C = component;
return C ? <C { ...props } /> : null;
    
};

export default asyncComponent;