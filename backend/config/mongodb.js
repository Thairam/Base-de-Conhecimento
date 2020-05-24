const mongoose = require('mongoose')
const { mongodb_knowledge_stats_url } = require('../.env')

mongoose
    .connect(mongodb_knowledge_stats_url, { useNewUrlParser: true })
    .catch(e => {
        const msg = 'ERRO! Não foi possível conectar com o MongoDB!'
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
    })