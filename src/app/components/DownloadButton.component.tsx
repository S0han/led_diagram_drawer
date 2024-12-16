import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export default function DownloadButton({ contentRef }) {
    const handleDownload = async () => {
        try {
            if (contentRef.current) {
                const canvas = await html2canvas(contentRef.current);
                const imgData = canvas.toDataURL('image/png');
    
                const pdf = new jsPDF();

                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = pdf.internal.pageSize.getHeight();

                const scaleFactor = Math.min(pdfWidth / canvas.width, pdfHeight / canvas.height);

                pdf.addImage(imgData, 'PNG', 0, 0, canvas.width * scaleFactor, canvas.height * scaleFactor);
                pdf.save('download.pdf');
            }
        } catch (e) {
            console.error('Error generating PDF:', e);
        }
    };

    return (
        <div className="bg-red-500 hover:bg-red-700 text-white w-full text-center py-2 rounded-md">
            <button onClick={handleDownload}>DOWNLOAD!</button>
        </div>
    );
}