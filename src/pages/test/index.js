import {useState} from "react";
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const Test =  () => {
 
  const [crop, setCrop] = useState()
  const [simg, setsImg] = useState(null);
  const [iimg, setIiimg] = useState({});
  const [result, setResult] = useState(null);

  const ee = (event) => {

    setsImg(URL.createObjectURL(event.target.files[0]));
    setIiimg(event.target.files[0]);

  }

  const copImg = () => {
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

      const base64Image = canvas.toDataURL(type, 1);
      setResult(base64Image);
      
   
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