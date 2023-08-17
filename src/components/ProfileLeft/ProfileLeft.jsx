import React from 'react'
import './ProfileLeft.css'
import LogoSearch from '../LogoSearch/LogoSearch'
import InfoCard from '../InfoCard/InfoCard'
import FollowersCard from '../followersCard/FollowersCard'
function ProfileLeft() {
  return (
   <div className="ProfileSide">
   <LogoSearch/>
   <InfoCard/>
   <FollowersCard/>
   </div>
  )
}

export default ProfileLeft
