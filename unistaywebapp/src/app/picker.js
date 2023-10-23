"use client"
import { Tab } from "@headlessui/react"
import { Fragment } from "react"
import Accommodations from "./accommodations"

export default function Picker() {
    return (
        <div className="mt-10 box-border">
            <Tab.Group>
                <Tab.List className="flex grow gap-4 bg-gradient-to-b dark:from-background dark:to-background/0 from-background-light to-background-light/0 fixed w-full pb-5 top-[68px] md:top-[72px]">
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
                <Tab.Panels className="">
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