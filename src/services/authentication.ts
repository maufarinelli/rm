export default async function authenticate(): Promise<string> {
    return fetch('https://api.roostermoney.com/v1/auth/', {
        body: JSON.stringify({
            accessKey: process.env.REACT_APP_ACCESS_KEY,
            accessPassword: process.env.REACT_APP_ACCESS_PASSWORD
        }),
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST'
    })
        .then(res => res.json())
        .then(response => (response.token ? response.token : console.log('The response does not contain a token: ', response)))
        .catch(error => { throw new Error(`Error: ${error}`) });
}