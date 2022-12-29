import { Athena } from '@AthenaServer/api/athena';
import * as alt from 'alt-server';
import { PluginSystem } from '../../../server/systems/plugins';
import { DeathCommands } from './src/commands';
import { DeathSystem } from './src/death';

const PLUGIN_NAME = 'Athena Death System';

PluginSystem.registerPlugin(PLUGIN_NAME, () => {
    DeathSystem.init();
    DeathCommands.init();
    Athena.systems.default.death.disable();
    alt.log(`~lg~CORE ==> ${PLUGIN_NAME} was Loaded`);
});
