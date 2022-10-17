const core = require('@actions/core');

const LOG_MESSAGE = core.getInput("LOG_MESSAGE");

async function runAction(){
    core.info(`LOG_MESSAGE: ${LOG_MESSAGE}`);
}

runAction();