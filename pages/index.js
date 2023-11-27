import style from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div className={style.body}>
        <div className={style.wrapper}>
        <div className={style.contacts}>
              <div className={style.imgfoto}>Photo</div>
              <div className={style.section}>
                <h1>Minko Stanislav</h1>
                <p>РБ</p>
                <p>+375297756871</p>
                <p>e-mail: minkostas@gmail.com</p>
              </div>
            </div>
          <div className={style.expirence}>
            <p>Work Experience</p>

          </div>
            <div className={style.section}>
              <h4>Company</h4>
              <p>time period</p>
              <p>
                Describe what your job entailed? what u did at your position
              </p>
            </div>
            <div className={style.section}>
              <h4>Company</h4>
              <p>time period</p>
              <p>
                Describe what your job entailed? what u did at your position
              </p>
            </div>
            <div className={style.section}>
              <h4>Company</h4>
              <p>time period</p>
              <p>
                Describe what your job entailed? what u did at your position
              </p>
            </div>
            <div className={style.section}>
              <h4>Company</h4>
              <p>time period</p>
              <p>
                Describe what your job entailed? what u did at your position
              </p>
            </div>

        </div>
      </div>
    </div>
  );
}
