import { Avatar } from '@nextui-org/react'
import React from 'react'

const MyTable = () => {
    return (
        <>
            <div className="flex text-left items-start pt-8">Transacciones</div>
            <div className="flex gap-4 py-2">
                <Avatar isDisabled name="Mister Revenue" />
                <div className="flex flex-col w-3/5">
                    <span className="text-sm">Mister Revenue LLC</span>
                    <span className="text-gray-500 text-tiny">recibido 3/2/2025</span>
                </div>
                <div className="flex text-right justify-end w-2/5">
                    <p className="font-semibold text-green-700 text-sm">+11,588.69 MXN</p>
                </div>
            </div>
        </>
    )
}

export default MyTable