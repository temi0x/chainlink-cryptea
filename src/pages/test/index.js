import {useState} from "react";
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { Web3Storage } from 'web3.storage'

const Test =  () => {
 
  const [crop, setCrop] = useState()
  const [simg, setsImg] = useState(null);
  const [iimg, setIiimg] = useState({});
  const [result, setResult] = useState(null);

  function makeStorageClient() {
    return new Web3Storage({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDFEN2I5MDFBODNFZjFBNkQzM2I4NjRBNTEzNjcwNjYzNTFiOEY1RGYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTMzNTgzOTEzNDQsIm5hbWUiOiJjcnlwdG9fY2xvdWQifQ.0KydZhZjWnYjPyTk-ZUxIZuvAZPzaXMhlzeGNRdaP-Q' })
  }


  const [ iprogress, setiProgress ] = useState(0)




  const ee = (event) => {

    setsImg(URL.createObjectURL(event.target.files[0]));
    setIiimg(event.target.files[0]);
    
  }

  const beginUpload = async (files) => {
    const { size: totalSize } = files[0];
    const onRootCidReady = cid => {
      console.log('uploading files with cid:', cid)
    }

    let uploaded = 0

    const onStoredChunk = size => {
      uploaded += size
      
      const pct = (totalSize / uploaded) * 100

      console.log(`Uploading... ${pct.toFixed(2)}% complete`)
    }

    const client = makeStorageClient()

    return client.put(files, { onRootCidReady, onStoredChunk })

  } 

  const copImg = async () => {
    const img = document.querySelector('.img');
    try {
      const canvas = document.createElement("canvas");
      const scaleX = img.naturalWidth / img.width;
      const scaleY = img.naturalHeight / img.height;
      canvas.width = crop.width;
      canvas.height = crop.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(
        img,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
      );
      const { type } = iimg;
        const ext = type.split('/')

      canvas.toBlob((blob) => {
        const files = [new File([blob], `testimg.${ext[1]}`)];
        beginUpload(files);
      },type, 1);
   
     

    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={ee}
      />

      <ReactCrop minWidth={100} minHeight={100} circularCrop={true} crop={crop} aspect={1} onChange={c => {
        setCrop(c)
        }}>
        <img width="300" className="img" alt="crop me" src={simg} />
      </ReactCrop>

      <button onClick={copImg}>Crop Image</button>
    </div>
  );
};

export default Test;