const BASE_URL = `${import.meta.env.VITE_BACK_END_URL}/auth`

const signUp = async (formData) => {
    try {
        
        const res = await fetch(`${BASE_URL}/sign-up`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
        console.log(res)
        const data = await res.json()

        if(data.err){
            throw new Error(data.err)
        }

        if(data.token){
            // sets a value into local storage
            localStorage.setItem('token', data.token)
            return JSON.parse(atob(data.token.split('.')[1])).payload // [header, payload, signature]
        }

        throw new Error("Invalid response from server")


    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

const signIn = async (formData) => {
    try {
        
        const res = await fetch(`${BASE_URL}/sign-in`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
        console.log(res)
        const data = await res.json()

        if(data.err){
            throw new Error(data.err)
        }

        if(data.token){
            // sets a value into local storage
            localStorage.setItem('token', data.token)
            // return the userId and password from the token
            return JSON.parse(atob(data.token.split('.')[1])).payload // [header, payload, signature]
        }

        throw new Error("Invalid response from server")


    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export {
    signUp,
    signIn,
}
``