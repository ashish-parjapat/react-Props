import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.phoneNumber}</p>
      <p>{props.emailId}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      phoneNumber="7896412"
      emailId="@gmail.com"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    />
    <Card
      name="Ashish"
      phoneNumber="8307414508"
      emailId="ashish@gmail.com"
      img="https://lh3.googleusercontent.com/iWmuaTOElZxib_MRGUIA6jvgzmEiQzTZSYMq-_5LJeuGvyzm7wfnl7QulwypVqEheiM8NVawp1q37y8AEm_7CSh39piDijjQFT65D_5_m22WtAIDT-uvcJru-GEbvD_enK360NyFWybcVxLETe1OyXrJc_lCskazA0PIfrSs5YscOga-_9dtCoN8ROrmEBdjvgcEgO_l6pe8txubcuQFESKt6CbwvJDsmdNKICdbHEbMNj861B0DERhbuvgL7Wrbg_ieCIfKd4B8yr2rMF3Iv5RTe_BJ7zZ5FOxA6FnoaDxA8Kq5-zoU839G66L0VezaUkpZ3eJUOT0PMAZ7iHpbfdaThq_Pjbk31UJ9KkXgAekHPQm689F7m8zWRAFsTJf6KsKbH0HWpZ0rCHlljw4MZxwjBf6J6E4z1_sOOo1seJ7kR9WuWtfFpxvuGAxXdmQwsl6MjqWcRwkvwHfkIO7vGdDDf0gNlxoTkhZGuZ68F3sSgAB5tQ0F-9MILDe6eYGQwuJy68uUFGpikWgKwrioiwyByXMssZLZhUA-SwNdYZ-H0D4PY90F22AEZ_Dh_5GmirPe6_RlGKBBOAPtLnNpfswuzaAfyLnp0JOw3BuRiZaxEt4va_Nldx0wTc5sDe6DTUW1VP1rL78KA9iYbIGS5nkk5EJKghof5fwydwZKhveyPZJFYtAa-cfdtcZt7Y_B_ClSliseVrnuAKQ548Tvcp8vZd0t6znTpd1AA60j6_Mn9BAO6gA2IiF3shN7kip-LWX97In6SJC5r7opBhYD6obfi-BpVlHv=w501-h668-no?authuser=0"
    />
    <Card
      name="dadi"
      phoneNumber="8307114508"
      emailId="dadi@gmail.com"
      img="https://lh3.googleusercontent.com/pw/AM-JKLWHPaXdO26fhwLJEBDwajfpn2lAAlkC2zexMssgZDgasZX48HxIeWRnK3B6C5MEu_IVXRA4JJ1FMh7io7RBH0cRQ32FOzoePUuPt-cTOoCeSjnjXAWqQDYT8IQ2a-WAfhxAqKqnjk8gcZ5bXtHr_RaO=w501-h668-no?authuser=0"
    />
  </div>,
  document.getElementById("root")
);
