import { useState } from "react";
import Button2 from "./Button2";
import InputField from "./inputField";

const Form = () => {
  const [isim, setIsim] = useState();
  const [soyisim,setsoyisim ]=useState()
  const [yas,setYas]=useState()

  return (
    <form action="">
      <InputField
        labelTitle={"Adınızı Giriniz"}
        placeholderTitle={"Adınız.."}
        onChange={(e) => setIsim(e.target.value)}
      />
      <InputField
        labelTitle={"Soyadınızı Giriniz"}
        placeholderTitle={"Soyadınız.."}
        onChange={(e) => setsoyisim(e.target.value)}
      />
      <InputField
        labelTitle={"Yaşınızı Giriniz"}
        placeholderTitle={"Yaşınız.."}
        onChange={(e) => setYas(e.target.value)}
      />

      <Button2
        onClick={() => console.log(isim,soyisim,yas)}
        buttonTitle={"Formu Gönder"}
        buttonColor={"pink"}
      />
    </form>
  );
};

export default Form;