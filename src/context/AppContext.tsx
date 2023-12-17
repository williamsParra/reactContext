import React, { createContext, useContext, useState } from 'react';

type Props = React.PropsWithChildren<{}>

const AppContextData = createContext({ state: false, handleReload: () => {} });

const useAppContextData = () => useContext(AppContextData);

export default function AppContext({children}:Props){
    const [reload, setReload] = useState(false);

    return (
        <AppContextData.Provider value={{state: reload, handleReload: () => setReload(!reload)}}>
            {children}
        </AppContextData.Provider>
    )
}

export {useAppContextData}