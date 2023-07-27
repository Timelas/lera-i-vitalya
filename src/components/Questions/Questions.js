import React, {useState, useRef} from "react";
import question from "../../images/questions.svg";
import flower from "../../images/flowerPull.svg";
import "./Questions.css";

function Questions() {
  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycby_BYT6LzPV3FZHn66CPeQcYu6bE5b3ZBjuvAoU08L_RdiIzQ7viRTg5mtfej77Y_iK/exec"
  const [loading, setLoading] = useState(false);
  const [isFormVisible, setisFormVisible] = useState(true);

  const handleSubmit = (e) =>{
      e.preventDefault();
      setLoading(true);
      const FormNew = new FormData(formRef.current);
      FormNew.append('Form', 'questions');

      fetch(scriptUrl, {
      method: 'POST',
      body: new FormData(formRef.current),

  }).then(res => {
          setLoading(false);
          setisFormVisible(false);
      })
      .catch(err => console.log(err))
  }
  
  return (
    <section className="question" id="questions">
      <div className="question__bloks">
        { isFormVisible ?
          <div className="question__container">
            <img src={question} alt="опрос" className="question__header"></ img>
            <p className="question__text">По всем имеющимся вопросам, пожалуйста, обращайтесь к нашему организатору: <br /> Лилия +7(999) 232-36-27</p>
            <p className="question__text">Пожалуйста, подтвердите своё присутствие до <p className="question__undertext">10 сентября 2023 года</p><br /><br />Если вы будете не один, то укажите оба имени.</p>
            <form className="question__form" ref={formRef} onSubmit={handleSubmit}>
            <p className="question__string question__string-name">
              <label htmlFor="who" className="question__label-input question__label-input-name">Имя и фамилия</label>
              <input type="text" name="Имя и Фамилия" id="who" required className="question__input" minLength={2}></input>
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
              <input type="text" name="Какая" id="alerg" required className="question__input"></input>
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
                  <input className="question__unvisible" type="checkbox" name="Иное" value="Иное" id="otheralco"></input>
                  <span className="question__visible-checkbox"></span>
                  <span className="question__text-span">Иное</span>
                </label>
                <p className="question__string question__string-other">
                  <input type="text" name="Какая" id="alerg" required className="question__input"></input>
                </p>
              </div>
            </fieldset>
            </div>
            <div className="question__buttons">
              <button type="submit" className="question__button" disabled={loading ? true : false}>{loading ? "Отправка..." : "С удовольствием приду"}</button>
              <button type="submit" className="question__button" disabled={loading ? true : false}>{loading ? "Отправка..." : "Буду со своей парой"}</button>
              <button type="submit" className="question__button" disabled={loading ? true : false}>{loading ? "Отправка..." : "К сожалению не смогу"}</button>
            </div>
          </form> 
        </div>
        :
        <div>
          <img src={question} alt="опрос" className="question__header"></ img>
          <p className="question__text">Форма отправлена!</p>
        </div>
        }
      </div>
    </section>
  );
}

export default Questions;