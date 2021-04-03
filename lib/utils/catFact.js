const getFact = async () => {
    URL = 'https://catfact.ninja/fact?max_length=512';

    const {data} = await get(URL.fact);

    return data;
}

module.exports = { getFact };
