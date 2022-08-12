/**
 *                   _            
     /\             | |           
    /  \    ______ _| | ___  __ _ 
   / /\ \  |_  / _` | |/ _ \/ _` |
  / ____ \  / / (_| | |  __/ (_| |
 /_/    \_\/___\__,_|_|\___|\__,_|

 Azalea bot 2022, Property of Slimy
                                  
 */

import { ApplicationCommandDataResolvable } from "discord.js";

export interface RegisterCommandsOptions {
    guildId?: string;
    commands: ApplicationCommandDataResolvable[];
}