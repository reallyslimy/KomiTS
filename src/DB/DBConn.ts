import { connect } from "mongoose";
import report from 'yurnalist';
import chalk from 'chalk';

export const connectDatabase = async () => {
    report.info(chalk.cyan("Connecting to database, please wait..."))
    const spinner = report.activity();
    spinner.tick(chalk.yellow("I'm connecting to the database..."))
    try {
        let db = await connect(process.env.MONGO_URI);
        if(db){
            report.success(chalk.magentaBright("Connected to the datase!"))
            spinner.end()
        }
    } catch(err){
       report.error(err)
       spinner.end()
    }
}