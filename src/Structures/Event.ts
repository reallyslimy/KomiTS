/**
 *                   _            
     /\             | |           
    /  \    ______ _| | ___  __ _ 
   / /\ \  |_  / _` | |/ _ \/ _` |
  / ____ \  / / (_| | |  __/ (_| |
 /_/    \_\/___\__,_|_|\___|\__,_|

 Azalea bot 2022, Property of Slimy
                                  
 */

import { ClientEvents } from "discord.js";

export class Event<Key extends keyof ClientEvents> {
    constructor(
        public event: Key,
        public run: (...args: ClientEvents[Key]) => any
    ) {

    }
}