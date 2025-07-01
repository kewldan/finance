import React, {ReactNode} from 'react';
import {IncomeRecord, IncomeSource, records, sources} from "@/data";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {formatDate} from "date-fns";
import {formatUSD} from "@/lib/utils";
import Image from "next/image";
import {Cherry, Shield, ShoppingCart} from "lucide-react";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";

const sourceIcons: Record<IncomeSource['id'], ReactNode> = {
    vpn: <Shield/>,
    egor: <ShoppingCart/>,
    danek: <Cherry/>
}

export default function IncomeTracker() {
    const groupedRecords = records.toSorted((a, b) => b.date.getTime() - a.date.getTime()).reduce((acc, record) => {
        const date = new Date(record.date);
        const monthYear = formatDate(date, 'MMMM Y');

        if (!acc[monthYear]) {
            acc[monthYear] = [];
        }
        acc[monthYear].push(record);
        return acc;
    }, {} as Record<string, IncomeRecord[]>);

    const totalBySource = records.reduce((acc, record) => {
        if (!acc[record.source]) {
            acc[record.source] = 0;
        }
        acc[record.source] += record.amount;
        return acc;
    }, {} as Record<string, number>);

    const total = records.reduce((acc, record) => {
        acc += record.amount;
        return acc;
    }, 0);

    return (
        <div className="flex flex-col gap-6 items-center">
            <h2 className="text-xl font-semibold">Total: {formatUSD(total)}</h2>
            <div className="flex items-center gap-6">
                {Object.entries(totalBySource).toSorted((a, b) => b[1] - a[1]).map(([sourceId, total]) => {
                    const source = sources.find(item => item.id === sourceId);

                    return (
                        <span key={sourceId}>
                                            {source?.name || sourceId} - {formatUSD(total)}
                                        </span>
                    )
                })}
            </div>
            <div className="flex flex-col gap-6 items-center w-full">
                {Object.entries(groupedRecords).map(([monthYear, records]) => {
                    const summaryBySource = records.reduce((acc, record) => {
                        if (!acc[record.source]) {
                            acc[record.source] = 0;
                        }
                        acc[record.source] += record.amount;
                        return acc;
                    }, {} as Record<string, number>);

                    return (
                        <Card key={monthYear} className="w-full max-w-lg">
                            <CardHeader>
                                <CardTitle className="text-lg font-bold">{monthYear}</CardTitle>
                                <CardDescription>
                                    <div className="flex items-center gap-6">
                                        {Object.entries(summaryBySource).toSorted((a, b) => b[1] - a[1]).map(([sourceId, total]) => {
                                            const source = sources.find(item => item.id === sourceId);

                                            return (
                                                <span key={sourceId}>
                                            {source?.name || sourceId} - {formatUSD(total)}
                                        </span>
                                            )
                                        })}
                                    </div>
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <h3 className="font-semibold">Transactions:</h3>
                                <div className="flex flex-col gap-1 mt-2">
                                    {records.map((record, idx) => (
                                        <div key={idx} className="flex justify-between">
                                            <div className="flex items-center gap-2">
                                                <Tooltip>
                                                    <TooltipTrigger className="text-muted-foreground">
                                                        {sourceIcons[record.source]}
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        {sources.find(item => item.id === record.source)?.name}
                                                    </TooltipContent>
                                                </Tooltip>
                                                <span className="text-muted-foreground">
                                                    {
                                                        formatDate(record.date, 'dd.MM')
                                                    } -
                                                </span>
                                                <span className="text-lg">{formatUSD(record.amount)}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-muted-foreground">{record.comment || '-'}</span>
                                                <Tooltip>
                                                    <TooltipTrigger>
                                                        <Image src={`/exchanges/${record.account}.png`} alt=''
                                                               width={32}
                                                               height={32}
                                                               className="size-8 rounded-md"/>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        {record.account}
                                                    </TooltipContent>
                                                </Tooltip>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};
