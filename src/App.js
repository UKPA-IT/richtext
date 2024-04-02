import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import RichTextExample from './RichText';
import { jsPDF } from "jspdf";
import { SlateToReact } from '@slate-serializers/react'

function App() {
  const [value, setValue] = useState([])
  const generatePDF =(e)=> {

    console.log("test")
    // Create a new jsPDF instance
    const pdf = new jsPDF('p','pt','a4');

    // Get the HTML content
    pdf.setFontSize(12);
    const element = SlateToReact(value)
    console.log(element)
    // Convert HTML to PDF
    // pdf.html(element, {
    //   callback: function (pdf) {
    //     // Save the PDF
    //    // pdf.save('output.pdf');
    //   }
    // });
  }
  return (
    <div className="App">
      <button onclick={generatePDF()}>Generate PDF</button>
      <RichTextExample value={value} setValue={setValue}/>
    </div>
  );
}

export default App;
