import { ReactNode, createContext, useState } from "react"

interface User {

}

interface PropsShared {
    children: ReactNode
}

interface UserContext {
    user: User | undefined;
    setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

export const UserShared = ({children}: PropsShared) => {
    const [user, setUser] = useState<User>()
    const ContextUser = createContext<UserContext | null>(null)

    return (
        <ContextUser.Provider value={{user, setUser}}>
            {children}
        </ContextUser.Provider>
    )
}