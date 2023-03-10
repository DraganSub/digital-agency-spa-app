import "./layouts.css"

export default function ContainerLayout(props) {
  const {
    background,
    children,
    button = null,
    title,
    subTitle
  } = props;

  return (
    <div style={{ background: background, position: "relative" }}>
      <section
        className="flex-column container"
      >
        {button !== null ?
          <div className="container--head justify-space-between">
            <span>
              <h1 className="container--head__title">{title}</h1>
              <h3 className="container--head__subTitle">{subTitle}</h3>
            </span>
            <button className="hero-wrap--btn">
              {button}
            </button>
          </div>
          :
          <div className="container--head">
            <h1 className="container--head__title">{title}</h1>
            <h3 className="container--head__subTitle">{subTitle}</h3>
          </div>
        }
        {children}
        <div className="separator-container">
          <span className="container--separator"></span>
        </div>
      </section>
    </div>
  )
}
