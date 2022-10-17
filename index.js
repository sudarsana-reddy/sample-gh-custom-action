const core = require('@actions/core');

const LOG_MESSAGE = core.getInput("LOG_MESSAGE");
const USERNAME = core.getInput("USERNAME");

async function runAction(){
    core.info(`LOG_MESSAGE: ${LOG_MESSAGE}`);
    core.info(`USERNAME: ${USERNAME}`);
}

runAction();