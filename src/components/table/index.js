import { Avatar, Card, CardBody } from '@nextui-org/react'
import { generateTransactions } from 'config/utils';
import React, { useState } from 'react';



const MyTable = () => {
    const transactions = generateTransactions();
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };
    return (
        <Card className='my-5'>
            <CardBody>
                <div className="flex items-end justify-between gap-1 text-left pt-8">
                    <span className='font-semibold'>Transacciones</span>
                    <button
                        onClick={toggleExpanded}
                        className="ml-4 text-blue-500 underline"
                    >
                        {expanded ? 'Ver Menos' : 'Ver Todas'}
                    </button>
                </div>
                <div className="flex flex-col gap-4 py-2">
                    {transactions.slice(0, expanded ? transactions.length : 3).map((transaction, index) => (
                        <div key={index} className="flex gap-4 border-b py-2 transition-all duration-300 ">
                            <Avatar isDisabled name={transaction.name} />
                            <div className="flex flex-col w-3/5">
                                <span className="text-sm">MisterRevenue LLC</span>
                                <span className="text-gray-500 text-tiny">recibido {transaction.date}</span>
                            </div>
                            <div className="flex text-right justify-end w-2/5">
                                <p className={`font-semibold ${transaction.amount > 0 ? 'text-green-700' : 'text-red-700'} text-sm`}>
                                    {transaction.amount > 0 ? `+${transaction.amount}` : transaction.amount} MXN
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardBody>
        </Card>
    )
}

export default MyTable