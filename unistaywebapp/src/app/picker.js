"use client"
import { Tab } from "@headlessui/react"
import { Fragment } from "react"

export default function Picker() {
    return (
        <Tab.Group>
            <Tab.List className="flex gap-4">
                <Tab as={Fragment} className="focus:outline-none">
                    {({ selected }) => (
                        /* Use the `selected` state to conditionally style the selected tab. */
                        <button
                        className={
                            selected ? 'text-body-dark-emphasized' : 'text-body-dark'
                        }
                        >
                        Recommended
                        </button>
                    )}
                </Tab>
                <Tab as={Fragment} className="focus:outline-none">
                    {({ selected }) => (
                        <button className={selected ? 'text-body-dark-emphasized' : 'text-body-dark'}>Saved</button>
                    )}
                </Tab>
                <Tab as={Fragment} className="focus:outline-none">
                    {({ selected }) => (
                        <button className={selected ? 'text-body-dark-emphasized' : 'text-body-dark'}>Connected</button>
                    )}
                </Tab>
                {/* ...  */}
            </Tab.List>
            <Tab.Panels>
                <Tab.Panel>Content 1</Tab.Panel>
                {/* ... */}
            </Tab.Panels>
        </Tab.Group>
    )
}