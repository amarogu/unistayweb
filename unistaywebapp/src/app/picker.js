"use client"
import { Tab } from "@headlessui/react"
import { Fragment } from "react"
import Accommodations from "./accommodations"

export default function Picker() {
    return (
        <div className="mt-10">
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
                <Tab.Panels className="mt-5">
                    <Tab.Panel>
                        <Accommodations />
                    </Tab.Panel>
                    <Tab.Panel>
                        <Accommodations />
                    </Tab.Panel>
                    <Tab.Panel>
                        <Accommodations />
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}