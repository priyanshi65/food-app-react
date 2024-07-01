import { usePDF } from 'react-to-pdf';

const ComponentCustom = () => {
  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
  return (
    <div>
        <button onClick={() => toPDF()}>Download PDF</button>
        <div ref={targetRef}>
          Content to be generated to PDF
        </div>
    </div>
  )
}

export default ComponentCustom


// import React, { useRef } from 'react';

// const PdfConverter = () => {
//   const contentRef = useRef(null);

//   const convertToPdf = async () => {
//     const content = contentRef.current;

//     const html2pdf = (await import('html2pdf')).default;

//     const options = {
//       filename: 'document.pdf',
//       margin: 1,
//       image: { type: 'jpeg', quality: 0.98 },
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
//     };

//     html2pdf().set(options).from(content).save();
//   };

//   return (
//     <div>
//       <div ref={contentRef}>
//         <h1>---PDF---</h1>
//         <p>Simple PDF converter from HTML code</p>
//       </div>
//       <button onClick={convertToPdf}>PDF converter</button>
//     </div>
//   );
// };

// export default PdfConverter;
