/**
 *                   _            
     /\             | |           
    /  \    ______ _| | ___  __ _ 
   / /\ \  |_  / _` | |/ _ \/ _` |
  / ____ \  / / (_| | |  __/ (_| |
 /_/    \_\/___\__,_|_|\___|\__,_|

 Azalea bot 2022, Property of Slimy
                                  
 */

import { Client, ClientEvents, Collection } from 'discord.js';
import { CommandType } from '../Typings/Command';
import glob  from 'glob';
import { promisify } from 'util';
import { RegisterCommandsOptions } from '../Typings/Client';
import { Event } from './Event';
import report from 'yurnalist';
import chalk from 'chalk';

const globPromise = promisify(glob);
const spinner = report.activity();
const spinner2 = report.activity();

export class ExtendedClient extends Client {
    commands: Collection<String, CommandType> = new Collection();

    constructor() {
        super({intents: 32767})
    }

    start() {
        this.registerModules();
        this.login(process.env.DC_TOKEN);
    }

    async importFile(filePath: string) {
        return (await import(filePath))?.default;
    }

    async registerCommand({ commands, guildId }: RegisterCommandsOptions) {
        if(guildId) {
            this.guilds.cache.get(guildId)?.commands.set(commands);
            report.info(chalk.cyan(`Registering commands for ${guildId}, plase wait.`))
            spinner.tick("I'm registering commands...");
           spinner.end()
        } else {
            this.application?.commands.set(commands);
            report.error(chalk.red("Something went wrong."));
            spinner.end()
        }
    }

    async registerModules() {
        let count = 0;
        let countEvents = 0;
        // Commands
        const slashCommands = [];
        const commandFiles = await globPromise(`${__dirname}/../Commands/**/*{.ts,.js}`);
        commandFiles.forEach(async filePath => {
            (count += 1)
            const command: CommandType = await this.importFile(filePath);
            if(!command.name) return;

            this.commands.set(command.name, command);
            slashCommands.push(command);
        });
        this.on("ready", () => {
            this.registerCommand({
                commands: slashCommands,
                guildId: process.env.GUILDID
            })
            report.success(chalk.magentaBright(`Registered commands: ${chalk.green(count-1)}`))
        })

        // Events
        const eventFiles = await globPromise(`${__dirname}/../Events/*{.ts,.js}`);
        report.info(chalk.cyan(`Registering Events, plase wait.`))
        spinner2.tick("I'm registering Events...");

        eventFiles.forEach(async filePath => {
            countEvents++
            const event: Event<keyof ClientEvents> = await this.importFile(filePath);
            this.on(event.event, event.run);
        })

        report.success(chalk.magentaBright(`Registered events: ${chalk.green(countEvents-1)}`))
        spinner2.end();
    }
}