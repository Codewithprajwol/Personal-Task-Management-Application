import { DataSource } from "typeorm";

export const AppDataSource=new DataSource(
    {
        type:'mysql',
        host:"localhost",
        port:3306,
        username:process.env.MYSQL_USER,
        password:process.env.MYSQL_PASSWORD,
        database:process.env.MYSQL_DB,
        synchronize:true
    }
)