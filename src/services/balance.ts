export async function getBalance(token: string) {
    return fetch('https://api.roostermoney.com/v1/balance/', {
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
        }
    })
        .then(res => res.json())
        .then(balance => balance)
        .catch(error => { throw new Error(`Error: ${error}`) });
}