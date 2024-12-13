export default function DrawingInfo() {
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
                    <p>address</p>
                </div>
                <div>
                    <div className="desc">
                        <p>Description:</p>
                    </div>
                    <p></p>
                </div>
            </div>
            <div>
                <div className="drawn">
                    <p>Drawn</p>
                    <p></p>
                </div>
                <div className="units">
                    <p>Dimensions in inches</p>
                </div>
                <div>
                    <p>sketch</p>
                </div>
                <div>
                    <p>Screen Size</p>
                    <p></p>
                </div>
            </div>
            <div>
                <div className="date">
                    <p>Date</p>
                    <p></p>
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
                    <p>Installs</p>
                </div>
            </div>
        </div>
    );
}