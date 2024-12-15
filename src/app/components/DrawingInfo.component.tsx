export default function DrawingInfo({ description }) {
    return (
        <div className="drawing-info-box flex flex-col space-y-1 p-1 max-w-[500px] w-full max-h-[400px] overflow-hidden">
            <div className="flex justify-between p-1">
                <div className="logo p-1 w-[150px] overflow-hidden">
                    <p>Logo</p>
                </div>
                <div className="address p-1 w-[200px] overflow-hidden">
                    <p>123 Rainbowflower Rd</p>
                    <p>MissingCity, Ontario</p>
                    <p>(182) XXX-XXXX</p>
                </div>
                <div className="desc p-1 overflow-hidden w-[250px]">
                    <p>Description:</p>
                    <p className="p-1 text-ellipsis overflow-hidden whitespace-nowrap">{description.title}</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-1 p-1 border-t border-b border-black">
                <div className="drawn p-1 border-r border-black text-center w-[150px] overflow-hidden">
                    <p>Name:</p>
                    <hr className="border-t border-black my-1" />
                    <p className="text-ellipsis overflow-hidden whitespace-nowrap">{description.drawer}</p>
                </div>
                <div className="units p-1 border-black text-center w-[150px] overflow-hidden">
                    <p>Dimensions in inches</p>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-1 p-1 border-black">
                <div className="date p-1 border-r border-black text-center w-[150px] overflow-hidden">
                    <p>Date</p>
                    <hr className="border-t border-black my-1" />
                    <p className="text-ellipsis overflow-hidden whitespace-nowrap">{description.date}</p>
                </div>
                <div className="sheet-number p-1 border-r border-black text-center w-[150px] overflow-hidden">
                    <p>Sheet</p>
                    <hr className="border-t border-black my-1" />
                    <p className="text-ellipsis overflow-hidden whitespace-nowrap">1 of 1</p>
                </div>
                <div className="revision p-1 border-r border-black text-center w-[150px] overflow-hidden">
                    <p>Revision</p>
                    <hr className="border-t border-black my-1" />
                    <p className="text-ellipsis overflow-hidden whitespace-nowrap">00</p>
                </div>
                <div className="department p-1 text-center w-[150px] overflow-hidden">
                    <p>Department</p>
                    <hr className="border-t border-black my-1" />
                    <p className="text-ellipsis overflow-hidden whitespace-nowrap">{description.department}</p>
                </div>
            </div>
        </div>
    );
}