/**
 *                   _            
     /\             | |           
    /  \    ______ _| | ___  __ _ 
   / /\ \  |_  / _` | |/ _ \/ _` |
  / ____ \  / / (_| | |  __/ (_| |
 /_/    \_\/___\__,_|_|\___|\__,_|

 Azalea bot 2022, Property of Slimy
                                  
 */

import { ApplicationCommandOption, ApplicationCommandType, CommandInteraction, CommandInteractionOptionResolver, GuildMember, PermissionResolvable } from "discord.js";
import { ExtendedClient } from "../Structures/Client";

/**
 * {
 *  name: "Command Name",
 *  description: "Description",
 *  run: async ({interaction, client}) => {
 * 
 * }
 * }
 */

export interface ExtendedInteraction extends CommandInteraction {
    member: GuildMember;
}

interface RunOptions {
    client: ExtendedClient,
    interaction: ExtendedInteraction,
    args: CommandInteractionOptionResolver
}

type RunFunction = (options: RunOptions) => any;

export type CommandType = {
    name: string;
    description?: string;
    cooldown?: number;
    userPermissions?: PermissionResolvable[];
    options?: ApplicationCommandOption[];
    type: ApplicationCommandType;
    run: RunFunction;
}