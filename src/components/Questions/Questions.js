import React, {useState, useRef} from "react";
import question from "../../images/questions.svg";
import "./Questions.css";

function Questions() {
  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycbw4YBw3ml02Fh9N4A3KHx022Cd60n2eVJxjRwVAWVyrvdGLqwBkyAzlMiiS1b7L9OS7PA/exec"
  const [loading, setLoading] = useState(false);
  const [isFormVisible, setisFormVisible] = useState(true);
  const [isSubmitChange, setIsSubmitChange] = useState(true);

  function renderSubmitNo () {
    setIsSubmitChange(false)
  }

  function renderSubmitYes() {
    setIsSubmitChange(true)
  }

  const handleSubmitNo = (e) =>{
    e.preventDefault()
    setLoading(true)
    const FormNew = new FormData(formRef.current);
    FormNew.append('Form', 'rsvp-no');

    fetch(scriptUrl, {
    method: 'POST',
    body: FormNew,

}).then(res => {
        setLoading(false);
        setisFormVisible(false);
    })
    .catch(err => console.log(err))
}
  
  const handleSubmitYes = (e) =>{
      e.preventDefault()
      setLoading(true)
      const FormNew = new FormData(formRef.current);
      FormNew.append('Form', 'rsvp-yes');

      fetch(scriptUrl, {
      method: 'POST',
      body: FormNew,

  }).then(res => {
          setLoading(false);
          setisFormVisible(false);
      })
      .catch(err => console.log(err))
  }

  
  function returnForm () {
    setisFormVisible(true);
  }
  
  return (
    <section className="question" id="questions">
      <div className="question__bloks">
        { isFormVisible ?
          <div className="question__container">
            <img src={question} alt="опрос" className="question__header"></ img>
            <p className="question__text">По всем имеющимся вопросам, пожалуйста, обращайтесь к нашим организаторам: <br /> Лилия <a href="tel:+7(999)232-36-27" className="question__link">+7(999) 232-36-27</a><br />Яна <a href="tel:+7(931)372-11-32" className="question__link">+7(931) 372-11-32</a>
            <br /><br />Ваши пожелания в конвертах помогут нам осуществить мечту. Пожалуйста, не дарите живые цветы! Замените их на бутылку белого или розового сухого вина.</p>
            <p className="question__text">Пожалуйста, подтвердите своё присутствие до <p className="question__undertext">10 сентября 2023 года</p><br /><br />Если вы будете не один, то заполните форму для каждого гостя.</p>
            <form className="question__form" ref={formRef} onSubmit={isSubmitChange ? handleSubmitYes : handleSubmitNo}>
            <p className="question__string question__string-name">
              <label htmlFor="who" className="question__label-input question__label-input-name">Имя и фамилия</label>
              <input type="text" name="Имя и Фамилия" id="who" className="question__input" minLength={2}></input>
            </p>
            <div>
            <fieldset className="question__string"><p className="question__span">Что предпочитаете из еды?</p>
              <label  htmlFor="meat" className="question__label">
                <input className="question__unvisible" type="radio" name="Еда" value="Мясо" id="meat"></input>
                <span className="question__visible-radio"></span>
                <span className="question__text-span">Мясо</span>
              </label>
              <label htmlFor="fish" className="question__label">
                <input className="question__unvisible" type="radio" name="Еда" value="Рыба" id="fish"></input>
                <span className="question__visible-radio"></span>
                <span className="question__text-span">Рыба</span>
              </label>
              <label htmlFor="checken" className="question__label">
                <input className="question__unvisible" type="radio" name="Еда" value="Птица" id="chicken"></input>
                <span className="question__visible-radio"></span>
                <span className="question__text-span">Птица</span>
              </label>
              <label htmlFor="vegan" className="question__label">
                <input className="question__unvisible" type="radio" name="Еда" value="Вегетарианец" id="vegan"></input>
                <span className="question__visible-radio"></span>
                <span className="question__text-span">Вегетарианец</span>
              </label>
              <label htmlFor="other" className="question__label">
                <input className="question__unvisible" type="radio" name="Еда" value="Иное" id="other"></input>
                <span className="question__visible-radio"></span>
                <span className="question__text-span">Иное/есть аллергия</span>
              </label>
            </fieldset>
            <p className="question__string">
              <input type="text" name="Иное/есть аллергия" id="alerg" className="question__input"></input>
            </p>
            <fieldset className="question__string"><p className="question__span">Что предпочитаете из напитков?</p>
              <label  htmlFor="white" className="question__label">
                <input className="question__unvisible" type="checkbox" name="Вино белое" value="Вино белое" id="white"></input>
                <span className="question__visible-checkbox"></span>
                <span className="question__text-span">Вино белое</span>
              </label>
              <label htmlFor="red" className="question__label">
                <input className="question__unvisible" type="checkbox" name="Вино красное" value="Вино красное" id="red"></input>
                <span className="question__visible-checkbox"></span>
                <span className="question__text-span">Вино красное</span>
              </label>
              <label htmlFor="champa" className="question__label">
                <input className="question__unvisible" type="checkbox" name="Шампанское" value="Шампанское" id="champa"></input>
                <span className="question__visible-checkbox"></span>
                <span className="question__text-span">Шампанское</span>
              </label>
              <label htmlFor="jin" className="question__label">
                <input className="question__unvisible" type="checkbox" name="Джин" value="Джин" id="jin"></input>
                <span className="question__visible-checkbox"></span>
                <span className="question__text-span">Джин</span>
              </label>
              <label htmlFor="wiskey" className="question__label">
                <input className="question__unvisible" type="checkbox" name="Виски" value="Виски" id="wiskey"></input>
                <span className="question__visible-checkbox"></span>
                <span className="question__text-span">Виски</span>
              </label>
              <label htmlFor="vodka" className="question__label">
                <input className="question__unvisible" type="checkbox" name="Водка" value="Водка" id="vodka"></input>
                <span className="question__visible-checkbox"></span>
                <span className="question__text-span">Водка</span>
              </label>
              <label htmlFor="noalco" className="question__label">
                <input className="question__unvisible" type="checkbox" name="Не пью" value="Не пью" id="noalco"></input>
                <span className="question__visible-checkbox"></span>
                <span className="question__text-span">Не пью</span>
              </label>
              <div className="question__other">
                <label htmlFor="otheralco" className="question__label question__label-other">
                  <input className="question__unvisible" type="checkbox" name="Иное" value="Да" id="otheralco"></input>
                  <span className="question__visible-checkbox"></span>
                  <span className="question__text-span">Иное</span>
                </label>
                <p className="question__string question__string-other">
                  <input type="text" name="Иные напитки" id="alerg" className="question__input"></input>
                </p>
              </div>
            </fieldset>
            </div>
            <div className="question__buttons">
              <button className="question__button" name="Принято" onClick={renderSubmitYes} disabled={loading ? true : false}>{loading ? "Отправка..." : "С удовольствием приду"}</button>
              <button className="question__button" name="Отклонено" onClick={renderSubmitNo} disabled={loading ? true : false}>{loading ? "Отправка..." : "К сожалению, не смогу"}</button>
            </div>
          </form> 
        </div>
        :
        <div>
          <img src={question} alt="опрос" className="question__header"></ img>
          <p className="question__text question__text-form">Форма отправлена!</p>
          <button className="question__return" onClick={returnForm}>Заполнить форму для еще одного гостя</button>
        </div>
        }
      </div>
    </section>
  );
}

export default Questions;