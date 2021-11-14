import Header from '../Header'
import './index.css'

const RandomPath = () => (
  <>
    <Header />
    <div className="random">
      <img
        src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
        alt="not found"
      />
      <h1>Page Not Found</h1>
      <p className="randomPara">
        we`re sorry,the page you requested could not found.
      </p>
    </div>
  </>
)

export default RandomPath
