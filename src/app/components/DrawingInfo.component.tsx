export default function DrawingInfo({ description }) {
    return(
        <div className="drawing-info-box">
            <div>
                <p>DRAWING INFO</p>
            </div>
            <div>
                <div className="logo">
                    <p>Logo</p>
                </div>
                <div className="address">
                    <p>123 Rainbowflower Rd</p>
                    <p>MissingCity, Ontario</p>
                    <p>${`(`}182{`)`} XXX-XXXX</p>
                </div>
                <div>
                    <div className="desc">
                        <p>Description:</p>
                    </div>
                    <p>{description.title}</p>
                </div>
            </div>
            <div>
                <div className="drawn">
                    <p>Drawn</p>
                    <p>{description.drawer}</p>
                </div>
                <div className="units">
                    <p>Dimensions in inches</p>
                </div>
                <div>
                    <p>sketch</p>
                </div>
            </div>
            <div>
                <div className="date">
                    <p>Date</p>
                    <p>{description.date}</p>
                </div>
                <div className="sheet-number">
                    <p>Sheet</p>
                    <p>1 of 1</p>
                </div>
                <div className="revision">
                    <p>Revision</p>
                    <p>00</p>
                </div>
                <div className="department">
                    <p>Department</p>
                    <p>{description.department}</p>
                </div>
            </div>
        </div>
    );
}