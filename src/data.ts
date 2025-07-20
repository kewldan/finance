import { parse } from "date-fns";

export type IncomeSource = {
    id: 'egor' | 'danek' | 'vpn';
    name: string;
}

export type IncomeRecord = {
    source: IncomeSource['id'];
    account: 'bybit' | 'bingx';
    amount: number;
    date: Date;
    comment?: string;
}

export const sources: IncomeSource[] = [
    {
        id: 'egor',
        name: 'Егор'
    },
    {
        id: 'danek',
        name: 'Данек'
    },
    {
        id: 'vpn',
        name: 'Omniflow VPN'
    }
]

function getDate(date: string): Date {
    return parse(date, 'dd.MM.yyyy', new Date())
}

export const records: IncomeRecord[] = [
    {
        amount: 100,
        account: 'bybit',
        date: getDate('22.06.2024'), // June 22, 2024
        source: 'egor',
        comment: 'консоль'
    },
    {
        amount: 318,
        account: 'bybit',
        date: new Date(2024, 6, 2), // July 2, 2024
        source: 'egor',
        comment: 'мак'
    },
    {
        amount: 200,
        account: 'bybit',
        date: new Date(2024, 6, 1), // July (exact date unknown)
        source: 'egor',
        comment: 'пятерочка'
    },
    {
        amount: 150,
        account: 'bybit',
        date: new Date(2024, 7, 1), // August (exact date unknown)
        source: 'egor',

    },
    {
        amount: 130,
        account: 'bybit',
        date: new Date(2024, 7, 1), // August (exact date unknown)
        source: 'egor',

    },
    {
        amount: 200,
        account: 'bybit',
        date: new Date(2024, 8, 2), // September 2, 2024
        source: 'egor',
        comment: 'ашан'
    },
    {
        amount: 300,
        account: 'bybit',
        date: new Date(2024, 9, 1), // October (exact date unknown)
        source: 'egor',
        comment: 'доля'
    },
    {
        amount: 200,
        account: 'bybit',
        date: new Date(2024, 9, 20), // October 20, 2024
        source: 'egor',
        comment: 'магнит'
    },
    {
        amount: 250,
        account: 'bybit',
        date: new Date(2024, 10, 20), // November 20, 2024
        source: 'egor',
        comment: 'мак продажа мани'
    },
    {
        amount: 450,
        account: 'bybit',
        date: new Date(2024, 10, 1), // November (exact date unknown)
        source: 'egor',
        comment: 'доля'
    },
    {
        amount: 1207,
        date: new Date(2024, 11, 1), // December (exact date unknown)
        source: 'egor',
        account: 'bybit'
    },
    {
        amount: 300,
        date: new Date(2024, 11, 5), // December 5, 2024
        source: 'danek',
        comment: 'Tether1',
        account: 'bingx'
    },
    {
        amount: 350,
        date: new Date(2024, 11, 23), // December 23, 2024
        source: 'danek',
        comment: 'Tether2',
        account: 'bingx'
    },
    {
        amount: 375,
        date: new Date(2024, 11, 28), // December 29, 2024
        source: 'danek',
        comment: 'Call1',
        account: 'bingx'
    },
    {
        amount: 69,
        account: 'bybit',
        date: new Date(2025, 0, 1), // January 1, 2025
        source: 'egor',

    },
    {
        amount: 69,
        account: 'bybit',
        date: new Date(2025, 0, 2), // January 2, 2025
        source: 'egor',

    },
    {
        amount: 69,
        account: 'bybit',
        date: new Date(2025, 0, 3), // January 3, 2025
        source: 'egor',

    },
    {
        amount: 500,
        account: 'bybit',
        date: new Date(2025, 0, 3), // January 3, 2025
        source: 'egor',

    },
    {
        amount: 70,
        account: 'bybit',
        date: new Date(2025, 0, 5), // January 5, 2025
        source: 'egor',

    },
    {
        amount: 70,
        account: 'bybit',
        date: new Date(2025, 0, 6), // January 6, 2025
        source: 'egor',
    },
    {
        amount: 1170,
        account: 'bybit',
        date: new Date(2025, 0, 10), // January 10, 2025
        source: 'egor',
        comment: 'на др'
    },
    {
        amount: 450,
        account: 'bingx',
        date: new Date(2025, 0, 15), // January 15, 2025
        source: 'danek',
        comment: 'Call2'
    },
    {
        amount: 474,
        account: 'bybit',
        date: new Date(2025, 0, 18), // January 18, 2025
        source: 'egor',
    },
    {
        amount: 90,
        account: 'bingx',
        date: new Date(2025, 0, 26), // January 26, 2025
        source: 'danek',

    },
    {
        amount: 140,
        account: 'bingx',
        date: new Date(2025, 0, 30), // January 30, 2025
        source: 'danek',
    },
    {
        amount: 175,
        account: 'bingx',
        date: new Date(2025, 1, 3), // February 3, 2025
        source: 'danek',
    },
    {
        amount: 300,
        account: 'bybit',
        date: new Date(2025, 1, 27), // February 3, 2025
        source: 'egor',
    },
    {
        amount: 200,
        account: 'bingx',
        date: new Date(2025, 1, 15), // February 15, 2025
        source: 'danek',

    },
    {
        amount: 1021,
        account: 'bybit',
        date: new Date(2025, 1, 16), // February 16, 2025
        source: 'egor',
        comment: 'вывод 5ка №3'
    },
    {
        amount: 30,
        account: 'bingx',
        date: new Date(2025, 1, 16), // February 16, 2025
        source: 'danek',
        comment: 'Tether доработки, 1 страница'
    },
    {
        amount: 120,
        account: 'bingx',
        date: new Date(2025, 1, 28), // February 28, 2025
        source: 'danek',

    },
    {
        amount: 300,
        account: 'bingx',
        date: new Date(2025, 2, 10), // March 10, 2025
        source: 'danek',

    },
    {
        amount: 350,
        account: 'bingx',
        date: new Date(2025, 2, 16), // March 16, 2025
        source: 'danek',
        comment: 'UPD 0.1'
    },
    {
        amount: 350,
        account: 'bingx',
        date: new Date(2025, 2, 24), // March 24, 2025
        source: 'danek',
        comment: 'UPD 0.2'
    },
    {
        amount: 203,
        account: 'bybit',
        date: new Date(2025, 2, 28), // March 28, 2025
        source: 'vpn',
    },
    {
        amount: 603,
        account: 'bybit',
        date: new Date(2025, 2, 28), // March 28, 2025
        source: 'egor',
        comment: 'Доля'
    },
    {
        amount: 450,
        account: 'bingx',
        date: new Date(2025, 3, 8), // April 8, 2025
        source: 'danek',
        comment: 'UPD 0.3 + 2 проекта'
    },
    {
        amount: 210,
        account: 'bybit',
        date: new Date(2025, 3, 26), // April 26, 2025
        source: 'vpn'
    },
    {
        amount: 608,
        account: 'bybit',
        date: new Date(2025, 3, 27), // April 27, 2025
        source: 'egor',
        comment: 'Доля'
    },
    {
        amount: 450,
        account: 'bingx',
        date: new Date(2025, 3, 28), // April 28, 2025
        source: 'danek',
        comment: 'UPD 0.4'
    },
    {
        amount: 250,
        account: 'bingx',
        date: new Date(2025, 4, 15), // May 15, 2025
        source: 'danek',
        comment: 'UPD 0.5'
    },
    {
        amount: 400,
        account: 'bingx',
        date: new Date(2025, 4, 30), // May 30, 2025
        source: 'danek',
        comment: 'UPD 0.6'
    },
    {
        amount: 500,
        date: new Date(2025, 5, 9), // June 9, 2025
        source: 'egor',
        account: 'bybit',
        comment: 'Тиньк'
    },
    {
        amount: 372,
        account: 'bybit',
        date: new Date(2025, 5, 9), // June 9, 2025
        source: 'egor',
        comment: 'Доля'
    },
    {
        amount: 750,
        account: 'bingx',
        date: new Date(2025, 5, 30), // June 30, 2025
        source: 'danek',
        comment: 'UPD 0.7'
    },
    {
        amount: 287,
        account: 'bingx',
        date: new Date(2025, 6, 19),
        source: 'vpn',
        comment: '+тиньк'
    },
    {
        amount: 526,
        account: 'bingx',
        date: new Date(2025, 6, 20),
        source: 'egor',
        comment: 'Доля'
    },
]