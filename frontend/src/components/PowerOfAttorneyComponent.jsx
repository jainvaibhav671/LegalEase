import React, { useState } from 'react'
import { Text } from "./Text"
import { Heading } from "./Heading"
import { SelectBox } from "./SelectBox"
import { TextArea } from "./TextArea"
import { Img } from "./Img"

export default function PowerOfAttorneyComponent() {

    const [dueDate, setDueDate] = useState(null);

    const handleDateChange = (event) => {
        setDueDate(event.target.value);
    };

    const dropDownOptions = [
        { label: "General", value: "General" },
        { label: "Limited", value: "Limited" },
        { label: "Specific", value: "Specific" },
      ];

  return (
    <>
    <div className="flex flex-row justify-start w-full mt-3 p-[11px]">
            <div className="flex flex-row justify-start w-[37%] mt-2 ml-1">
            <div className="flex flex-row justify-start w-full">
                <Heading as="h3" className="tracking-[-0.33px]">
                Power of Attorney
                </Heading>
            </div>
            </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full mt-6 max-w-[480px]">
            <div className="flex flex-row justify-start w-full py-0.5">
            <Text as="p" className="mb-[7px]">
            Scope of power granted
            </Text>
            </div>
            <SelectBox
            indicator={<Img src="https://img.icons8.com/ios/50/expand-arrow--v2.png" alt="Vector - 0" className="w-[20px] h-[20px]"/>}
            name="select"
            placeholder="Select Power"
            options={dropDownOptions}
            className="w-full gap-px border-blue_gray-100 border border-solid"
            />
        </div>
         <div className="flex flex-col items-center justify-start w-full mt-6 max-w-[480px]">
                <div className="flex flex-row justify-start w-full py-0.5">
                    <Text as="p" className="mb-[7px]">
                    Start Date
                    </Text>
                </div>
                <div className="flex items-center w-full">
                    <Img src="path_to_calendar_icon" alt="Calendar" className="w-6 h-6 mr-2 cursor-pointer" />
                    <input
                        type="date"
                        name="StartDate"
                        placeholder="Select Start date"
                        value={dueDate}
                        onChange={handleDateChange}
                        className="w-full"
                    />
                </div>
            </div>
         <div className="flex flex-col items-center justify-start w-full mt-6 max-w-[480px]">
                <div className="flex flex-row justify-start w-full py-0.5">
                    <Text as="p" className="mb-[7px]">
                        End Date
                    </Text>
                </div>
                <div className="flex items-center w-full">
                    <Img src="path_to_calendar_icon" alt="Calendar" className="w-6 h-6 mr-2 cursor-pointer" />
                    <input
                        type="date"
                        name="EndDate"
                        placeholder="Select end date"
                        value={dueDate}
                        onChange={handleDateChange}
                        className="w-full"
                    />
                </div>
            </div>
        <div className="flex flex-row justify-center w-full mt-3 p-3">
            <div className="flex flex-row justify-center w-full mx-1 max-w-[480px]">
            <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-row justify-start w-full py-0.5">
                <Text as="p" className="mb-[7px]">
                Restrictions or limitations
                </Text>
                </div>
                <TextArea
                name="depth8framezero"
                placeholder="Enter restrictions"
                className="w-full text-blue_gray-500"
                />
            </div>
            </div>
        </div>
        </>
  )
}
