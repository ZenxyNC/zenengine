import Title from "../title";
import PixelCard from "./components/pixelCard";
import './seeDocs.css'

export default function SeeDocs() {

  return(
    <>
      <div id="seeDocs-maindiv">
        <Title
          string='Copy, Paste, Call. <br/><span class="subTitle">That Simple.</span>'
          customClassName="seeDocs-title"
        />
        <PixelCard 
          variant="blue"
          onClickNav="/docs/snackbar"
          className="seeDocs-button"
        >
          <h1 id="SeeDocs-cardContent">See Docs</h1>
        </PixelCard>
      </div>
    </>
  )
}