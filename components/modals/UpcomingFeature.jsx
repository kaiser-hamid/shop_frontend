"use client"

import { useState } from 'react'
import React from 'react'
import DialogComponent from '../ui/Dialog'
import RoundedButton from '../ui/buttons/RoundedButton'

export default function UpcomingFeature({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div onClick={() => setIsOpen(true)} className="inline-block">
                {children}
            </div>

            <DialogComponent
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Upcoming Feature"
            >
                <p className="text-sm text-gray-500">
                    This feature is coming soon in next update.
                </p>
                <div className="mt-4 flex justify-end space-x-2">
                    <RoundedButton
                        onClick={() => setIsOpen(false)}
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                        OK
                    </RoundedButton>
                </div>
            </DialogComponent>
        </>
    )
}