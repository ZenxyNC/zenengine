import Title from '../title'
import { DefaultBox, IconBox } from './why-box'
import './why.css';

import Clock from '../../../resources/Clock.svg';
import Modules from '../../../resources/modules.svg'
import { useRef } from 'react';


export default function Why() {
  const availableModule = useRef(0)

  return (
    <>
      <div id="why-maindiv">
        <Title
          string="Why ZenEngine?"
          fontSize={44}
          alignment='center'
        />
        <div id='whybox-wrapper'>
          <DefaultBox
            string={<p>Making all same functions and feature for each project might be tiring and time wasting.
              <br/><br/>
              Let <b>ZenEngine</b> fix that. Providing light, efficient, and powerful module. </p>}
          />

          <div id='subbox-wrapper'>
            <IconBox
              icon={Clock}
              string={<p>Time<br/>Efficient</p>}
              iconClassName="time-efficient-icon"
              textClassName="time-efficient-text"
            />
            <IconBox
              icon={Modules}
              string={<p>{availableModule.current}<br/>Modules</p>}
              iconClassName="modules-icon"
              textClassName="modules-text"
            />
          </div>
        </div>
      </div>
    </>
  )
}