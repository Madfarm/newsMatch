const BASE_URL = 'https://newsmatch-backend.herokuapp.com/user'

export async function create(newMatch, authID){
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMatch)
    }

    let url = `${BASE_URL}/${authID}/matches`

    try {
        const res = await fetch(url,options);

        if(res.ok){
            return await res.json()
            
        } else {
            throw new Error('Invalid Request')
        }

    } catch(err){
        return err
    }
}

export async function detail(authID){
    const options = { 
        method: "GET" 
    }

    const url = `${BASE_URL}/${authID}`

    try {
        const res = await fetch(url,options);

        if(res.ok){
            return await res.json()
            
        } else {
            throw new Error('Invalid Request')
        }

    } catch(err){
        return err
    }
}