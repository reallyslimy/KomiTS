import { connect } from "mongoose";
import report from 'yurnalist';

export const connectDatabase = async () => {
    report.info(`Connecting to database, please wait...`);

    const spinner = report.activity();

    spinner.tick(`Conecting to the database...`);
    try {
        let db = await connect(process.env.MONGO_URI);
        if(db) {
            report.success(`📖 Connected to the database!`);
            spinner.end()
        }
    } catch(e) {
        report.error(e);
        spinner.end();
    }
}