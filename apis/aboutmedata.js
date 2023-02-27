const backendURL = import.meta.env.VITE_DRUPAL_BACKEND_URL

export async function getPersonalData(){
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const response = await fetch(`${backendURL}expertlist`, requestOptions)
    const data = response.json()
    return data
}


export async function getSkillData(){
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const response = await fetch(`${backendURL}listOfSkills`, requestOptions)
    const data = response.json()
    return data

}