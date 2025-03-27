import Navbar from "./system.navbar/navbar";
import { _ITEMS } from './items'

import './modules.css'
import { useEffect, useState } from "react";

import { Crud } from "./system.modules/CRUD/crud";

export default function Modules() {
  const [isSidebar, setIsSidebar] = useState(false);
  const [selectedItem, setSelectedItem] = useState('crudprotocol');
  const [itemTitle, setItemTitle] = useState("CRUD Protocol");
  const [selectedTab, setSelectedTab] = useState('review')


  useEffect(() => {
    setIsSidebar(false)
    setSelectedTab('review')
    if(selectedItem in _ITEMS) {
      setItemTitle(_ITEMS[selectedItem])
    }
  }, [selectedItem])

  return (
    <>
      <Navbar openSidebar={() => setIsSidebar(!isSidebar)} />

      <div id="sidebar-body" className={isSidebar ? 'open' : 'close'}>
        <div id="sidebar-title">Modules</div>
        <div id="sidebar-content">
          <button 
            className={`sidebar-item ${selectedItem === 'crudprotocol' ? 'selected' : ''}`}
            onClick={() => setSelectedItem('crudprotocol')}
          >CRUD Protocol</button>
          <button 
            className={`sidebar-item ${selectedItem === 'snackbar' ? 'selected' : ''}`}
            onClick={() => setSelectedItem('snackbar')}  
          >Snackbar</button>
        </div>
      </div>
      
      <div id="modules-body">
        <div id="modulesBody-title">{itemTitle}</div>
        <div id="modulesBody-tab">
          <button
            className={selectedTab === 'review' ? 'tabSelected' : ''}
            onClick={() => setSelectedTab('review')}
          >Review</button>

          <button
            className={selectedTab === 'code' ? 'tabSelected' : ''}
            onClick={() => setSelectedTab('code')}
          >Code</button>
        </div>
        <div id="modulesBody-canvas">
          {selectedItem === 'crudprotocol' ? Crud(selectedTab) : ''}
        </div>
      </div>
    </>
  )
}