import path from 'path';
import * as XLSX from 'xlsx';

export interface LoginUser {
    type: string;
    username: string;
    password: string;
}

export function readLoginData(): LoginUser[] {

    const filePath = path.resolve(__dirname, '../test-data/DemoLoginData.xlsx');
    const workbook = XLSX.readFile(filePath);
    const worksheet = workbook.Sheets['Login'];
    if (!worksheet) {
        throw new Error("Sheet 'Login' not found in Excel file");
    }
    const data = XLSX.utils.sheet_to_json<LoginUser>(worksheet, {
        defval: ''
    });

    return data;
}