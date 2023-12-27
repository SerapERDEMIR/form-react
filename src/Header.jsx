import Button from "./Button";
import Button2 from "./Button2";

const Header = () => {
  return (
    <header>
      <h1>Fcoder</h1>
      <nav>
        <a href="">Anasayfa</a>
        <a href="">Ürünler</a>
        <a href="">Hakkımızda</a>
        <a href="">İletişim</a>
      </nav>

      <div>
        {/*  <Button butonMetni={'Kullanici Girisi'}/>
    <Button butonMetni={'Yonetici Girisi'}/>
    <Button butonMetni ={'Kayit Ol'} /> */}
        <Button2 buttonTitle={"Kullanıcı Girişi"} buttonColor={'greenyellow'}/>
        <Button2 buttonTitle={"Yönetici Girişi"} buttonColor={"orangered"} />
      </div>
    </header>
  );
};

export default Header;