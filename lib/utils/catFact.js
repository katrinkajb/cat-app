const superagent = require('superagent');

const getFact = async () => {
    const { body } = await superagent.get('https://catfact.ninja/fact?max_length=512');

    return body.fact;
}

module.exports = { getFact };
