import fs from 'fs';
import path from 'path';
import {parse} from 'csv-parse/sync';

export interface LoginUser{
    type:string;
    username:string;
    password:string;
}

export function readLoginData(): LoginUser[]{
    const filePath=path.resolve(__dirname,'../test-data/loginData.csv');
    const fileContent =fs.readFileSync(filePath,'utf-8');
    return parse(fileContent, {
        columns:true,
        skip_empty_lines:true,
        trim:true,
    })as LoginUser[];
}