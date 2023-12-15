export function getagent() {
    const urlAgent = 'https://valorant-api.com/v1/agents';
    fetch(urlAgent)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.data)
    .then((listaAgentes: Object[]) => {
        listaAgentes.splice(9,1);
        return listaAgentes;
    })
}

export function getGuns() {
    const urlGuns = 'https://valorant-api.com/v1/weapons';
    fetch(urlGuns)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.data)
    .then((listaArmas) => {
        listaArmas.pop();
        return listaArmas;
    })
}
