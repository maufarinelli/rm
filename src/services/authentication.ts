export default async function authenticate() {
    return fetch('https://api.roostermoney.com/v1/auth/', {
        body: JSON.stringify({ // TODO: make env file work
            accessKey: 'mauricio_f',
            accessPassword: 'd6TMXF2TlI32Tm'
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