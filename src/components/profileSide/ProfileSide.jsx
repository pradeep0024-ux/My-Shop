import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../profileCard/ProfileCard'
import FollowersCard from '../followersCard/FollowersCard'
import './ProfileSide.css'

function ProfileSide() {
  return (
    <div className='ProfileSide'>
     <LogoSearch/>
     <ProfileCard/>
     <FollowersCard/>
    </div>
  )
}

export default ProfileSide
