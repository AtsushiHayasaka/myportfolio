import React, {useState} from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [detail, setDetail] = useState('');

  //radioボタンのvalueの切り替え
  const [val, setVal] = useState('individual');
  const changeValueOfRadio = e => setVal(e.target.value);

  //必須項目が正しく入力されているか確認する処理
  const onHandleConfirm = e => {
    e.preventDefault();
    const errors = document.querySelectorAll('.error')
    errors.forEach(error => {
      error.classList.contains('error_active') && error.classList.remove('error_active');
    })
    name !== "" || document.getElementById('name_error').classList.add('error_active');
    email !== "" || document.getElementById('email_error').classList.add('error_active');
    detail !== "" || document.getElementById('detail_error').classList.add('error_active');
  }



  return (
    <>
      <div className="sub-page__title_area wow fadeIn">
        <p className="sub-page__title page-about__title">Contact</p>
      </div>
      <div className="container wow fadeInUp">
        <div className="sub-contact__precautionary-statement-area">
          <p className="precautionary-statement">
            お仕事のご相談、質問等あれば<br className="sp-only" />以下フォームからお問い合わせください。<br/>
          </p> 
          <p className="precautionary-statement">
            <span className="caution">＊</span>は必須項目となっているので<br className="sp-only" />必ずご入力ください。  
          </p> 
        </div>

        <form action="">
          <div className="form__area container">
            <div className="form__parts form__parts_mt form_flex form__name contact__name">
              <label className="form__label name__label" htmlFor="name">お名前<span className="caution">*</span></label>
              <input className="form__input form__text name__input" value={name} onChange={(e) => {setName(e.target.value)}} id="name" type="text"/>
              <span id="name_error"className="caution error error_font error_position">＊お名前は必須です</span>
            </div>
            <div className="form__parts form__parts_mt form_flex  contact__email">
              <label className="form__label email__label" htmlFor="email">メールアドレス<span className="caution">*</span></label>
              <input className="form__input form__email email__input" value={email} onChange={(e) => {setEmail(e.target.value)}} id="email" type="email"/>
              <span id="email_error" className="caution error error_font error_position">＊メールアドレスは必須です</span>
            </div>
            <div className="form__parts form__parts_mt form_flex form__phone contact__phone">
              <label className="form__label phone__label" htmlFor="phone">電話番号</label>
              <input className="form__input form__number phone__input" id="phone" type="number"/>
            </div>
            <div className="form__parts form__parts_mt  form__type contact__type">
              <p className="type__title df">個人/法人の選択<span className="caution">*</span>
                 <div className="form__radio_label_wrap">
                    <label className="form__radio_label radio__individual">
                      <input
                        type="radio"
                        className="form__radio"
                        value="individual"
                        onChange={changeValueOfRadio}
                        checked={val === 'individual'}
                      />
                        <span>個人</span>
                  </label>
                  <label className="form__radio_label radio__company">
                      <input
                        type="radio"
                        className="form__radio"
                        value="company"
                        onChange={changeValueOfRadio}
                        checked={val === 'company'}
                      />
                        <span>法人</span>
                  </label>

                 </div>
              </p>
            </div>
            <div className="form__parts  form__parts_mt form_flex form__type contact__detail">
              <label className="form__label detail__label" htmlFor="detail">お問い合わせ内容<span className="caution">*</span></label>
              <textarea className="form__textarea textarea " value={detail} onChange={(e) => {setDetail(e.target.value)}} name="detail" id="detail"></textarea>
              <span id="detail_error" className="caution error error_font error_position">＊お問い合わせ内容は必須です</span>
            </div>
            <button className="button form__button" onClick={onHandleConfirm} type='submit'>送信</button>
          </div>
        </form>

      </div>
    </>
  )
}

export default Contact;