export async function getGoals(token: string) {
    return fetch('https://api.roostermoney.com/v1/goals/', {
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
        }
    })
        .then(res => res.json())
        .then(goals => goals)
        .catch(error => { throw new Error(`Error: ${error}`) });
}