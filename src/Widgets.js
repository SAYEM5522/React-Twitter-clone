import React from 'react'
import "./Widgets.css"
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import WidgetsInfo from './WidgetsInfo';
const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
       <SearchIcon/>
       <input type="text" placeholder="Search Twitter"/>
      </div>
      <div className="widgets__info">
        <div className="widgets__info--top">
          <h3>Trends for you </h3>
          <SettingsIcon/>
        </div>
        <WidgetsInfo
        avatar="https://pbs.twimg.com/profile_images/1305466807294332928/_kHyXeQy_bigger.jpg"
        displayName="Alicia Keys"
        name="@aliciakeys"

        />
            <WidgetsInfo
        avatar="https://pbs.twimg.com/profile_images/1246516450942169089/w24u1Zv1_bigger.jpg"
        displayName="Huawei Europe"
        name="@huaweieurope"

        />
            <WidgetsInfo
        avatar="https://pbs.twimg.com/profile_images/1321303697561976832/zoOPv33Y_bigger.jpg"
        displayName="Kelly Clarkson"
        name="@kellyclarkson"

        />
            <WidgetsInfo
        avatar="https://pbs.twimg.com/profile_images/1278183948279922690/ybnDHXn7_bigger.jpg"
        displayName="Alicia Keys"
        name="@aliciakeys"

        />
               <WidgetsInfo
        avatar="https://pbs.twimg.com/profile_images/1328392838845853696/P7brngAH_bigger.jpg"
        displayName="Twitch"
        name="@twitch"

        />
    <p className="widgetsInfo__text">Show More </p>

      </div>

    </div>
  )
}

export default Widgets
