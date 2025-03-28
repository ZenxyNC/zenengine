import './landing.css';
import '../resource/font/importFont.css'

//Components
import Squares from './component/squares/squares';
import { useNavigate } from 'react-router-dom';


export default function Landing() {
  const navigate = useNavigate();

  return (
    <>
      <div id='bubbleWrapper'>
        <div className='bubble --007AFF'></div>
        <div className='bubble --273444'></div>
        <div className='bubble --7200F4'></div>
        <div className='bubble --007AFF-2'></div>
      </div>


      <div id='mainDiv-1' className='maindiv'>
        <div id='square-background'>
          <Squares 
            speed={0.5} 
            squareSize={50}
            direction='diagonal' // up, down, left, right, diagonal
            borderColor='rgb(245, 245, 245, 0.05)'
            hoverFillColor='#273444'
          />
        </div>
        <div id='mainDiv1-content' className='maindiv-content'>
          <div id='mainDiv1-title'>
            <span>The Groundbreaking</span><br />
            <span>ZenEngine</span>
          </div>
          <div id='mainDiv1-arrow'></div>
        </div>
      </div>


      <div id='mainDiv-2' className='maindiv'>
        <div id='mainDiv2-title'>Know <span>ZenEngine</span>.</div>

        <div id='mainDiv2-bento'>

          <div className='bento-child-introduction'>

            <div className='bento-child-title'>Why ZenEngine?</div>

            <div className='bento-child-captions'>
              Don’t you tired making all same complexed functions every new projects? Wasting time, wasting energy, wasting coffee.<br /><div style={{ height: '20px' }}></div>
              Let <span className='--text-zenengine'>ZenEngine</span> fix that.
            </div>
          </div>

          <div className='bento-child-details'>

            <div className='bentoChild-details-modules'>
              <div className='bentoChild-details-images --modules-image'></div>
              <span style={{ zIndex: 100 }}>2 Modules.</span>

            </div>

            <div id='bentoSection-details-lower'>

              <div id='bentoChild-detailsLower-1'>
                <div className='bentoChild-details-images --cleanerCode-image'></div>
                <span style={{ zIndex: 100 }}>Cleaner Code.</span>

              </div>

              <div id='bentoChild-detailsLower-2'>
                <div className='bentoChild-details-images --faster-image'></div>
                <span style={{ zIndex: 100 }}>Faster.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id='mainDiv-3' className='maindiv'>

        <div id="mainDiv3-content">
          <div id='mainDiv3-card' onClick={() => navigate('/modules/')}>
            <div className='mainDiv3-cardImage --docs-image'></div>
            <div className='mainDiv3-cardImage --cog-image'></div>
            <div id='mainDiv3-cardCaption'>See Docs</div>
          </div>
          <div id='mainDiv3-captions'>
            Copy,<br/>
            Paste,<br/>
            Call.<br/>
            <span>That simple.</span>
          </div>
        </div>
      </div>
    </>
  )
}