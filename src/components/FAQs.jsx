import i18next from "i18next";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import shape from "../images/faq-shape.png";
import { useUIContext } from "../store/context";

const data = [
  {
    title_en: "1. How many years of experience do teachers have?",
    title_uz:
      "1. Darslar necha yillik ish tajribasiga ega o'qituvchilar tomonidan olib boriladi?",
    title_ru: "1. Сколько лет стажа работы у учителей?",
    desc_uz:
      "Darslarimiz 3 yildan ortiq ish tajribasiga ega bo'lgan o'qituvchilar tomonidan olib boriladi.",
    desc_ru: "Наши занятия ведут преподаватели с опытом работы более 3-х лет.",
    desc_en:
      "Our classes are taught by teachers with more than 3 years of experience.",
  },
  {
    title_en: "2. What types of courses are available at the academy?",
    title_uz: "2. Akademiyada qanday turdagi kurslar mavjud?",
    title_ru: "2. Какие типы курсов доступны в академии?",
    desc_uz: `Hozirda akademiyamizda 4 xil yo'nalishdagi kurslar mavjud bo'lib, bular: "Specialized", "Accounting", "Safety" va "English for Logistics" kurslari.`,
    desc_ru:
      "В настоящее время в нашей академии действуют 4 разных курса: «Специализированный», «Бухгалтерский учет», «Безопасность» и курсы «Английский для логистики».",
    desc_en: ` Currently, our academy has 4 different courses: "Specialized", "Accounting", "Security" and courses "English for Logistics".`,
  },
  {
    title_en: "3. Which area of   the logistics industry is in high demand?",
    title_uz: "3. Logistika sohasining qaysi yo'nalishiga talab katta?",
    title_ru:
      "3. Какое направление логистической отрасли пользуется большим спросом?",
    desc_uz: `Logistika sohasining barcha yo'nalishlari serdaromad hisoblanib, hozirda "Dispatching" yo'nalishiga talab kattaroq desak mubolag'a bo'lmaydi.`,
    desc_ru:
      "Не будет преувеличением сказать, что все направления логистического сектора являются высокорентабельными, а спрос на направление «Диспетчеризация» в настоящее время высок.",
    desc_en:
      "It would not be an exaggeration to say that all areas of the logistics sector are highly profitable, and the demand for the Dispatching direction is currently high.",
  },
  {
    title_en: "4. Does the company require an IELTS certificate?",
    title_uz: "4. Kompaniya tomonidan IELTS sertifikati talab qilinadimi?",
    title_ru: "4. Требует ли компания сертификат IELTS?",
    desc_uz:
      "Albatta har bir kompaniyaning o'z talablari va qonun qoidalari mavjud, ammo ko'p holatlarda IELTS sertifikati bo'lmagan nomzodlar suhbat asosida ishga qabul qilinadilar.",
    desc_ru:
      "Конечно, у каждой компании свои требования и правовые нормы, но в большинстве случаев кандидатов без сертификата IELTS принимают на работу по результатам собеседования.",
    desc_en:
      "Of course, each company has its own requirements and legal regulations, but in most cases, candidates without an IELTS certificate are hired based on the results of an interview.",
  },
  {
    title_en:
      "5. Is knowledge of the Russian language required for employment in the company?",
    title_uz:
      "5. Kompaniyaga ishga joylashish jarayonida Rus tilini bilish talab etiladimi? ",
    title_ru:
      "5. Требуется ли знание русского языка при трудоустройстве в компанию?",
    desc_uz:
      "Ishga joylashish va suhbat jarayonlarida Rus tilini bilish sifatingiz faqatgina sizning foydangizga bo'ladi desak mubolag'a bo'lmaydi.",
    desc_ru:
      "Не будет преувеличением сказать, что ваше знание русского языка будет вам только на пользу в процессе трудоустройства и собеседования.",
    desc_en:
      "It would not be an exaggeration to say that your knowledge of the Russian language will only benefit you in the process of employment and interviews.",
  },
  {
    title_en: "6. Does the logistics sector work only on the “night shift”?",
    title_uz: `6. Logistika sohasi hodimlari faqatgina "night shift" da ya'ni tunda ish faoliyatida bo'lishadimi?`,
    title_ru:
      "6. Работники логистического сектора работают только в «ночную смену»?",
    desc_uz:
      "Logistika kompaniyalari 24/7 tartibda ish faoliyatini olib borishadi, ammo, asosiy ish jarayoni tungi vaqtda bo'lishining sababi shundaki, AQSh va O'zbekiston soat millari bir biridan sezilarli darajada farq qilishida.",
    desc_ru:
      "Логистические компании работают 24 часа в сутки, 7 дней в неделю, однако основной рабочий процесс приходится на ночное время, так как часы в США и Узбекистане значительно отличаются друг от друга.",
    desc_en:
      "Logistics companies operate 24 hours a day, 7 days a week, but the main workflow is at night, as hours in the US and Uzbekistan differ significantly from each other.",
  },
  {
    title_en: "7. How many hours do logistics workers work in one day?",
    title_uz: `7. Logistika sohasi hodimlarining bir kunlik ish faoliyati necha soatni tashkil qiladi?`,
    title_ru: "7. Во сколько начинается работа?",
    desc_uz:
      "Har bir kompaniyaning o'z ishlash tizimi bo'lib, kunlik 8 soatdan 12 soatgacha bo'lgan ish faoliyatini tashkil qilishi mumkin.",
    desc_ru:
      "Каждая компания имеет свою систему работы, которая может организовать работу от 8 до 12 часов в день.",
    desc_en:
      "Each company has its own work system, which can organize work from 8 to 12 hours a day.",
  },
  {
    title_en: "8. Can logistics workers work remotely?",
    title_uz: `8. Logistika hodimlari masofadan ishlashlari mumkinmi? `,
    title_ru: "8. Могут ли работники логистики работать удаленно?",
    desc_uz:
      "Albatta, kompaniyadan uzoqroqda ya'ni masofaviy ravishda ishlashlari mumkin, lekin bundan avval katta tajribaga ega bo'lishlari, yuzaga keladigan muammolarni mustaqil ravishda hal qila olish sifatlariga ega bo'lishlari kerak. Shuningdek, bu jarayon kompaniya rahbariyati ruhsati bilan amalga oshirilishi maqsadga muvofiq bo'ladi.",
    desc_ru:
      " Конечно, они могут работать удаленно от компании, но перед этим у них должен быть большой опыт и умение решать задачи самостоятельно. Также этот процесс должен осуществляться с разрешения руководства компании.",
    desc_en:
      "Of course, they can work remotely from the company, but before that they must have a lot of experience and the ability to solve problems on their own. Also, this process must be carried out with the permission of the company's management.",
  },
  {
    title_en: `9. Is the practice process organized in "online" courses and how will it be?`,
    title_uz: `9. "Online" kurslarda ham amaliyot jarayoni tashkil etiladimi va bu qanday bo'ladi?`,
    title_ru:
      "9. Организован ли процесс практики на «онлайн» курсах и как он будет проходить?",
    desc_uz: ` Albatta "online" kurslarimiz ham amaliy darslarni o'z ichiga oladi. Amaliyot jarayoni "Zoom" platformasi orqali jonli tarzda bo'lib o'tadi.`,
    desc_ru:
      "Конечно, наши «онлайн» курсы включают в себя и практические занятия. Процесс практики будет проходить в прямом эфире через платформу «Zoom».",
    desc_en: `Of course, our "online" courses also include practical lessons. The practice process will take place live through the "Zoom" platform.`,
  },
  {
    title_en: "10. What is the starting monthly salary after employment?",
    title_uz:
      "10. Ishga joylashgandan so'ng, boshlang'ich oylik ish maoshi qanday miqdorda bo'ladi?",
    title_ru: "10. Какова начальная месячная зарплата после трудоустройства?",
    desc_uz: `Hozirda ish tajribasisiz o'z faoliyatini boshlagan hodimlarning oylik ish maoshi o'rtacha $300 ni tashkil qilmoqda va bu miqdor kelgusida ishga qanday yondashishingizga qarab o'sib borish imkoniyatiga ega bo'lib, $5000 miqdorda oylik maoshga ko'tarilgan mutahassislar soni hozirda ko'payib bormoqda.`,
    desc_ru:
      "В настоящее время месячная заработная плата сотрудников, начинающих свою карьеру без опыта работы, составляет в среднем 300 долларов США, и эта сумма имеет потенциал роста в зависимости от того, как вы подходите к работе в будущем, и количества специалистов, у которых увеличилась месячная заработная плата. в сумме $5000 теперь увеличилось, уменьшилось.",
    desc_en:
      "Currently, the monthly salary of employees starting their career with no work experience is an average of $300, and this amount has the potential to grow depending on how you approach work in the future, and the number of professionals who have increased their monthly salary in the amount of $5000 has now increased is decreasing.",
  },
  {
    title_en: "11. What is the cost of the courses?",
    title_uz: "11. Kurslar narxi qanday?",
    title_ru: "11. Какова стоимость курсов?",
    desc_uz: `Shu va shunga o'xshash savollar uchun bizning "call-center" hodimlarimizga qo'ng'iroq qilib, to'liqroq ma'lumotga ega bo'lishingiz mumkin!`,
    desc_ru:
      "По этим и подобным вопросам вы можете позвонить сотрудникам нашего «колл-центра» и получить более подробную информацию!",
    desc_en: `For these and similar questions, you can call our "call-center" employees and get more detailed information!`,
  },
  {
    title_en: "12. What are the payment methods?",
    title_uz: "12. To'lov usullari qanday tarzda amalga oshiriladi?",
    title_ru: "12. Какие есть способы оплаты?",
    desc_uz: `Akademiyamizda to'lovning deyarli barcha turlari mavjud bo'lib, o'zingizga qulay bo'lgan to'lov usuli orqali amalga oshirishingiz mumkin. Shuningdek, sizda 50/50 usulida to'lov qilish imkoniyati ham mavjud.`,
    desc_ru:
      " В нашей академии доступны практически все виды оплаты, и вы можете сделать это через удобный для вас способ оплаты. Также есть возможность оплаты 50/50.",
    desc_en:
      "Almost all types of payment are available in our academy, and you can make it through the payment method that is convenient for you. You also have the option of paying 50/50.",
  },
  {
    title_en: "13. Are there discounts at the academy?",
    title_uz: "13. Akademiyada chegirmalar mavjudmi? ",
    title_ru: "13. Есть ли скидки в академии?",
    desc_uz: `Akademiyamizda odatda ko'plab chegirma kunlari va tanlovlar bo'lib turadi va bunday vaqtlarni biz o'zimizning ijtimoiy tarmoqdagi sahifalarimiz orqali e'lon qilamiz!`,
    desc_ru:
      " В нашей академии обычно бывает много дней скидок и конкурсов, о которых мы сообщаем на наших страницах в социальных сетях!",
    desc_en:
      "Our academy usually has many discount days and contests, and we announce such times through our social media pages!",
  },
  {
    title_en: "14. Why are your course prices more expensive than others?",
    title_uz:
      "14. Nega sizlarda kurs narxlari boshqalarga qaraganda qimmatroq?",
    title_ru: "14. Почему цены на ваши курсы выше, чем у других?",
    desc_uz: `Bunga sabablar judayam ko'p va quyidagilar misol bo'la oladi:
      1. Kurslarimizda sifatli ta'lim olib, yakuniy imtihondan muvaffaqiyatli o'tganingizdan so'ng, siz Akademiyamiz va Xalq Ta'limi Vazirligi tomonidan tasdiqlangan Sertifikatga ega bo'lasiz.
      2. Darslarimizni logistika sohasida katta tajribaga ega bo'lgan professional pedagoglar olib boradilar.
      3. Hozirda akademiyamiz 100 dan ortiq Logistika Kompaniyalari bilan hamkorlikda bo'lib, sizning imtihon natijangiz 90 balldan baland bo'lgan taqdirda, biz hamkorlarimiz bilan birgalikda siz uchun "job interview" uyushtirib beramiz va sizni eng yaxshi talabamiz sifatida kompaniyalarning bo'sh ish o'rinlari uchun akademiya nomidan tavsiya qilamiz.
      4. Kurslarimiz to'liq Ingliz tilida olib borilganligi sababli, darslar davomida siz "speaking, communication skill" laringizni sezilarli darajada rivojlantirib olasiz...
      Shu kabi afzalliklarimiz va boshqa kurslardan ajralib turadigan sifatlarimiz haqida to'liqroq ma'lumotga ega bo'lish uchun o'zingizga qulay bo'lgan vaqtda biz bilan bog'lanishingiz mumkin!`,
    desc_ru: `Причин тому много, и примером могут служить следующие:
      1. После получения качественного образования на наших курсах и успешной сдачи итогового экзамена вы получите Сертификат, утвержденный нашей Академией и Министерством народного образования.
      2. Наши занятия проводят профессиональные педагоги с большим опытом работы в сфере логистики.
      3. В настоящее время наша академия сотрудничает с более чем 100 логистическими компаниями, и если ваш экзаменационный балл выше 90 баллов, мы организуем для вас «собеседование» вместе с нашими партнерами, и предложим вам как нашему лучшему студенту вакансия в компаниях, рекомендуем от имени академии.
      4. Так как наши курсы проводятся полностью на английском языке, на занятиях вы значительно разовьете свои «разговорные, коммуникативные навыки»...
      Не стесняйтесь обращаться к нам в удобное для вас время, чтобы узнать больше об этих преимуществах и о том, что отличает нас от других курсов!`,
    desc_en: `There are many reasons for this, and the following can be an example:
      1. After receiving quality education in our courses and successfully passing the final exam, you will receive a Certificate approved by our Academy and the Ministry of Public Education.
      2. Our classes are conducted by professional pedagogues with extensive experience in logistics.
      3. Currently, our academy cooperates with more than 100 logistics companies, and if your exam score is higher than 90 points, we will organize a "job interview" for you together with our partners, and we will offer you as our best student a vacant job in the companies. We recommend it on behalf of the academy.
      4. Since our courses are conducted entirely in English, during the lessons you will significantly develop your "speaking, communication skills"...
      Feel free to contact us at your convenience to learn more about these benefits and what sets us apart from other courses!`,
  },
];

function FAQs() {
  const lang = i18next.language;
  const { dark } = useUIContext();
  const [intro, setintro] = useState(false);
  const questions = useRef();
  const action = useRef();
  const { t } = useTranslation();
  useEffect(() => {
    console.log("changed");
    if (intro) {
      questions.current.style.maxHeight = "100%";
      questions.current.style.opacity = "1";
    } else {
      questions.current.style.maxHeight = "0";
      questions.current.style.opacity = "0";
    }
  }, [intro]);
  return (
    <Wrapper className={`container ${dark ? "dark" : "light"}`}>
      <h1>{t("faq_title")}</h1>
      <div className="devider half"></div>
      {!intro && (
        <main>
          <article onClick={() => setintro(true)}>
            <div className="top">
              <h3>{t("faq_watch")}</h3>
              <svg
                width="50"
                className="close"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24.9999 8.33325C26.1505 8.33325 27.0832 9.26599 27.0832 10.4166V22.9166H39.5832C40.7338 22.9166 41.6666 23.8493 41.6666 24.9999C41.6666 26.1505 40.7338 27.0833 39.5832 27.0833H27.0832V39.5833C27.0832 40.7338 26.1505 41.6666 24.9999 41.6666C23.8493 41.6666 22.9166 40.7338 22.9166 39.5833V27.0833H10.4166C9.26599 27.0833 8.33325 26.1505 8.33325 24.9999C8.33325 23.8493 9.26599 22.9166 10.4166 22.9166H22.9166V10.4166C22.9166 9.26599 23.8493 8.33325 24.9999 8.33325Z" />
              </svg>
            </div>
          </article>
        </main>
      )}

      {intro && (
        <main>
          <article onClick={() => setintro(false)}>
            <div className="top">
              <h3>
                {lang === "uz"
                  ? "Savollarni berkitish"
                  : lang === "en"
                  ? "Hide all questions"
                  : "Закрыть вопросы"}
              </h3>
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                style={{ transform: "rotate(90deg)" }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24.9999 8.33325C26.1505 8.33325 27.0832 9.26599 27.0832 10.4166V22.9166H39.5832C40.7338 22.9166 41.6666 23.8493 41.6666 24.9999C41.6666 26.1505 40.7338 27.0833 39.5832 27.0833H27.0832V39.5833C27.0832 40.7338 26.1505 41.6666 24.9999 41.6666C23.8493 41.6666 22.9166 40.7338 22.9166 39.5833V27.0833H10.4166C9.26599 27.0833 8.33325 26.1505 8.33325 24.9999C8.33325 23.8493 9.26599 22.9166 10.4166 22.9166H22.9166V10.4166C22.9166 9.26599 23.8493 8.33325 24.9999 8.33325Z" />
              </svg>
            </div>
          </article>
        </main>
      )}
      <main
        ref={questions}
        style={{ maxHeight: "0px", opacity: 0 }}
        className="flex column"
      >
        {data.map((i) => (
          <FAQ
            title={
              lang === "uz"
                ? i.title_uz
                : lang === "ru"
                ? i.title_ru
                : i.title_en
            }
            description={
              lang === "uz" ? i.desc_uz : lang === "ru" ? i.desc_ru : i.desc_en
            }
          />
        ))}
      </main>
      <img src={shape} className="shape" />
      <svg
        width="105"
        height="121"
        viewBox="0 0 105 121"
        fill="none"
        className="play-anime"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32.1092 78.1456L33.4672 20.1378L83.0244 50.3177L32.1092 78.1456Z"
          stroke="#E7E7E7"
          stroke-width="3"
          stroke-linejoin="round"
        />
        <path
          d="M36.6646 100.854L38.1037 39.3828L90.6196 71.3645L36.6646 100.854Z"
          stroke="#E7E7E7"
          stroke-linejoin="round"
        />
      </svg>
    </Wrapper>
  );
}

export default FAQs;

const Wrapper = styled.div`
  position: relative;

  h1 {
    position: relative;
    z-index: 2;
  }

  &.light {
    main article div svg {
      fill: #2249e7 !important;
    }
  }

  &.dark main article div svg {
    fill: #e7e7e7;
  }

  .description-article {
    background: rgba(255, 255, 255, 0);
    backdrop-filter: unset;
    border: 0;
    .desc-wrapper {
      padding: 25px 20px;
      margin: 15px 0;
      @media (max-width: 767px) {
        margin: 10px 0;
        padding: 25px 15px;
      }
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid #2249e7;
      backdrop-filter: blur(50px);
      border-radius: 10px;
    }
  }

  main {
    max-width: 1028px;
    margin: 0 auto;
    z-index: 2;
    position: relative;
    overflow: hidden;
    transition: all 0.3s;
  }
  article {
    cursor: pointer;
    transition: all 0.3s;
    padding: 25px 20px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid #2249e7;
    backdrop-filter: blur(50px);
    border-radius: 10px;
    overflow: hidden;
    margin: 15px 0px;
    box-sizing: border-box !important;
    @media (max-width: 767px) {
      padding: 25px 15px;
      margin-bottom: 10px 0;
    }
    &.active {
      svg {
        transform: rotate(45deg);
      }
    }
    .top {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    }
    h3 {
      font-family: "Days One", "Futura PT";
      font-weight: 600;
      font-style: normal;
      font-size: 24px;
      line-height: 151%;
      @media (max-width: 767px) {
        font-size: 20px;
      }
    }
    svg {
      width: 35px;
      height: 35px;
      flex: 0 0 35px;
      transition: all 0.3s;
      @media (max-width: 767px) {
        width: 30px;
        height: 30px;
      }
    }
  }
  .shape {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (max-width: 767px) {
      width: 200%;
      top: 70%;
      opacity: 0.5;
    }
  }

  .play-anime {
    left: 48px;
    bottom: -60px;
    @media (max-width: 767px) {
      left: -30px;
      width: 80px;
    }
  }
`;

function FAQ({ title, description }) {
  const [active, setactive] = useState(false);
  const contentRef = useRef();
  const toggle = () => {
    contentRef.current.style.maxHeight === "0px"
      ? (contentRef.current.style.maxHeight =
          contentRef.current.scrollHeight + "px")
      : (contentRef.current.style.maxHeight = "0px");
    setactive(!active);
  };
  return (
    <>
      <article onClick={toggle} className={` ${active ? "active" : ""}`}>
        <div className="top">
          <h3>{title}</h3>
          <svg
            width="50"
            className="close"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M24.9999 8.33325C26.1505 8.33325 27.0832 9.26599 27.0832 10.4166V22.9166H39.5832C40.7338 22.9166 41.6666 23.8493 41.6666 24.9999C41.6666 26.1505 40.7338 27.0833 39.5832 27.0833H27.0832V39.5833C27.0832 40.7338 26.1505 41.6666 24.9999 41.6666C23.8493 41.6666 22.9166 40.7338 22.9166 39.5833V27.0833H10.4166C9.26599 27.0833 8.33325 26.1505 8.33325 24.9999C8.33325 23.8493 9.26599 22.9166 10.4166 22.9166H22.9166V10.4166C22.9166 9.26599 23.8493 8.33325 24.9999 8.33325Z" />
          </svg>
        </div>
      </article>
      <article
        className="description-article"
        ref={contentRef}
        style={{ maxHeight: "0px", padding: "0px", margin: "0px" }}
      >
        <div className="desc-wrapper">
          <p>{description}</p>
        </div>
      </article>
    </>
  );
}
