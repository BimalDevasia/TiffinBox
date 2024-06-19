"use client";

import React, { useEffect, useState } from "react";
import moment from "moment";
import { TotalsObject, Transaction } from "@/models/types";

const TransactionsPage = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [dailyTotals, setDailyTotals] = useState<TotalsObject>({});
    const [weeklyTotals, setWeeklyTotals] = useState<TotalsObject>({});
    const [monthlyTotals, setMonthlyTotals] = useState<TotalsObject>({});

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await fetch("/api/transaction");
                const data = await response.json();
                setTransactions(data);
                calculateTotals(data);
            } catch (error) {
                console.error("Error fetching transactions:", error);
            }
        };

        fetchTransactions();
    }, []);

    const calculateTotals = (transactions: Transaction[]) => {
        const dailyTotals: TotalsObject = {};
        const weeklyTotals: TotalsObject = {};
        const monthlyTotals: TotalsObject = {};

        transactions.forEach((transaction) => {
            const date = moment(transaction.date).format("YYYY-MM-DD");
            const week = moment(transaction.date).format("YYYY-WW");
            const month = moment(transaction.date).format("YYYY-MM");

            dailyTotals[date] = (dailyTotals[date] || 0) + transaction.amount;
            weeklyTotals[week] = (weeklyTotals[week] || 0) + transaction.amount;
            monthlyTotals[month] = (monthlyTotals[month] || 0) + transaction.amount;
        });

        setDailyTotals(dailyTotals);
        setWeeklyTotals(weeklyTotals);
        setMonthlyTotals(monthlyTotals);
    };

    return (
        <div className=" py-8 px-8 bg-black text-white min-h-screen min-w-screen">
            <h1 className="text-3xl font-bold mb-6 pt-20 text-inyellow">TRANSACTIONS</h1>
            <div className="flex justify-around">
            <div className="mb-6 border-[1px] p-5 w-[30%] rounded-lg ">
                <h2 className="text-xl font-bold mb-2 pl-5 -m-5 h-10 flex rounded-t-lg  items-center bg-inyellow">Daily Totals</h2>
                {Object.entries(dailyTotals).map(([date, total]) => (
                    <div key={date} className="flex justify-between ">
                        <span>{moment(date).format("YYYY-MM-DD")}</span>
                        <span>₹{total.toFixed(2)}</span>
                    </div>
                ))}
            </div>

            <div className="mb-6 border-[1px] p-5 w-[30%] rounded-lg ">
                <h2 className="text-xl font-bold mb-2 pl-5 -m-5 h-10 flex rounded-t-lg  items-center bg-inyellow">Weekly Totals</h2>
                {Object.entries(weeklyTotals).map(([week, total]) => (
                    <div key={week} className="flex justify-between">
                        <span>{`Week ${moment(week, "YYYY-WW").format("WW")} (${moment(week, "YYYY-WW").startOf('week').format("YYYY-MM-DD")} - ${moment(week, "YYYY-WW").endOf('week').format("YYYY-MM-DD")})`}</span>
                        <span>₹{total.toFixed(2)}</span>
                    </div>
                ))}
            </div>

            <div className="mb-6 border-[1px] p-5 w-[30%] rounded-lg ">
                <h2 className="text-xl font-bold mb-2 pl-5 -m-5 h-10 flex rounded-t-lg  items-center bg-inyellow">Monthly Totals</h2>
                {Object.entries(monthlyTotals).map(([month, total]) => (
                    <div key={month} className="flex justify-between">
                        <span>{moment(month, "YYYY-MM").format("MMMM YYYY")}</span>
                        <span>₹{total.toFixed(2)}</span>
                    </div>
                ))}
            </div>
                </div>
            <div>
                <h2 className="text-xl font-bold mb-2">DETAILS</h2>
                {transactions.map((transaction) => (
                    <div key={transaction._id} className="bg-ingrey rounded-lg shadow-md p-4 mb-4">
                        <div className="flex justify-between items-center">
                            <span>{moment(transaction.date).format("YYYY-MM-DD")}</span>
                            <span>₹{transaction.amount.toFixed(2)}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TransactionsPage;