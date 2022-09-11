
import './App.css';
import BasicInput from './ui/basic-input'
import {useState} from 'react'
import QRCode from 'qrcode'
import LiveQrCode from './components/live-qr-code'

function App() {
  const [qrText,setQrText]=useState('')
  const [qrCode,setQrCode]=useState('')

  const generateQrCode=()=>{
    QRCode.toDataURL(qrText,{
      width:700,
      margin:3
    },(err,url)=>{
      if(err)return console.log(err)
      setQrCode(url)
    })
  }
  const handleQrCode=(event)=>{
    setQrText(event.target.value)
    generateQrCode()
  }
  return (
    <div className="App">
      <LiveQrCode  value={qrText}/>
      <BasicInput
        label="qr kod text"
        type="text"
        value={qrText}
        onChange={handleQrCode}
        style={{marginTop:20}}
        placeholder="enter text"

      />
      <br/>
      <a href={qrCode} download={`${qrText}.png`}>Download</a>
    </div>
  );
}

export default App;
